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
