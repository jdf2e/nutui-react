import * as React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NoticeBar } from '../noticebar.taro'

vi.mock('@tarojs/taro', () => ({
  nextTick: vi.fn(),
}))

vi.mock('@tarojs/components', () => ({
  View: 'div',
}))

afterEach(() => {
  vi.useRealTimers()
})

test('taro autoClose uses CSS timing and closes once after the delay', () => {
  vi.useFakeTimers()
  const handleClose = vi.fn()
  const onRender = vi.fn()
  const { container } = render(
    <React.Profiler id="noticebar-taro" onRender={onRender}>
      <NoticeBar
        content="自动关闭"
        autoClose={1000}
        scrollable={false}
        onClose={handleClose}
      />
    </React.Profiler>
  )

  onRender.mockClear()
  act(() => {
    vi.advanceTimersByTime(500)
  })
  const countdown = container.querySelector(
    '.nut-noticebar-box-close-countdown'
  ) as HTMLElement
  expect(onRender).not.toHaveBeenCalled()
  expect(
    countdown.style.getPropertyValue('--noticebar-auto-close-duration')
  ).toBe('1000ms')

  act(() => {
    vi.advanceTimersByTime(500)
  })
  expect(handleClose).toHaveBeenCalledTimes(1)
  expect(container.querySelector('.nut-noticebar-box')).toBeFalsy()
})

test('taro manual close cancels the pending autoClose callback', () => {
  vi.useFakeTimers()
  const handleClose = vi.fn()
  const { container } = render(
    <NoticeBar content="自动关闭" autoClose={1000} onClose={handleClose} />
  )

  fireEvent.click(
    container.querySelector('.nut-noticebar-box-right-icon') as Element
  )
  act(() => {
    vi.advanceTimersByTime(1000)
  })

  expect(handleClose).toHaveBeenCalledTimes(1)
})
