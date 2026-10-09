// 编译各组件 scss，提取真实 CSS class，按组件归属，输出 meta/semantic.json。
// 面向 AI Coding 的「样式结构事实源」：告诉 LLM 每个组件有哪些可用 CSS class 与 tokens，
// 便于生成改样式 / 写主题覆盖的代码。md 呈现由 site 插件读本产物生成，避免二次编译。
// class 只能靠编译得到：组件 scss 大量用 @each / &-#{$type} / @mixin，动态 class 源码里不存在。
// DO NOT manual edit the output (meta/semantic.json). Run: npm run generate:semantic
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import * as sass from 'sass'
import postcss from 'postcss'
import { loadMeta } from './build-llms.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PACKAGES_DIR = path.join(ROOT, 'src/packages')
const STYLES_DIR = path.join(ROOT, 'src/styles')
const VARIABLES_PATH = path.join(STYLES_DIR, 'variables.scss')
const SEMANTIC_PATH = path.join(ROOT, 'meta/semantic.json')
const OUTPUT_DIR = path.join(ROOT, 'meta')

const SCHEMA_VERSION = '1.0.0'

// 组件 scss 靠外部注入变量/函数（scale-px 等），故先 @import variables 再 @import 组件。
// 全库已验证 100% 可编译；静音无关 deprecation，避免污染日志。
const SILENCE = [
  'import',
  'global-builtin',
  'color-functions',
  'legacy-js-api',
  'mixed-decls',
]

// 编译单个组件 scss，用 postcss 提取全部 .nut-* class 名（去 . 前缀）。失败返回 null。
function extractClasses(scssPath) {
  // Sass @import 字符串里反斜杠是转义字符，Windows 路径需转 POSIX 正斜杠（各平台通用）。
  const toPosix = (p) => p.replace(/\\/g, '/')
  const entry = `@import '${toPosix(VARIABLES_PATH)}';\n@import '${toPosix(scssPath)}';`
  let css
  try {
    ;({ css } = sass.compileString(entry, {
      loadPaths: [STYLES_DIR, path.dirname(scssPath)],
      silenceDeprecations: SILENCE,
      logger: sass.Logger.silent,
    }))
  } catch (e) {
    return { error: e.message.split('\n')[0] }
  }
  const classes = new Set()
  postcss.parse(css).walkRules((rule) => {
    const m = rule.selector.match(/\.nut-[a-zA-Z0-9_-]+/g)
    if (m) m.forEach((c) => classes.add(c.slice(1)))
  })
  return { classes }
}

// class 前缀 → 组件 id 的手工别名。仅用于 class 名与目录 id 系统性不一致、
// 且归一/文件归属都救不了的情况（如 Image 组件渲染出 nut-img-* 而目录 id 是 image，
// 且该 class 经 @import 出现在 avatar/imagepreview 等多个文件里，无法靠单一来源定位）。
// 与 build-meta.mjs 的 COMPONENT_ALIAS 同类，保持最小化。
const CLASS_PREFIX_ALIAS = {
  'nut-img': 'image',
}

// class → 归一匹配组件 id。去 nut- 前缀、去连字符后，取「最长的、是其前缀的 valid id」。
// 例：nut-cell-group-title → cellgrouptitle → 命中 cellgroup（长于 cell，取长者）。
// 仅作辅助信号，用于父子 @import 去重（把共享 class 判给更具体的子组件）。
// 对 class↔id 不一致的组件会失配（如 nut-countup-* 对应 id animatingnumbers），故归属主信号是「定义文件」。
function makeResolver(validIdsByLen) {
  return (className) => {
    // 别名优先：命中前缀则直接归属（处理跨多文件的 class↔id 不一致）。
    for (const [prefix, id] of Object.entries(CLASS_PREFIX_ALIAS)) {
      if (className === prefix || className.startsWith(`${prefix}-`)) return id
    }
    const body = className.replace(/^nut-/, '').replace(/-/g, '')
    return validIdsByLen.find((id) => body === id || body.startsWith(id)) || null
  }
}

