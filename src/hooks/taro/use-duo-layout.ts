import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Taro from '@tarojs/taro'

export type DuoPopupKind = 'center' | 'bottom' | 'top' | 'none'
export type DuoOverlayScope = 'window' | 'base'

export interface DuoLayoutOptions {
  overlayScope?: DuoOverlayScope
  centerMaxWidth?: number | null
  /** 从平铺切换到微弯时，居中保持时长（ms），默认 250ms */
  holdCenterDuration?: number
}

export interface DuoRect {
  left: number
  top: number
  width: number
  height: number
}

export interface DuoLayoutResult {
  /** 当前是否命中并激活 Duo 双屏横屏半折叠适配 */
  enabled: boolean
  /** 宿主是否为 Duo 折叠设备（系统信息中包含有效的 foldState） */
  isDuo: boolean
  /** 当前原始折叠状态：'closed' | 'halfOpen' | 'fullyOpen' 等 */
  foldState?: string
  /** 是否处于横屏模式 */
  isLandscape: boolean
  /** 物理折叠中缝 X 坐标（仅半折叠横屏时有值，直接使用系统坐标，不经 px 换算） */
  hingeX: number | null
  /** 半折叠横屏下的左半屏基准矩形 */
  baseRect: DuoRect
  /** 视口全宽 */
  windowWidth: number
  /** 视口全高 */
  windowHeight: number
  /** Duo 激活时应附加到内容浮层的行内样式；未激活时为空对象 {} */
  contentStyle: CSSProperties
  /** 当 overlayScope === 'base' 时应用于蒙层的半屏样式；未激活时为空对象 {} */
  baseMaskStyle: CSSProperties
  /** 从平铺切换到微弯时是否处于「居中驻留」阶段（先保持居中，再滑向左侧） */
  isHoldingCenter: boolean
}

const emptyRect: DuoRect = { left: 0, top: 0, width: 0, height: 0 }

const FOLD_STATE_ALIASES: Record<string, string> = {
  closed: 'closed',
  halfopen: 'halfOpen',
  halfOpen: 'halfOpen',
  folded: 'halfOpen',
  microbent: 'halfOpen',
  fullyopen: 'fullyOpen',
  fullyOpen: 'fullyOpen',
  flat: 'fullyOpen',
  continuous: 'fullyOpen',
  unknown: 'unknown',
}

export function normalizeFoldState(state: unknown): string | undefined {
  if (state == null || state === '') return undefined
  const raw = String(state).trim()
  const folded = raw.replace(/[_\s-]/g, '').toLowerCase()
  return FOLD_STATE_ALIASES[folded] ?? raw
}

/**
 * 探测当前系统的 Duo 硬件状态与几何布局
 * 注：直接采用 Taro.getSystemInfoSync() 返回的原生数值，不进行 lengthScaleRatio 等额外 px 换算
 */
