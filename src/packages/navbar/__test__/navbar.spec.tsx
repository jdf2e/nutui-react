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

test('should add left padding to title when there is no left, back and title', () => {
  const { container } = render(<NavBar>2级楼层</NavBar>)
  expect(container.querySelectorAll('.nut-navbar-title')[0]).toHaveClass(
    'nut-navbar-title-padding-left'
  )
})

test('should not add left padding to title when left, back or title exist', () => {
  const { container } = render(
    <NavBar left={<span>left</span>}>2级楼层</NavBar>
  )
  expect(container.querySelectorAll('.nut-navbar-title')[0]).not.toHaveClass(
    'nut-navbar-title-padding-left'
  )

  const { container: backContainer } = render(
    <NavBar back="返回">2级楼层</NavBar>
  )
  expect(
    backContainer.querySelectorAll('.nut-navbar-title')[0]
  ).not.toHaveClass('nut-navbar-title-padding-left')

  const { container: titleContainer } = render(<NavBar title="页面标题" />)
  expect(
    titleContainer.querySelectorAll('.nut-navbar-title')[0]
  ).not.toHaveClass('nut-navbar-title-padding-left')
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

test('should render sub bar below the title row when using subBar prop', () => {
  const { container } = render(
    <NavBar subBar={<span>二级楼层</span>}>订单详情</NavBar>
  )
  const root = container.firstChild as HTMLDivElement
  const subBar = root.querySelectorAll('.nut-navbar-subbar')
  expect(subBar.length).toBe(1)
  expect(subBar[0].innerHTML).toContain('<span>二级楼层</span>')
  expect(subBar[0]).toBe(root.lastElementChild)
  const title = root.querySelector('.nut-navbar-title') as HTMLDivElement
  expect(
    title.compareDocumentPosition(subBar[0]) & Node.DOCUMENT_POSITION_FOLLOWING
  ).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
})

test('should add has-subbar class to root when using subBar prop', () => {
  const { container } = render(
    <NavBar subBar={<span>二级楼层</span>}>订单详情</NavBar>
  )
  expect(container.firstChild).toHaveClass('nut-navbar-has-subbar')
})

test('should not render sub bar when subBar is not passed', () => {
  const { container } = render(<NavBar>订单详情</NavBar>)
  expect(container.firstChild).not.toHaveClass('nut-navbar-has-subbar')
  expect(container.querySelectorAll('.nut-navbar-subbar').length).toBe(0)
})

test('should forward id and other native attributes to root node', () => {
  const { container } = render(
    <NavBar id="nav-bar" aria-label="导航栏" data-testid="navbar">
      订单详情
    </NavBar>
  )
  const root = container.firstChild as HTMLDivElement
  expect(root).toHaveAttribute('id', 'nav-bar')
  expect(root).toHaveAttribute('aria-label', '导航栏')
  expect(root).toHaveAttribute('data-testid', 'navbar')
})
