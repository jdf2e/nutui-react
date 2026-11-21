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

const PRIMITIVE_TYPES = new Set([
  'string',
  'number',
  'boolean',
  'any',
  'unknown',
  'never',
  'void',
  'null',
  'undefined',
  'symbol',
  'bigint',
  'object',
  'true',
  'false',
  'Function',
  'function',
  'Record',
  'Array',
  'Promise',
  'Date',
  'ReactNode',
  'ReactElement',
  'ReactChild',
  'CSSProperties',
  'HTMLElement',
  'HTMLDivElement',
  'Element',
  'JSX.Element',
])

function cleanTypeSegment(s: string): string {
  const trimmed = s.trim()
  if (!trimmed) return trimmed
  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
  ) {
    return trimmed
  }
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return trimmed
  }
  if (PRIMITIVE_TYPES.has(trimmed)) {
    return trimmed
  }
  if (
    /[\][<>()=>:.]/.test(trimmed) ||
    (trimmed[0] === trimmed[0].toUpperCase() &&
      /^[A-Z][a-zA-Z0-9_]*$/.test(trimmed))
  ) {
    return trimmed
  }
  if (/^[a-zA-Z0-9_-]+$/.test(trimmed)) {
    return `'${trimmed}'`
  }
  return trimmed
}

export function sanitizePropType(raw?: string): string {
  if (!raw) return 'any'
  let s = raw.trim().replace(/｜/g, '|')
  s = s.replace(/`([^`]+)`/g, (_, inner: string) => {
    const trimmedInner = inner.trim()
    if (trimmedInner.includes('|')) {
      return trimmedInner.split('|').map(cleanTypeSegment).join(' | ')
    }
    return cleanTypeSegment(trimmedInner)
  })
  if (s.includes('|')) {
    s = s.split('|').map(cleanTypeSegment).join(' | ')
  }
  return s
}

export function getInterfaceName(
  comp: Component,
  table: ApiTable,
  usedNames?: Set<string>
): string {
  let base: string
  if (table.subComponent) {
    const cleanSub = table.subComponent.replace(/[^a-zA-Z0-9]/g, '')
    if (cleanSub.toLowerCase().startsWith(comp.name.toLowerCase())) {
      base = `${cleanSub}Props`
    } else {
      base = `${comp.name}${cleanSub}Props`
    }
  } else if (table.sourceComponent && table.sourceComponent !== comp.name) {
    const cleanSource = table.sourceComponent.replace(/[^a-zA-Z0-9]/g, '')
    base = `${cleanSource}Props`
  } else if (table.name && table.name !== 'Props') {
    const match = table.name.match(/[(（](.*?)[)）]/)
    if (match) {
      let qualifier = match[1]
      if (qualifier.includes('=')) {
        qualifier = qualifier.split('=').pop() || qualifier
      }
      const cleanQualifier = qualifier.replace(/[^a-zA-Z0-9]/g, '')
      if (cleanQualifier) {
        const capitalized =
          cleanQualifier.charAt(0).toUpperCase() + cleanQualifier.slice(1)
        base = `${comp.name}${capitalized}Props`
      } else {
        base = `${comp.name}Props`
      }
    } else {
      base = `${comp.name}Props`
    }
  } else {
    base = `${comp.name}Props`
  }

  if (usedNames) {
    let candidate = base
    let counter = 2
    while (usedNames.has(candidate)) {
      candidate = `${base}${counter}`
      counter += 1
    }
    usedNames.add(candidate)
    return candidate
  }
  return base
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
  const usedNames = new Set<string>()
  for (const t of propTables) {
    const ifaceName = getInterfaceName(comp, t, usedNames)
    lines.push(`interface ${ifaceName} {`)
    for (const r of t.rows) {
      const propName = r.prop.trim()
      const typeStr = sanitizePropType(r.type)
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
    const usedNames = new Set<string>()
    const denseJson = {
      id: comp.id,
      name: comp.name,
      cName: comp.cName,
      version: comp.version,
      interfaces: propTables.map((t) => ({
        name: getInterfaceName(comp, t, usedNames),
        props: Object.fromEntries(
          t.rows.map((r) => [
            r.prop,
            {
              type: sanitizePropType(r.type),
              default: r.default,
              desc: r.desc,
            },
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