export function getDuoSystemLayout(
  kind: DuoPopupKind = 'center',
  options: DuoLayoutOptions = {}
): DuoLayoutResult {
  const resolvedKind = kind || 'center'
  try {
    const info = (Taro.getSystemInfoSync?.() || {}) as any
    const rawFoldState = info.foldState
    const foldState = normalizeFoldState(rawFoldState)
    const isDuo =
      foldState !== undefined &&
      ['closed', 'halfOpen', 'fullyOpen'].includes(foldState)

    const orientation = String(info.deviceOrientation ?? '').toLowerCase()
    const windowWidth = Number(info.windowWidth) || 0
    const windowHeight = Number(info.windowHeight) || 0
    const screenWidth = Number(info.screenWidth) || windowWidth

    const isLandscape =
      orientation.includes('landscape') || windowWidth > windowHeight

    // 仅在「支持折叠屏」+「处于半折叠状态」+「横屏模式」时触发 Duo 偏置避让
    const enabled = isDuo && foldState === 'halfOpen' && isLandscape

    if (!enabled) {
      return {
        enabled: false,
        isDuo,
        foldState,
        isLandscape,
        hingeX: null,
        baseRect: { left: 0, top: 0, width: windowWidth, height: windowHeight },
        windowWidth,
        windowHeight,
        contentStyle: {},
        baseMaskStyle: {},
        isHoldingCenter: false,
      }
    }

    // 中缝位于屏幕横向中点（直接使用系统物理数值）
    const hingeX = Math.floor(screenWidth / 2)
    // 左半屏有效宽度
    const baseWidth = Math.min(hingeX, windowWidth)

    const baseRect: DuoRect = {
      left: 0,
      top: 0,
      width: baseWidth,
      height: windowHeight,
    }

    // 内容区样式计算
    let contentStyle: CSSProperties = {}
    if (resolvedKind === 'center') {
      const centerX = baseWidth / 2
      contentStyle = {
        top: '50%',
        left: `${centerX}px`,
        right: 'auto',
        transform: 'translate(-50%, -50%)',
      }
      const cap =
        options?.centerMaxWidth === undefined ? 295 : options.centerMaxWidth
      if (cap !== null) {
        contentStyle.maxWidth = `${Math.min(cap, baseWidth - 32)}px`
      }
    } else if (resolvedKind === 'bottom' || resolvedKind === 'top') {
      const sheetWidth = Math.min(baseWidth, 653)
      const left = (baseWidth - sheetWidth) / 2
      contentStyle = {
        left: `${left}px`,
        right: 'auto',
        width: `${sheetWidth}px`,
      }
    }

    // 蒙层半屏样式（仅在 overlayScope === 'base' 时生效）
    const baseMaskStyle: CSSProperties =
      options?.overlayScope === 'base'
        ? {
            left: 0,
            width: `${baseWidth}px`,
            right: 'auto',
          }
        : {}

    return {
      enabled: true,
      isDuo,
      foldState,
      isLandscape,
      hingeX,
      baseRect,
      windowWidth,
      windowHeight,
      contentStyle,
      baseMaskStyle,
      isHoldingCenter: false,
    }
  } catch {
    return {
      enabled: false,
      isDuo: false,
      isLandscape: false,
      hingeX: null,
      baseRect: emptyRect,
      windowWidth: 0,
      windowHeight: 0,
      contentStyle: {},
      baseMaskStyle: {},
      isHoldingCenter: false,
    }
  }
}

/**
 * Taro Duo 动态折叠屏布局 Hook
 * @param active 弹层是否处于唤起/可见态
 * @param kind 弹窗类型，默认 'center'
 * @param options 配置参数，如 overlayScope
 */
