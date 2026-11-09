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
    delete (window as any).__mockScreenLeft
    delete (Taro as any).JDNavigationBar
    ;(Taro as any).__setMockSystemInfo({
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      avoidAreas: undefined,
      safeArea: undefined,
      splitSide: undefined,
    })
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
    // 1. 全屏模式下：微弯进入 halfOpen 依然保持滑向左半屏（hingeX 不为 null，且执行动画）
    const fullScreenFlatInfo = {
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
    }
    const fullScreenBentInfo = {
      windowWidth: 867,
      windowHeight: 669,
      screenWidth: 951,
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
    }

    expect(isDuoSplitScreen(fullScreenFlatInfo)).toBe(false)
    expect(isDuoSplitScreen(fullScreenBentInfo)).toBe(false)

    const fullFlatLayout = resolveDuoOverlayLayout(
      fullScreenFlatInfo,
      'center',
      { navigationBarHidden: true }
    )
    const fullBentLayout = resolveDuoOverlayLayout(
      fullScreenBentInfo,
      'center',
      { navigationBarHidden: true }
    )

    expect(fullBentLayout.hingeX).toBe(475)
    expect(shouldAnimateDuoLayout(fullFlatLayout, fullBentLayout)).toBe(true)

    // 2. 分屏模式下：设备微弯不跨屏偏移，保持在单侧屏幕内严格居中
    const splitScreenFlatInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      splitSide: 'right' as const,
      avoidAreas: [{ x: 466, y: 0, width: 9, height: 844 }],
    }
    const splitScreenBentInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'halfOpen',
      deviceOrientation: 'landscape',
      splitSide: 'right' as const,
      avoidAreas: [{ x: 466, y: 0, width: 9, height: 844 }],
    }

    expect(isDuoSplitScreen(splitScreenFlatInfo)).toBe(true)
    expect(isDuoSplitScreen(splitScreenBentInfo)).toBe(true)

    const splitFlatLayout = resolveDuoOverlayLayout(
      splitScreenFlatInfo,
      'center',
      { navigationBarHidden: true }
    )
    const splitBentLayout = resolveDuoOverlayLayout(
      splitScreenBentInfo,
      'center',
      { navigationBarHidden: true }
    )

    // 分屏模式下 hingeX 必须为 null，不跨越中缝
    expect(splitBentLayout.hingeX).toBeNull()
    // 分屏模式下不应做跨屏滑动动画
    expect(shouldAnimateDuoLayout(splitFlatLayout, splitBentLayout)).toBe(false)
    // 分屏模式下弹窗包含安全区域以单屏全宽居中（237.5px）
    expect(splitBentLayout.popupStyle.left).toBe(237.5)
  })

  test('should adapt to left split-screen without shifting into hinge or right screen', () => {
    // 左侧分屏典型信息：windowWidth 为单屏全宽（466px），无侧边栏
    const leftSplitInfo = {
      windowWidth: 466,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      splitSide: 'left' as const,
      avoidAreas: [{ x: 466, y: 0, width: 9, height: 844 }],
    }

    expect(isDuoSplitScreen(leftSplitInfo)).toBe(true)
    expect(detectDuoSplitSide(leftSplitInfo)).toBe('left')

    // 1. 左侧分屏覆盖安全区时，必须严格居中在当前左屏视口（left: 50%），不得偏移到整机屏幕中央或右侧
    const leftMetrics = resolveDuoSplitScreenMetrics(leftSplitInfo)
    expect(leftMetrics.splitSide).toBe('left')
    expect(leftMetrics.leftInset).toBe(0)
    expect(leftMetrics.rightInset).toBe(0)
    expect(leftMetrics.splitScreenWidth).toBe(466)

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

    // 2. 左侧分屏存在左侧 avoidAreas 时，包含左侧安全区（84px），单屏总宽为 475px（475/2 - 84 = 153.5px）
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
    expect(avoidMetrics.leftInset).toBe(84)
    expect(avoidMetrics.splitScreenWidth).toBe(475)

    const leftAvoidLayout = resolveDuoOverlayLayout(
      leftSplitAvoidAreaInfo,
      'center',
      {
        navigationBarHidden: true,
      }
    )
    expect(leftAvoidLayout.popupStyle.left).toBe(153.5)

    // Popup (centerBase === 'safeArea') 避让左侧安全区，以业务窗宽居中（50%）
    const leftAvoidLayoutPopup = resolveDuoOverlayLayout(
      leftSplitAvoidAreaInfo,
      'center',
      {
        navigationBarHidden: true,
        centerBase: 'safeArea',
      }
    )
    expect(leftAvoidLayoutPopup.popupStyle.left).toBe('50%')

    // 3. 左侧分屏通过 safeArea.left 判定为左屏时，Dialog 在分屏窗口内左右居中（50%）
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
    expect(safeAreaLayout.popupStyle.left).toBe(153.5)

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

    // 侧边栏位于另一屏（x = 867 > 466 * 1.3 = 605.8）：左侧分屏
    const leftSidebarOnOtherSideInfo = {
      ...baseInfo,
      windowWidth: 466,
      avoidAreas: [{ x: 867, y: 0, width: 84, height: 844 }],
    }
    expect(detectDuoSplitSide(leftSidebarOnOtherSideInfo)).toBe('left')

    // 4. safeArea.right 明确小于窗口宽度（缺少侧边栏约 84px，382 - 298 = 84 >= 40）：右侧分屏
    const rightSafeAreaInfo = {
      ...baseInfo,
      windowWidth: 382,
      safeArea: {
        left: 0,
        top: 0,
        right: 298,
        bottom: 844,
        width: 298,
        height: 844,
      },
      avoidAreas: [],
    }
    expect(detectDuoSplitSide(rightSafeAreaInfo)).toBe('right')

    // 5. 覆盖右侧安全区时居中于 237.5px (以单屏全宽 475px 居中)
    const rightLayout = resolveDuoOverlayLayout(rightSidebarInfo, 'center', {
      navigationBarHidden: true,
    })
    expect(rightLayout.popupStyle.left).toBe(237.5)

    // 6. 左侧分屏覆盖安全区时居中于 50%
    const leftLayout = resolveDuoOverlayLayout(leftHingeInfo, 'center', {
      navigationBarHidden: true,
    })
    expect(leftLayout.popupStyle.left).toBe('50%')

    // 7. 闭合态不应判定为分屏
    const closedInfo = {
      windowWidth: 382,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'closed',
      deviceOrientation: 'portrait',
    }
    expect(isDuoSplitScreen(closedInfo)).toBe(false)
  })

  test('should include safe area for Dialog centering in split-screen and dual-screen right segment', () => {
    // 1. 分屏模式右屏：分屏模式下 Dialog 包含安全区域居中于单屏全宽 475px（left = 237.5px）
    const rightSplitInfo = {
      windowWidth: 391,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      splitSide: 'right' as const,
      safeArea: {
        left: 0,
        top: 0,
        right: 391,
        bottom: 844,
        width: 391,
        height: 844,
      },
    }
    const dialogSplitRightLayout = resolveDuoOverlayLayout(
      rightSplitInfo,
      'center',
      {
        navigationBarHidden: true,
        centerBase: 'full',
      }
    )
    expect(dialogSplitRightLayout.popupStyle.left).toBe(237.5)

    // 2. 双屏模式下 segment="right"：Dialog 把安全区域加进去，以右屏全宽为基准居中（left = 712.5px）
    const fullDuoInfo = {
      windowWidth: 951,
      windowHeight: 844,
      screenWidth: 951,
      screenHeight: 844,
      foldState: 'fullyOpen',
      deviceOrientation: 'landscape',
      avoidAreas: [{ x: 867, y: 0, width: 84, height: 844 }],
    }
    const dialogSegmentRightLayout = resolveDuoOverlayLayout(
      fullDuoInfo,
      'center',
      {
        segment: 'right',
        centerBase: 'full',
      }
    )
    expect(dialogSegmentRightLayout.popupStyle.left).toBe(713)

    // 3. 对比 Popup：保留避让安全区处理（剔除 84px 安全区）
    const popupSegmentRightLayout = resolveDuoOverlayLayout(
      fullDuoInfo,
      'center',
      {
        segment: 'right',
        centerBase: 'safeArea',
      }
    )
    // Popup 避让右侧 84px：baseWidth = 951 - 475 - 84 = 392, center = 475 + 392 / 2 = 671
    expect(popupSegmentRightLayout.popupStyle.left).toBe(671)

    // 4. 用户真机实测案例（横屏右侧分屏，明确标明 splitSide 或通过 windowLeft 识别）：
    // 将 90px 安全区加回单屏全宽 475px，居中于 237.5px
    const userRealInfo = {
      windowWidth: 385,
      windowHeight: 669,
      screenWidth: 951,
      screenHeight: 669,
      splitSide: 'right' as const,
      foldState: 'fullyOpen',
      safeArea: {
        left: 0,
        right: 385,
        top: 24,
        bottom: 635,
        width: 385,
        height: 611,
      },
      avoidAreas: [],
    }
    const dialogRealLayout = resolveDuoOverlayLayout(userRealInfo, 'center', {
      centerBase: 'full',
    })
    expect(dialogRealLayout.popupStyle.left).toBe(237.5)
    // 对比 Popup：保留避让安全区（未覆盖安全区时沿用 CSS 50%）
    const popupRealLayout = resolveDuoOverlayLayout(userRealInfo, 'center', {
      centerBase: 'safeArea',
    })
    expect(popupRealLayout.popupStyle.left).toBeUndefined()
    // 5. 用户真机实测案例（横屏左侧分屏，windowWidth=466，无右侧状态栏压缩）：
    // 分屏模式下以左屏全宽居中（left: '50%'）
    const userLeftRealInfo = {
      windowWidth: 466,
      windowHeight: 669,
      screenWidth: 951,
      screenHeight: 669,
      foldState: 'fullyOpen',
      safeArea: {
        left: 0,
        right: 466,
        top: 24,
        bottom: 635,
        width: 466,
        height: 611,
      },
      avoidAreas: [],
    }
    const dialogLeftLayout = resolveDuoOverlayLayout(
      userLeftRealInfo,
      'center',
      {
        centerBase: 'full',
      }
    )
    expect(dialogLeftLayout.popupStyle.left).toBe('50%')
  })
})
