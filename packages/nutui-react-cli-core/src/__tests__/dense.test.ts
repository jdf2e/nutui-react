import { describe, expect, it } from 'vitest'
import {
  renderDenseInfo,
  sanitizePropType,
  getInterfaceName,
} from '../commands/info.js'
import { renderDenseTokens } from '../commands/token.js'
import { renderDenseList } from '../commands/list.js'
import type { Component, ApiTable, Token, Meta } from '../types.js'

describe('dense mode formatting', () => {
  it('sanitizePropType correctly converts string enums and preserves TS types', () => {
    expect(
      sanitizePropType(
        '`default` | `primary` | `warning` | `danger` | `success` | `info`'
      )
    ).toBe("'default' | 'primary' | 'warning' | 'danger' | 'success' | 'info'")
    expect(sanitizePropType('`normal` | `48` | `44`')).toBe(
      "'normal' | 48 | 44"
    )
    expect(sanitizePropType('`string` | `object`')).toBe('string | object')
    expect(sanitizePropType('`boolean` | `ReactNode`')).toBe(
      'boolean | ReactNode'
    )
    expect(sanitizePropType('(value: string) => void')).toBe(
      '(value: string) => void'
    )
  })

  it('getInterfaceName disambiguates sourceComponent and qualifiers', () => {
    const comp: Component = {
      id: 'icon',
      name: 'Icon',
      cName: '图标',
      version: '4.0.0',
      category: { name: '通用', enName: 'common' },
      taro: false,
      v15: true,
      v16: true,
      docs: { h5: null, enUS: null, zhTW: null, taro: null },
      demos: { h5: [], taro: [] },
      api: { tables: [] },
      tokens: [],
    }
    const tableIcon: ApiTable = {
      name: 'Props',
      kind: 'props',
      sourceComponent: 'Icon',
      subComponent: null,
      rows: [],
    }
    const tableIconFont: ApiTable = {
      name: 'Props',
      kind: 'props',
      sourceComponent: 'IconFont',
      subComponent: null,
      rows: [],
    }
    const used = new Set<string>()
    expect(getInterfaceName(comp, tableIcon, used)).toBe('IconProps')
    expect(getInterfaceName(comp, tableIconFont, used)).toBe('IconFontProps')

    // Test qualifier in table name
    const noticeBarComp = { ...comp, name: 'NoticeBar' }
    const tableVertical: ApiTable = {
      name: 'Props（direction=vertical）',
      kind: 'props',
      sourceComponent: 'NoticeBar',
      subComponent: null,
      rows: [],
    }
    expect(getInterfaceName(noticeBarComp, tableVertical)).toBe(
      'NoticeBarVerticalProps'
    )
  })

  it('renderDenseInfo formats TypeScript interface cleanly', () => {
    const comp: Component = {
      id: 'button',
      name: 'Button',
      cName: '按钮',
      version: '4.0.0',
      category: { name: '基础组件', enName: 'base' },
      taro: false,
      v15: true,
      v16: true,
      docs: { h5: null, enUS: null, zhTW: null, taro: null },
      demos: { h5: [], taro: [] },
      api: { tables: [] },
      tokens: [
        {
          cssVar: '--nutui-button-default-color',
          scssVar: '$btn-color',
          default: '#333',
        },
      ],
    }

    const tables: ApiTable[] = [
      {
        name: 'Props',
        kind: 'props',
        sourceComponent: 'Button',
        subComponent: null,
        rows: [
          { prop: 'type', desc: '类型', type: '`string`', default: 'default' },
          {
            prop: 'disabled',
            desc: '是否禁用',
            type: '`boolean`',
            default: 'false',
          },
        ],
      },
      {
        name: 'Props',
        kind: 'props',
        sourceComponent: 'Button.Group',
        subComponent: 'Group',
        rows: [{ prop: 'gap', desc: '间距', type: '`number`', default: '-' }],
      },
    ]

    const result = renderDenseInfo(comp, tables)

    expect(result).toContain('// Button 按钮 (v4.0.0)')
    expect(result).toContain('interface ButtonProps {')
    expect(result).toContain('  type?: string; // 类型; default: default')
    expect(result).toContain(
      '  disabled?: boolean; // 是否禁用; default: false'
    )
    expect(result).toContain('interface ButtonGroupProps {')
    expect(result).toContain('  gap?: number; // 间距')
    expect(result).toContain('// Tokens: --nutui-button-default-color')
  })

  it('renderDenseTokens outputs compact CSS variable lines', () => {
    const tokens: Token[] = [
      {
        cssVar: '--nutui-color-primary',
        scssVar: '$primary',
        default: '#fa2c19',
      },
      {
        cssVar: '--nutui-font-size-base',
        scssVar: '$font-size',
        default: '14px',
      },
    ]

    const result = renderDenseTokens('全局 Token', tokens)
    expect(result).toContain('// 全局 Token')
    expect(result).toContain('--nutui-color-primary; /* default: #fa2c19 */')
    expect(result).toContain('--nutui-font-size-base; /* default: 14px */')
  })

  it('renderDenseList outputs compact category lists', () => {
    const meta = {
      components: {
        button: { id: 'button', name: 'Button' },
        cell: { id: 'cell', name: 'Cell' },
      },
    } as unknown as Meta

    const categories = [
      {
        name: '基础组件',
        enName: 'base',
        components: ['button', 'cell'],
      },
    ]

    const result = renderDenseList(categories, meta)
    expect(result).toBe('[基础组件 (base)]: Button, Cell')
  })
})
