// info <Component> —— 输出组件 Props 表。
import { loadMeta } from '../data.js'
import { output, renderTable } from '../format.js'
import { resolveOrExit } from './_shared.js'
import type { CliConfig } from '../config.js'
import type { OutputFormat } from '../types.js'

export interface InfoArgs {
  config: CliConfig
  component: string
  format: OutputFormat
}

export function runInfo(args: InfoArgs): void {
  const meta = loadMeta(args.config.dataDir)
  const comp = resolveOrExit(args.config, meta, args.component)
  const tables = comp.api?.tables ?? []
  const propTables = tables.filter((t) => t.kind === 'props')

  const jsonData = {
    id: comp.id,
    name: comp.name,
    cName: comp.cName,
    version: comp.version,
    tables: propTables.map((t) => ({
      name: t.name,
      subComponent: t.subComponent,
      rows: t.rows,
    })),
  }

  output(args.format, jsonData, () => {
    if (!propTables.length) {
      const others = tables.map((t) => `${t.name}(${t.kind})`).join('、')
      let msg = `${comp.name} ${comp.cName} 没有 Props 表`
      msg += others
        ? `。它可能是布局/子组件；现有其它表：${others}。`
        : `（可能是布局或纯样式组件）。`
      return msg
    }
    const blocks = propTables.map((t) => {
      const title = t.subComponent
        ? `${t.name}（${comp.name}.${t.subComponent}）`
        : t.name
      const rows = t.rows.map((r) => [r.prop, r.desc, r.type, r.default])
      return `▍${title}\n${renderTable(['属性', '说明', '类型', '默认值'], rows)}`
    })
    return `${comp.name} ${comp.cName}（v${comp.version}）\n\n${blocks.join('\n\n')}`
  })
}
