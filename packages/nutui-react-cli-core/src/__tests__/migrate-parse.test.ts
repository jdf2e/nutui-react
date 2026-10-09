import { describe, expect, it } from 'vitest'
import { parseMigrationDoc, filterSections } from '../commands/migrate-parse.js'

const DOC = `# 从 v3 升级到 v4

本文档将帮助您升级。

## 升级步骤

1. 安装 v4

---

## 不兼容更新与兼容升级说明

### Toast (操作反馈)

- 默认 duration 由 2s 调整为 3s。

### Empty (反馈类)

> v4 不提供 v3 兼容。

- size 默认值由 base 调整为 half。

### Popover (反馈类)

- theme 默认值由 light 调整为 dark。
`

describe('parseMigrationDoc', () => {
  const parsed = parseMigrationDoc(DOC)

  it('抽取主标题', () => {
    expect(parsed.title).toBe('从 v3 升级到 v4')
  })

  it('intro 含升级步骤、且止于第一个 ### 之前', () => {
    expect(parsed.intro).toContain('## 升级步骤')
    expect(parsed.intro).toContain('安装 v4')
    expect(parsed.intro).not.toContain('### Toast')
  })

  it('切出全部组件段', () => {
    expect(parsed.sections.map((s) => s.component)).toEqual([
      'Toast',
      'Empty',
      'Popover',
    ])
  })

  it('解析组件分类', () => {
    expect(parsed.sections[0]).toMatchObject({
      component: 'Toast',
      category: '操作反馈',
    })
  })

  it('组件段 raw 含标题行与正文，不含下一段', () => {
    const empty = parsed.sections.find((s) => s.component === 'Empty')!
    expect(empty.raw).toContain('### Empty (反馈类)')
    expect(empty.raw).toContain('size 默认值由 base 调整为 half')
    expect(empty.raw).not.toContain('### Popover')
  })

  it('无 ### 段的文档：sections 空、intro 为全文', () => {
    const p = parseMigrationDoc('# 标题\n\n正文无组件段。')
    expect(p.sections).toEqual([])
    expect(p.intro).toContain('正文无组件段')
  })
})

describe('filterSections', () => {
  const { sections } = parseMigrationDoc(DOC)

  it('空 names 返回全部', () => {
    expect(filterSections(sections, [])).toHaveLength(3)
  })

  it('大小写不敏感过滤单组件', () => {
    const r = filterSections(sections, ['empty'])
    expect(r).toHaveLength(1)
    expect(r[0].component).toBe('Empty')
  })

  it('多组件过滤', () => {
    const r = filterSections(sections, ['Toast', 'Popover'])
    expect(r.map((s) => s.component)).toEqual(['Toast', 'Popover'])
  })

  it('未命中返回空', () => {
    expect(filterSections(sections, ['Button'])).toEqual([])
  })
})