// 编译各组件 scss，按「定义文件 + 归一去重」把 class 归属到组件。返回 { semantic, stats }。
export function generateSemantic(meta) {
  const validIds = Object.keys(meta.components)
  const validIds4Set = new Set(validIds)
  const validIdsByLen = [...validIds].sort((a, b) => b.length - a.length)
  const resolve = makeResolver(validIdsByLen)

  // 逐组件编译，记录每个 class 出现在哪些组件文件里（class → Set<定义它的组件id>）。
  // 父 scss 会因 @import 子 scss 而含子组件 class，故一个 class 可能有多个来源文件。
  const classSources = new Map()
  const compileErrors = []
  let scssCount = 0
  for (const id of fs.readdirSync(PACKAGES_DIR)) {
    const scssPath = path.join(PACKAGES_DIR, id, `${id}.scss`)
    if (!fs.existsSync(scssPath)) continue
    scssCount++
    const { classes, error } = extractClasses(scssPath)
    if (error) {
      compileErrors.push(`${id}: ${error}`)
      continue
    }
    for (const c of classes) {
      if (!classSources.has(c)) classSources.set(c, new Set())
      classSources.get(c).add(id)
    }
  }

  // 归属：优先归一（命中具体 id 时用它，实现父子 @import 去重）；
  // 归一失配时归给唯一定义文件（处理 class↔id 不一致，如 nut-countup-*→animatingnumbers）；
  // 归一失配且跨多文件、又无法定位唯一归属的，进 orphan（多为 nut-rtl 等全局 class，丢弃）。
  const classesByComp = {}
  const orphan = new Set()
  for (const [c, sources] of classSources) {
    const byNorm = resolve(c)
    let owner = null
    if (byNorm && validIds4Set.has(byNorm)) {
      owner = byNorm
    } else if (sources.size === 1) {
      owner = [...sources][0]
    } else {
      // 多来源且归一失配：取来源中作为 class 前缀最长者（最具体的定义方）。
      owner =
        [...sources]
          .filter((id) => c === `nut-${id}` || c.startsWith(`nut-${id}-`))
          .sort((a, b) => b.length - a.length)[0] || null
    }
    if (!owner) {
      orphan.add(c)
      continue
    }
    ;(classesByComp[owner] ||= []).push(c)
  }

  // 组装产物：仅纳入至少有 class 或 tokens 的组件，class 去重排序，tokens 复用 meta。
  const components = {}
  for (const id of validIds) {
    const c = meta.components[id]
    const classes = (classesByComp[id] || []).sort()
    const tokens = c.tokens || []
    if (!classes.length && !tokens.length) continue
    components[id] = {
      id,
      name: c.name,
      cName: c.cName || null,
      classes,
      tokens,
    }
  }

  const semantic = {
    schemaVersion: SCHEMA_VERSION,
    libVersion: meta.libVersion,
    componentCount: Object.keys(components).length,
    components,
  }
  const stats = {
    scssCount,
    classTotal: classSources.size,
    assigned: classSources.size - orphan.size,
    orphan: [...orphan].sort(),
    compileErrors,
    emptyComps: validIds.filter(
      (id) => !classesByComp[id]?.length && (meta.components[id].tokens || []).length
    ),
  }
  return { semantic, stats }
}

const SEMANTIC_I18N = {
  h5: {
    fullTitle: '# NutUI React - 全部组件样式结构',
    fullIntro:
      '本文件汇总所有组件渲染产物中可用的 CSS class 与 CSS 变量（design tokens），供自定义样式 / 主题覆盖时精确定位。',
    mdIntro: [
      '> 本文件列出该组件渲染产物中可用的 CSS class 与 CSS 变量（design tokens），',
      '> 供自定义样式 / 主题覆盖时精确定位。',
    ],
    suffix: '样式结构',
    tokenHeading: 'CSS 变量 (Design Tokens)',
    tokenTableHead: '| CSS 变量 | SCSS 变量 | 默认值 |',
    noClass: '_该组件无独立样式 class。_',
    noToken: '_该组件无独立 design token。_',
  },
  enUS: {
    fullTitle: '# NutUI React - Component Style Structure',
    fullIntro:
      'Aggregated CSS classes and CSS variables (design tokens) available on each component’s rendered output, for precise custom styling / theme overrides.',
    mdIntro: [
      '> CSS classes and CSS variables (design tokens) available on this component’s rendered output,',
      '> for precise custom styling / theme overrides.',
    ],
    suffix: 'Style Structure',
    tokenHeading: 'CSS Variables (Design Tokens)',
    tokenTableHead: '| CSS Variable | SCSS Variable | Default |',
    noClass: '_This component has no dedicated style class._',
    noToken: '_This component has no dedicated design token._',
  },
}

