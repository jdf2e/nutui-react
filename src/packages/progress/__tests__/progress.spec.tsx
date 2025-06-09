import * as React from 'react'
import { render } from '@testing-library/react'
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

  // 测试动画完成回调
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

test('should render with aria-label', () => {
  const { container } = render(
    <Progress percent={50} ariaLabel="当前进度50%" />
  )
  const progressDiv = container.querySelector('.nut-progress')
  expect(progressDiv?.getAttribute('aria-label')).toBe('当前进度50%')
})
