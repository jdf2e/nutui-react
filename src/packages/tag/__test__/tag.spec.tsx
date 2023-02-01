import * as React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Tag, TagType } from '../tag'

test('color test', () => {
  const state = {
    color: 'rgb(250, 104, 93)',
  }
  const { container } = render(<Tag color={state.color}>TEST</Tag>)
  expect(container.querySelector('.nut-tag--default')).toHaveAttribute(
    'style',
    'background: rgb(250, 104, 93);'
  )
})
test('type test', () => {
  const state: {
    type: TagType
  } = {
    type: 'primary',
  }
  const { container } = render(<Tag type={state.type}>TEST</Tag>)
  if (container.firstChild) {
    expect(container).toMatchSnapshot()
  }
})

test('plain test', () => {
  const state = {
    plain: true,
  }
  const { container } = render(<Tag plain={state.plain}>TEST</Tag>)
  const el = container.querySelectorAll('.nut-tag--plain').length
  expect(el > 0).toBe(true)
})

test('color & plain test', () => {
  const state = {
    color: 'rgb(250, 104, 93)',
  }
  const { container } = render(
    <Tag color={state.color} plain>
      TEST
    </Tag>
  )
  expect(container.querySelector('.nut-tag--plain')).toHaveAttribute(
    'style',
    'color: rgb(250, 104, 93); background: rgb(255, 255, 255); border-color: rgb(250, 104, 93);'
  )
})

test('round test', () => {
  const state = {
    round: true,
  }
  const { container } = render(<Tag round={state.round}>TEST</Tag>)
  const el: any = container.querySelectorAll('.nut-tag--round').length
  expect(el > 0).toBe(true)
})

test('mark test', () => {
  const state = {
    mark: true,
  }
  const { container } = render(<Tag mark={state.mark}>TEST</Tag>)
  const el: any = container.querySelectorAll('.nut-tag--mark')
  expect(el.length > 0).toBe(true)
})

test('closeable && onClose  test', () => {
  const state = {
    closeable: true,
  }
  const handleClose = jest.fn()
  const { container } = render(
    <>
      <h1 className="text">0</h1>
      <Tag closeable={state.closeable} onClose={handleClose}>
        TEST
      </Tag>
    </>
  )
  const el: any = container.querySelectorAll('.nut-tag--close')[0]
  const icon: any = el.childNodes[1]
  fireEvent.click(icon)
  expect(el && el.length > 0).toBe(false)
  expect(handleClose).toBeCalled()
})

test('emit click event', () => {
  const testClick = jest.fn()
  function tree() {
    return render(
      <Tag data-testid="tag-click" onClick={() => testClick()} prefixCls="test">
        TEST
      </Tag>
    )
  }
  const { container } = tree()
  const el: any = container.querySelector('test')
  if (el) {
    fireEvent.click(el)
    expect(testClick).toBeCalled()
  }
})
