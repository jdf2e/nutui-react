// 聚合 config.json + properties.json + demos + variables.scss，输出 meta/components.json。
// 面向 AI Coding 的「单一事实源」中间产物，供后续 llms.txt / CLI / MCP 共同消费。
// DO NOT manual edit the output (meta/components.json). Run: npm run generate:meta
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const CONFIG_PATH = path.join(ROOT, 'src/config.json')
const PROPERTIES_PATH = path.join(ROOT, 'scripts/properties.json')
const VARIABLES_PATH = path.join(ROOT, 'src/styles/variables.scss')
const PACKAGES_DIR = path.join(ROOT, 'src/packages')
const SPEC_DIR = path.join(ROOT, 'src/types/spec')
const PKG_JSON_PATH = path.join(ROOT, 'package.json')
const OUTPUT_PATH = path.join(ROOT, 'meta/components.json')

const SCHEMA_VERSION = '1.0.0'

// properties.json 的「组件名」经三级归一后仍无法匹配 config 的特例，手工兜底。
// 注：SideNavBar 系列在 src/packages 有目录但未注册进 config.nav，故不设别名，
// 让其如实落入 orphan-api 警告（提示「有文档但组件未注册」）。
const COMPONENT_ALIAS = {
  IconFont: 'icon',
}

const warnings = []
const warn = (msg) => warnings.push(msg)

// 把 properties 的中文位置式列映射为语义字段。语义严格只对 props 表成立，
// 枚举/结构表（kind !== 'props'）的四列语义不同，消费方应按 kind 重新解释。
const mapRow = (rec) => ({
  prop: (rec['第一列'] || '').trim(),
  desc: (rec['第二列'] || '').trim(),
  type: (rec['第三列'] || '').trim(),
  default: (rec['第四列'] || '').trim(),
})

// 归一表格名，仅用于合并大小写差异（Props vs props），不合并语义变体（Props（direction=...））。
const normalizeTableName = (name) => (name || '').trim().toLowerCase()

const classifyKind = (name) => {
  const t = normalizeTableName(name)
  if (t === 'ref') return 'ref'
  if (t === 'methods' || t === 'forminstance') return 'methods'
  if (t.startsWith('props')) return 'props'
  return 'other'
}

// config 的组件 name（PascalCase）→ 目录名（既有约定：name.toLowerCase()）。
const toDirId = (name) => String(name).toLowerCase()

// 把 properties 的「组件名」归属到某个 config 组件 id。三级优先级：
// 1) 去点拼接小写：子组件多在 config 有独立条目（Checkbox.Group→checkboxgroup）
// 2) 首段小写：无独立条目时归到父组件（Tabs.Tabpane→tabs）
// 3) 别名表兜底（IconFont→icon、SideNavBar 系列→sidenavbar）
const resolveApiId = (rawComponentName, validIds) => {
  const raw = String(rawComponentName)
  if (COMPONENT_ALIAS[raw]) return COMPONENT_ALIAS[raw]
  const joined = raw.replace(/\./g, '').toLowerCase()
  if (validIds.has(joined)) return joined
  const firstSeg = raw.split('.')[0].toLowerCase()
  if (validIds.has(firstSeg)) return firstSeg
  return joined // 落 orphan，保留去点形式便于诊断
}

