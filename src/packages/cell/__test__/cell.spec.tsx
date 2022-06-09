import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cell } from '../cell'
import { Switch } from '../../switch/switch'

const classPrefix = `nut-avatar`

test('prop title desc subtitle', () => {
  const { getByTestId, container } = render(
    <>
      <Cell data-testid="prop" title="我是标题" subTitle="副标题描述" desc="描述文字" />
    </>
  )
  expect(container).toContainHTML(
    '<div class="nut-cell__title"><div class="nut-cell__maintitle">我是标题</div><div class="nut-cell__subtitle">副标题描述</div></div><div class="nut-cell__desc">描述文字</div>'
  )
  expect(getByTestId('prop')).toMatchSnapshot()
})

test('prop desc-text-align left', () => {
  const { container } = render(<Cell data-testid="prop" descTextAlign="left" desc="张三" />)
  expect(container.querySelector('.nut-cell__desc')).toHaveAttribute(
    'style',
    'text-align: left; flex: 1;'
  )
})

test('prop isLink', () => {
  const { container } = render(
    <Cell title="URL 跳转" desc="https://m.jd.com/" isLink url="https://m.jd.com/" />
  )
  expect(container.querySelector('.nut-cell__link')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('emit click event', () => {
  const testClick = jest.fn()
  const { getByTestId } = render(<Cell data-testid="emit-click" click={() => testClick()} />)
  fireEvent.click(getByTestId('emit-click'))
  expect(testClick).toBeCalled()
})

test('slot default test', () => {
  const { container } = render(
    <Cell title="我是标题" desc="描述文字">
      <div>自定义内容</div>
    </Cell>
  )
  expect(container).toContainHTML('<div>自定义内容</div>')
  expect(container).toMatchSnapshot()
})

test('slot extra', () => {
  const { container } = render(<Cell title="Switch" extra={<Switch checked />} />)
  expect(container.querySelector('.nut-switch')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('prop icon', () => {
  const { container } = render(<Cell title="姓名" icon="my" desc="张三" isLink />)
  expect(container.querySelector('.nut-icon-my')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
