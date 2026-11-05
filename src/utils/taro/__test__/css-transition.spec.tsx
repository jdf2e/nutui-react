import React from 'react'
import { render, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { CSSTransition } from '../css-transition'

vi.mock('@/utils/raf', () => ({
  default: (callback: () => void) => setTimeout(callback, 16),
  cancelRaf: (id: ReturnType<typeof setTimeout>) => clearTimeout(id),
}))

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

  it('renders correctly when in becomes true and then false', () => {
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

  it('completes the initial appear once in StrictMode', () => {
    const onEntered = vi.fn()
    const { container } = render(
      <React.StrictMode>
        <CSSTransition
          in
          appear
          timeout={80}
          classNames="fade"
          onEntered={onEntered}
        >
          <div className="child" />
        </CSSTransition>
      </React.StrictMode>
    )

    act(() => vi.advanceTimersByTime(80))

    expect(onEntered).toHaveBeenCalledTimes(1)
    expect(container.querySelector('.child')?.className).toContain(
      'fade-enter-done'
    )
    expect(container.querySelector('.child')?.className).not.toContain(
      'fade-appear-active'
    )
  })

  it('uses the separate appear timeout for initial entry', () => {
    const onEntered = vi.fn()
    render(
      <CSSTransition
        in
        appear
        timeout={{ appear: 80, enter: 300 }}
        onEntered={onEntered}
      >
        <div />
      </CSSTransition>
    )

    act(() => vi.advanceTimersByTime(79))
    expect(onEntered).not.toHaveBeenCalled()
    act(() => vi.advanceTimersByTime(1))
    expect(onEntered).toHaveBeenCalledTimes(1)
  })

  it('uses the latest unmountOnExit when exit finishes', () => {
    const onExited = vi.fn()
    const element = (visible: boolean, destroy: boolean) => (
      <CSSTransition
        in={visible}
        unmountOnExit={destroy}
        timeout={100}
        onExited={onExited}
      >
        <div className="child" />
      </CSSTransition>
    )
    const { container, rerender } = render(element(true, false))

    rerender(element(false, false))
    act(() => vi.advanceTimersByTime(30))
    rerender(element(false, true))
    act(() => vi.advanceTimersByTime(100))

    expect(onExited).toHaveBeenCalledTimes(1)
    expect(container.querySelector('.child')).toBeNull()
  })

  it('unmounts already exited content when unmountOnExit becomes true', () => {
    const { container, rerender } = render(
      <CSSTransition in={false}>
        <div className="child" />
      </CSSTransition>
    )
    expect(container.querySelector('.child')).not.toBeNull()

    rerender(
      <CSSTransition in={false} unmountOnExit>
        <div className="child" />
      </CSSTransition>
    )
    expect(container.querySelector('.child')).toBeNull()
  })

  it('reflects classNames changes without restarting the active transition', () => {
    const onEntered = vi.fn()
    const element = (visible: boolean, name: string) => (
      <CSSTransition
        in={visible}
        timeout={100}
        classNames={name}
        onEntered={onEntered}
      >
        <div className="child" />
      </CSSTransition>
    )
    const { container, rerender } = render(element(false, 'fade'))
    rerender(element(true, 'fade'))
    act(() => vi.advanceTimersByTime(30))
    rerender(element(true, 'slide'))
    expect(container.querySelector('.child')?.className).toContain(
      'slide-enter-active'
    )
    expect(container.querySelector('.child')?.className).not.toContain('fade-')

    act(() => vi.advanceTimersByTime(86))
    expect(onEntered).toHaveBeenCalledTimes(1)
    expect(container.querySelector('.child')?.className).toContain(
      'slide-enter-done'
    )
  })

  it('cancels stale exits when reopened and calls the latest callback', () => {
    const oldEntered = vi.fn()
    const newEntered = vi.fn()
    const onExited = vi.fn()
    const element = (visible: boolean, callback = oldEntered) => (
      <CSSTransition
        in={visible}
        unmountOnExit
        timeout={100}
        onEntered={callback}
        onExited={onExited}
      >
        <div className="child" />
      </CSSTransition>
    )
    const { container, rerender } = render(element(false))
    rerender(element(true))
    act(() => vi.advanceTimersByTime(30))
    rerender(element(false))
    act(() => vi.advanceTimersByTime(30))
    rerender(element(true, newEntered))
    act(() => vi.advanceTimersByTime(150))

    expect(container.querySelector('.child')).not.toBeNull()
    expect(onExited).not.toHaveBeenCalled()
    expect(oldEntered).not.toHaveBeenCalled()
    expect(newEntered).toHaveBeenCalledTimes(1)
  })

  it('does not call completion callbacks after unmount', () => {
    const onEntered = vi.fn()
    const { unmount, rerender } = render(
      <CSSTransition in={false} onEntered={onEntered}>
        <div />
      </CSSTransition>
    )
    rerender(
      <CSSTransition in onEntered={onEntered}>
        <div />
      </CSSTransition>
    )
    act(() => vi.advanceTimersByTime(30))
    unmount()
    act(() => vi.advanceTimersByTime(400))
    expect(onEntered).not.toHaveBeenCalled()
  })

  it('does not animate initially visible content without appear in StrictMode', () => {
    const onEntered = vi.fn()
    render(
      <React.StrictMode>
        <CSSTransition in onEntered={onEntered}>
          <div />
        </CSSTransition>
      </React.StrictMode>
    )
    act(() => vi.advanceTimersByTime(400))
    expect(onEntered).not.toHaveBeenCalled()
  })
})
