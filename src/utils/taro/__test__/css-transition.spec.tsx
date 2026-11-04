import React from 'react'
import { render, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { CSSTransition } from '../css-transition'

describe('CSSTransition for Taro', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders correctly with initial false and unmountOnExit', () => {
    const { container } = render(
      <CSSTransition in={false} unmountOnExit classNames="test">
        <div className="child">content</div>
      </CSSTransition>
    )
    expect(container.querySelector('.child')).toBeNull()
  })

  it('renders correctly when in becomes true and then false', async () => {
    const onEnter = vi.fn()
    const onEntering = vi.fn()
    const onEntered = vi.fn()
    const onExit = vi.fn()
    const onExiting = vi.fn()
    const onExited = vi.fn()

    const Component = ({ in: inProp }: { in: boolean }) => (
      <CSSTransition
        in={inProp}
        timeout={300}
        unmountOnExit
        classNames="fade"
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div className="child">content</div>
      </CSSTransition>
    )

    const { rerender, container } = render(<Component in={false} />)
    expect(container.querySelector('.child')).toBeNull()

    // 切换为 in={true}
    act(() => {
      rerender(<Component in />)
    })

    expect(onEnter).toHaveBeenCalled()
    const child = container.querySelector('.child')
    expect(child).not.toBeNull()
    expect(child?.className).toContain('fade-enter')

    // 执行 requestAnimationFrame
    act(() => {
      vi.runOnlyPendingTimers()
    })
    expect(onEntering).toHaveBeenCalled()
    expect(child?.className).toContain('fade-enter-active')

    // 执行 300ms timeout
    act(() => {
      vi.advanceTimersByTime(300)
    })
    expect(onEntered).toHaveBeenCalled()
    expect(child?.className).toContain('fade-enter-done')

    // 切换为 in={false}
    act(() => {
      rerender(<Component in={false} />)
    })

    expect(onExit).toHaveBeenCalled()
    expect(child?.className).toContain('fade-exit')

    // 触发下一帧
    act(() => {
      vi.runOnlyPendingTimers()
    })
    expect(onExiting).toHaveBeenCalled()
    expect(child?.className).toContain('fade-exit-active')

    // 执行 300ms timeout
    act(() => {
      vi.advanceTimersByTime(300)
    })
    expect(onExited).toHaveBeenCalled()
    // unmountOnExit 应该卸载节点
    expect(container.querySelector('.child')).toBeNull()
  })
})