// ---- A. properties.json → bucket[id] = { normKey -> table } ----
function buildApiBucket(properties, validIds) {
  const bucket = {}
  const orphan = new Set()

  for (const rec of properties) {
    const raw = rec['组件名']
    const id = resolveApiId(raw, validIds)
    if (!validIds.has(id)) {
      orphan.add(`${raw} (id=${id})`)
      continue
    }
    const tableNameRaw = rec['表格名'] || 'Props'
    const normKey = normalizeTableName(tableNameRaw)
    // 仅当表来自父组件视角（raw 含点且归到了父组件 id）时才标记子组件来源；
    // 归到独立子组件条目时它就是该组件本身，subComponent 记 null。
    const hasDot = String(raw).includes('.')
    const joinedId = String(raw).replace(/\./g, '').toLowerCase()
    const subComponent =
      hasDot && id !== joinedId ? String(raw).split('.').slice(1).join('.') : null
    // 合并键含来源组件：同一 id 下不同原始组件的同名表（如 Icon 与 IconFont 的 Props）
    // 应保持为独立表格，只有完全同源的表才合并大小写差异。
    const groupKey = `${raw}@@${normKey}`

    if (!bucket[id]) bucket[id] = {}
    if (!bucket[id][groupKey]) {
      bucket[id][groupKey] = {
        name: tableNameRaw,
        kind: classifyKind(tableNameRaw),
        sourceComponent: raw,
        subComponent,
        rows: [],
      }
    } else if (bucket[id][groupKey].name !== tableNameRaw) {
      warn(
        `[table-case] "${id}" 合并大小写差异表格：「${bucket[id][groupKey].name}」与「${tableNameRaw}」`
      )
    }
    bucket[id][groupKey].rows.push(mapRow(rec))
  }

  if (orphan.size) {
    warn(
      `[orphan-api] ${orphan.size} 个 properties 组件名无法匹配 config，未注入：${[...orphan].join('，')}`
    )
  }
  return bucket
}

// bucket[id] → api.tables 数组 + Props 行内质量校验
function bucketToApi(id, tablesMap) {
  if (!tablesMap) return { tables: [] }
  const tables = Object.values(tablesMap)
  for (const t of tables) {
    if (t.kind !== 'props') continue
    const seen = new Set()
    for (const row of t.rows) {
      if (!row.prop || !row.type) {
        warn(`[props-field] "${id}" 表「${t.name}」存在缺列行：prop="${row.prop}" type="${row.type}"`)
      }
      if (row.prop) {
        if (seen.has(row.prop)) warn(`[dup-prop] "${id}" 表「${t.name}」prop 重复：${row.prop}`)
        seen.add(row.prop)
      }
    }
  }
  return { tables }
}

// ---- B. variables.scss → tokens（按最长组件目录前缀归属，否则 global）----
function parseTokens(validIdsSorted) {
  const content = fs.readFileSync(VARIABLES_PATH, 'utf-8')
  // 仅匹配「$scssVar: var(--nutui-xxx[, default]) !default;」的定义行（单行）。
  const re = /^\s*\$([\w-]+):\s*var\((--nutui-[\w-]+)\s*(?:,\s*([^;]*?))?\)\s*!default/gm
  const perComponent = {}
  const globalTokens = []
  let m
  while ((m = re.exec(content)) !== null) {
    const scssVar = `$${m[1]}`
    const cssVar = m[2]
    const def = m[3] != null ? m[3].trim().replace(/\)\s*$/, '') : null
    const token = { cssVar, scssVar, default: def }
    const rest = cssVar.slice('--nutui-'.length)
    // 最长匹配：validIdsSorted 已按长度降序
    const owner = validIdsSorted.find(
      (id) => rest === id || rest.startsWith(`${id}-`)
    )
    if (owner) {
      ;(perComponent[owner] ||= []).push(token)
    } else {
      globalTokens.push(token)
    }
  }
  return { perComponent, globalTokens }
}

// ---- demos 扫描 ----
function scanDemos(id, sub) {
  const dir = path.join(PACKAGES_DIR, id, 'demos', sub)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .map((f) => f.match(/^demo(\d+)\.tsx$/))
    .filter(Boolean)
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map((mt) => `src/packages/${id}/demos/${sub}/${mt[0]}`)
}

// ---- docs 存在性 ----
function resolveDocs(id, showFlag) {
  const map = {
    h5: 'doc.md',
    enUS: 'doc.en-US.md',
    zhTW: 'doc.zh-TW.md',
    taro: 'doc.taro.md',
  }
  const docs = {}
  for (const [key, file] of Object.entries(map)) {
    const rel = `src/packages/${id}/${file}`
    docs[key] = fs.existsSync(path.join(ROOT, rel)) ? rel : null
  }
  if (showFlag && !docs.h5) warn(`[doc-missing] "${id}" show:true 但缺 doc.md`)
  return docs
}

