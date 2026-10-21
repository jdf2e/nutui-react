import type { CSSProperties } from 'react'
import type { getSystemInfoSync } from '@tarojs/taro'

export type SystemInfo = ReturnType<typeof getSystemInfoSync> & {
  foldState?: string
  isFoldable?: boolean
  avoidAreas?: Array<{
    left?: number
    top?: number
    x?: number
    y?: number
    width?: number
    height?: number
  }>
  lengthScaleRatio?: number
  deviceOrientation?: string
}

export type DuoOverlayScope = 'window' | 'base'

export type DuoPopupKind = 'center' | 'bottom' | 'top' | 'none'

export interface DuoRect {
  left: number
  top: number
  width: number
  height: number
}

export interface DuoOverlayLayoutOptions {
  overlayScope?: DuoOverlayScope
  /** 内部布局状态：导航栏覆盖成功后，全窗横向布局包含原导航栏区域。 */
  navigationBarHidden?: boolean
  /**
   * center 弹层的 max-width（CSS px）：默认 295（Popup）；
   * 传 null 表示不写内联 max-width，沿用组件自己的 CSS（Dialog / Toast 自带宽度规则）
   */
  centerMaxWidth?: number | null
}

export interface DuoOverlayLayoutResult {
  enabled: boolean
  windowRect: DuoRect
  baseRect: DuoRect
  overlayRect: DuoRect
  popupStyle: CSSProperties
  /**
   * 折叠中缝的 x 坐标（CSS px）。仅在半折叠横屏（中缝把内容区分成左右两半）时有值，其余为 null。
   * 目前只知道中缝位置，不知道中缝宽度。
   */
  hingeX: number | null
}

export const LANDSCAPE_ORIENTATIONS = new Set([
  'landscape',
  'landscapesecondary',
  'landscapeleft',
  'landscaperight',
])

export const ACTIVE_FOLD_STATES = new Set(['closed', 'halfOpen', 'fullyOpen'])

export const FOLD_STATE_ALIASES: Record<string, string> = {
  closed: 'closed',
  halfopen: 'halfOpen',
  fullyopen: 'fullyOpen',
  unknown: 'unknown',
}

export function normalizeFoldState(state: unknown): string | undefined {
  if (state == null || state === '') return undefined
  const raw = String(state).trim()
  const folded = raw.replace(/[_\s-]/g, '').toLowerCase()
  return FOLD_STATE_ALIASES[folded] ?? raw
}

export function isDuoFoldFieldPresent(info: SystemInfo): boolean {
  return 'foldState' in info || 'isFoldable' in info
}

export function isDuoLayoutEnabled(info: SystemInfo): boolean {
  if (!info || !isDuoFoldFieldPresent(info)) return false
  const state = normalizeFoldState(info.foldState)
  if (state != null && state !== 'unknown') {
    return ACTIVE_FOLD_STATES.has(state)
  }
  if ((info as any).isFoldable === true) {
    return true
  }
  return false
}

export function isLandscapeOrientation(info: SystemInfo): boolean {
  const orientation = String(info.deviceOrientation ?? '').toLowerCase()
  if (orientation) {
    return (
      LANDSCAPE_ORIENTATIONS.has(orientation) ||
      orientation.includes('landscape')
    )
  }
  const w = info.windowWidth ?? 0
  const h = info.windowHeight ?? 0
  return w > h
}

export function readDuoLengthScaleRatio(info: SystemInfo): number {
  const ratio = info.lengthScaleRatio
  if (ratio == null || ratio === 0 || !Number.isFinite(ratio)) return 1
  return ratio
}

/**
 * getSystemInfo 返回的 window / screen / avoidAreas 是「屏幕 dp」，
 * 而写进 style 的 px 会被引擎再乘 lengthScaleRatio 渲染（实测 iPhone Duo 上
 * 页面容器 CSS 宽 933 = windowWidth 867 / 0.929）。
 * 所以所有由系统信息算出的长度，都要先除以 lengthScaleRatio 换成 CSS px，
 * 否则蒙层 / 弹层会整体偏小约 7%（全开时蒙层补不满，半折叠时离中缝差一截）。
 */
