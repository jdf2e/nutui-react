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

  const resizeCallbacks: Array<() => void> = []

  const mocked = {
    getSystemInfoSync: () => systemInfo,
    getSystemInfo: (opts: any) => opts?.success?.(systemInfo),
    useResize: (cb: any) => {
      resizeCallbacks.push(cb)
    },
    __triggerResize: () => {
      resizeCallbacks.forEach((cb) => cb())
    },
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

  test('should smoothly transition from fullyOpen center to halfOpen left', () => {
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
    expect(popupEle.style.left).toBe('433.5px')

    // Bending device into halfOpen
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'halfOpen',
    })

    act(() => {
      ;(Taro as any).__triggerResize()
    })

    // Advance 300ms: rAF animation completes, reaching halfOpen left center
    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(popupEle.className).toContain('nut-popup-duo')
    expect(popupEle.style.left).toBe('237.5px')

    vi.useRealTimers()
  })

  test('should center bottom and top popup with max-width 653px on fullyOpen dual-screen', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      windowWidth: 933,
      windowHeight: 669,
      screenWidth: 933,
    })

    const { container: bottomContainer } = render(
      <Popup visible position="bottom">
        底部面板
      </Popup>
    )

    const bottomEle = bottomContainer.querySelector('.nut-popup') as HTMLElement
    expect(bottomEle).toBeInTheDocument()
    expect(bottomEle.className).toContain('nut-popup-duo')
    expect(bottomEle.className).toContain('nut-popup-bottom')
    expect(bottomEle.style.width).toBe('653px')
    expect(bottomEle.style.maxWidth).toBe('653px')
    // (933 - 653) / 2 = 140
    expect(bottomEle.style.left).toBe('140px')

    const { container: topContainer } = render(
      <Popup visible position="top">
        顶部面板
      </Popup>
    )

    const topEle = topContainer.querySelector('.nut-popup') as HTMLElement
    expect(topEle).toBeInTheDocument()
    expect(topEle.className).toContain('nut-popup-duo')
    expect(topEle.className).toContain('nut-popup-top')
    expect(topEle.style.width).toBe('653px')
    expect(topEle.style.maxWidth).toBe('653px')
    expect(topEle.style.left).toBe('140px')
  })

  test('should acquire and release iOS native navigation appearance for Popup with overlay', () => {
    const setIOSDialogAppearanceSync = vi.fn(() => true)
    ;(Taro as any).JDNavigationBar = {
      setIOSDialogAppearanceSync,
    }
    ;(Taro as any).__setMockSystemInfo({
      platform: 'ios',
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { unmount } = render(
      <Popup visible overlay position="bottom">
        底部导航外观测试
      </Popup>
    )

    expect(setIOSDialogAppearanceSync).toHaveBeenCalledWith(
      expect.objectContaining({
        active: true,
        viewBackgroundColor: '#000000B3',
      })
    )

    unmount()

    expect(setIOSDialogAppearanceSync).toHaveBeenCalledWith(
      expect.objectContaining({
        active: false,
      })
    )
  })
})
