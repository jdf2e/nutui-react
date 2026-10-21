/* eslint-disable global-require, @typescript-eslint/no-var-requires */
import * as React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Taro from '@tarojs/taro'
import { BaseDialog as Dialog } from '../dialog.taro'
import {
  resolveDuoOverlayLayout,
  shouldAnimateDuoLayout,
} from '../../../utils/taro/duo-overlay-layout'

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

vi.mock('@tarojs/taro', () => {
  let systemInfo: any = {
    windowWidth: 867,
    windowHeight: 669,
    screenWidth: 951,
    foldState: 'fullyOpen',
    deviceOrientation: 'landscape',
  }

  const events = new Map<string, ((...args: any[]) => void)[]>()
  const eventCenter = {
    on: (name: string, cb: (...args: any[]) => void) => {
      const list = events.get(name) || []
      list.push(cb)
      events.set(name, list)
    },
    off: (name: string) => {
      events.delete(name)
    },
    trigger: (name: string, ...args: any[]) => {
      events.get(name)?.forEach((cb) => cb(...args))
    },
  }

  const resizeCallbacks: Array<() => void> = []

  const mocked = {
    eventCenter,
    getCurrentInstance: () => ({ router: { path: '/pages/index/index' } }),
    getSystemInfoSync: () => systemInfo,
    getSystemInfo: (opts: any) => opts?.success?.(systemInfo),
    useResize: (cb: any) => {
      resizeCallbacks.push(cb)
    },
    __triggerResize: () => {
      resizeCallbacks.forEach((cb) => cb())
    },
    getEnv: () => 'WEAPP',
    __setMockSystemInfo: (info: any) => {
      systemInfo = { ...systemInfo, ...info }
    },
  }

  return {
    ...mocked,
    default: mocked,
  }
})

