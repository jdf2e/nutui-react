import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import Taro from '@tarojs/taro'
import {
  acquireDuoDialogAppearance,
  isDuoDialogAppearanceActive,
  type DuoDialogAppearanceHandle,
} from '@/utils/taro/duo-dialog-appearance'
import {
  type DuoOverlayLayoutOptions,
  type DuoOverlayLayoutResult,
  type DuoPopupKind,
  interpolateDuoLayout,
  resolveDuoOverlayLayout,
  shouldAnimateDuoLayout,
  normalizeFoldState,
} from '@/utils/taro/duo-overlay-layout'
import {
  duoContentStyle,
  duoBaseMaskStyle,
} from '@/utils/taro/duo-overlay-layout-style'

export * from '@/utils/taro/duo-overlay-layout'
export * from '@/utils/taro/duo-overlay-layout-style'

export type DuoLayoutOptions = DuoOverlayLayoutOptions

export type DuoLayoutResult = DuoOverlayLayoutResult & {
  /** 兼容 NutUI 既有属性，等价于 duoContentStyle(layout) */
  contentStyle: CSSProperties
  /** 兼容 NutUI 既有属性，等价于 duoBaseMaskStyle(layout, scope) */
  baseMaskStyle: CSSProperties
  isLandscape: boolean
  foldState?: string
}

const emptyLayout: DuoOverlayLayoutResult = {
  enabled: false,
  windowRect: { left: 0, top: 0, width: 0, height: 0 },
  baseRect: { left: 0, top: 0, width: 0, height: 0 },
  overlayRect: { left: 0, top: 0, width: 0, height: 0 },
  popupStyle: {},
  hingeX: null,
}

const LAYOUT_ANIM_MS = 250

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2

// 小程序等环境可能没有 rAF，回退到 setTimeout
const raf = (cb: () => void): number =>
  typeof requestAnimationFrame === 'function'
    ? requestAnimationFrame(cb)
    : (setTimeout(cb, 16) as unknown as number)

const caf = (id: number) => {
  if (typeof cancelAnimationFrame === 'function') cancelAnimationFrame(id)
  else clearTimeout(id)
}

export function isDuoHostIOS(): boolean {
  try {
    if (
      typeof (Taro as any)?.JDNavigationBar?.setIOSDialogAppearanceSync ===
        'function' ||
      typeof (globalThis as any)?.JDNavigationBar
        ?.setIOSDialogAppearanceSync === 'function'
    ) {
      return true
    }
    const env = (process.env?.TARO_ENV || '').toLowerCase()
    const platformOS = String(process.env?.TARO_PLATFORM_OS || '').toLowerCase()
    if (env === 'dynamic' && (platformOS === 'ios' || !platformOS)) {
      return true
    }
    const info = (Taro.getSystemInfoSync?.() || {}) as any
    const platform = String(info.platform ?? '').toLowerCase()
    if (platform === 'ios') return true
    if (process.env.NODE_ENV === 'test') return true
    return false
  } catch {
    return false
  }
}

export interface DuoDialogAppearanceOptions {
  /** 是否在 Duo 下屏蔽导航栏（侧边栏）；非 Duo / 非 iOS 一律不调用 */
  enabled: boolean
  /** 原生页面背景色（#RRGGBB / #RRGGBBAA），应与蒙层颜色一致 */
  color: string
}

/** 屏蔽 / 恢复导航栏会改变窗口尺寸，其后的 resize 直接落位、不再插值，避免弹层先错位再滑过去 */
const APPEARANCE_SETTLE_MS = 500

/**
 * 返回当前应展示的 Duo 布局。
 * 布局变化（折叠 / 展开 / 旋转）时由 JS 在 250ms 内对 left / width 等数值字段插值，
 * 不依赖 CSS transition，也不叠加 transform。
 */
