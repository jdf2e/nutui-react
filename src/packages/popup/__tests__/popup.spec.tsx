import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Popup } from '../popup'

test('should change z-index when using z-index prop', () => {
  const { container } = render(<Popup visible zIndex={99} />)
  const element = container.querySelector('.nut-popup') as HTMLElement
  expect(element.style.zIndex).toEqual('99')
})

test('prop overlay-class test', async () => {
  const { container } = render(<Popup visible overlayClassName="testclas" />)
  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  expect(overlay).toHaveClass('testclas')
})

test('prop overlay-style test', async () => {
  const { container } = render(
    <Popup visible overlayStyle={{ color: 'red' }} />
  )
  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  expect(overlay).toHaveStyle({
    color: 'red',
  })
})

test('should lock scroll when showed', async () => {
  const { rerender } = render(<Popup visible={false} />)
  rerender(<Popup visible />)
  expect(document.body.classList.contains('nut-overflow-hidden')).toBe(true)
})

test('should not render overlay when overlay prop is false', () => {
  const { container } = render(<Popup visible overlay={false} />)
  const overlay = container.querySelectorAll('.nut-overlay') as NodeListOf<Node>
  expect(overlay.length).toBe(0)
})

test('prop close-on-click-overlay test', async () => {
  const { container } = render(<Popup visible closeOnOverlayClick={false} />)
  fireEvent.click(container)
  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  expect(overlay.style.display).toEqual('')
})

test('pop from top', () => {
  const { container } = render(<Popup visible position="top" />)
  const pop = container.querySelector('.nut-popup-top') as HTMLElement
  expect(pop).toBeTruthy()
})

test('pop from bottom', () => {
  const { container } = render(<Popup visible position="bottom" />)
  const pop = container.querySelector('.nut-popup-bottom') as HTMLElement
  expect(pop).toBeTruthy()
  expect(pop).toHaveClass('nut-popup-round')
})

test('pop from left', () => {
  const { container } = render(<Popup visible position="left" />)
  const pop = container.querySelector('.nut-popup-left') as HTMLElement
  expect(pop).toBeTruthy()
})

test('pop from right', () => {
  const { container } = render(<Popup visible position="right" />)
  const pop = container.querySelector('.nut-popup-right') as HTMLElement
  expect(pop).toBeTruthy()
})

test('should render close icon when using closeable prop', () => {
  const { container } = render(<Popup visible closeable />)
  const closeIcon = container.querySelector(
    '.nut-popup-title-right'
  ) as HTMLElement
  expect(closeIcon).toBeTruthy()
})

test('should have "nut-popup-round" class when setting the round prop', () => {
  const { container } = render(<Popup visible round />)
  const round = container.querySelector('.nut-popup-round') as HTMLElement
  expect(round).toBeTruthy()
})

test('should allow to using portal prop', () => {
  render(<Popup visible />)
  expect(document.body.querySelector('.nut-popup')).toBeTruthy()
})

test('event click test', async () => {
  const { container } = render(<Popup visible closeOnOverlayClick />)
  const overlay = container.querySelector('.nut-overlay') as Element
  await fireEvent.click(overlay)
  expect(overlay).toHaveClass('nut-overlay-slide-exit')
})

test('event click-title-right icon test', () => {
  const onCloseIconClick = vi.fn().mockReturnValueOnce(true)
  const { container } = render(
    <Popup visible closeable onCloseIconClick={() => onCloseIconClick()} />
  )
  const closeIcon = container.querySelector(
    '.nut-popup-title-right'
  ) as HTMLElement
  const overlay = container.querySelector('.nut-overlay') as Element
  fireEvent.click(closeIcon)
  expect(onCloseIconClick).toBeCalled()
  expect(overlay).toHaveClass('nut-overlay-slide-exit')
})

test('event click-title-right icon and keep overlay test ', () => {
  const onCloseIconClick = vi.fn()
  const { container } = render(
    <Popup visible closeable onCloseIconClick={onCloseIconClick} />
  )
  const closeIcon = container.querySelector(
    '.nut-popup-title-right'
  ) as HTMLElement
  const overlay = container.querySelector('.nut-overlay') as Element
  fireEvent.click(closeIcon)
  expect(onCloseIconClick).toBeCalled()
  const overlay2 = container.querySelector('.hidden-render') as Element
  expect(overlay2).toBeNull()
})

test('should emit open event when prop visible is set to true', () => {
  const onOpen = vi.fn()
  const { rerender } = render(<Popup visible={false} onOpen={onOpen} />)
  rerender(<Popup visible onOpen={onOpen} />)
  expect(onOpen).toBeCalled()
})

test('event click-overlay test', async () => {
  const onOverlayClick = vi.fn()
  const { container } = render(
    <Popup visible onOverlayClick={onOverlayClick} />
  )
  const overlay = container.querySelector('.nut-overlay') as Element
  fireEvent.click(overlay)
  expect(onOverlayClick).toBeCalled()
})