export function toCssPx(info: SystemInfo, dp: number): number {
  return dp / readDuoLengthScaleRatio(info)
}

export function windowRectFromInfo(info: SystemInfo): DuoRect {
  return {
    left: 0,
    top: 0,
    width: toCssPx(info, info.windowWidth ?? 0),
    height: toCssPx(info, info.windowHeight ?? 0),
  }
}

/**
 * 避让区（如折叠中缝）落在中缝右侧时，把 base 右边界收到避让区左边。
 * hingeX 与 base 宽度使用同一个中缝坐标（screenWidth / 2），保证判定一致。
 */
export function clipBaseRectForAvoidAreas(
  base: DuoRect,
  avoidAreas: SystemInfo['avoidAreas'],
  hingeX: number
): DuoRect {
  if (!avoidAreas?.length) return base
  let width = base.width
  const mid = hingeX
  for (const area of avoidAreas) {
    if (area) {
      const left = typeof area.left === 'number' ? area.left : area.x
      if (typeof left === 'number') {
        const areaWidth = typeof area.width === 'number' ? area.width : 0
        const centerX = left + areaWidth / 2
        if (centerX >= mid && left < base.left + width) {
          width = Math.min(width, Math.max(0, left - base.left))
        }
      }
    }
  }
  return { ...base, width }
}

/**
 * 半折叠横屏时折叠中缝的 x（CSS px），其余状态返回 null。
 * 折叠中缝在整块屏幕的一半处；window 可能比 screen 窄（如右侧状态栏列），
 * 所以按 screenWidth 取一半。
 */
export function computeHingeX(info: SystemInfo): number | null {
  if (!isDuoLayoutEnabled(info)) return null
  if (normalizeFoldState(info.foldState) !== 'halfOpen') return null
  if (!isLandscapeOrientation(info)) return null
  const windowRect = windowRectFromInfo(info)
  const screenWidth =
    typeof info.screenWidth === 'number' && info.screenWidth > 0
      ? toCssPx(info, info.screenWidth)
      : windowRect.width
  return Math.floor(screenWidth / 2)
}

export function computeBaseRect(info: SystemInfo): DuoRect {
  const windowRect = windowRectFromInfo(info)
  const landscape = isLandscapeOrientation(info)
  const halfOpen = normalizeFoldState(info.foldState) === 'halfOpen'

  if (halfOpen && landscape) {
    const screenWidth =
      typeof info.screenWidth === 'number' && info.screenWidth > 0
        ? toCssPx(info, info.screenWidth)
        : windowRect.width
    const hingeX = Math.floor(screenWidth / 2)
    let base: DuoRect = {
      left: 0,
      top: 0,
      width: Math.min(hingeX, windowRect.width),
      height: windowRect.height,
    }
    if ('avoidAreas' in info && Array.isArray(info.avoidAreas)) {
      base = clipBaseRectForAvoidAreas(
        base,
        info.avoidAreas.map((area) => ({
          left: toCssPx(info, area?.left ?? area?.x ?? 0),
          top: toCssPx(info, area?.top ?? area?.y ?? 0),
          width: toCssPx(info, area?.width ?? 0),
          height: toCssPx(info, area?.height ?? 0),
        })),
        hingeX
      )
    }
    return base
  }

  return windowRect
}

export function computeOverlayRect(
  windowRect: DuoRect,
  baseRect: DuoRect,
  scope: DuoOverlayScope
): DuoRect {
  if (scope === 'base') return baseRect
  return windowRect
}

/**
 * 半弹面板最大宽度：设计稿 653dp × lengthScaleRatio（屏幕 dp）。
 * 换算成 CSS px 后 ratio 约掉，直接是 653。
 */
export const HALF_SHEET_MAX_CSS_PX = 653

