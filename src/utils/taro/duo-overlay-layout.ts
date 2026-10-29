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
  splitSide?: DuoSplitSide
  windowLeft?: number
}

export type DuoOverlayScope = 'window' | 'base'

export type DuoPopupKind = 'center' | 'bottom' | 'top' | 'none'

export type DuoSplitSide = 'left' | 'right'

export interface DuoSplitScreenMetrics {
  isSplit: boolean
  splitSide: DuoSplitSide
  splitScreenWidth: number
  leftInset: number
  rightInset: number
}

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
  /**
   * 分屏所在侧（左侧分屏 'left' / 右侧分屏 'right'），未显式指定时自动从系统信息或窗口坐标推断
   */
  splitSide?: DuoSplitSide
  /**
   * 姿态分段标识（'left' | 'right' | 'center'）
   */
  segment?: string
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

/**
 * 判断当前是否处于分屏模式（如 iOS Split View / 左右分屏）。
 * 当应用窗口仅占物理整屏一部分（如 1/2 或 1/3）时，应用仅在单屏内运行，不跨越物理中缝。
 */
export function isDuoSplitScreen(info: SystemInfo): boolean {
  if (!info) return false
  const screenWidth =
    typeof info.screenWidth === 'number' ? info.screenWidth : 0
  const windowWidth =
    typeof info.windowWidth === 'number' ? info.windowWidth : 0
  const screenHeight =
    typeof info.screenHeight === 'number' ? info.screenHeight : 0
  const windowHeight =
    typeof info.windowHeight === 'number' ? info.windowHeight : 0

  if (screenWidth <= 0 || windowWidth <= 0) return false

  // 1. 左右分屏：应用窗口宽度明显小于硬件屏幕宽度（如 1/2 分屏比例约 50% < 75%）
  if (windowWidth < screenWidth * 0.75) {
    return true
  }

  // 2. 上下分屏（若支持）：应用窗口高度明显小于硬件屏幕高度
  if (
    screenHeight > 0 &&
    windowHeight > 0 &&
    windowHeight < screenHeight * 0.75
  ) {
    return true
  }

  return false
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
  if (isDuoSplitScreen(info)) return null
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

/**
 * 识别当前分屏属于左侧分屏还是右侧分屏。
 */
export function detectDuoSplitSide(
  info: SystemInfo,
  options?: DuoOverlayLayoutOptions
): DuoSplitSide {
  // 1. 显式配置优先
  if (options?.splitSide === 'left' || options?.splitSide === 'right') {
    return options.splitSide
  }
  if (
    (info as any)?.splitSide === 'left' ||
    (info as any)?.splitSide === 'right'
  ) {
    return (info as any).splitSide
  }
  if (options?.segment === 'left' || (info as any)?.segment === 'left') {
    return 'left'
  }
  if (options?.segment === 'right' || (info as any)?.segment === 'right') {
    return 'right'
  }

  const windowWidth = toCssPx(info, info.windowWidth ?? 0)
  const screenWidth =
    typeof info.screenWidth === 'number' && info.screenWidth > 0
      ? toCssPx(info, info.screenWidth)
      : windowWidth
  const halfScreen = Math.floor(screenWidth / 2)

  // 2. 根据系统信息中提供的窗口左侧偏移 windowLeft / screenLeft 判定（绝对坐标最精确）
  const rawWindowLeft =
    (info as any).windowLeft ??
    (info as any).screenLeft ??
    (info as any).windowX
  if (typeof rawWindowLeft === 'number' && Number.isFinite(rawWindowLeft)) {
    const winLeft = toCssPx(info, rawWindowLeft)
    if (winLeft >= screenWidth * 0.35) {
      return 'right'
    }
    return 'left'
  }

  // 3. 根据 DOM/BOM 中 window.screenLeft / window.screenX 判定（WebKit / WKWebView 真机标准属性）
  // 仅在真实运行期或显式 mock 时生效；测试环境下 happy-dom 默认未配置 screenLeft，跳过此步
  if (typeof window !== 'undefined') {
    const mockLeft = (window as any).__mockScreenLeft
    if (typeof mockLeft === 'number' && Number.isFinite(mockLeft)) {
      return mockLeft >= screenWidth * 0.35 ? 'right' : 'left'
    }
    if (typeof process === 'undefined' || process.env?.NODE_ENV !== 'test') {
      let domScreenLeft: number | null = null
      if (typeof window.screenLeft === 'number') {
        domScreenLeft = window.screenLeft
      } else if (typeof window.screenX === 'number') {
        domScreenLeft = window.screenX
      }
      if (typeof domScreenLeft === 'number' && Number.isFinite(domScreenLeft)) {
        if (domScreenLeft >= screenWidth * 0.35) {
          return 'right'
        }
        return 'left'
      }
    }
  }

  // 4. 根据 safeArea 判定：
  if (info.safeArea && typeof info.safeArea === 'object') {
    const safeLeft = toCssPx(info, info.safeArea.left ?? 0)
    // 若 safeArea.left 大于屏幕 1/3，说明给的是屏幕绝对坐标（右半屏起始位置）
    if (safeLeft >= screenWidth * 0.35) {
      return 'right'
    }
    // 若 safeArea.left > 0 且小于窗口宽度，说明左侧存在安全区/避让区，属于左屏
    if (safeLeft > 0 && safeLeft < windowWidth) {
      return 'left'
    }
  }

  // 5. 根据 avoidAreas 判定：
  // 在折叠双屏（如 iPhone Duo）上，物理中缝在屏幕中间（两屏之间）。
  // - 若避让区为狭窄中缝（width <= 30px）：
  //   * 位于窗口右侧边缘（left >= windowWidth * 0.7）：中缝在窗口右方，说明窗口处于【左侧分屏】；
  //   * 位于窗口最左侧（left <= windowWidth * 0.3 或 left === 0）：中缝在窗口左方，说明窗口处于【右侧分屏】。
  // - 若避让区为较宽侧边栏/导航条（width > 30px，如 84px 原生侧栏）：
  //   * 侧边栏恒在整机最右侧（右侧分屏右边缘）：避让区在窗口右侧即为【右侧分屏】；
  //   * 避让区在最左侧即为【左侧分屏】（左侧避让区）。
  if (Array.isArray(info.avoidAreas) && info.avoidAreas.length > 0) {
    for (const area of info.avoidAreas) {
      if (area) {
        const areaLeft = toCssPx(info, area.left ?? area.x ?? 0)
        const areaWidth = toCssPx(info, area.width ?? 0)
        if (areaWidth > 0) {
          if (areaWidth <= 30) {
            // 狭窄避让区：物理中缝
            if (areaLeft >= windowWidth * 0.7) {
              return 'left' // 中缝在右，说明自身在左屏
            }
            if (areaLeft === 0 || areaLeft <= windowWidth * 0.3) {
              return 'right' // 中缝在左，说明自身在右屏
            }
          } else {
            // 较宽避让区：原生导航栏/侧边栏（恒位于整机右边缘）
            if (areaLeft >= windowWidth * 0.6) {
              return 'right'
            }
            if (areaLeft === 0 || areaLeft < windowWidth * 0.3) {
              return 'left'
            }
          }
        }
      }
    }
  }

  // 6. 根据窗口宽度与单屏半宽（halfScreen）比对：
  // 右侧分屏受右侧固定导航侧栏（约 84px）占位影响，其业务窗口宽度明显小于单屏半宽（halfScreen - windowWidth >= 40）；
  // 左侧分屏无侧栏占位，其业务窗口宽度接近完整单屏半宽。
  if (halfScreen > 0 && halfScreen - windowWidth >= 40) {
    return 'right'
  }

  // 7. 启发式回退：
  // 在分屏模式下，如果无法明确识别为右侧分屏，默认按左侧分屏居中处理。
  return 'left'
}

/**
 * 分屏模式下计算左右分屏的单侧屏幕总宽度、左侧安全区和右侧安全区（CSS px）。
 */
export function resolveDuoSplitScreenMetrics(
  info: SystemInfo,
  options?: DuoOverlayLayoutOptions
): DuoSplitScreenMetrics {
  const isSplit = isDuoSplitScreen(info)
  if (!isSplit) {
    const windowWidth = toCssPx(info, info.windowWidth ?? 0)
    return {
      isSplit: false,
      splitSide: 'right',
      splitScreenWidth: windowWidth,
      leftInset: 0,
      rightInset: 0,
    }
  }

  const windowWidth = toCssPx(info, info.windowWidth ?? 0)
  const screenWidth =
    typeof info.screenWidth === 'number' && info.screenWidth > 0
      ? toCssPx(info, info.screenWidth)
      : windowWidth
  const halfScreen = Math.floor(screenWidth / 2)
  const splitSide = detectDuoSplitSide(info, options)

  let splitScreenWidth = windowWidth
  let leftInset = 0
  let rightInset = 0

  if (splitSide === 'left') {
    // 左侧分屏：应用占据左半屏，左侧无原生导航栏遮挡，全屏有效视口即为当前 windowWidth
    leftInset = 0
    rightInset = 0
    splitScreenWidth = windowWidth
  } else {
    // 右侧分屏：
    let detectedRightEdge: number | null = null
    if (Array.isArray(info.avoidAreas) && info.avoidAreas.length > 0) {
      for (const area of info.avoidAreas) {
        if (area) {
          const areaLeft = toCssPx(info, area.left ?? area.x ?? 0)
          const areaWidth = toCssPx(info, area.width ?? 0)
          const areaRight = areaLeft + areaWidth
          if (areaLeft >= windowWidth * 0.6 && areaRight > windowWidth) {
            detectedRightEdge = areaRight
            break
          }
        }
      }
    }

    if (detectedRightEdge != null) {
      splitScreenWidth = Math.max(halfScreen, detectedRightEdge)
      rightInset = splitScreenWidth - windowWidth
    } else {
      splitScreenWidth = Math.max(halfScreen, windowWidth)
      rightInset = Math.max(0, splitScreenWidth - windowWidth)
    }
    leftInset = 0
  }

  return {
    isSplit: true,
    splitSide,
    splitScreenWidth,
    leftInset,
    rightInset,
  }
}

/**
 * 分屏模式下计算覆盖安全区后的单侧屏幕总宽度（CSS px）。
 */
export function resolveDuoSplitScreenWidth(
  info: SystemInfo,
  options?: DuoOverlayLayoutOptions
): number {
  return resolveDuoSplitScreenMetrics(info, options).splitScreenWidth
}

export function resolveDuoOverlayLayout(
  info: SystemInfo,
  kind: DuoPopupKind,
  options?: DuoOverlayLayoutOptions
): DuoOverlayLayoutResult {
  const enabled = isDuoLayoutEnabled(info)
  const isSplit = isDuoSplitScreen(info)

  if (enabled && isSplit) {
    // 分屏模式（应用仅占单侧屏幕）：
    // 1. 蒙层覆盖安全区（options.navigationBarHidden 为 true）时：
    //    以包含安全区的单侧屏幕全宽为基准，保持弹层在包含安全区（左侧分屏或右侧分屏）的全视口内严格居中；
    // 2. 蒙层未覆盖安全区（options.navigationBarHidden 为 false/未激活）时：
    //    保持原有居中实现（popupStyle 为空，按实际业务 windowWidth 通过 CSS left: 50% 居中）。
    const isMaskCoveringSafeArea = !!options?.navigationBarHidden
    if (isMaskCoveringSafeArea) {
      const splitMetrics = resolveDuoSplitScreenMetrics(info, options)
      const layoutInfo = {
        ...info,
        windowWidth: splitMetrics.splitScreenWidth,
      } as SystemInfo
      const windowRect: DuoRect = {
        left: 0,
        top: 0,
        width: splitMetrics.splitScreenWidth,
        height: toCssPx(info, info.windowHeight ?? 0),
      }
      const baseRect: DuoRect = {
        left: -splitMetrics.leftInset || 0,
        top: 0,
        width: splitMetrics.splitScreenWidth,
        height: windowRect.height,
      }
      const scope = options?.overlayScope ?? 'window'
      const overlayRect = computeOverlayRect(windowRect, baseRect, scope)
      const popupStyle =
        kind === 'center' ||
        kind === 'bottom' ||
        kind === 'top' ||
        kind === 'none'
          ? computePopupStyle(kind, layoutInfo, baseRect, options)
          : {}
      if (kind === 'center' && splitMetrics.splitSide === 'left') {
        // 左侧分屏：使用 50% 严格在当前左屏视口内居中
        popupStyle.left = '50%'
      }
      return {
        enabled: true,
        windowRect,
        baseRect,
        overlayRect,
        popupStyle,
        hingeX: null,
      }
    }

    // 蒙层未覆盖安全区：维持当前基于实际业务 windowWidth 的居中实现
    const windowRect = windowRectFromInfo(info)
    return {
      enabled: false,
      windowRect,
      baseRect: windowRect,
      overlayRect: windowRect,
      popupStyle: {},
      hingeX: null,
    }
  }

  // 导航栏隐藏后，原生全窗蒙层包含侧栏区域，但 getSystemInfo 的 windowWidth
  // 仍可能是业务页宽（实测 867，screen 951）。只在覆盖成功时扩大横向基准，
  // 不改窗口高度；半折叠的 base 仍由物理中缝约束，而不是把内容铺满两侧。
  const screenWidth = info.screenWidth
  const windowWidth = info.windowWidth ?? 0
  // 仅在全屏展开模式且仅差侧边栏宽度（差值不超过 160px，即 windowWidth >= screenWidth * 0.75）时，
  // 才用 screenWidth 扩大横向基准覆盖导航栏。分屏模式（如 windowWidth 为 screenWidth 一半）绝不能替换！
  const isSidebarDiff =
    typeof screenWidth === 'number' &&
    Number.isFinite(screenWidth) &&
    screenWidth > windowWidth &&
    screenWidth - windowWidth <= 160
  const layoutInfo =
    enabled && options?.navigationBarHidden && isSidebarDiff
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
 * 闭合和平铺状态均要求直接居中展示，不需要动效滑动到居中状态；
 * 仅在由居中形态切换到微弯形态（to.hingeX !== null）时允许平滑过渡到左侧屏。
 */
export function shouldAnimateDuoLayout(
  from: DuoOverlayLayoutResult,
  to: DuoOverlayLayoutResult
): boolean {
  if (!from.enabled || !to.enabled) return false
  const isFromMicroBent = from.hingeX !== null
  const isToMicroBent = to.hingeX !== null

  // 目标状态为闭合或平铺（居中展示）时，直接展示居中，不需要动效滑动到居中状态
  if (!isToMicroBent) return false

  // 仅在从居中状态进入微弯状态时过渡
  if (!isFromMicroBent) {
    return (
      rectDiffers(from.baseRect, to.baseRect) ||
      numericStyleDiffers(from.popupStyle, to.popupStyle)
    )
  }

  return false
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
