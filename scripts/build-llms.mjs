// 读 meta/components.json，生成面向 LLM 的文档入口产物：
//   - llms.txt          导航索引（仿 llmstxt.org 标准）
//   - llms-full-cn.txt   全部中文 doc.md 拼接，可整体注入上下文
//   - llms-full.txt      全部英文 doc.en-US.md 拼接
// 核心生成逻辑导出为纯函数，供 vite.config.site 的插件复用，避免两处实现。
// DO NOT manual edit the outputs. Run: npm run generate:llms
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const META_PATH = path.join(ROOT, 'meta/components.json')
const SEMANTIC_PATH = path.join(ROOT, 'meta/semantic.json')
const OUTPUT_DIR = path.join(ROOT, 'meta')

// 线上文档站基址：域名 + vite base。单组件 .md 路由由 site 插件产出到 <base>/components/<id>.md。
export const SITE_ORIGIN = 'https://nutui.jd.com'
export const SITE_BASE = '/h5/react/4x'
const SITE_URL = `${SITE_ORIGIN}${SITE_BASE}`

const SUMMARY =
  'NutUI React 是京东风格的轻量级移动端 React 组件库，支持一套代码生成 H5 和小程序（Taro 多端）。'
const SUMMARY_EN =
  'NutUI React is a lightweight, JD-style mobile React UI library that generates both H5 and mini-program (Taro multi-platform) apps from a single codebase.'

export function loadMeta() {
  return JSON.parse(fs.readFileSync(META_PATH, 'utf-8'))
}

// 尝试读 semantic.json（需先 npm run generate:semantic）。未生成时返回 null，
// llms 产物据此跳过 semantic 入口/链接而非报错。直接读 JSON 避免与 build-semantic.mjs 循环依赖。
function tryLoadSemantic() {
  try {
    return JSON.parse(fs.readFileSync(SEMANTIC_PATH, 'utf-8'))
  } catch {
    return null
  }
}

// 仅纳入有中文文档的组件（= show:true 的展示组件），按 categories 的 nav 顺序输出。
function docComponents(meta) {
  const list = []
  for (const cat of meta.categories) {
    const comps = cat.components
      .map((id) => meta.components[id])
      .filter((c) => c && c.docs && c.docs.h5)
    if (comps.length) list.push({ category: cat, comps })
  }
  return list
}

export function generateLlmsTxt(meta) {
  const groups = docComponents(meta)
  const semantic = tryLoadSemantic()
  const lines = []
  lines.push(`# NutUI React - 京东风格轻量级移动端 React 组件库`)
  lines.push('')
  lines.push(`> ${SUMMARY}版本 ${meta.libVersion}，共 ${meta.componentCount} 个组件。`)
  lines.push('')
  lines.push(
    `本文件遵循 llmstxt.org 标准，为 AI 编程助手提供权威、离线可查的组件文档入口。每个组件的 \`.md\` 链接返回其纯文档原文（无站点 HTML 噪音），可按需精确拉取。`
  )
  lines.push('')
  lines.push('## Navigation')
  lines.push('')
  lines.push(`- [全部组件文档（中文，单文件）](${SITE_URL}/llms-full-cn.txt)`)
  lines.push(`- [Full Documentation (English, single file)](${SITE_URL}/llms-full.txt)`)
  if (semantic) {
    lines.push(`- [全部组件样式结构（中文，单文件）](${SITE_URL}/llms-semantic-cn.txt)`)
    lines.push(`- [Component Style Structure (English, single file)](${SITE_URL}/llms-semantic.txt)`)
  }
  lines.push('')

  for (const { category, comps } of groups) {
    lines.push(`## ${category.name}${category.enName ? ` (${category.enName})` : ''}`)
    lines.push('')
    for (const c of comps) {
      const label = c.cName ? `${c.name} ${c.cName}` : c.name
      lines.push(`- [${label}](${SITE_URL}/components/${c.id}.md)`)
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
        lines.push(`- [${label} Semantic](${SITE_URL}/components/${c.id}/semantic.md)`)
      }
    }
    lines.push('')
  }
  return `${lines.join('\n').trimEnd()}\n`
}

// 拼接全部组件文档为单文件。lang: 'h5'(中文) | 'enUS'(英文)。
export function generateLlmsFull(meta, lang = 'h5') {
  const title =
    lang === 'enUS'
      ? '# NutUI React - Full Component Documentation'
      : '# NutUI React - 全部组件文档'
  const summary = lang === 'enUS' ? SUMMARY_EN : SUMMARY
  const semantic = tryLoadSemantic()
  const semanticHeading = lang === 'enUS' ? 'Semantic DOM' : '样式结构 (Semantic DOM)'
  const parts = [title, '', `> ${summary}`, '']
  for (const cat of meta.categories) {
    for (const id of cat.components) {
      const c = meta.components[id]
      const rel = c && c.docs ? c.docs[lang] : null
      if (!rel) continue
      const abs = path.join(ROOT, rel)
      if (!fs.existsSync(abs)) continue
      parts.push('---', '')
      parts.push(fs.readFileSync(abs, 'utf-8').trim())
      // 组件语义文档链接（不内联正文，与 llms-full 的文档主体分离，同 Ant Design 组织方式）。
      if (semantic && semantic.components[id]) {
        parts.push('', `## ${semanticHeading}`, '', `${SITE_URL}/components/${id}/semantic.md`)
      }
      parts.push('')
    }
  }
  return `${parts.join('\n').trimEnd()}\n`
}

function main() {
  console.log('🚀 building llms.txt ...')
  const meta = loadMeta()
  const files = {
    'llms.txt': generateLlmsTxt(meta),
    'llms-full-cn.txt': generateLlmsFull(meta, 'h5'),
    'llms-full.txt': generateLlmsFull(meta, 'enUS'),
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  for (const [name, content] of Object.entries(files)) {
    const out = path.join(OUTPUT_DIR, name)
    fs.writeFileSync(out, content)
    const kb = (Buffer.byteLength(content) / 1024).toFixed(0)
    console.log(`✅ ${path.relative(ROOT, out)} (${kb}KB)`)
  }
  const docCount = docComponents(meta).reduce((n, g) => n + g.comps.length, 0)
  console.log(`   索引组件数: ${docCount}`)
}

// 仅作为脚本直接运行时执行 main，被 import 时不执行。
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