/** 与 popup.scss 中 center 的 max-width 保持一致 */
export const CENTER_POPUP_MAX_WIDTH = 295

export function computePopupStyle(
  kind: DuoPopupKind,
  info: SystemInfo,
  baseRect: DuoRect,
  options?: DuoOverlayLayoutOptions
): CSSProperties {
  const windowRect = windowRectFromInfo(info)

  if (kind === 'center') {
    const centerX = baseRect.left + baseRect.width / 2
    const style: CSSProperties = {
      // 纵向沿用原 CSS 的 50%：固定定位容器高度可能略大于 windowHeight
      top: '50%',
      left: centerX,
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    }
    const cap =
      options?.centerMaxWidth === undefined
        ? CENTER_POPUP_MAX_WIDTH
        : options.centerMaxWidth
    if (cap !== null) style.maxWidth = Math.min(cap, baseRect.width)
    return style
  }

  if (kind === 'none') {
    // none 无固定定位，原本整宽铺在页面顶部；仅当 base 小于整窗（半折叠横屏）时收进 base
    const sameAsWindow =
      baseRect.left === windowRect.left && baseRect.width === windowRect.width
    if (sameAsWindow) return {}
    return {
      top: baseRect.top,
      left: baseRect.left,
      right: 'auto',
      bottom: 'auto',
      width: baseRect.width,
    }
  }

  // top / bottom：默认撑满 base 宽；超过 653dp 上限后限宽并在 base 内水平居中
  const sheetWidth = Math.min(baseRect.width, HALF_SHEET_MAX_CSS_PX)
  const maxHeight = windowRect.height * 0.9
  const left = baseRect.left + (baseRect.width - sheetWidth) / 2

  if (kind === 'top') {
    return {
      top: baseRect.top,
      left,
      right: 'auto',
      bottom: 'auto',
      width: sheetWidth,
      maxWidth: HALF_SHEET_MAX_CSS_PX,
      maxHeight,
    }
  }

  return {
    left,
    right: 'auto',
    top: 'auto',
    bottom: 0,
    width: sheetWidth,
    maxWidth: HALF_SHEET_MAX_CSS_PX,
    maxHeight,
  }
}

/**
 * base 范围蒙层：只限定 left/top/width，纵向沿用 CSS 的 height: 100%。
 * 固定定位容器的高度可能略大于 windowHeight（安全区等），
 * 写死 height 会导致蒙层底部补不全。
 */
export function rectToOverlayStyle(rect: DuoRect): CSSProperties {
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    right: 'auto',
  }
}

export function rectToFixedStyle(rect: DuoRect): CSSProperties {
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    right: 'auto',
    bottom: 'auto',
  }
}

export function resolveDuoOverlayLayout(
  info: SystemInfo,
  kind: DuoPopupKind,
  options?: DuoOverlayLayoutOptions
): DuoOverlayLayoutResult {
  const enabled = isDuoLayoutEnabled(info)
  // 导航栏隐藏后，原生全窗蒙层包含侧栏区域，但 getSystemInfo 的 windowWidth
  // 仍可能是业务页宽（实测 867，screen 951）。只在覆盖成功时扩大横向基准，
  // 不改窗口高度；半折叠的 base 仍由物理中缝约束，而不是把内容铺满两侧。
  const screenWidth = info.screenWidth
  const layoutInfo =
    enabled &&
    options?.navigationBarHidden &&
    typeof screenWidth === 'number' &&
    Number.isFinite(screenWidth) &&
    screenWidth > (info.windowWidth ?? 0)
      ? ({ ...info, windowWidth: screenWidth } as SystemInfo)
      : info
  const windowRect = windowRectFromInfo(layoutInfo)
  const baseRect = enabled ? computeBaseRect(layoutInfo) : windowRect
  const scope = options?.overlayScope ?? 'window'
  const overlayRect = enabled
    ? computeOverlayRect(windowRect, baseRect, scope)
    : windowRect
  const popupStyle =
    enabled &&
    (kind === 'center' ||
      kind === 'bottom' ||
      kind === 'top' ||
      kind === 'none')
      ? computePopupStyle(kind, layoutInfo, baseRect, options)
      : {}

  return {
    enabled,
    windowRect,
    baseRect,
    overlayRect,
    popupStyle,
    hingeX: computeHingeX(info),
  }
}

