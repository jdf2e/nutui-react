import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Space } from '../space'
import Button from '@/packages/button'

const prefixCls = 'nut-space'

test('should match snapshot', () => {
  const { container } = render(
    <Space>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
  expect(container).toMatchSnapshot()
})

test('render with props direction', () => {
  const { container } = render(
    <Space direction="vertical">
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
  const nutSpace = container.getElementsByClassName('nut-space')[0]
  expect(nutSpace).toHaveClass(`${prefixCls}-vertical`)
})

test('render with props align', () => {
  const { container } = render(
    <Space align="end">
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
  const nutSpace = container.getElementsByClassName('nut-space')[0]
  expect(nutSpace).toHaveClass(`${prefixCls}-align-end`)
})

test('render with props justify', () => {
  const { container } = render(
    <Space justify="center">
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
  const nutSpace = container.getElementsByClassName('nut-space')[0]
  expect(nutSpace).toHaveClass(`${prefixCls}-justify-center`)
})

test('render with props wrap', () => {
  const { container } = render(
    <Space wrap>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
      <Button>按钮5</Button>
      <Button>按钮6</Button>
    </Space>
  )
  const nutSpace = container.getElementsByClassName('nut-space')[0]
  expect(nutSpace).toHaveClass(`${prefixCls}-wrap`)
})