// 单组件语义主体：CSS Class 列表 + Design Tokens 表格。供单文件 md 与聚合文件复用。
function semanticBody(c, lang) {
  const t = SEMANTIC_I18N[lang] || SEMANTIC_I18N.h5
  const lines = ['## CSS Class', '']
  if (c.classes.length) {
    for (const cls of c.classes) lines.push(`- \`${cls}\``)
  } else {
    lines.push(t.noClass)
  }
  lines.push('', `## ${t.tokenHeading}`, '')
  if (c.tokens.length) {
    lines.push(t.tokenTableHead, '| --- | --- | --- |')
    for (const tk of c.tokens) {
      lines.push(`| ${tk.cssVar} | ${tk.scssVar} | ${tk.default ?? ''} |`)
    }
  } else {
    lines.push(t.noToken)
  }
  return lines
}

// 单组件样式结构 md（人类可读 / URL 访问）。数据源为 semantic.json，无需再编译 scss。
export function generateSemanticMd(semantic, id, lang = 'h5') {
  const c = semantic.components[id]
  if (!c) return null
  const t = SEMANTIC_I18N[lang] || SEMANTIC_I18N.h5
  const title = c.cName ? `${c.name} ${c.cName}` : c.name
  const lines = [`# ${title} - ${t.suffix}`, '', ...t.mdIntro, '']
  lines.push(...semanticBody(c, lang))
  return `${lines.join('\n').trimEnd()}\n`
}

// 语义聚合单文件：按 categories 顺序拼接所有组件的 class+tokens。lang: 'h5'(中文) | 'enUS'(英文)。
// 组件顺序与 llms-full 一致（沿用 meta.categories）。
export function generateLlmsSemantic(semantic, meta, lang = 'h5') {
  const t = SEMANTIC_I18N[lang] || SEMANTIC_I18N.h5
  const parts = [t.fullTitle, '', `> ${t.fullIntro}`, '']
  for (const cat of meta.categories) {
    for (const id of cat.components) {
      const c = semantic.components[id]
      if (!c) continue
      const title = c.cName ? `${c.name} ${c.cName}` : c.name
      parts.push('---', '', `# ${title}`, '')
      parts.push(...semanticBody(c, lang), '')
    }
  }
  return `${parts.join('\n').trimEnd()}\n`
}

// 读已生成的 semantic.json（供 site 插件消费，避免二次编译 scss）。
export function loadSemantic() {
  return JSON.parse(fs.readFileSync(SEMANTIC_PATH, 'utf-8'))
}

function main() {
  console.log('🚀 building meta/semantic.json ...')
  const meta = loadMeta()
  const { semantic, stats } = generateSemantic(meta)

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const files = {
    'semantic.json': `${JSON.stringify(semantic, null, 2)}\n`,
    'llms-semantic-cn.txt': generateLlmsSemantic(semantic, meta, 'h5'),
    'llms-semantic.txt': generateLlmsSemantic(semantic, meta, 'enUS'),
  }
  for (const [name, content] of Object.entries(files)) {
    const out = path.join(OUTPUT_DIR, name)
    fs.writeFileSync(out, content)
    const kb = (Buffer.byteLength(content) / 1024).toFixed(0)
    console.log(`✅ ${path.relative(ROOT, out)} (${kb}KB)`)
  }

  console.log(`   编译 scss: ${stats.scssCount}，产出组件: ${semantic.componentCount}`)
  console.log(`   class 总数: ${stats.classTotal}，已归属: ${stats.assigned}`)
  if (stats.emptyComps.length) {
    console.log(
      `   仅 token 无 class 的组件 (${stats.emptyComps.length}): ${stats.emptyComps.join(', ')}`
    )
  }
  if (stats.orphan.length) {
    console.log(`\n⚠️  ${stats.orphan.length} 个 class 未归属（预期为全局/跨组件 class，已丢弃）：`)
    console.log(`   ${stats.orphan.join(', ')}`)
  }
  if (stats.compileErrors.length) {
    console.log(`\n❌ ${stats.compileErrors.length} 个组件编译失败：`)
    for (const e of stats.compileErrors) console.log(`   - ${e}`)
  } else {
    console.log('\n✨ 全部 scss 编译成功')
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
