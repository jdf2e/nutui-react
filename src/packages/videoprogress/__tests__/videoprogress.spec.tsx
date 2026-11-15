import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { VideoProgress } from '../videoprogress'

describe('VideoProgress component', () => {
  test('renders track/fill/thumb structure with is-static by default', () => {
    const { container } = render(<VideoProgress percent={40} />)
    const root = container.querySelector('.nut-videoprogress')
    expect(root).toBeTruthy()
    expect(root?.classList.contains('is-static')).toBe(true)
    expect(container.querySelector('.nut-videoprogress-track')).toBeTruthy()
    const fill = container.querySelector(
      '.nut-videoprogress-fill'
    ) as HTMLElement
    expect(fill.style.width).toBe('40%')
    const thumb = container.querySelector(
      '.nut-videoprogress-thumb'
    ) as HTMLElement
    expect(thumb.style.left).toBe('40%')
  })

  test('applies is-paused state and renders paused icon', () => {
    const { container } = render(
      <VideoProgress
        percent={50}
        status="paused"
        pausedIcon={<span data-testid="paused-icon" />}
      />
    )
    const root = container.querySelector('.nut-videoprogress')
    expect(root?.classList.contains('is-paused')).toBe(true)
    expect(container.querySelector('[data-testid="paused-icon"]')).toBeTruthy()
  })

  test('hides thumb when showThumb=false', () => {
    const { container } = render(
      <VideoProgress percent={20} showThumb={false} />
    )
    expect(container.querySelector('.nut-videoprogress-thumb')).toBeNull()
  })

  test('clamps percent to [min, max]', () => {
    const { container, rerender } = render(<VideoProgress percent={-50} />)
    const fill = () =>
      container.querySelector('.nut-videoprogress-fill') as HTMLElement
    expect(fill().style.width).toBe('0%')
    rerender(<VideoProgress percent={9999} />)
    expect(fill().style.width).toBe('100%')
  })

  test('drag with mouse triggers onDragStart / onDragEnd and onChange', () => {
    const onDragStart = vi.fn()
    const onDragEnd = vi.fn()
    const onChange = vi.fn()
    const { container } = render(
      <VideoProgress
        percent={0}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onChange={onChange}
      />
    )
    const root = container.querySelector('.nut-videoprogress') as HTMLElement
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
      <VideoProgress percent={10} draggable step={5} onChange={onChange} />
    )
    const root = container.querySelector('.nut-videoprogress') as HTMLElement
    fireEvent.keyDown(root, { key: 'ArrowRight' })
    expect(onChange).toHaveBeenCalledWith(15)
  })

  test('keyboard ArrowLeft decrements percent', () => {
    const onChange = vi.fn()
    const { container } = render(
      <VideoProgress percent={50} draggable step={5} onChange={onChange} />
    )
    const root = container.querySelector('.nut-videoprogress') as HTMLElement
    fireEvent.keyDown(root, { key: 'ArrowLeft' })
    expect(onChange).toHaveBeenCalledWith(45)
  })

  test('keyboard Home and End keys set to 0 and 100', () => {
    const onChange = vi.fn()
    const { container } = render(
      <VideoProgress percent={50} draggable onChange={onChange} />
    )
    const root = container.querySelector('.nut-videoprogress') as HTMLElement
    fireEvent.keyDown(root, { key: 'Home' })
    expect(onChange).toHaveBeenCalledWith(0)

    fireEvent.keyDown(root, { key: 'End' })
    expect(onChange).toHaveBeenCalledWith(100)
  })
})
