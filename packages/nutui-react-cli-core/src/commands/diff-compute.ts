// 跨版本 API 差异比对：给定两份 meta，逐组件比对 Props 表，找出 added / removed / changed。
// 纯函数，不碰 IO，便于单测。diff 命令负责加载两版快照后调用它。
import type { ApiRow, ApiTable, Component, Meta } from '../types.js'

export interface RowChange {
  prop: string
  // 变化维度：type 或 default 变了就记，各记 旧→新
  typeFrom?: string
  typeTo?: string
  defaultFrom?: string
  defaultTo?: string
}

export interface ComponentDiff {
  name: string
  // v2 相对 v1 新增的 Props（{prop, desc, type, default}）
  added: ApiRow[]
  // v2 相对 v1 移除的 Props
  removed: ApiRow[]
  // 两版都在、但 type / default 有变化
  changed: RowChange[]
}

// 把组件的所有 props 表拍平成 prop → row（同名 prop 以先出现者为准；子组件表也并入）。
function flattenProps(comp: Component | undefined): Map<string, ApiRow> {
  const map = new Map<string, ApiRow>()
  if (!comp) return map
  const tables: ApiTable[] = comp.api?.tables ?? []
  for (const t of tables) {
    if (t.kind !== 'props') continue
    for (const r of t.rows) {
      // 子组件表用 "Sub.prop" 作 key，避免与主表同名 prop 混淆
      const key = t.subComponent ? `${t.subComponent}.${r.prop}` : r.prop
      if (!map.has(key)) map.set(key, r)
    }
  }
  return map
}

// 比对单个组件在两版之间的 Props 差异。
export function diffComponent(
  name: string,
  v1: Component | undefined,
  v2: Component | undefined
): ComponentDiff {
  const a = flattenProps(v1)
  const b = flattenProps(v2)

  const added: ApiRow[] = []
  const removed: ApiRow[] = []
  const changed: RowChange[] = []

  for (const [key, row] of b) {
    if (!a.has(key)) added.push(row)
  }
  for (const [key, row] of a) {
    if (!b.has(key)) removed.push(row)
  }
  for (const [key, ra] of a) {
    const rb = b.get(key)
    if (!rb) continue
    const c: RowChange = { prop: key }
    let dirty = false
    if ((ra.type ?? '') !== (rb.type ?? '')) {
      c.typeFrom = ra.type
      c.typeTo = rb.type
      dirty = true
    }
    if ((ra.default ?? '') !== (rb.default ?? '')) {
      c.defaultFrom = ra.default
      c.defaultTo = rb.default
      dirty = true
    }
    if (dirty) changed.push(c)
  }

  return { name, added, removed, changed }
}

// 比对两份 meta 的所有组件（或指定单组件）。返回有差异的组件列表。
export function diffMeta(
  metaA: Meta,
  metaB: Meta,
  componentId?: string
): ComponentDiff[] {
  const ids = componentId
    ? [componentId.toLowerCase()]
    : [...new Set([...Object.keys(metaA.components), ...Object.keys(metaB.components)])].sort()

  const out: ComponentDiff[] = []
  for (const id of ids) {
    const ca = metaA.components[id]
    const cb = metaB.components[id]
    const name = cb?.name ?? ca?.name ?? id
    const d = diffComponent(name, ca, cb)
    if (d.added.length || d.removed.length || d.changed.length) out.push(d)
  }
  return out
}