describe('Dialog Taro Duo Adaptation', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should render centered in fullyOpen (flat) posture', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { container } = render(
      <Dialog title="Duo Test" visible>
        平铺内容
      </Dialog>
    )

    const outerEle = container.querySelector('.nut-dialog-outer') as HTMLElement
    expect(outerEle).toBeInTheDocument()
    expect(outerEle.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle.className).not.toContain('nut-dialog-outer-micro-bent')
    expect(outerEle.className).not.toContain('nut-dialog-outer-segment-left')
    // 平铺态居中：位于双屏中央（433.5px）
    expect(outerEle.style.left).toBe('433.5px')
    expect(outerEle.style.transform).toBe('translate(-50%, -50%)')
  })

  test('should render centered in closed (folded) posture', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'closed',
      deviceOrientation: 'portrait',
      windowWidth: 390,
      windowHeight: 844,
      screenWidth: 390,
    })

    const { container } = render(
      <Dialog title="Closed Test" visible>
        闭合内容
      </Dialog>
    )

    const outerEle = container.querySelector('.nut-dialog-outer') as HTMLElement
    expect(outerEle).toBeInTheDocument()
    expect(outerEle.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle.className).not.toContain('nut-dialog-outer-micro-bent')
    expect(outerEle.className).not.toContain('nut-dialog-outer-segment-left')
    // 闭合态居中：以单屏宽度居中（390 / 2 = 195px）
    expect(outerEle.style.left).toBe('195px')
    expect(outerEle.style.transform).toBe('translate(-50%, -50%)')
  })

  test('should render centered by screenWidth in closed posture when safe area is covered', () => {
    const setIOSDialogAppearanceSync = vi.fn(() => true)
    ;(Taro as any).JDNavigationBar = {
      setIOSDialogAppearanceSync,
    }
    ;(Taro as any).__setMockSystemInfo({
      platform: 'ios',
      foldState: 'closed',
      deviceOrientation: 'landscape',
      windowWidth: 391,
      windowHeight: 844,
      screenWidth: 475,
    })

    const { container } = render(
      <Dialog title="Closed Safe Area Test" visible overlay>
        闭合盖住安全区域内容
      </Dialog>
    )

    const outerEle = container.querySelector('.nut-dialog-outer') as HTMLElement
    expect(outerEle).toBeInTheDocument()
    // 盖住安全区域时，居中以 screenWidth (475px / 2 = 237.5px) 为基准
    expect(outerEle.style.left).toBe('237.5px')
    expect(outerEle.style.transform).toBe('translate(-50%, -50%)')
  })

  test('should acquire and release iOS native navigation appearance to cover right safe area', () => {
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
      <Dialog title="Appearance Test" visible overlay>
        导航栏外观测试
      </Dialog>
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

  test('should adapt to left half-screen in halfOpen (microBent) posture', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { container } = render(
      <Dialog title="Duo Bent Test" visible>
        微弯内容
      </Dialog>
    )

    const outerEle = container.querySelector('.nut-dialog-outer') as HTMLElement
    expect(outerEle).toBeInTheDocument()
    expect(outerEle.className).toContain('nut-dialog-outer-micro-bent')
    expect(outerEle.className).toContain('nut-dialog-outer-segment-left')
    // duoLayout contentStyle attaches left coordinate
    expect(outerEle.style.left).toBe('237.5px')
  })

  test('should support duoOverlayScope base when halfOpen', () => {
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { container } = render(
      <Dialog title="Duo Scope Test" visible duoOverlayScope="base">
        半屏蒙层测试
      </Dialog>
    )

    const overlayEle = container.querySelector('.nut-overlay') as HTMLElement
    expect(overlayEle).toBeInTheDocument()
    expect(overlayEle.style.width).toBe('475px')
  })

  test('should dynamically update layout when fold posture changes', () => {
    vi.useFakeTimers()
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
    })

    const { container } = render(
      <Dialog title="Dynamic Test" visible>
        动态折叠测试
      </Dialog>
    )

    const outerEle = container.querySelector('.nut-dialog-outer') as HTMLElement
    expect(outerEle.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle.className).not.toContain('nut-dialog-outer-micro-bent')

    // Bending device into microBent
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'halfOpen',
    })
    act(() => {
      ;(Taro as any).__triggerResize()
    })

    // Layout animates via rAF
    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(outerEle.className).toContain('nut-dialog-outer-micro-bent')
    expect(outerEle.className).toContain('nut-dialog-outer-segment-left')
    expect(outerEle.style.left).toBe('237.5px')

    // Flattening device back to fullyOpen
    ;(Taro as any).__setMockSystemInfo({
      foldState: 'fullyOpen',
    })
    act(() => {
      ;(Taro as any).__triggerResize()
    })

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(outerEle.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle.className).not.toContain('nut-dialog-outer-micro-bent')

    vi.useRealTimers()
  })

  test('should directly render centered without animation when unfolding from closed to fullyOpen', () => {
    const closedInfo = {
      windowWidth: 390,
      windowHeight: 844,
      screenWidth: 390,
      foldState: 'closed',
      deviceOrientation: 'portrait',
    }
    const fullyOpenInfo = {
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
    }
    const halfOpenInfo = {
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
    }

    const closedLayout = resolveDuoOverlayLayout(closedInfo, 'center')
    const fullyOpenLayout = resolveDuoOverlayLayout(fullyOpenInfo, 'center')
    const halfOpenLayout = resolveDuoOverlayLayout(halfOpenInfo, 'center')

    // 闭合 -> 平铺展开：不应该做插值滑动动画，直接居中落位
    expect(shouldAnimateDuoLayout(closedLayout, fullyOpenLayout)).toBe(false)

    // 微弯（halfOpen）与平铺（fullyOpen）互相切换：允许插值滑动过渡
    expect(shouldAnimateDuoLayout(halfOpenLayout, fullyOpenLayout)).toBe(true)
    expect(shouldAnimateDuoLayout(fullyOpenLayout, halfOpenLayout)).toBe(true)
  })
})