// ---- spec 引用（可选，仅存在时输出）----
function resolveSpec(id) {
  const base = path.join(SPEC_DIR, id)
  if (!fs.existsSync(base)) return null
  const spec = {}
  for (const key of ['base', 'h5', 'taro']) {
    const rel = `src/types/spec/${id}/${key}.ts`
    if (fs.existsSync(path.join(ROOT, rel))) spec[key] = rel
  }
  return Object.keys(spec).length ? spec : null
}

function main() {
  console.log('🚀 building meta/components.json ...')
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
  const properties = JSON.parse(fs.readFileSync(PROPERTIES_PATH, 'utf-8'))
  const pkg = JSON.parse(fs.readFileSync(PKG_JSON_PATH, 'utf-8'))

  // config.nav → 主索引
  const validIds = new Set()
  const navPairs = [] // { cat, pkg, id }
  for (const cat of config.nav) {
    for (const p of cat.packages) {
      const id = toDirId(p.name)
      validIds.add(id)
      navPairs.push({ cat, p, id })
    }
  }
  const validIdsSorted = [...validIds].sort((a, b) => b.length - a.length)

  const bucket = buildApiBucket(properties, validIds)
  const { perComponent: tokensByComp, globalTokens } = parseTokens(validIdsSorted)

  const components = {}
  const categories = []
  const noApiIds = []

  for (const cat of config.nav) {
    const catRef = { name: cat.name, enName: cat.enName, components: [] }
    for (const p of cat.packages) {
      const id = toDirId(p.name)
      const api = bucketToApi(id, bucket[id])
      if (!api.tables.length) noApiIds.push(id)

      const entry = {
        id,
        name: p.name,
        cName: p.cName,
        version: p.version,
        category: { name: cat.name, enName: cat.enName },
        taro: !!p.taro,
        v15: !!p.v15,
        v16: !!p.v16,
      }
      // 可选原样字段
      for (const k of ['author', 'type', 'desc', 'sort', 'show', 'rn', 'exclude', 'jdtaro']) {
        if (p[k] !== undefined) entry[k] = p[k]
      }
      entry.docs = resolveDocs(id, p.show)
      entry.demos = { h5: scanDemos(id, 'h5'), taro: scanDemos(id, 'taro') }
      const spec = resolveSpec(id)
      if (spec) entry.spec = spec
      entry.api = api
      entry.tokens = tokensByComp[id] || []

      if (p.show && !entry.demos.h5.length && !entry.demos.taro.length) {
        warn(`[demo-empty] "${id}" show:true 但无 demo`)
      }
      if (!cat.enName) warn(`[category] 分类「${cat.name}」缺 enName`)

      components[id] = entry
      catRef.components.push(id)
    }
    categories.push(catRef)
  }

  const componentCount = Object.keys(components).length
  const apiComponentCount = componentCount - noApiIds.length

  const output = {
    schemaVersion: SCHEMA_VERSION,
    libVersion: pkg.version,
    componentCount,
    apiComponentCount,
    categories,
    globalTokens,
    components,
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`)

  // ---- 对账 & 汇总 ----
  console.log(`✅ 写入 ${path.relative(ROOT, OUTPUT_PATH)}`)
  console.log(`   组件总数: ${componentCount}，有 API 表: ${apiComponentCount}`)
  console.log(`   全局 token: ${globalTokens.length}`)
  if (noApiIds.length) {
    console.log(`   无 API 表的组件 (${noApiIds.length}): ${noApiIds.join(', ')}`)
  }
  if (warnings.length) {
    console.log(`\n⚠️  ${warnings.length} 条 WARNING：`)
    for (const w of warnings) console.log(`   - ${w}`)
  } else {
    console.log('\n✨ 无 WARNING')
  }
}

main()
