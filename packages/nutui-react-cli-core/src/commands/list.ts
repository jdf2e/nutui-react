// list —— 按分类列出组件。
import { output, renderTable } from '../format.js'
import {
  resolveContext,
  versionHeaderText,
  versionMeta,
  type OutputFormat,
} from './_shared.js'
import type { CliConfig } from '../config.js'

export interface ListArgs {
  config: CliConfig
  category?: string
  format: OutputFormat
  nutuiVersion?: string
}

export function runList(args: ListArgs): void {
  const { meta, versionInfo } = resolveContext(args.config, args.nutuiVersion)
  let categories = meta.categories
  if (args.category) {
    const key = args.category.toLowerCase()
    categories = categories.filter(
      (c) => c.enName.toLowerCase() === key || c.name === args.category
    )
    if (!categories.length) {
      const all = meta.categories.map((c) => c.enName).join(' / ')
      process.stderr.write(`未找到分类「${args.category}」。可选：${all}\n`)
      process.exit(1)
    }
  }

  const jsonData = categories.map((cat) => ({
    name: cat.name,
    enName: cat.enName,
    components: cat.components
      .map((id) => meta.components[id])
      .filter(Boolean)
      .map((c) => ({
        id: c.id,
        name: c.name,
        cName: c.cName,
        version: c.version,
      })),
  }))

  output(
    args.format,
    { categories: jsonData },
    () => {
      const blocks: string[] = []
      let total = 0
      for (const cat of categories) {
        const comps = cat.components
          .map((id) => meta.components[id])
          .filter(Boolean)
        total += comps.length
        const rows = comps.map((c) => [c.name, c.cName ?? '', c.version ?? ''])
        blocks.push(
          `▍${cat.name} (${cat.enName})\n${renderTable(['组件', '中文名', '版本'], rows)}`
        )
      }
      const header = `${args.config.libLabel}共 ${meta.componentCount} 个组件，版本 ${meta.libVersion}`
      return `${header}\n\n${blocks.join('\n\n')}\n\n合计：${total} 个`
    },
    { header: versionHeaderText(args.config, versionInfo), meta: versionMeta(versionInfo) }
  )
}
