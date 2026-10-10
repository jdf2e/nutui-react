import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Progress } from '../progress'

test('should render progress when use props', async () => {
  const { asFragment, container } = render(<Progress percent={100} />)
  expect(asFragment()).toMatchSnapshot()
})
test('should render different height and color when use color height props', async () => {
  const { container } = render(
    <Progress percent={50} color="blue" strokeWidth="20" />
  )
  const inner = container.querySelector('.nut-progress-inner')
  expect(inner?.getAttribute('style')).toBe(
    'width: 50%; background: blue; transition: width 300ms ease-in-out;'
  )
})

test('should show percent when use showText props', () => {
  const { container } = render(<Progress percent={30} showText />)
  const text = container.querySelector('.nut-progress-text')
  expect(text).toBeTruthy()
})
test('should render with custom style props', () => {
  const { container } = render(
    <Progress percent={50} borderRadius="8px" fontSize="16px" showText />
  )
  const inner = container.querySelector('.nut-progress-text')
  expect(inner).toHaveStyle({
    fontSize: '16px',
  })
  const outerDiv = container.querySelector('.nut-progress-outer')
  expect(outerDiv).toHaveStyle({
    borderRadius: '8px',
  })
})

test('should handle animation mode and duration', () => {
  const onActiveEndMock = vi.fn()
  const { container, rerender } = render(
    <Progress
      percent={30}
      activeMode="backwards"
      duration={500}
      onActiveEnd={onActiveEndMock}
    />
  )

  const inner = container.querySelector('.nut-progress-inner')
  expect(inner?.getAttribute('style')).toContain(
    'transition: width 500ms ease-in-out'
  )

  rerender(
    <Progress
      percent={100}
      activeMode="backwards"
      duration={500}
      onActiveEnd={onActiveEndMock}
    />
  )
  setTimeout(() => {
    expect(onActiveEndMock).toHaveBeenCalled()
  }, 600)
})

// ==== video mode ====
describe('Progress video mode', () => {
  test('renders track/fill/thumb structure with is-static by default', () => {
    const { container } = render(<Progress mode="video" percent={40} />)
    const root = container.querySelector('.nut-progress--video')
    expect(root).toBeTruthy()
    expect(root?.classList.contains('is-static')).toBe(true)
    expect(container.querySelector('.nut-progress-track')).toBeTruthy()
    const fill = container.querySelector('.nut-progress-fill') as HTMLElement
    expect(fill.style.width).toBe('40%')
    const thumb = container.querySelector('.nut-progress-thumb') as HTMLElement
    expect(thumb.style.left).toBe('40%')
  })

  test('applies is-paused state and renders paused icon', () => {
    const { container } = render(
      <Progress
        mode="video"
        percent={50}
        status="paused"
        pausedIcon={<span data-testid="paused-icon" />}
      />
    )
    const root = container.querySelector('.nut-progress--video')
    expect(root?.classList.contains('is-paused')).toBe(true)
    expect(container.querySelector('[data-testid="paused-icon"]')).toBeTruthy()
  })

  test('hides thumb when showThumb=false', () => {
    const { container } = render(
      <Progress mode="video" percent={20} showThumb={false} />
    )
    expect(container.querySelector('.nut-progress-thumb')).toBeNull()
  })

  test('clamps percent to [min, max]', () => {
    const { container, rerender } = render(
      <Progress mode="video" percent={-50} />
    )
    const fill = () =>
      container.querySelector('.nut-progress-fill') as HTMLElement
    expect(fill().style.width).toBe('0%')
    rerender(<Progress mode="video" percent={9999} />)
    expect(fill().style.width).toBe('100%')
  })

  test('drag with mouse triggers onDragStart / onDragEnd and onChange', () => {
    const onDragStart = vi.fn()
    const onDragEnd = vi.fn()
    const onChange = vi.fn()
    const { container } = render(
      <Progress
        mode="video"
        percent={0}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onChange={onChange}
      />
    )
    const root = container.querySelector('.nut-progress--video') as HTMLElement
    root.getBoundingClientRect = () =>
      ({
        left: 0,
        top: 0,
        right: 200,
        bottom: 10,
        width: 200,
        height: 10,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }) as DOMRect

    fireEvent.mouseDown(root, { clientX: 100 })
    expect(onDragStart).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith(50)
    fireEvent.mouseUp(window, { clientX: 160 })
    expect(onDragEnd).toHaveBeenCalledWith(80)
  })

  test('keyboard ArrowRight increments percent by step', () => {
    const onChange = vi.fn()
    const { container } = render(
      <Progress
        mode="video"
        percent={50}
        draggable
        step={5}
        onChange={onChange}
      />
    )
    const root = container.querySelector('.nut-progress--video') as HTMLElement
    fireEvent.keyDown(root, { key: 'ArrowRight' })
    expect(onChange).toHaveBeenCalledWith(55)
    fireEvent.keyDown(root, { key: 'Home' })
    expect(onChange).toHaveBeenCalledWith(0)
    fireEvent.keyDown(root, { key: 'End' })
    expect(onChange).toHaveBeenCalledWith(100)
  })
})
