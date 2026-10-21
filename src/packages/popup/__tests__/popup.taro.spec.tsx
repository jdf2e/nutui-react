/* eslint-disable global-require, @typescript-eslint/no-var-requires */
import * as React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Taro from '@tarojs/taro'
import { Popup } from '../popup.taro'

vi.mock('@tarojs/taro', () => {
  let systemInfo: any = {
    windowWidth: 867,
    windowHeight: 669,
    screenWidth: 951,
    foldState: 'fullyOpen',
    deviceOrientation: 'landscape',
  }

  const mocked = {
    getSystemInfoSync: () => systemInfo,
    getSystemInfo: (opts: any) => opts?.success?.(systemInfo),
    onWindowResize: vi.fn(),
    offWindowResize: vi.fn(),
    onDeviceOrientationChange: vi.fn(),
    offDeviceOrientationChange: vi.fn(),
    getEnv: () => 'WEAPP',
    nextTick: (cb: any) => setTimeout(cb, 0),
    __setMockSystemInfo: (info: any) => {
      systemInfo = { ...systemInfo, ...info }
    },
  }

  return {
    ...mocked,
    default: mocked,
  }
})

const { MockView } = vi.hoisted(() => {
  const React = require('react')
  const MockView = React.forwardRef(
    ({ children, catchMove, ...props }: any, ref: any) =>
      React.createElement('div', { ...props, ref }, children)
  )
  MockView.displayName = 'MockView'
  return { MockView }
})

vi.mock('@tarojs/components', () => ({
  View: MockView,
  Text: ({ children, ...props }: any) => {
    const React = require('react')
    return React.createElement('span', props, children)
  },
}))

describe('Popup Taro Component & Duo Adaptation', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should render both overlay and popup content with correct zIndex', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
    })

    const { container } = render(
      <Popup visible position="bottom" zIndex={1200}>
        <div data-testid="popup-child">弹层内容</div>
      </Popup>
    )

    const overlayEle = container.querySelector('.nut-overlay') as HTMLElement
    const popupEle = container.querySelector('.nut-popup') as HTMLElement

    expect(overlayEle).toBeInTheDocument()
    expect(popupEle).toBeInTheDocument()

    // Content zIndex must be strictly greater than Overlay zIndex
    expect(Number(popupEle.style.zIndex)).toBeGreaterThan(
      Number(overlayEle.style.zIndex)
    )
  })

  test('should adapt to Duo halfOpen microBent posture', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { container } = render(
      <Popup visible position="center">
        Duo 居中弹层
      </Popup>
    )

    const popupEle = container.querySelector('.nut-popup') as HTMLElement
    expect(popupEle).toBeInTheDocument()
    expect(popupEle.className).toContain('nut-popup-duo')
    expect(popupEle.style.left).toBe('237.5px')
  })

  test('should hold center first and then slide to left when transitioning from fullyOpen to halfOpen', () => {
    vi.useFakeTimers()
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { container } = render(
      <Popup visible position="center">
        Duo 动态居中弹层
      </Popup>
    )

    const popupEle = container.querySelector('.nut-popup') as HTMLElement
    expect(popupEle).toBeInTheDocument()
    expect(popupEle.className).not.toContain('nut-popup-duo')

    // Bending device into halfOpen
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'halfOpen',
    })

    // Advance 300ms: polling detects posture change, enters stage 1 (hold center)
    act(() => {
      vi.advanceTimersByTime(300)
    })

    // Stage 1: held centered (full width center)
    expect(popupEle.className).not.toContain('nut-popup-duo')
    expect(popupEle.style.left).toBe('433px')

    // Stage 2: advance past 250ms hold duration -> slides to left
    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(popupEle.className).toContain('nut-popup-duo')
    expect(popupEle.style.left).toBe('237.5px')

    vi.useRealTimers()
  })
})
