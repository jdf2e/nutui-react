import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { NavBar } from '../navbar'

test('should render left slot correctly', () => {
  const { container } = render(<NavBar left={<span>left</span>} />)
  expect(container.querySelectorAll('.nut-navbar-left')[0].innerHTML).toContain(
    '<span>left</span>'
  )
})

test('should render right slot correctly', () => {
  const { container } = render(<NavBar right={<span>right</span>} />)
  expect(
    container.querySelectorAll('.nut-navbar-right')[0].innerHTML
  ).toContain('<span>right</span>')
})

test('should render title slot correctly', () => {
  const { container } = render(
    <NavBar>
      <span>content</span>
    </NavBar>
  )
  expect(
    container.querySelectorAll('.nut-navbar-title')[0].innerHTML
  ).toContain('<span>content</span>')
})

test('should left-text', () => {
  const { container } = render(<NavBar left="back">订单详情</NavBar>)
  expect(container.querySelectorAll('.nut-navbar-left')[0].innerHTML).toBe(
    'back'
  )
})

test('should description', () => {
  const { container } = render(<NavBar right="description">订单详情</NavBar>)
  expect(container.querySelectorAll('.nut-navbar-right')[0].innerHTML).toBe(
    'description'
  )
})

test('should render placeholder element when using placeholder prop', () => {
  const { container } = render(
    <NavBar fixed placeholder>
      订单详情
    </NavBar>
  )
  expect(
    container.querySelectorAll('.nut-navbar-placeholder')[0].innerHTML
  ).toMatchSnapshot()
})

test('should emit click-back event when clicking back text', () => {
  const onBackClick = vi.fn()
  const { container } = render(
    <NavBar back="返回" onBackClick={onBackClick}>
      订单详情
    </NavBar>
  )

  fireEvent.click(container.querySelectorAll('.nut-navbar-left-back')[0])
  expect(onBackClick).toBeCalled()
})

test('should change z-index when using z-index prop', () => {
  const { container } = render(<NavBar zIndex="100">订单详情</NavBar>)
  expect((container.firstChild as HTMLDivElement).style.zIndex).toBe('100')
})
