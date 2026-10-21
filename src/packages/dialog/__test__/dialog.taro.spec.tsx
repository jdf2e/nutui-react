/* eslint-disable global-require, @typescript-eslint/no-var-requires */
import * as React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Taro from '@tarojs/taro'
import { BaseDialog as Dialog } from '../dialog.taro'

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

  const mocked = {
    eventCenter,
    getCurrentInstance: () => ({ router: { path: '/pages/index/index' } }),
    getSystemInfoSync: () => systemInfo,
    getSystemInfo: (opts: any) => opts?.success?.(systemInfo),
    onWindowResize: vi.fn(),
    offWindowResize: vi.fn(),
    onDeviceOrientationChange: vi.fn(),
    offDeviceOrientationChange: vi.fn(),
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

    // Advance timer past the 250ms polling interval
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
      vi.advanceTimersByTime(300)
    })

    expect(outerEle.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle.className).not.toContain('nut-dialog-outer-micro-bent')

    vi.useRealTimers()
  })
})