export function useDuoLayout(
  active = true,
  kind: DuoPopupKind = 'center',
  options: DuoLayoutOptions = {}
): DuoLayoutResult {
  const overlayScope = options.overlayScope
  const centerMaxWidth = options.centerMaxWidth
  const holdCenterDuration = options.holdCenterDuration ?? 250

  const [rawLayout, setRawLayout] = useState<DuoLayoutResult>(() =>
    active
      ? getDuoSystemLayout(kind, { overlayScope, centerMaxWidth })
      : {
          enabled: false,
          isDuo: false,
          isLandscape: false,
          hingeX: null,
          baseRect: emptyRect,
          windowWidth: 0,
          windowHeight: 0,
          contentStyle: {},
          baseMaskStyle: {},
          isHoldingCenter: false,
        }
  )

  const [isHoldingCenter, setIsHoldingCenter] = useState(false)
  const prevFoldStateRef = useRef<string | undefined>(rawLayout.foldState)
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const update = useCallback(() => {
    if (!active) return
    const next = getDuoSystemLayout(kind, { overlayScope, centerMaxWidth })

    const prevFold = prevFoldStateRef.current
    const nextFold = next.foldState

    // 探测是否从平铺（fullyOpen / flat）切换到微弯（halfOpen / folded）
    const isFromFlatToMicroBent =
      (prevFold === 'fullyOpen' || prevFold === 'flat') &&
      (nextFold === 'halfOpen' || nextFold === 'folded') &&
      next.enabled

    if (isFromFlatToMicroBent) {
      setIsHoldingCenter(true)
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current)
      }
      holdTimerRef.current = setTimeout(() => {
        setIsHoldingCenter(false)
        holdTimerRef.current = null
      }, holdCenterDuration)
    } else if (
      nextFold === 'fullyOpen' ||
      nextFold === 'flat' ||
      !next.enabled
    ) {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current)
        holdTimerRef.current = null
      }
      setIsHoldingCenter(false)
    }

    prevFoldStateRef.current = nextFold

    setRawLayout((prev) => {
      if (
        prev.enabled === next.enabled &&
        prev.isLandscape === next.isLandscape &&
        prev.foldState === next.foldState &&
        prev.hingeX === next.hingeX &&
        prev.baseRect.width === next.baseRect.width &&
        prev.baseRect.height === next.baseRect.height &&
        JSON.stringify(prev.contentStyle) ===
          JSON.stringify(next.contentStyle) &&
        JSON.stringify(prev.baseMaskStyle) ===
          JSON.stringify(next.baseMaskStyle)
      ) {
        return prev
      }
      return next
    })
  }, [active, kind, overlayScope, centerMaxWidth, holdCenterDuration])

  useEffect(() => {
    if (!active) return

    update()

    // 监听屏幕旋转与折叠窗口尺寸变化
    const handleResize = () => {
      update()
    }

    Taro.onWindowResize?.(handleResize)
    // @ts-ignore
    Taro.onDeviceOrientationChange?.(handleResize)

    // 异步兜底（若同步未读到 foldState，如部分客户端首次打开）
    if (typeof Taro.getSystemInfo === 'function') {
      Taro.getSystemInfo({
        success: () => update(),
      })
    }

    // 活跃期间仅在折叠屏设备上轮询探测微弯折痕变化（普通设备依靠 resize 事件即可，避免空转消耗）
    let timer: ReturnType<typeof setInterval> | null = null
    if (rawLayout.isDuo) {
      timer = setInterval(() => {
        update()
      }, 300)
    }

    return () => {
      Taro.offWindowResize?.(handleResize)
      // @ts-ignore
      Taro.offDeviceOrientationChange?.(handleResize)
      if (timer) {
        clearInterval(timer)
      }
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current)
        holdTimerRef.current = null
      }
    }
  }, [active, update, rawLayout.isDuo])

  // 当处于平铺到微弯的居中保持阶段时，样式先保持居中
  const layout = useMemo<DuoLayoutResult>(() => {
    if (!rawLayout.enabled || !isHoldingCenter) {
      return {
        ...rawLayout,
        isHoldingCenter: false,
      }
    }

    const resolvedKind = kind || 'center'
    const fullWidth = rawLayout.windowWidth || rawLayout.baseRect.width * 2
    let contentStyle: CSSProperties = { ...rawLayout.contentStyle }

    if (resolvedKind === 'center') {
      const fullCenterX = Math.floor(fullWidth / 2)
      contentStyle = {
        ...contentStyle,
        left: `${fullCenterX}px`,
        right: 'auto',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
      }
    } else if (resolvedKind === 'bottom' || resolvedKind === 'top') {
      const sheetWidth =
        Number(rawLayout.contentStyle.width) ||
        Math.min(rawLayout.baseRect.width, 653)
      const fullLeft = Math.floor((fullWidth - sheetWidth) / 2)
      contentStyle = {
        ...contentStyle,
        left: `${fullLeft}px`,
        right: 'auto',
        transition: 'left 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
      }
    }

    return {
      ...rawLayout,
      isHoldingCenter: true,
      contentStyle,
      baseMaskStyle: {}, // 居中保持期间蒙层保持全屏，暂不收缩到半屏
    }
  }, [rawLayout, isHoldingCenter, kind])

  return layout
}
