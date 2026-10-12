import type { MaterialScene, FrostedPreset } from './types'

// 场景圆角（悬浮容器 8px、背板 0px）
export function getCornerRadius(scene: MaterialScene): number {
  switch (scene) {
    case 'top-bar':
    case 'bottom-bar':
      return 0
    case 'top-solid':
    case 'top-plain':
    case 'promotion-fair':
    case 'promotion-deep':
    case 'immersive':
      return 8
    default:
      return 0
  }
}

// H5 毛玻璃规范内发光阴影（PX 大写防 postcss 转换）
const SHADOW_LIGHT =
  '0 2PX 4PX rgba(0, 0, 0, 0.06), inset -0.5PX -0.5PX 0.5PX rgba(255, 255, 255, 0.4), inset 0.5PX 0.5PX 0.5PX #fff, inset 1PX 1PX 5PX rgba(45, 45, 45, 0.04)'
const SHADOW_DARK =
  '0 2PX 4PX rgba(0,0,0,0.06), inset -0.5PX -0.5PX 0.5PX rgba(255,255,255,0.1), inset 0.5PX 0.5PX 0.5PX rgba(255,255,255,0.4), inset 1PX 1PX 5PX rgba(45,45,45,0.08)'

/**
 * 解析场景毛玻璃预设：
 * - blurRadius: 数值（消费端拼 PX 大写单位）
 * - 纯白/暗黑/沉浸式场景补充内发光 boxShadow；换肤/透明场景无发光阴影
 */
export function getFrostedPreset(
  scene: MaterialScene,
  dark: boolean
): FrostedPreset {
  const borderRadius = getCornerRadius(scene)
  switch (scene) {
    case 'top-solid':
      return {
        blurRadius: 3,
        borderRadius,
        tintColor: dark ? 'rgba(20, 23, 26, 0.6)' : 'rgba(255, 255, 255, 0.65)',
        boxShadow: dark ? SHADOW_DARK : SHADOW_LIGHT,
      }

    case 'top-plain':
      return { blurRadius: 0, borderRadius }

    case 'top-bar':
      return {
        blurRadius: 10,
        borderRadius: 0,
        tintColor: dark ? 'rgba(20, 23, 26, 0.85)' : 'rgba(255, 255, 255, 0.9)',
      }

    case 'promotion-fair':
      return {
        blurRadius: 3,
        borderRadius,
        tintColor: 'rgba(255, 255, 255, 0.85)',
      }

    case 'promotion-deep':
      return {
        blurRadius: 3,
        borderRadius,
        tintColor: 'rgba(255, 255, 255, 0.2)',
      }

    case 'immersive':
      return {
        blurRadius: 3,
        borderRadius,
        tintColor: 'rgba(20, 23, 26, 0.6)',
        boxShadow: SHADOW_DARK,
      }

    case 'bottom-bar':
      return {
        blurRadius: 3,
        borderRadius,
        tintColor: dark ? 'rgba(20, 23, 26, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      }

    default:
      return { blurRadius: 3, borderRadius }
  }
}

/**
 * 场景 -> 毛玻璃规范类名
 */
export function getMaterialClassName(
  scene: MaterialScene,
  dark: boolean
): string | null {
  switch (scene) {
    case 'top-solid':
      return dark ? 'FG-Dark-PX' : 'FG-Light-PX'
    case 'top-plain':
      return 'FG-Clear-PX'
    case 'immersive':
      return 'FG-Dark-PX'
    case 'promotion-fair':
      return 'FG-Skin-L-PX'
    case 'promotion-deep':
      return 'FG-Skin-D-PX'
    default:
      return null
  }
}