const RECT_KEYS: Array<keyof DuoRect> = ['left', 'top', 'width', 'height']

/** 布局过渡时参与插值的 popupStyle 数值字段（'50%' / 'auto' 等字符串不插值） */
const LERP_STYLE_KEYS = [
  'left',
  'top',
  'width',
  'maxWidth',
  'maxHeight',
  'bottom',
] as const

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function rectDiffers(a: DuoRect, b: DuoRect): boolean {
  return RECT_KEYS.some((k) => Math.abs(a[k] - b[k]) >= 0.5)
}

function numericStyleDiffers(a: CSSProperties, b: CSSProperties): boolean {
  return LERP_STYLE_KEYS.some((k) => {
    const av = a[k]
    const bv = b[k]
    return (
      typeof av === 'number' &&
      typeof bv === 'number' &&
      Math.abs(av - bv) >= 0.5
    )
  })
}

/**
 * 两次布局之间是否值得做过渡。
 * none 在「整窗」时 popupStyle 为空（无固定定位），与收进 base 之间无法插值，直接跳变。
 */
export function shouldAnimateDuoLayout(
  from: DuoOverlayLayoutResult,
  to: DuoOverlayLayoutResult
): boolean {
  if (!from.enabled || !to.enabled) return false
  const isFromMicroBent = from.hingeX !== null
  const isToMicroBent = to.hingeX !== null
  // 只有微弯（halfOpen）与平铺（fullyOpen）互相切换时才在左侧屏幕和中间移动；闭合到平铺等其它情况直接居中落位
  const isBetweenMicroBentAndFlat =
    (isFromMicroBent && !isToMicroBent) || (!isFromMicroBent && isToMicroBent)
  if (!isBetweenMicroBentAndFlat) return false
  return (
    rectDiffers(from.baseRect, to.baseRect) ||
    numericStyleDiffers(from.popupStyle, to.popupStyle)
  )
}

/**
 * 在 from → to 之间按 t（0~1）线性插值：baseRect 与 popupStyle 中的数值字段。
 * 直接插值 left / width，而不是叠加 transform，所以宽度变化（如 bottom 竖屏 → 半折叠横屏）
 * 也能平滑，并且不依赖「多个 transform 函数拼接」的引擎行为。
 */
export function interpolateDuoLayout(
  from: DuoOverlayLayoutResult,
  to: DuoOverlayLayoutResult,
  t: number
): DuoOverlayLayoutResult {
  if (t >= 1) return to
  const baseRect = { ...to.baseRect }
  for (const k of RECT_KEYS) {
    baseRect[k] = lerp(from.baseRect[k], to.baseRect[k], t)
  }
  const lerped: Record<string, number> = {}
  for (const k of LERP_STYLE_KEYS) {
    const av = from.popupStyle[k]
    const bv = to.popupStyle[k]
    if (typeof av === 'number' && typeof bv === 'number') {
      lerped[k] = lerp(av, bv, t)
    }
  }
  const popupStyle: CSSProperties = { ...to.popupStyle, ...lerped }
  return { ...to, baseRect, popupStyle }
}

/**
 * 锚点类浮层避开折叠中缝：浮层 [start, start+size] 不骑在中缝上。
 */
export function avoidHingeSpan(
  start: number,
  size: number,
  hingeX: number,
  anchorCenterX: number
): { start: number; shift: number } {
  const end = start + size
  if (hingeX <= start || hingeX >= end) return { start, shift: 0 }
  const next = anchorCenterX < hingeX ? hingeX - size : hingeX
  return { start: next, shift: next - start }
}
