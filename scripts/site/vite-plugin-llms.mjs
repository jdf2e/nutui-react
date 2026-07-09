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
      const files = collectLlmsFiles(loadMeta(), platform)
      for (const [fileName, source] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source })
      }
      console.log(
        `[nutui-llms:${platform}] emitted ${Object.keys(files).length} files (llms*.txt + components/*.md)`
      )
    },

    // dev 阶段：中间件按 <base>/llms.txt、<base>/components/<id>.md 实时返回。
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const rel = url.startsWith(base) ? url.slice(base.length) : url
        const key = rel.replace(/^\//, '')
        const isTarget =
          key === 'llms.txt' ||
          key === 'llms-full-cn.txt' ||
          key === 'llms-full.txt' ||
          (key.startsWith('components/') && key.endsWith('.md'))
        if (!isTarget) return next()

        const files = collectLlmsFiles(loadMeta(), platform)
        if (!(key in files)) return next()
        res.setHeader('Content-Type', contentType(key))
        res.end(files[key])
      })
    },
  }
}
