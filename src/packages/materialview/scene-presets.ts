import type { MaterialScene, FrostedPreset } from './types'

interface ScenePresetItem {
  blur: number
  radius: number
  tint?: [light: string, dark?: string]
  shadow?: [light?: string, dark?: string]
  cls?: [light: string, dark?: string]
}

const PRESET_MAP: Record<MaterialScene, ScenePresetItem> = {
  'top-solid': {
    blur: 3,
    radius: 8,
    tint: [
      'var(--nut-material-tint-top-solid, rgba(255, 255, 255, 0.65))',
      'var(--nut-material-tint-top-solid-dark, rgba(20, 23, 26, 0.6))',
    ],
    shadow: [
      'var(--nut-material-shadow-top-solid, var(--nut-material-shadow-light))',
      'var(--nut-material-shadow-top-solid-dark, var(--nut-material-shadow-dark))',
    ],
    cls: ['FG-Light-PX', 'FG-Dark-PX'],
  },
  'top-plain': {
    blur: 0,
    radius: 8,
    tint: ['var(--nut-material-tint-top-plain, rgba(255, 255, 255, 0.05))'],
    shadow: ['var(--nut-material-shadow-top-plain)'],
    cls: ['FG-Clear-PX', 'FG-Clear-PX'],
  },
  'top-bar': {
    blur: 10,
    radius: 0,
    tint: [
      'var(--nut-material-tint-top-bar, rgba(255, 255, 255, 0.9))',
      'var(--nut-material-tint-top-bar-dark, rgba(20, 23, 26, 0.85))',
    ],
  },
  'promotion-fair': {
    blur: 3,
    radius: 8,
    tint: [
      'var(--nut-material-tint-promotion-fair, rgba(255, 255, 255, 0.85))',
    ],
    cls: ['FG-Skin-L-PX', 'FG-Skin-L-PX'],
  },
  'promotion-deep': {
    blur: 3,
    radius: 8,
    tint: ['var(--nut-material-tint-promotion-deep, rgba(255, 255, 255, 0.2))'],
    cls: ['FG-Skin-D-PX', 'FG-Skin-D-PX'],
  },
  immersive: {
    blur: 3,
    radius: 8,
    tint: ['var(--nut-material-tint-immersive, rgba(20, 23, 26, 0.6))'],
    shadow: [
      'var(--nut-material-shadow-immersive, var(--nut-material-shadow-dark))',
      'var(--nut-material-shadow-immersive, var(--nut-material-shadow-dark))',
    ],
    cls: ['FG-Dark-PX', 'FG-Dark-PX'],
  },
  'bottom-bar': {
    blur: 3,
    radius: 0,
    tint: [
      'var(--nut-material-tint-bottom-bar, rgba(255, 255, 255, 0.8))',
      'var(--nut-material-tint-bottom-bar-dark, rgba(20, 23, 26, 0.8))',
    ],
  },
}

// 场景圆角（悬浮容器 8px、背板 0px）
export function getCornerRadius(scene: MaterialScene): number {
  return PRESET_MAP[scene]?.radius ?? 0
}

/**
 * 解析场景毛玻璃预设（已 CSS 变量化，支持动态主题替换与打包轻量化）
 */
export function getFrostedPreset(
  scene: MaterialScene,
  dark: boolean
): FrostedPreset {
  const item = PRESET_MAP[scene]
  if (!item) {
    return { blurRadius: 3, borderRadius: 0 }
  }
  const idx = dark ? 1 : 0
  const tintColor = item.tint ? (item.tint[idx] ?? item.tint[0]) : undefined
  const boxShadow = item.shadow
    ? (item.shadow[idx] ?? item.shadow[0])
    : undefined

  return {
    blurRadius: item.blur,
    borderRadius: item.radius,
    tintColor,
    boxShadow,
  }
}

/**
 * 场景 -> 毛玻璃规范类名
 */
export function getMaterialClassName(
  scene: MaterialScene,
  dark: boolean
): string | null {
  const item = PRESET_MAP[scene]
  if (!item?.cls) return null
  return (dark ? item.cls[1] : item.cls[0]) ?? item.cls[0]
}
