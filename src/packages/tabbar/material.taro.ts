import type { CSSProperties } from 'react'
import type { TaroTabbarProps } from '@/types'

export type TabbarNativePlatform = 'ios' | 'android' | 'harmony' | 'none'

export interface TabbarNativeMaterial {
  kind: TabbarNativePlatform
  solidColor: string
  borderRadius: number
  gradientBlur?: {
    minBlur: number
    maxBlur: number
    overlayAlpha: number
    overlayColor: string
  }
  liquidGlass?: {
    style: 'regular'
    interactive: boolean
    darkMode: boolean
    tintColor?: string
  }
  backdropFilter?: string
  overlayColor?: string
  blurScale?: number
  colorMode?: 'light' | 'dark'
  backgroundGradient?: string
  boxShadow?: string
}

export function getTabbarNativePlatform(
  env: string,
  device: string
): TabbarNativePlatform {
  const currentEnv = env.toUpperCase()
  const currentDevice = device.toLowerCase()
  if (['HARMONY', 'HARMONYHYBRID', 'JDHARMONY'].includes(currentEnv)) {
    return 'harmony'
  }
  if (['RN', 'JDHYBRID'].includes(currentEnv)) {
    if (currentDevice === 'ios' || currentDevice === 'android') {
      return currentDevice
    }
  }
  return 'none'
}

function getHarmonyGradient(dark: boolean) {
  const rgb = dark ? '0, 0, 0' : '255, 255, 255'
  return `linear-gradient(to bottom, rgba(${rgb}, 0.8) 0%, rgba(${rgb}, 0.8) 56%, rgba(${rgb}, 0.78) 66%, rgba(${rgb}, 0.72) 76%, rgba(${rgb}, 0.62) 86%, rgba(${rgb}, 0.49) 94%, rgba(${rgb}, 0.3) 100%)`
}

export function getTabbarNativeMaterial(
  platform: TabbarNativePlatform,
  dark: boolean,
  iosMajor = 0,
  iosMaterial: TaroTabbarProps['iosMaterial'] = 'gradient-blur'
): TabbarNativeMaterial {
  const solidColor = dark ? '#14171a' : '#ffffff'
  const base = { kind: platform, solidColor, borderRadius: 16 }
  switch (platform) {
    case 'ios':
      return {
        ...base,
        ...(iosMaterial === 'liquid-glass' && iosMajor >= 26
          ? {
              liquidGlass: {
                style: 'regular' as const,
                interactive: true,
                darkMode: dark,
                ...(dark ? {} : { tintColor: 'rgba(255, 255, 255, 0.45)' }),
              },
            }
          : {}),
        gradientBlur: {
          minBlur: 0.5,
          maxBlur: 0.8,
          overlayAlpha: 0.9,
          overlayColor: dark ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
        },
      }
    case 'android':
      return {
        ...base,
        backdropFilter: 'blur(50px)',
        overlayColor: dark
          ? 'rgba(31, 34, 38, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
      }
    case 'harmony':
      return {
        ...base,
        blurScale: 0.2,
        colorMode: dark ? 'dark' : 'light',
        backgroundGradient: getHarmonyGradient(dark),
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
      }
    default:
      return base
  }
}

export interface TabbarNativeViewProps {
  style?: CSSProperties
  gradientBlur?: TabbarNativeMaterial['gradientBlur']
  liquidGlass?: TabbarNativeMaterial['liquidGlass']
  targetId?: string
  overlayColor?: string
  blurScale?: number
  colorMode?: 'light' | 'dark'
  borderRadius?: number
}

export function getTabbarNativeViewProps(
  material: TabbarNativeMaterial,
  targetId?: string,
  skin = false
): TabbarNativeViewProps {
  const borderRadius = material.borderRadius
  if (skin && material.kind !== 'none') {
    return { style: { backgroundColor: material.solidColor, borderRadius } }
  }
  switch (material.kind) {
    case 'ios':
      return {
        liquidGlass: material.liquidGlass,
        gradientBlur: material.gradientBlur,
        style: { backgroundColor: 'transparent', borderRadius },
      }
    case 'android':
      if (!targetId) {
        return { style: { backgroundColor: material.solidColor, borderRadius } }
      }
      return {
        targetId,
        overlayColor: material.overlayColor,
        style: {
          backgroundColor: 'transparent',
          backdropFilter: material.backdropFilter,
          borderRadius,
        },
      }
    case 'harmony':
      return {
        blurScale: material.blurScale,
        colorMode: material.colorMode,
        borderRadius,
        style: {
          background: material.backgroundGradient,
          boxShadow: material.boxShadow,
          borderRadius,
        },
      }
    default:
      return {}
  }
}
