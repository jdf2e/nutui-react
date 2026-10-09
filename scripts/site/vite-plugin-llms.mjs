// Vite 插件（用于文档站 vite.config.site.mts 与 vite.config.site.taro.mts）：
//   - build 时：把每个组件对应端的 doc 原文与 llms.txt/llms-full*.txt 通过 emitFile
//     输出为静态文件，最终落到 dist-site/<...>/components/<id>.md 与 dist-site/<...>/*.txt
//   - dev 时：configureServer 中间件按同样路径实时返回，便于本地联调
// 平台差异（base、取哪一端文档）由 build-llms.mjs 的 PLATFORMS 决定，此处仅按 platform 透传。
import {
  loadMeta,
  collectLlmsFiles,
  PLATFORMS,
} from '../build-llms.mjs'
import {
  loadSemantic,
  generateSemanticMd,
  generateLlmsSemantic,
} from '../build-semantic.mjs'

// 读 semantic.json（需先 npm run generate:semantic）。未生成时返回 null，跳过 semantic 产物而非报错。
function tryLoadSemantic() {
  try {
    return loadSemantic()
  } catch {
    return null
  }
}

// 收集某平台要产出的全部虚拟文件：llms 文档（含单组件 md）+ 样式结构产物。
// llms 部分复用 build-llms 的 collectLlmsFiles，semantic 部分在此叠加，
// 使 build（generateBundle）与 dev（中间件）两条路径产物完全一致。
function collectFiles(platform) {
  const meta = loadMeta()
  const files = collectLlmsFiles(meta, platform)
  // 每组件样式结构文档：components/<id>/semantic.md（对齐 Ant 的 <comp>/semantic.md 语义）。
  // 语义聚合单文件：llms-semantic-cn.txt / llms-semantic.txt（对齐 llms-full 的组织方式）。
  // semantic 数据与端无关，中文无条件产出；英文仅在该平台有英文文档时产出（同 llms-full 策略）。
  const semantic = tryLoadSemantic()
  if (semantic) {
    files['llms-semantic-cn.txt'] = generateLlmsSemantic(semantic, meta, 'h5')
    if (PLATFORMS[platform].langDocKey.en) {
      files['llms-semantic.txt'] = generateLlmsSemantic(semantic, meta, 'enUS')
    }
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

// platform: 'h5' | 'taro'，决定站点 base 与单组件 md 取哪一端文档。
export default function llmsPlugin({ platform = 'h5' } = {}) {
  const base = PLATFORMS[platform].base.replace(/\/$/, '')
  return {
    name: 'nutui-llms',

    // build 阶段：把虚拟文件写入产物目录（相对 outDir，即 dist-site/<h5|taro>）。
    generateBundle() {
      const files = collectFiles(platform)
      for (const [fileName, source] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source })
      }
      console.log(
        `[nutui-llms:${platform}] emitted ${Object.keys(files).length} files (llms*.txt + components/*.md + semantic)`
      )
    },

    // dev 阶段：中间件按 <base>/llms.txt、<base>/components/<id>.md、
    // <base>/components/<id>/semantic.md 实时返回（后两者均命中 components/ + .md 判定）。
    configureServer(server) {
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

        const files = collectFiles(platform)
        if (!(key in files)) return next()
        res.setHeader('Content-Type', contentType(key))
        res.end(files[key])
      })
    },
  }
}
