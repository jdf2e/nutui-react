import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'

import { Progress } from '../index'

test('should render progress when use props', async () => {
  const { asFragment } = render(<Progress percent={100} />)
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

test('warns when mode="video" is used in Progress', () => {
  const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  render(<Progress mode="video" percent={50} />)
  expect(spy).toHaveBeenCalledWith(
    expect.stringContaining(
      '[NutUI] Progress: mode="video" has been moved to <VideoProgress>'
    )
  )
  spy.mockRestore()
})
