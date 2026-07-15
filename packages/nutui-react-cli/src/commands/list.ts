// nutui-react list —— 按分类列出组件。
import { loadMeta } from '../data.js'
import { output, renderTable } from '../format.js'
import type { OutputFormat } from '../types.js'

export interface ListArgs {
  category?: string
  format: OutputFormat
}

export function runList(args: ListArgs): void {
  const meta = loadMeta()
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

  output(args.format, jsonData, () => {
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
    const header = `NutUI React（H5）共 ${meta.componentCount} 个组件，版本 ${meta.libVersion}`
    return `${header}\n\n${blocks.join('\n\n')}\n\n合计：${total} 个`
  })
}
