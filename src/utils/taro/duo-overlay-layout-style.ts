import type { CSSProperties } from 'react'
import {
  type DuoOverlayLayoutResult,
  type DuoOverlayScope,
  rectToOverlayStyle,
} from './duo-overlay-layout'

const NUMERIC_KEYS: Array<keyof CSSProperties> = [
  'top',
  'left',
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'bottom',
  'right',
]

/**
 * getSystemInfo 的 window 坐标已是布局像素，固定定位直接用 px。
 */
export function duoLayoutStyleToTaro(style: CSSProperties): CSSProperties {
  const out: CSSProperties = { ...style }
  for (const key of NUMERIC_KEYS) {
    const v = out[key]
    if (typeof v === 'number' && Number.isFinite(v)) {
      out[key] = `${v}px` as CSSProperties[typeof key]
    }
  }
  return out
}

/** scope 为 base 且 Duo 生效时，蒙层限定在 base 区域；否则返回空（沿用组件原有全窗蒙层） */
export function duoBaseMaskStyle(
  layout: DuoOverlayLayoutResult,
  scope: DuoOverlayScope | undefined
): CSSProperties {
  if (!layout.enabled || scope !== 'base') return {}
  return duoLayoutStyleToTaro(rectToOverlayStyle(layout.baseRect))
}

/** Duo 生效时的浮层内容定位样式；未生效返回空 */
export function duoContentStyle(layout: DuoOverlayLayoutResult): CSSProperties {
  return layout.enabled ? duoLayoutStyleToTaro(layout.popupStyle) : {}
}
