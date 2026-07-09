// Vite 插件（仅用于文档站 vite.config.site.mts）：
//   - build 时：把每个组件 doc.md 原文与 llms.txt/llms-full*.txt 通过 emitFile
//     输出为静态文件，最终落到 dist-site/h5/components/<id>.md 与 dist-site/h5/*.txt
//   - dev 时：configureServer 中间件按同样路径实时返回，便于本地联调
// 数据源为 meta/components.json + 各组件 doc.md，与 build-llms.mjs 共享生成逻辑。
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  loadMeta,
  generateLlmsTxt,
  generateLlmsFull,
  SITE_BASE,
} from '../build-llms.mjs'
import {
  loadSemantic,
  generateSemanticMd,
  generateLlmsSemantic,
} from '../build-semantic.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

// 读 semantic.json（需先 npm run generate:semantic）。未生成时返回 null，跳过 semantic 产物而非报错。
function tryLoadSemantic() {
  try {
    return loadSemantic()
  } catch {
    return null
  }
}

// 收集所有要产出的虚拟文件：{ 相对站点根的路径 -> 文本内容 }
function collectFiles() {
  const meta = loadMeta()
  const files = {
    'llms.txt': generateLlmsTxt(meta),
    'llms-full-cn.txt': generateLlmsFull(meta, 'h5'),
    'llms-full.txt': generateLlmsFull(meta, 'enUS'),
  }
  for (const c of Object.values(meta.components)) {
    const rel = c.docs && c.docs.h5
    if (!rel) continue
    const abs = path.join(ROOT, rel)
    if (!fs.existsSync(abs)) continue
    files[`components/${c.id}.md`] = fs.readFileSync(abs, 'utf-8')
  }
  // 每组件样式结构文档：components/<id>/semantic.md（对齐 Ant 的 <comp>/semantic.md 语义）。
  // 语义聚合单文件：llms-semantic-cn.txt / llms-semantic.txt（对齐 llms-full 的组织方式）。
  const semantic = tryLoadSemantic()
  if (semantic) {
    files['llms-semantic-cn.txt'] = generateLlmsSemantic(semantic, meta, 'h5')
    files['llms-semantic.txt'] = generateLlmsSemantic(semantic, meta, 'enUS')
    for (const id of Object.keys(semantic.components)) {
      const md = generateSemanticMd(semantic, id)
      if (md) files[`components/${id}/semantic.md`] = md
    }
  }
  return files
}

const contentType = (p) =>
  p.endsWith('.md')
    ? 'text/markdown; charset=utf-8'
    : 'text/plain; charset=utf-8'

export default function llmsPlugin() {
  return {
    name: 'nutui-llms',

    // build 阶段：把虚拟文件写入产物目录（相对 outDir，即 dist-site/h5）。
    generateBundle() {
      const files = collectFiles()
      for (const [fileName, source] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source })
      }
      console.log(
        `[nutui-llms] emitted ${Object.keys(files).length} files (llms*.txt + components/*.md)`
      )
    },

    // dev 阶段：中间件按 <base>/llms.txt、<base>/components/<id>.md、
    // <base>/components/<id>/semantic.md 实时返回（后两者均命中 components/ + .md 判定）。
    configureServer(server) {
      const base = SITE_BASE.replace(/\/$/, '')
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const rel = url.startsWith(base) ? url.slice(base.length) : url
        const key = rel.replace(/^\//, '')
        const isTarget =
          key === 'llms.txt' ||
          key === 'llms-full-cn.txt' ||
          key === 'llms-full.txt' ||
          key === 'llms-semantic-cn.txt' ||
          key === 'llms-semantic.txt' ||
          (key.startsWith('components/') && key.endsWith('.md'))
        if (!isTarget) return next()

        const files = collectFiles()
        if (!(key in files)) return next()
        res.setHeader('Content-Type', contentType(key))
        res.end(files[key])
      })
    },
  }
}
