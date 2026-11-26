/* eslint-disable global-require */
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { isSkyline } from '@/utils/taro/is-skyline'
import { Popup } from '../popup.taro'

const { MockView } = vi.hoisted(() => {
  const React = require('react')
  const MockView = React.forwardRef(
    ({ children, catchMove, ariaRole, ariaLabel, ...props }: any, ref: any) =>
      React.createElement('div', { ...props, ref }, children)
  )
  MockView.displayName = 'MockView'
  return { MockView }
})

vi.mock('@tarojs/components', () => ({
  View: MockView,
}))

vi.mock('@tarojs/taro', () => ({
  default: { getEnv: () => 'WEAPP' },
  getEnv: () => 'WEAPP',
  nextTick: (cb: () => void) => cb(),
}))

vi.mock('@/utils/taro/is-skyline', () => ({ isSkyline: vi.fn() }))

const mockedIsSkyline = vi.mocked(isSkyline)

describe('Popup (Taro)', () => {
  beforeEach(() => {
    mockedIsSkyline.mockReset()
  })

  test('非 Skyline 环境不渲染 wrapper 且不追加 skyline 类，保持原有结构', () => {
    mockedIsSkyline.mockReturnValue(false)
    const { container } = render(
      <Popup visible position="bottom">
        Content
      </Popup>
    )

    expect(container.querySelector('.nut-popup-wrapper')).toBeNull()
    const popup = container.querySelector('.nut-popup') as HTMLElement
    expect(popup).toBeInTheDocument()
    const overlay = container.querySelector('.nut-overlay') as HTMLElement
    expect(overlay).toBeInTheDocument()
    expect(overlay).not.toHaveClass('nut-overlay-skyline')
  })

  test('Skyline 环境使用固定定位 wrapper 包裹弹层，overlay 追加 skyline 类', () => {
    mockedIsSkyline.mockReturnValue(true)
    const { container } = render(
      <Popup visible position="bottom">
        Content
      </Popup>
    )

    const wrapper = container.querySelector(
      '.nut-popup-wrapper.nut-popup-wrapper-bottom'
    ) as HTMLElement
    expect(wrapper).toBeInTheDocument()
    expect(wrapper.firstElementChild).toHaveClass('nut-popup')
    const overlay = container.querySelector('.nut-overlay') as HTMLElement
    expect(overlay).toHaveClass('nut-overlay-skyline')
  })

  test('Skyline 环境将调用方 style.zIndex 透传到 wrapper', () => {
    mockedIsSkyline.mockReturnValue(true)
    const { container, rerender } = render(
      <Popup visible position="center" style={{ zIndex: 5000 }}>
        Content
      </Popup>
    )

    const wrapper = container.querySelector('.nut-popup-wrapper') as HTMLElement
    expect(wrapper).toHaveStyle({ zIndex: '5000' })

    rerender(
      <Popup visible position="center" style={{ zIndex: 0 }}>
        Content
      </Popup>
    )
    expect(wrapper).toHaveStyle({ zIndex: '0' })
  })

  test('Skyline 环境设置自定义 style.position 时不渲染 wrapper，保留原定位参照容器', () => {
    mockedIsSkyline.mockReturnValue(true)
    const { container } = render(
      <div style={{ position: 'relative' }}>
        <Popup
          visible
          portal={false as any}
          style={{ position: 'absolute', top: 0, left: 0 }}
          overlayStyle={{ position: 'absolute' }}
        >
          Content
        </Popup>
      </div>
    )

    expect(container.querySelector('.nut-popup-wrapper')).toBeNull()
    const popup = container.querySelector('.nut-popup') as HTMLElement
    expect(popup).toHaveStyle({ position: 'absolute', top: '0px', left: '0px' })
    const overlay = container.querySelector('.nut-overlay') as HTMLElement
    expect(overlay).not.toHaveClass('nut-overlay-skyline')
  })
})
