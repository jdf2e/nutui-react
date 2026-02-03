import * as React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Popup } from '../popup'

test('renders without crashing', () => {
  render(<Popup visible>Test Content</Popup>)
  expect(screen.getByText('Test Content')).toBeInTheDocument()
})

test('opens and closes correctly', () => {
  const { rerender } = render(<Popup visible={false}>Test Content</Popup>)

  // Initially, it should not be visible
  expect(screen.queryByText('Test Content')).not.toBeInTheDocument()

  // Rerender with visible true
  rerender(<Popup visible>Test Content</Popup>)
  expect(screen.getByText('Test Content')).toBeInTheDocument()
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

test('pop title', () => {
  const { container } = render(<Popup title="标题" visible position="bottom" />)
  const title = container.querySelector('.nut-popup-title-title') as HTMLElement
  expect(title).toHaveTextContent('标题')
})

test('pop left', () => {
  const { container } = render(<Popup left="返回" visible position="bottom" />)
  const title = container.querySelector('.nut-popup-title-left') as HTMLElement
  expect(title).toHaveTextContent('返回')
})

test('pop description', () => {
  const { container } = render(
    <Popup description="副标题" visible position="bottom" />
  )
  const title = container.querySelector(
    '.nut-popup-title-description'
  ) as HTMLElement
  expect(title).toHaveTextContent('副标题')
})

test('pop minHeight', () => {
  const { container } = render(
    <Popup minHeight="30%" visible position="bottom" />
  )
  const node = container.querySelector('.nut-popup') as HTMLElement
  expect(node).toHaveStyle({ minHeight: '30%' })
})

test('should render close icon when using closeable prop', () => {
  const { container } = render(<Popup visible closeable />)
  const closeIcon = container.querySelector(
    '.nut-popup-title-right'
  ) as HTMLElement
  expect(closeIcon).toBeTruthy()
})

test('should render close icon with custom closeAriaLabel', () => {
  const { container } = render(
    <Popup visible closeable closeAriaLabel="custom close label" />
  )
  const closeIcon = container.querySelector(
    '.nut-popup-title-right'
  ) as HTMLElement
  expect(closeIcon).toHaveAttribute('aria-label', 'custom close label')
})

test('should have "nut-popup-round" class when setting the round prop', () => {
  const { container } = render(<Popup visible round />)
  const round = container.querySelector('.nut-popup-round') as HTMLElement
  expect(round).toBeTruthy()
})

test('should allow to using portal prop', () => {
  render(<Popup visible portal={document.body} />)
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
  fireEvent.click(closeIcon)
  expect(onCloseIconClick).toBeCalled()
  const overlay2 = container.querySelector('.hidden-render') as Element
  expect(overlay2).toBeNull()
})

test('should emit open event when prop visible is set to true', async () => {
  const onOpen = vi.fn()
  const { rerender } = render(<Popup visible={false} onOpen={onOpen} />)
  rerender(
    <Popup visible onOpen={onOpen} closeOnOverlayClick>
      test
    </Popup>
  )
  await waitFor(() => expect(onOpen).toBeCalled())
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

test('pop destroyOnClose', () => {
  const onClose = vi.fn()
  const { container } = render(
    <Popup visible destroyOnClose onClose={onClose} />
  )
  const overlay = container.querySelector('.nut-overlay') as Element
  fireEvent.click(overlay)
  expect(onClose).toBeCalled()
})

test('handles touch events correctly', () => {
  const handleTouchStart = vi.fn()
  const handleTouchMove = vi.fn()
  const handleTouchEnd = vi.fn()

  render(
    <Popup
      visible
      resizable
      position="bottom"
      // minHeight="400px"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      Test Content
    </Popup>
  )

  const popup = document.body.querySelector('.nut-popup') as HTMLElement

  // Simulate touch events
  fireEvent.touchStart(popup, { touches: [{ pageY: 400 }] })
  expect(handleTouchStart).toHaveBeenCalled()

  fireEvent.touchMove(popup, { touches: [{ pageY: 50 }] })
  expect(handleTouchMove).toHaveBeenCalled()

  fireEvent.touchMove(popup, { touches: [{ pageY: 450 }] })
  expect(handleTouchMove).toHaveBeenCalled()

  fireEvent.touchEnd(popup)
  expect(handleTouchEnd).toHaveBeenCalled()
})
