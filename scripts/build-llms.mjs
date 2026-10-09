// 读 meta/components.json，为每个文档站平台（H5 / Taro）生成面向 LLM 的文档入口产物：
//   - llms.txt          导航索引（仿 llmstxt.org 标准）
//   - llms-full-cn.txt   全部中文 doc 拼接，可整体注入上下文
//   - llms-full.txt      全部英文 doc 拼接（仅 H5，Taro 端无英文文档）
// 核心生成逻辑按平台参数化并导出为纯函数，供 vite.config.site(.taro) 的插件复用，避免多处实现。
// DO NOT manual edit the outputs. Run: npm run generate:llms
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const META_PATH = path.join(ROOT, 'meta/components.json')
const SEMANTIC_PATH = path.join(ROOT, 'meta/semantic.json')
const OUTPUT_DIR = path.join(ROOT, 'meta')

export const SITE_ORIGIN = 'https://nutui.jd.com'

const SUMMARY =
  'NutUI React 是京东风格的轻量级移动端 React 组件库，支持一套代码生成 H5 和小程序（Taro 多端）。'
const SUMMARY_EN =
  'NutUI React is a lightweight, JD-style mobile React UI library that generates both H5 and mini-program (Taro multi-platform) apps from a single codebase.'

// 各文档站平台的差异集中于此：站点 base、文档来源（meta.docs 的哪个 key）、标题落款、是否有英文文档。
// 单组件 .md 路由由 site 插件产出到 <base>/components/<id>.md。
export const PLATFORMS = {
  h5: {
    base: '/h5/react/4x',
    // 中/英文正文各取哪个 docs key。H5 端中文用 doc.md、英文用 doc.en-US.md。
    langDocKey: { cn: 'h5', en: 'enUS' },
    titleSuffix: '',
    pkgName: '@nutui/nutui-react',
  },
  taro: {
    base: '/taro/react/4x',
    // Taro 端中文用 doc.taro.md；暂无 Taro 英文文档，故不产出 llms-full.txt。
    langDocKey: { cn: 'taro' },
    titleSuffix: '（Taro 多端）',
    pkgName: '@nutui/nutui-react-taro',
  },
}

export function loadMeta() {
  return JSON.parse(fs.readFileSync(META_PATH, 'utf-8'))
}

const siteUrl = (platform) => `${SITE_ORIGIN}${PLATFORMS[platform].base}`

// 尝试读 semantic.json（需先 npm run generate:semantic）。未生成时返回 null，
// llms 产物据此跳过 semantic 入口/链接而非报错。直接读 JSON 避免与 build-semantic.mjs 循环依赖。
function tryLoadSemantic() {
  try {
    return JSON.parse(fs.readFileSync(SEMANTIC_PATH, 'utf-8'))
  } catch {
    return null
  }
}

// 仅纳入在该平台有中文文档的组件（= show:true 的展示组件），按 categories 的 nav 顺序输出。
function docComponents(meta, cnKey) {
  const list = []
  for (const cat of meta.categories) {
    const comps = cat.components
      .map((id) => meta.components[id])
      .filter((c) => c && c.docs && c.docs[cnKey])
    if (comps.length) list.push({ category: cat, comps })
  }
  return list
}

export function generateLlmsTxt(meta, platform = 'h5') {
  const conf = PLATFORMS[platform]
  const cnKey = conf.langDocKey.cn
  const url = siteUrl(platform)
  const groups = docComponents(meta, cnKey)
  const semantic = tryLoadSemantic()
  const lines = []
  lines.push(`# NutUI React - 京东风格轻量级移动端 React 组件库${conf.titleSuffix}`)
  lines.push('')
  lines.push(
    `> ${SUMMARY}当前为 ${conf.pkgName}（\`${platform}\` 端），版本 ${meta.libVersion}，共 ${meta.componentCount} 个组件。`
  )
  lines.push('')
  lines.push(
    `本文件遵循 llmstxt.org 标准，为 AI 编程助手提供权威、离线可查的组件文档入口。每个组件的 \`.md\` 链接返回其纯文档原文（无站点 HTML 噪音），可按需精确拉取。`
  )
  lines.push('')
  lines.push('## Navigation')
  lines.push('')
  lines.push(`- [全部组件文档（中文，单文件）](${url}/llms-full-cn.txt)`)
  if (conf.langDocKey.en) {
    lines.push(`- [Full Documentation (English, single file)](${url}/llms-full.txt)`)
  }
  if (semantic) {
    lines.push(`- [全部组件样式结构（中文，单文件）](${url}/llms-semantic-cn.txt)`)
    if (conf.langDocKey.en) {
      lines.push(`- [Component Style Structure (English, single file)](${url}/llms-semantic.txt)`)
    }
  }
  lines.push('')

  for (const { category, comps } of groups) {
    lines.push(`## ${category.name}${category.enName ? ` (${category.enName})` : ''}`)
    lines.push('')
    for (const c of comps) {
      const label = c.cName ? `${c.name} ${c.cName}` : c.name
      lines.push(`- [${label}](${url}/components/${c.id}.md)`)
    }
    lines.push('')
  }

  // per-component 语义文档分区（仅当 semantic.json 已生成）。列出每个有语义数据的组件的 semantic.md 链接。
  if (semantic) {
    lines.push('## 样式结构 (Semantic)')
    lines.push('')
    lines.push(
      '每个组件的 `semantic.md` 列出其渲染产物可用的 CSS class 与 CSS 变量，供自定义样式 / 主题覆盖时精确定位。'
    )
    lines.push('')
    for (const { comps } of groups) {
      for (const c of comps) {
        if (!semantic.components[c.id]) continue
        const label = c.cName ? `${c.name} ${c.cName}` : c.name
        lines.push(`- [${label} Semantic](${url}/components/${c.id}/semantic.md)`)
      }
    }
    lines.push('')
  }
  return `${lines.join('\n').trimEnd()}\n`
}

