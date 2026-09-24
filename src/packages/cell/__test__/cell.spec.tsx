import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cell } from '../cell'
import { Switch } from '../../switch/switch'

test('prop title extra description test', () => {
  const { container } = render(
    <>
      <Cell
        data-testid="prop"
        title="我是标题"
        description="我是描述"
        extra="描述文字"
      />
    </>
  )
  expect(container.querySelector('.nut-cell-title')?.innerHTML).toBe('我是标题')
  expect(container.querySelector('.nut-cell-description')?.innerHTML).toBe(
    '我是描述'
  )
  expect(container.querySelector('.nut-cell-extra')?.innerHTML).toBe('描述文字')
  expect(container).toMatchSnapshot()
})

test('prop ', () => {
  const { container } = render(
    <Cell title="URL 跳转" extra="https://m.jd.com/" />
  )
  expect(container.querySelector('.nut-cell-extra')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('emit click event', () => {
  const testClick = vi.fn()
  const { getByTestId } = render(
    <Cell data-testid="emit-click" onClick={() => testClick()} />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(testClick).toBeCalled()
})

test('slot default test', () => {
  const { container } = render(
    <Cell title={<div>自定义内容</div>} extra="描述文字" />
  )
  expect(container).toContainHTML('<div>自定义内容</div>')
  expect(container).toMatchSnapshot()
})

test('slot extra', () => {
  const { container } = render(
    <Cell title="Switch" extra={<Switch defaultChecked />} />
  )
  expect(container.querySelector('.nut-switch')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('icon renders before body', () => {
  const { container } = render(
    <Cell icon={<div className="custom-icon" />} title="我是标题" />
  )
  const cell = container.querySelector('.nut-cell') as HTMLElement
  expect(container.querySelector('.custom-icon')).toBeInTheDocument()
  expect(cell.children[0].className).toContain('nut-cell-icon')
  expect(cell.children[1].className).toContain('nut-cell-body')
  expect(container).toMatchSnapshot()
})

test('inline layout when content absent', () => {
  const { container } = render(
    <Cell title="我是标题" description="我是描述" extra="描述文字" />
  )
  const cell = container.querySelector('.nut-cell') as HTMLElement
  const body = container.querySelector('.nut-cell-body') as HTMLElement
  expect(container.querySelector('.nut-cell-header')).not.toBeInTheDocument()
  expect(body.querySelector('.nut-cell-description')?.parentElement).toBe(body)
  expect(container.querySelector('.nut-cell-extra')?.parentElement).toBe(cell)
})

test('block layout when content provided', () => {
  const { container } = render(
    <Cell
      title="我是标题"
      description="我是描述"
      extra="辅助文案"
      content={<div className="custom-content">可替换内容</div>}
    />
  )
  const body = container.querySelector('.nut-cell-body') as HTMLElement
  expect(container.querySelector('.nut-cell-header')).toBeInTheDocument()
  // 说明文案与业务插槽在结构 B 中通栏，需与主信息左边界对齐
  expect(body.querySelector('.nut-cell-description')?.parentElement).toBe(body)
  expect(body.querySelector('.nut-cell-content')?.parentElement).toBe(body)
  expect(container.querySelector('.custom-content')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('align applies to header in block layout', () => {
  const { container } = render(
    <Cell align="center" title="我是标题" extra="描述文字" content={<div />} />
  )
  const cell = container.querySelector('.nut-cell') as HTMLElement
  const header = container.querySelector('.nut-cell-header') as HTMLElement
  expect(cell.style.alignItems).toBe('center')
  expect(header.style.alignItems).toBe('center')
})

test('children takes over rendering', () => {
  const { container } = render(
    <Cell
      icon={<div className="custom-icon" />}
      title="我是标题"
      content={<div />}
    >
      <div>自定义内容</div>
    </Cell>
  )
  expect(container.querySelector('.custom-icon')).not.toBeInTheDocument()
  expect(container.querySelector('.nut-cell-icon')).not.toBeInTheDocument()
  expect(container.querySelector('.nut-cell-title')).not.toBeInTheDocument()
  expect(container.querySelector('.nut-cell-content')).not.toBeInTheDocument()
  expect(container).toContainHTML('<div>自定义内容</div>')
})
