/* eslint-disable global-require, @typescript-eslint/no-var-requires */
import * as React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Taro from '@tarojs/taro'
import { BaseDialog as Dialog } from '../dialog.taro'
import {
  resolveDuoOverlayLayout,
  shouldAnimateDuoLayout,
  isDuoSplitScreen,
  isDuoLayoutEnabled,
  detectDuoSplitSide,
  resolveDuoSplitScreenMetrics,
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

  const defaultSysInfo = {
    windowWidth: 867,
    windowHeight: 669,
    screenWidth: 951,
    foldState: 'fullyOpen',
    deviceOrientation: 'landscape',
  }

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
      systemInfo = { ...defaultSysInfo, ...info }
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
    ;(Taro as any).__setMockSystemInfo({})
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

    // 闭合和平铺状态，都需要直接展示居中，不需要动效滑动到居中状态
    expect(shouldAnimateDuoLayout(halfOpenLayout, fullyOpenLayout)).toBe(false)
    expect(shouldAnimateDuoLayout(halfOpenLayout, closedLayout)).toBe(false)

    // 进入微弯（halfOpen）左屏允许平滑过渡
    expect(shouldAnimateDuoLayout(fullyOpenLayout, halfOpenLayout)).toBe(true)
    expect(shouldAnimateDuoLayout(closedLayout, halfOpenLayout)).toBe(true)
  })

  test('should detect split-screen mode and render centered both with and without safe area covered', () => {
    const splitInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      splitSide: 'right' as const,
      avoidAreas: [{ x: 466, y: 0, width: 9, height: 844 }],
    }

    expect(isDuoSplitScreen(splitInfo)).toBe(true)
    expect(detectDuoSplitSide(splitInfo)).toBe('right')

    // Case 1: 蒙层未覆盖安全区（navigationBarHidden 为 false）
    const layoutWithoutCover = resolveDuoOverlayLayout(splitInfo, 'center', {
      navigationBarHidden: false,
    })
    expect(layoutWithoutCover.enabled).toBe(false)
    expect(layoutWithoutCover.windowRect.width).toBe(466)
    expect(layoutWithoutCover.hingeX).toBeNull()
    expect(layoutWithoutCover.popupStyle).toEqual({})

    // Case 2: 蒙层覆盖右侧安全区（navigationBarHidden 为 true）
    // 应该以包含安全区的单侧屏幕全宽（475px）居中（237.5px），绝不能被错误扩展到整机 951px 导致偏到最右侧
    const layoutWithCover = resolveDuoOverlayLayout(splitInfo, 'center', {
      navigationBarHidden: true,
    })
    expect(layoutWithCover.enabled).toBe(true)
    expect(layoutWithCover.windowRect.width).toBe(475)
    expect(layoutWithCover.hingeX).toBeNull()
    expect(layoutWithCover.popupStyle.left).toBe(237.5)

    // DOM 验证 Case 1: 蒙层未覆盖安全区（例如 duoOverlayScope="base"，未激活 appearance）
    ;(Taro as any).__setMockSystemInfo(splitInfo)
    const { container: container1 } = render(
      <Dialog title="Split Screen Without Cover" visible duoOverlayScope="base">
        分屏未盖安全区测试
      </Dialog>
    )
    const outerEle1 = container1.querySelector(
      '.nut-dialog-outer'
    ) as HTMLElement
    expect(outerEle1).toBeInTheDocument()
    expect(outerEle1.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle1.className).not.toContain('nut-dialog-outer-segment-left')
    expect(outerEle1.style.left).toBeFalsy()

    // DOM 验证 Case 2: 蒙层覆盖右侧安全区（默认整窗蒙层，setIOSDialogAppearanceSync 激活）
    const setIOSDialogAppearanceSync = vi.fn(() => true)
    ;(Taro as any).JDNavigationBar = {
      setIOSDialogAppearanceSync,
    }
    const { container: container2 } = render(
      <Dialog title="Split Screen With Cover" visible overlay>
        分屏覆盖安全区测试
      </Dialog>
    )
    const outerEle2 = container2.querySelector(
      '.nut-dialog-outer'
    ) as HTMLElement
    expect(outerEle2).toBeInTheDocument()
    expect(outerEle2.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle2.className).not.toContain('nut-dialog-outer-segment-left')
    expect(outerEle2.style.left).toBe('237.5px')
  })

  test('should retain microBent slide-to-left in full-screen and keep centered in split-screen', () => {
    // 1. Full-screen halfOpen: should compute hingeX and position at left screen (237.5px)
    const fullHalfOpenInfo = {
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
    }
    expect(isDuoSplitScreen(fullHalfOpenInfo)).toBe(false)
    expect(isDuoLayoutEnabled(fullHalfOpenInfo)).toBe(true)
    const fullLayout = resolveDuoOverlayLayout(fullHalfOpenInfo, 'center')
    expect(fullLayout.enabled).toBe(true)
    expect(fullLayout.hingeX).toBe(475)
    expect(fullLayout.popupStyle.left).toBe(237.5)

    // 2. Split-screen halfOpen: should NOT slide out of split window, stays centered
    const splitHalfOpenInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
      splitSide: 'right' as const,
    }
    expect(isDuoSplitScreen(splitHalfOpenInfo)).toBe(true)
    const splitLayout = resolveDuoOverlayLayout(splitHalfOpenInfo, 'center', {
      navigationBarHidden: false,
    })
    expect(splitLayout.enabled).toBe(false)
    expect(splitLayout.hingeX).toBeNull()
    expect(splitLayout.popupStyle).toEqual({})

    // 3. Split-screen halfOpen with safe area covered: centered across 475px
    const splitHalfOpenCovered = resolveDuoOverlayLayout(
      splitHalfOpenInfo,
      'center',
      {
        navigationBarHidden: true,
      }
    )
    expect(splitHalfOpenCovered.enabled).toBe(true)
    expect(splitHalfOpenCovered.hingeX).toBeNull()
    expect(splitHalfOpenCovered.popupStyle.left).toBe(237.5)
  })

  test('should support left split-screen centering both with and without safe area covered', () => {
    // 1. 左侧分屏（无右侧避让区时自动推断为 left，或显式 splitSide: 'left'）
    const leftSplitInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      avoidAreas: [],
    }

    expect(isDuoSplitScreen(leftSplitInfo)).toBe(true)
    expect(detectDuoSplitSide(leftSplitInfo)).toBe('left')

    const metrics = resolveDuoSplitScreenMetrics(leftSplitInfo)
    expect(metrics.splitSide).toBe('left')
    expect(metrics.splitScreenWidth).toBe(466)
    expect(metrics.leftInset).toBe(0)

    // Case A: 蒙层未覆盖安全区（navigationBarHidden 为 false）
    const leftLayoutWithoutCover = resolveDuoOverlayLayout(
      leftSplitInfo,
      'center',
      {
        navigationBarHidden: false,
      }
    )
    expect(leftLayoutWithoutCover.enabled).toBe(false)
    expect(leftLayoutWithoutCover.popupStyle).toEqual({})

    // Case B: 蒙层覆盖安全区（navigationBarHidden 为 true）
    // 左侧分屏在无左侧遮挡区时，单屏视口即为 466px，弹层在左屏视口内通过 50% 严格居中
    const leftLayoutWithCover = resolveDuoOverlayLayout(
      leftSplitInfo,
      'center',
      {
        navigationBarHidden: true,
      }
    )
    expect(leftLayoutWithCover.enabled).toBe(true)
    expect(leftLayoutWithCover.windowRect.width).toBe(466)
    expect(leftLayoutWithCover.baseRect.left).toBe(0)
    expect(leftLayoutWithCover.popupStyle.left).toBe('50%')

    // 2. 左侧分屏存在左侧 avoidAreas 时，弹层仍严格在左屏视口内居中
    const leftSplitAvoidAreaInfo = {
      windowWidth: 391,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      avoidAreas: [{ x: 0, y: 0, width: 84, height: 844 }],
    }
    expect(detectDuoSplitSide(leftSplitAvoidAreaInfo)).toBe('left')
    const avoidMetrics = resolveDuoSplitScreenMetrics(leftSplitAvoidAreaInfo)
    expect(avoidMetrics.splitSide).toBe('left')
    expect(avoidMetrics.leftInset).toBe(0)
    expect(avoidMetrics.splitScreenWidth).toBe(391)

    const leftAvoidLayout = resolveDuoOverlayLayout(
      leftSplitAvoidAreaInfo,
      'center',
      {
        navigationBarHidden: true,
      }
    )
    expect(leftAvoidLayout.popupStyle.left).toBe('50%')

    // 3. 左侧分屏通过 safeArea.left 判定为左屏时，弹层严格居中
    const leftSplitSafeAreaInfo = {
      windowWidth: 391,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      safeArea: {
        left: 84,
        top: 0,
        right: 391,
        bottom: 844,
        width: 391,
        height: 844,
      },
    }
    expect(detectDuoSplitSide(leftSplitSafeAreaInfo)).toBe('left')
    const safeAreaLayout = resolveDuoOverlayLayout(
      leftSplitSafeAreaInfo,
      'center',
      {
        navigationBarHidden: true,
      }
    )
    expect(safeAreaLayout.popupStyle.left).toBe('50%')

    // 4. DOM 渲染验证：左侧分屏覆盖安全区时，Dialog 正确应用居中定位（left: 50%）
    const setIOSDialogAppearanceSync = vi.fn(() => true)
    ;(Taro as any).JDNavigationBar = {
      setIOSDialogAppearanceSync,
    }
    ;(Taro as any).__setMockSystemInfo(leftSplitInfo)

    const { container } = render(
      <Dialog title="Left Split Screen Test" visible overlay>
        左侧分屏内容
      </Dialog>
    )

    const outerEle = container.querySelector('.nut-dialog-outer') as HTMLElement
    expect(outerEle).toBeInTheDocument()
    expect(outerEle.className).toContain('nut-dialog-outer-segment-center')
    expect(outerEle.style.left).toBe('50%')
    expect(outerEle.style.transform).toBe('translate(-50%, -50%)')
  })

  test('should accurately distinguish left vs right split-screen across all detection heuristics', () => {
    // 1. DOM screenLeft 判定
    const baseInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
    }

    // 左侧分屏 screenLeft = 0
    ;(window as any).__mockScreenLeft = 0
    expect(detectDuoSplitSide(baseInfo)).toBe('left')

    // 右侧分屏 screenLeft = 475
    ;(window as any).__mockScreenLeft = 475
    expect(detectDuoSplitSide(baseInfo)).toBe('right')
    delete (window as any).__mockScreenLeft

    // 2. 狭窄物理中缝（width <= 30px）：
    // 左侧分屏：中缝在右侧（x = 466 >= 466 * 0.7）
    const leftHingeInfo = {
      ...baseInfo,
      avoidAreas: [{ x: 466, y: 0, width: 9, height: 844 }],
    }
    expect(detectDuoSplitSide(leftHingeInfo)).toBe('left')

    // 右侧分屏：中缝在左侧（x = 0 <= 466 * 0.3）
    const rightHingeInfo = {
      ...baseInfo,
      avoidAreas: [{ x: 0, y: 0, width: 9, height: 844 }],
    }
    expect(detectDuoSplitSide(rightHingeInfo)).toBe('right')

    // 3. 较宽侧边栏（width > 30px）：
    // 位于右侧（x = 382 >= 382 * 0.6）：右侧分屏
    const rightSidebarInfo = {
      ...baseInfo,
      windowWidth: 382,
      avoidAreas: [{ x: 382, y: 0, width: 84, height: 844 }],
    }
    expect(detectDuoSplitSide(rightSidebarInfo)).toBe('right')

    // 4. 窗口宽度比对（缺少侧边栏约 84px，halfScreen 475 - windowWidth 382 = 93 >= 40）
    const rightWidthDiffInfo = {
      ...baseInfo,
      windowWidth: 382,
      avoidAreas: [],
    }
    expect(detectDuoSplitSide(rightWidthDiffInfo)).toBe('right')

    // 5. 覆盖右侧安全区时居中于 237.5px
    const rightLayout = resolveDuoOverlayLayout(rightSidebarInfo, 'center', {
      navigationBarHidden: true,
    })
    expect(rightLayout.popupStyle.left).toBe(237.5)

    // 6. 左侧分屏覆盖安全区时居中于 50%
    const leftLayout = resolveDuoOverlayLayout(leftHingeInfo, 'center', {
      navigationBarHidden: true,
    })
    expect(leftLayout.popupStyle.left).toBe('50%')
  })
})
