import { describe, expect, it } from 'vitest'
import { diffComponent, diffMeta } from '../commands/diff-compute.js'
import type { ApiTable, Component, Meta } from '../types.js'

// 造一个只含 props 表的最小 Component。
function comp(id: string, name: string, rows: ApiTable['rows'], subComponent: string | null = null): Component {
  return {
    id,
    name,
    cName: name,
    version: '0',
    category: { name: '', enName: '' },
    taro: false,
    v15: false,
    v16: false,
    docs: { h5: null, enUS: null, zhTW: null, taro: null },
    demos: { h5: [], taro: [] },
    api: {
      tables: [{ name: 'Props', kind: 'props', sourceComponent: id, subComponent, rows }],
    },
    tokens: [],
  }
}

function meta(components: Record<string, Component>, libVersion = '0'): Meta {
  return {
    schemaVersion: '1',
    libVersion,
    componentCount: Object.keys(components).length,
    apiComponentCount: 0,
    categories: [],
    globalTokens: [],
    components,
  }
}

describe('diffComponent', () => {
  it('检测默认值与类型变更（Empty size/status 场景）', () => {
    const v1 = comp('empty', 'Empty', [
      { prop: 'size', desc: '', type: '`small` | `base`', default: 'base' },
      { prop: 'status', desc: '', type: '`empty` | `error`', default: 'empty' },
    ])
    const v2 = comp('empty', 'Empty', [
      { prop: 'size', desc: '', type: '`full` | `half`', default: 'half' },
      { prop: 'status', desc: '', type: '`network`', default: 'network' },
    ])
    const d = diffComponent('Empty', v1, v2)
    expect(d.added).toEqual([])
    expect(d.removed).toEqual([])
    expect(d.changed).toHaveLength(2)
    const size = d.changed.find((c) => c.prop === 'size')!
    expect(size).toMatchObject({ defaultFrom: 'base', defaultTo: 'half' })
    expect(size.typeFrom).toBe('`small` | `base`')
    expect(size.typeTo).toBe('`full` | `half`')
  })

  it('检测新增与移除的 prop', () => {
    const v1 = comp('x', 'X', [{ prop: 'old', desc: '', type: 'string', default: '' }])
    const v2 = comp('x', 'X', [{ prop: 'new', desc: '', type: 'string', default: '' }])
    const d = diffComponent('X', v1, v2)
    expect(d.added.map((r) => r.prop)).toEqual(['new'])
    expect(d.removed.map((r) => r.prop)).toEqual(['old'])
    expect(d.changed).toEqual([])
  })

  it('完全一致时无差异', () => {
    const rows = [{ prop: 'a', desc: '', type: 'string', default: '1' }]
    const d = diffComponent('X', comp('x', 'X', rows), comp('x', 'X', rows))
    expect(d.added).toEqual([])
    expect(d.removed).toEqual([])
    expect(d.changed).toEqual([])
  })

  it('组件仅在一版存在（v2 新增组件）：全部记为 added', () => {
    const v2 = comp('n', 'New', [{ prop: 'a', desc: '', type: 'string', default: '' }])
    const d = diffComponent('New', undefined, v2)
    expect(d.added).toHaveLength(1)
  })

  it('子组件表的 prop 以 Sub.prop 作 key，不与主表混淆', () => {
    const v1 = comp('x', 'X', [{ prop: 'value', desc: '', type: 'string', default: '' }], 'Item')
    const v2 = comp('x', 'X', [{ prop: 'value', desc: '', type: 'number', default: '' }], 'Item')
    const d = diffComponent('X', v1, v2)
    expect(d.changed[0].prop).toBe('Item.value')
  })
})

describe('diffMeta', () => {
  const metaA = meta({
    empty: comp('empty', 'Empty', [{ prop: 'size', desc: '', type: 's', default: 'base' }]),
    button: comp('button', 'Button', [{ prop: 'type', desc: '', type: 's', default: '' }]),
  }, '3.1.0')
  const metaB = meta({
    empty: comp('empty', 'Empty', [{ prop: 'size', desc: '', type: 's', default: 'half' }]),
    button: comp('button', 'Button', [{ prop: 'type', desc: '', type: 's', default: '' }]),
  }, '4.0.0')

  it('只返回有差异的组件（Button 无变化被过滤）', () => {
    const diffs = diffMeta(metaA, metaB)
    expect(diffs.map((d) => d.name)).toEqual(['Empty'])
  })

  it('指定组件只 diff 该组件', () => {
    const diffs = diffMeta(metaA, metaB, 'button')
    expect(diffs).toEqual([])
  })
})
