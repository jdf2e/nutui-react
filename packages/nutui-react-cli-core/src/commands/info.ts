// info <Component> —— 输出组件 Props 表。
import { output, renderTable } from '../format.js'
import {
  resolveContext,
  resolveOrExit,
  versionHeaderText,
  versionMeta,
  type OutputFormat,
} from './_shared.js'
import type { CliConfig } from '../config.js'
import type { Component, ApiTable } from '../types.js'

export interface InfoArgs {
  config: CliConfig
  component: string
  format: OutputFormat
  nutuiVersion?: string
  dense?: boolean
}

export function renderDenseInfo(
  comp: Component,
  propTables: ApiTable[]
): string {
  const lines: string[] = []
  lines.push(`// ${comp.name} ${comp.cName || ''} (v${comp.version})`)
  if (!propTables.length) {
    lines.push(`// 纯布局/展示组件，无独立 Props 表。`)
  }
  for (const t of propTables) {
    const ifaceName = t.subComponent
      ? `${comp.name}${t.subComponent.replace(/\./g, '')}Props`
      : `${comp.name}Props`
    lines.push(`interface ${ifaceName} {`)
    for (const r of t.rows) {
      const propName = r.prop.trim()
      const typeStr = r.type ? r.type.replace(/`/g, '').trim() : 'any'
      const desc = r.desc ? r.desc.trim() : ''
      const def =
        r.default && r.default !== '-' ? `default: ${r.default.trim()}` : ''
      const metaComment = [desc, def].filter(Boolean).join('; ')
      lines.push(
        `  ${propName}?: ${typeStr};${metaComment ? ` // ${metaComment}` : ''}`
      )
    }
    lines.push(`}`)
  }
  if (comp.tokens && comp.tokens.length) {
    lines.push(`// Tokens: ${comp.tokens.map((t) => t.cssVar).join(', ')}`)
  }
  return lines.join('\n')
}

export function runInfo(args: InfoArgs): void {
  const { meta, versionInfo } = resolveContext(args.config, args.nutuiVersion)
  const comp = resolveOrExit(args.config, meta, args.component)
  const tables = comp.api?.tables ?? []
  const propTables = tables.filter((t) => t.kind === 'props')

  if (args.dense) {
    const denseJson = {
      id: comp.id,
      name: comp.name,
      cName: comp.cName,
      version: comp.version,
      interfaces: propTables.map((t) => ({
        name: t.subComponent
          ? `${comp.name}${t.subComponent.replace(/\./g, '')}Props`
          : `${comp.name}Props`,
        props: Object.fromEntries(
          t.rows.map((r) => [
            r.prop,
            { type: r.type, default: r.default, desc: r.desc },
          ])
        ),
      })),
      tokens: comp.tokens?.map((t) => t.cssVar) ?? [],
    }

    output(args.format, denseJson, () => renderDenseInfo(comp, propTables), {
      header: versionHeaderText(args.config, versionInfo),
      meta: versionMeta(versionInfo),
    })
    return
  }

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

  output(
    args.format,
    jsonData,
    () => {
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
    },
    {
      header: versionHeaderText(args.config, versionInfo),
      meta: versionMeta(versionInfo),
    }
  )
}