// 拼接该平台全部组件文档为单文件。lang: 'cn' | 'en'（en 仅 H5 有）。
export function generateLlmsFull(meta, platform = 'h5', lang = 'cn') {
  const conf = PLATFORMS[platform]
  const docKey = conf.langDocKey[lang]
  const title =
    lang === 'en'
      ? '# NutUI React - Full Component Documentation'
      : `# NutUI React - 全部组件文档${conf.titleSuffix}`
  const summary = lang === 'en' ? SUMMARY_EN : SUMMARY
  const url = siteUrl(platform)
  const semantic = tryLoadSemantic()
  const semanticHeading = lang === 'en' ? 'Semantic DOM' : '样式结构 (Semantic DOM)'
  const parts = [title, '', `> ${summary}`, '']
  for (const cat of meta.categories) {
    for (const id of cat.components) {
      const c = meta.components[id]
      const rel = c && c.docs ? c.docs[docKey] : null
      if (!rel) continue
      const abs = path.join(ROOT, rel)
      if (!fs.existsSync(abs)) continue
      parts.push('---', '')
      parts.push(fs.readFileSync(abs, 'utf-8').trim())
      // 组件语义文档链接（不内联正文，与 llms-full 的文档主体分离，同 Ant Design 组织方式）。
      if (semantic && semantic.components[id]) {
        parts.push('', `## ${semanticHeading}`, '', `${url}/components/${id}/semantic.md`)
      }
      parts.push('')
    }
  }
  return `${parts.join('\n').trimEnd()}\n`
}

// 汇总某平台要产出的全部 llms 文件：{ 相对站点根的路径 -> 文本内容 }。
// 含 llms.txt / llms-full*.txt 与每组件的 components/<id>.md（取该平台对应端文档）。
// 供 build-llms 的 main 与 vite 插件共用，保证两处产物完全一致。
export function collectLlmsFiles(meta, platform = 'h5') {
  const conf = PLATFORMS[platform]
  const cnKey = conf.langDocKey.cn
  const files = {
    'llms.txt': generateLlmsTxt(meta, platform),
    'llms-full-cn.txt': generateLlmsFull(meta, platform, 'cn'),
  }
  if (conf.langDocKey.en) {
    files['llms-full.txt'] = generateLlmsFull(meta, platform, 'en')
  }
  for (const c of Object.values(meta.components)) {
    const rel = c.docs && c.docs[cnKey]
    if (!rel) continue
    const abs = path.join(ROOT, rel)
    if (!fs.existsSync(abs)) continue
    files[`components/${c.id}.md`] = fs.readFileSync(abs, 'utf-8')
  }
  return files
}

function main() {
  console.log('🚀 building llms.txt ...')
  const meta = loadMeta()
  for (const platform of Object.keys(PLATFORMS)) {
    const outDir = path.join(OUTPUT_DIR, platform)
    fs.mkdirSync(outDir, { recursive: true })
    // 磁盘产物仅保留导航与全量文件；单组件 md 由站点构建时按需产出，不落 meta。
    const files = {
      'llms.txt': generateLlmsTxt(meta, platform),
      'llms-full-cn.txt': generateLlmsFull(meta, platform, 'cn'),
    }
    if (PLATFORMS[platform].langDocKey.en) {
      files['llms-full.txt'] = generateLlmsFull(meta, platform, 'en')
    }
    for (const [name, content] of Object.entries(files)) {
      const out = path.join(outDir, name)
      fs.writeFileSync(out, content)
      const kb = (Buffer.byteLength(content) / 1024).toFixed(0)
      console.log(`✅ ${path.relative(ROOT, out)} (${kb}KB)`)
    }
    const cnKey = PLATFORMS[platform].langDocKey.cn
    const docCount = docComponents(meta, cnKey).reduce((n, g) => n + g.comps.length, 0)
    console.log(`   [${platform}] 索引组件数: ${docCount}`)
  }
}

// 仅作为脚本直接运行时执行 main，被 import 时不执行。
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
