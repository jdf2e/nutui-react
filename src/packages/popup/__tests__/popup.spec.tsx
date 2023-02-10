import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Popup } from '../popup'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

test('should change z-index when using z-index prop', () => {
  const { container } = render(
    <>
      <Popup visible zIndex={99} />
    </>
  )

  const element = container.querySelector('.nut-popup') as HTMLElement
  expect(element.style.zIndex).toEqual('99')
})

test('should change animation duration when using duration prop', () => {
  const { container } = render(
    <>
      <Popup visible duration={12} />
    </>
  )

  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  expect(overlay.style.animationDuration).toEqual('12s')
})

test('prop overlay-class test', async () => {
  const { container } = render(
    <>
      <Popup visible overlayClass="testclas" />
    </>
  )
  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  expect(overlay).toHaveClass('testclas')
})

test('prop overlay-style test', async () => {
  const { container } = render(
    <>
      <Popup visible overlayStyle={{ color: 'red' }} />
    </>
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
  const { container } = render(
    <>
      <Popup visible overlay={false} />
    </>
  )

  const overlay = container.querySelectorAll('.nut-overlay') as NodeListOf<Node>
  expect(overlay.length).toBe(0)
})

test('prop close-on-click-overlay test', async () => {
  const { container } = render(
    <>
      <Popup visible closeOnClickOverlay={false} />
    </>
  )
  fireEvent.click(container)
  const overlay = container.querySelector('.nut-overlay') as HTMLElement
  expect(overlay.style.display).toEqual('')
})

test('pop from top', () => {
  const { container } = render(
    <>
      <Popup visible position="top" />
    </>
  )
  const pop = container.querySelector('.nut-popup-top') as HTMLElement
  expect(pop).toBeTruthy()
})

test('pop from bottom', () => {
  const { container } = render(
    <>
      <Popup visible position="bottom" />
    </>
  )
  const pop = container.querySelector('.nut-popup-bottom') as HTMLElement
  expect(pop).toBeTruthy()
})

test('pop from left', () => {
  const { container } = render(
    <>
      <Popup visible position="left" />
    </>
  )
  const pop = container.querySelector('.nut-popup-left') as HTMLElement
  expect(pop).toBeTruthy()
})

test('pop from right', () => {
  const { container } = render(
    <>
      <Popup visible position="right" />
    </>
  )
  const pop = container.querySelector('.nut-popup-right') as HTMLElement
  expect(pop).toBeTruthy()
})

test('should render close icon when using closeable prop', () => {
  const { container } = render(
    <>
      <Popup visible closeable />
    </>
  )
  const closeIcon = container.querySelector(
    '.nut-popup__close-icon'
  ) as HTMLElement
  expect(closeIcon).toBeTruthy()
})

test('should render correct close icon when using close-icon prop', () => {
  const { container } = render(
    <>
      <Popup visible closeable closeIcon="success" />
    </>
  )

  const closeIcon = container.querySelector(
    '.nut-popup__close-icon'
  ) as HTMLElement
  expect(closeIcon.innerHTML).toMatchSnapshot()
})

test('should have "van-popup--round" class when setting the round prop', () => {
  const { container } = render(
    <>
      <Popup visible round />
    </>
  )

  const round = container.querySelector('.round') as HTMLElement
  expect(round).toBeTruthy()
})

test('should allow to using teleport prop', () => {
  render(
    <>
      <Popup visible />
    </>
  )
  expect(document.body.querySelector('.nut-popup')).toBeTruthy()
})

test('event click test', async () => {
  const { container } = render(
    <>
      <Popup visible closeOnClickOverlay />
    </>
  )
  const overlay = container.querySelector('.nut-overlay') as Element
  await fireEvent.click(overlay)
  expect(overlay).toHaveClass('hidden-render')
})

test('event click-close-icon test', () => {
  const onClickCloseIcon = jest.fn()
  const { container } = render(
    <>
      <Popup visible closeable onClickCloseIcon={onClickCloseIcon} />
    </>
  )
  const closeIcon = container.querySelector(
    '.nut-popup__close-icon'
  ) as HTMLElement
  const overlay = container.querySelector('.nut-overlay') as Element
  fireEvent.click(closeIcon)
  expect(onClickCloseIcon).toBeCalled()
  expect(overlay).toHaveClass('hidden-render')
})

test('should emit open event when prop visible is set to true', () => {
  const onOpen = jest.fn()
  const { rerender } = render(
    <>
      <Popup visible={false} onOpen={onOpen} />
    </>
  )

  rerender(
    <>
      <Popup visible onOpen={onOpen} />
    </>
  )

  expect(onOpen).toBeCalled()
})

test('event click-overlay test', async () => {
  const onClickOverlay = jest.fn()
  const { container } = render(
    <>
      <Popup visible onClickOverlay={onClickOverlay} />
    </>
  )

  const overlay = container.querySelector('.nut-overlay') as Element
  fireEvent.click(overlay)
  expect(onClickOverlay).toBeCalled()
})