export function useDuoOverlayLayout(
  active: boolean,
  kind?: DuoPopupKind,
  options?: DuoOverlayLayoutOptions,
  appearance?: DuoDialogAppearanceOptions
): DuoLayoutResult {
  const popupKind = kind ?? 'center'
  // 当前展示的布局（初始同步计算，平铺展开态直接居中落位，不闪烁无动画）
  const [layout, setLayout] = useState<DuoOverlayLayoutResult>(() => {
    if (!active || !isDuoHostIOS()) return emptyLayout
    try {
      const layoutOptions = {
        ...options,
        navigationBarHidden: isDuoDialogAppearanceActive(),
      }
      const info = Taro.getSystemInfoSync?.() || ({} as any)
      return resolveDuoOverlayLayout(info, popupKind, layoutOptions)
    } catch {
      return emptyLayout
    }
  })

  const optionsRef = useRef(options)
  optionsRef.current = options
  const activeRef = useRef(active)
  activeRef.current = active
  const displayedRef = useRef<DuoOverlayLayoutResult>(layout)
  const targetRef = useRef<DuoOverlayLayoutResult>(layout)
  const animFrameRef = useRef<number | null>(null)
  const resizeFrameRef = useRef<number | null>(null)

  const cancelAnim = useCallback(() => {
    if (animFrameRef.current != null) {
      caf(animFrameRef.current)
      animFrameRef.current = null
    }
  }, [])

  const show = useCallback((next: DuoOverlayLayoutResult) => {
    displayedRef.current = next
    setLayout(next)
  }, [])

  const commit = useCallback(
    (next: DuoOverlayLayoutResult, animate = true) => {
      // 动画被打断时，从「当前展示的位置」继续，而不是从上一个目标跳回去
      const from = displayedRef.current
      targetRef.current = next
      cancelAnim()

      if (
        !animate ||
        !activeRef.current ||
        !shouldAnimateDuoLayout(from, next)
      ) {
        show(next)
        return
      }

      const startedAt = Date.now()
      const step = () => {
        const t = Math.min(1, (Date.now() - startedAt) / LAYOUT_ANIM_MS)
        if (t >= 1) {
          animFrameRef.current = null
          show(next)
          return
        }
        show(interpolateDuoLayout(from, next, easeInOut(t)))
        animFrameRef.current = raf(step)
      }
      animFrameRef.current = raf(step)
    },
    [cancelAnim, show]
  )

  const refresh = useCallback(
    (animate = true) => {
      if (!isDuoHostIOS()) {
        commit(emptyLayout, false)
        return
      }
      try {
        const layoutOptions = {
          ...optionsRef.current,
          navigationBarHidden: isDuoDialogAppearanceActive(),
        }
        const info = Taro.getSystemInfoSync?.() || ({} as any)
        commit(resolveDuoOverlayLayout(info, popupKind, layoutOptions), animate)
        const syncHasFold =
          'foldState' in info ||
          (info as { foldState?: string }).foldState != null
        if (!syncHasFold && typeof Taro.getSystemInfo === 'function') {
          Taro.getSystemInfo({
            success: (res: any) =>
              commit(
                resolveDuoOverlayLayout(res, popupKind, layoutOptions),
                false
              ),
          })
        }
      } catch {
        commit(emptyLayout, false)
      }
    },
    [commit, popupKind]
  )

  // Duo 弹层打开期间屏蔽导航栏并把原生背景设成蒙层色。
  // 必须排在下面「读取布局」的 effect 之前：先改窗口，再按新窗口尺寸算布局。
  const appearanceEnabled = !!appearance?.enabled
  const appearanceColor = appearance?.color
  const appearanceHandleRef = useRef<DuoDialogAppearanceHandle | null>(null)
  const settleUntilRef = useRef(0)

  useLayoutEffect(() => {
    if (!active || !appearanceEnabled || !appearanceColor) return
    settleUntilRef.current = Date.now() + APPEARANCE_SETTLE_MS
    appearanceHandleRef.current = acquireDuoDialogAppearance(appearanceColor)
    return () => {
      appearanceHandleRef.current?.release()
      appearanceHandleRef.current = null
      settleUntilRef.current = Date.now() + APPEARANCE_SETTLE_MS
    }
    // 颜色变化走下面的 update，避免先恢复再屏蔽造成闪动
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, appearanceEnabled])

  useLayoutEffect(() => {
    if (appearanceColor) appearanceHandleRef.current?.update(appearanceColor)
  }, [appearanceColor])

  useLayoutEffect(() => {
    if (!active) {
      // 关闭中：保留最后一次布局，退出动画期间位置不要回到折叠前；
      // 若过渡还没走完，直接落到目标布局
      cancelAnim()
      if (displayedRef.current !== targetRef.current) {
        show(targetRef.current)
      }
      return
    }
    // 打开/运行期选项变化：原生启停 effect 已先执行，按当前覆盖状态直接落位。
    // 关闭时仍走上面的最后布局保留，不回到恢复前的位置。
    refresh(false)
    // 屏蔽及恢复都可能稍后更新尺寸，且不保证有 resize：两条路径均复读。
    const settleTimer = setTimeout(() => {
      if (activeRef.current) refresh(false)
    }, APPEARANCE_SETTLE_MS / 4)
    return () => clearTimeout(settleTimer)
  }, [
    active,
    appearanceEnabled,
    options?.overlayScope,
    options?.centerMaxWidth,
    cancelAnim,
    refresh,
    show,
  ])

  useEffect(
    () => () => {
      cancelAnim()
      if (resizeFrameRef.current != null) {
        caf(resizeFrameRef.current)
      }
    },
    [cancelAnim]
  )

  // 严格使用 Taro.useResize 响应窗口尺寸与折叠状态变更
  const taroUseResize = (Taro as any)?.useResize
  if (typeof taroUseResize === 'function') {
    taroUseResize(() => {
      if (!activeRef.current || !isDuoHostIOS()) return
      if (resizeFrameRef.current != null) {
        caf(resizeFrameRef.current)
      }
      resizeFrameRef.current = raf(() => {
        resizeFrameRef.current = null
        refresh(Date.now() >= settleUntilRef.current)
      })
    })
  }

  // 派生 NutUI 组件期望的兼容属性
  const contentStyle = duoContentStyle(layout)
  const baseMaskStyle = duoBaseMaskStyle(layout, options?.overlayScope)
  const sysInfo = (Taro.getSystemInfoSync?.() || {}) as any
  const foldState = normalizeFoldState(sysInfo.foldState)
  const isLandscape =
    layout.windowRect.width > layout.windowRect.height ||
    String(sysInfo.deviceOrientation ?? '')
      .toLowerCase()
      .includes('landscape')

  return {
    ...layout,
    contentStyle,
    baseMaskStyle,
    isLandscape,
    foldState,
  }
}

/** 兼容别名，保留 useDuoLayout 调用方式 */
export const useDuoLayout = useDuoOverlayLayout
