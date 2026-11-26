/* eslint-disable global-require */
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { isSkyline } from '@/utils/taro/is-skyline'
import { CalendarItem } from '../calendaritem.taro'

const { MockView, MockScrollView } = vi.hoisted(() => {
  const React = require('react')
  const MockView = React.forwardRef(
    ({ children, catchMove, ...props }: any, ref: any) =>
      React.createElement('div', { ...props, ref }, children)
  )
  MockView.displayName = 'MockView'
  const MockScrollView = React.forwardRef(
    (
      {
        children,
        scrollY,
        scrollTop,
        scrollWithAnimation,
        type,
        ...props
      }: any,
      ref: any
    ) =>
      React.createElement(
        'div',
        { ...props, ref, 'data-scroll-view': '' },
        children
      )
  )
  MockScrollView.displayName = 'MockScrollView'
  return { MockView, MockScrollView }
})

vi.mock('@tarojs/components', () => ({
  View: MockView,
  ScrollView: MockScrollView,
}))

vi.mock('@tarojs/taro', () => ({
  default: { getEnv: () => 'WEAPP' },
  nextTick: (cb: () => void) => cb(),
}))

vi.mock('@/utils/taro/is-skyline', () => ({ isSkyline: vi.fn() }))

const mockedIsSkyline = vi.mocked(isSkyline)

describe('CalendarItem (Taro)', () => {
  beforeEach(() => {
    mockedIsSkyline.mockReset()
  })

  test('内容区使用 ScrollView 渲染', () => {
    mockedIsSkyline.mockReturnValue(false)
    const { container } = render(
      <CalendarItem startDate="2022-01-01" endDate="2022-03-31" />
    )

    const content = container.querySelector('.nut-calendar-content')
    expect(content).toHaveAttribute('data-scroll-view')
    expect(container.querySelectorAll('.nut-calendar-month').length).toBe(3)
  })

  test('非 Skyline 环境不追加 Skyline 修饰类，保持原有布局', () => {
    mockedIsSkyline.mockReturnValue(false)
    const { container } = render(
      <CalendarItem startDate="2022-01-01" endDate="2022-03-31" />
    )

    const root = container.querySelector('.nut-calendar') as HTMLElement
    expect(root).not.toHaveClass('nut-calendar-skyline')
  })

  test('Skyline 环境给根节点追加 nut-calendar-skyline，启用 flex 覆盖样式', () => {
    mockedIsSkyline.mockReturnValue(true)
    const { container } = render(
      <CalendarItem startDate="2022-01-01" endDate="2022-03-31" />
    )

    const root = container.querySelector('.nut-calendar') as HTMLElement
    expect(root).toHaveClass('nut-calendar-skyline')
    // 覆盖样式只在根节点的修饰类下生效，内部节点不应散落修饰类
    expect(container.querySelectorAll('.nut-calendar-skyline').length).toBe(1)
  })
})
