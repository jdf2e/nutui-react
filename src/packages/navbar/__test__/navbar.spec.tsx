import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { NavBar } from '../navbar'

test('should render left slot correctly', () => {
  const { container } = render(
    <NavBar title="订单详情" leftShow leftText="返回">
      <span slot="left">left</span>
    </NavBar>
  )
  expect(
    container.querySelectorAll('.nut-navbar__left')[0].innerHTML
  ).toContain('<span slot="left">left</span>')
})

test('should render right slot correctly', () => {
  const { container } = render(
    <NavBar title="订单详情" leftShow leftText="返回">
      <span slot="right">right</span>
    </NavBar>
  )
  expect(
    container.querySelectorAll('.nut-navbar__right')[0].innerHTML
  ).toContain('<span slot="right">right</span>')
})

test('should render title slot correctly', () => {
  const { container } = render(
    <NavBar title="订单详情" leftShow leftText="返回">
      <span slot="content">content</span>
    </NavBar>
  )
  expect(
    container.querySelectorAll('.nut-navbar__title')[0].innerHTML
  ).toContain('<span slot="content">content</span>')
})

test('should left-text', () => {
  const { container } = render(
    <NavBar title="订单详情" leftShow leftText="back" />
  )
  expect(
    container.querySelectorAll('.nut-navbar__left .nut-navbar__text')[0]
      .innerHTML
  ).toBe('back')
})

test('should desc', () => {
  const { container } = render(<NavBar title="订单详情" desc="desc" />)
  expect(
    container.querySelectorAll('.nut-navbar__right .nut-navbar__text')[0]
      .innerHTML
  ).toBe('desc')
})

test('should render placeholder element when using placeholder prop', () => {
  const { container } = render(<NavBar title="订单详情" fixed placeholder />)
  expect(
    container.querySelectorAll('.nut-navbar--placeholder')[0].innerHTML
  ).toMatchSnapshot()
})

test('should emit click-left event when clicking left text', () => {
  const onClickBack = jest.fn()
  const { container } = render(
    <NavBar title="订单详情" onClickBack={onClickBack} />
  )

  fireEvent.click(container.querySelectorAll('.nut-navbar__left')[0])
  expect(onClickBack).toBeCalled()
})

test('should emit click-right event when clicking right text', () => {
  const onClickRight = jest.fn()
  const { container } = render(
    <NavBar title="订单详情" onClickRight={onClickRight} />
  )

  fireEvent.click(container.querySelectorAll('.nut-navbar__right')[0])
  expect(onClickRight).toBeCalled()
})

test('should emit click-title event when clicking title content', () => {
  const onClickTitle = jest.fn()
  const { container } = render(
    <NavBar title="订单详情" onClickTitle={onClickTitle} />
  )

  fireEvent.click(container.querySelectorAll('.nut-navbar__title .title')[0])
  expect(onClickTitle).toBeCalled()
})

test('should emit click-icon event when clicking title icon', () => {
  const onClickIcon = jest.fn()
  const { container } = render(
    <NavBar title="订单详情" titIcon="locationg3" onClickIcon={onClickIcon} />
  )

  fireEvent.click(container.querySelectorAll('.nut-navbar__title div')[1])
  expect(onClickIcon).toBeCalled()
})

test('should change z-index when using z-index prop', () => {
  const { container } = render(<NavBar title="订单详情" zIndex="100" />)
  expect((container.firstChild as HTMLDivElement).style.zIndex).toBe('100')
})
