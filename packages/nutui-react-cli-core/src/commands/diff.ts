// diff <v1> <v2> [component] —— 跨版本 Props 差异比对。
// 与其它命令不同：需要同时加载两个版本的快照，故绕过只解析单版本的 resolveContext，
// 直接用 resolveSnapshotDir + loadMetaByDir 各加载一份，再交给 diff-compute 纯函数比对。
import { loadMetaByDir, resolveComponent, resolveSnapshotDir, suggestComponents } from '../data.js'
import { output, renderTable } from '../format.js'
import { diffMeta, type ComponentDiff } from './diff-compute.js'
import type { OutputFormat } from './_shared.js'
import type { CliConfig } from '../config.js'

export interface DiffArgs {
  config: CliConfig
  v1: string
  v2: string
  component?: string
  format: OutputFormat
}

function fail(msg: string): never {
  process.stderr.write(`${msg}\n`)
  process.exit(1)
}

export function runDiff(args: DiffArgs): void {
  const dirA = resolveSnapshotDir(args.config.dataDir, args.v1)
  const dirB = resolveSnapshotDir(args.config.dataDir, args.v2)
  const metaA = loadMetaByDir(dirA)
  const metaB = loadMetaByDir(dirB)

  // 组件名 → id：以 v2（较新版本）为准解析；未命中给 did-you-mean。
  let componentId: string | undefined
  if (args.component) {
    const comp = resolveComponent(metaB, args.component) ?? resolveComponent(metaA, args.component)
    if (!comp) {
      const sug = suggestComponents(metaB, args.component)
      fail(
        `未找到组件「${args.component}」。${sug.length ? ` 你是否想找：${sug.join(' / ')}？` : ''}`
      )
    }
    componentId = comp.id
  }

  const diffs = diffMeta(metaA, metaB, componentId)

  const jsonData = {
    v1: metaA.libVersion,
    v2: metaB.libVersion,
    component: args.component ?? null,
    changedComponentCount: diffs.length,
    components: diffs.map((d) => ({
      name: d.name,
      added: d.added,
      removed: d.removed,
      changed: d.changed,
    })),
  }

  output(
    args.format,
    jsonData,
    () => renderText(metaA.libVersion, metaB.libVersion, diffs, args.component),
    { header: '', meta: { v1: metaA.libVersion, v2: metaB.libVersion } }
  )
}

function renderText(
  v1: string,
  v2: string,
  diffs: ComponentDiff[],
  component: string | undefined
): string {
  const head = `NutUI Props 差异：v${v1} → v${v2}`
  if (!diffs.length) {
    return `${head}\n\n${component ? `组件 ${component} 在两版之间无 Props 差异。` : '两版之间无 Props 级差异。'}`
  }

  const blocks: string[] = [head]
  for (const d of diffs) {
    const lines: string[] = [`▍${d.name}`]
    if (d.added.length) {
      lines.push('  新增：')
      lines.push(
        indent(renderTable(['属性', '类型', '默认值'], d.added.map((r) => [r.prop, r.type, r.default])))
      )
    }
    if (d.removed.length) {
      lines.push('  移除：')
      lines.push(
        indent(renderTable(['属性', '类型', '默认值'], d.removed.map((r) => [r.prop, r.type, r.default])))
      )
    }
    if (d.changed.length) {
      lines.push('  变更：')
      const rows = d.changed.map((c) => [
        c.prop,
        c.typeFrom !== undefined ? `${c.typeFrom} → ${c.typeTo}` : '—',
        c.defaultFrom !== undefined ? `${c.defaultFrom} → ${c.defaultTo}` : '—',
      ])
      lines.push(indent(renderTable(['属性', '类型', '默认值'], rows)))
    }
    blocks.push(lines.join('\n'))
  }
  return blocks.join('\n\n')
}

function indent(s: string): string {
  return s
    .split('\n')
    .map((l) => `    ${l}`)
    .join('\n')
}
