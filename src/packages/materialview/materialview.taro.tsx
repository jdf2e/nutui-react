import React, {
  FunctionComponent,
  useMemo,
  useState,
  useEffect,
  useCallback,
  CSSProperties,
} from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import {
  MaterialViewProps,
  FrostedGlassConfig,
  GradientBlurConfig,
  FrostedPreset,
} from './types'

const SHADOW_LIGHT =
  '0 2PX 4PX rgba(0, 0, 0, 0.06), inset -0.5PX -0.5PX 0.5PX rgba(255, 255, 255, 0.4), inset 0.5PX 0.5PX 0.5PX #fff, inset 1PX 1PX 5PX rgba(45, 45, 45, 0.04)'
const SHADOW_DARK =
  '0 2PX 4PX rgba(0,0,0,0.06), inset -0.5PX -0.5PX 0.5PX rgba(255,255,255,0.1), inset 0.5PX 0.5PX 0.5PX rgba(255,255,255,0.4), inset 1PX 1PX 5PX rgba(45,45,45,0.08)'

function getCornerRadius(
  scene: NonNullable<MaterialViewProps['scene']>
): number {
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

function getFrostedPreset(
  scene: NonNullable<MaterialViewProps['scene']>,
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
        borderRadius,
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

function getMaterialClassName(
  scene: NonNullable<MaterialViewProps['scene']>,
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

const defaultProps = {
  ...ComponentDefaults,
} as Partial<MaterialViewProps>

function readDark(): boolean {
  try {
    const info = Taro.getSystemInfoSync()
    return (
      String((info as { theme?: string })?.theme || '').toLowerCase() === 'dark'
    )
  } catch {
    return false
  }
}

function getBlurRadius(config: FrostedGlassConfig): number {
  if (config.style.startsWith('thin')) return 10
  if (config.style.startsWith('thick')) return 40
  return 20
}

function getGradientStyle(config: GradientBlurConfig): CSSProperties {
  const s: CSSProperties = {}
  const max = config.maxBlur ?? 0
  if (max > 0) {
    s.backdropFilter = `blur(${max * 50}px)`
    s.WebkitBackdropFilter = `blur(${max * 50}px)`
  }
  if (config.overlayAlpha && config.overlayAlpha > 0) {
    const color = config.overlayColor || 'rgba(255,255,255,1)'
    s.backgroundColor = color
    s.opacity = config.overlayAlpha
  }
  return s
}

export const MaterialView: FunctionComponent<
  Partial<MaterialViewProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    children,
    scene,
    targetId,
    darkMode,
    frostedGlass,
    gradientBlur,
    overlayColor,
    ...rest
  } = { ...defaultProps, ...props }

  const [systemDark, setSystemDark] = useState<boolean>(() => readDark())
  const handleThemeChange = useCallback((res: string | { theme?: string }) => {
    const theme = typeof res === 'string' ? res : String(res?.theme || '')
    setSystemDark(theme.toLowerCase() === 'dark')
  }, [])

  useEffect(() => {
    try {
      Taro.onThemeChange?.(handleThemeChange)
    } catch {
      // 忽略平台不支持情况
    }
    return () => {
      try {
        Taro.offThemeChange?.(handleThemeChange)
      } catch {
        // 忽略
      }
    }
  }, [handleThemeChange])

  const dark = darkMode !== undefined ? darkMode : systemDark

  const classPrefix = 'nut-materialview'
  const materialCls = scene ? getMaterialClassName(scene, dark) : null
  const cls = classNames(classPrefix, materialCls, className)

  const computedStyle = useMemo<CSSProperties>(() => {
    const s: CSSProperties = { ...style }

    if (scene) {
      const preset = getFrostedPreset(scene, dark)

      if (!materialCls) {
        if (preset.blurRadius > 0) {
          s.backdropFilter = `blur(${preset.blurRadius}PX)`
          s.WebkitBackdropFilter = `blur(${preset.blurRadius}PX)`
        }
        if (preset.tintColor !== undefined && s.backgroundColor === undefined) {
          s.backgroundColor = preset.tintColor
        }
        if (preset.boxShadow !== undefined && s.boxShadow === undefined) {
          s.boxShadow = preset.boxShadow
        }
      }
      if (s.borderRadius === undefined) {
        s.borderRadius = `${preset.borderRadius}px`
      }
    } else if (frostedGlass) {
      const radius = getBlurRadius(frostedGlass)
      s.backdropFilter = `blur(${radius}px)`
      s.WebkitBackdropFilter = `blur(${radius}px)`
      if (frostedGlass.alpha !== undefined) {
        s.opacity = frostedGlass.alpha
      }
      const isDark = frostedGlass.style.endsWith('-dark')
      if (!s.backgroundColor) {
        s.backgroundColor = isDark
          ? 'rgba(0, 0, 0, 0.3)'
          : 'rgba(255, 255, 255, 0.3)'
      }
    } else if (gradientBlur) {
      Object.assign(s, getGradientStyle(gradientBlur))
    }

    if (overlayColor) {
      s.backgroundColor = overlayColor
    }

    return s
  }, [
    style,
    scene,
    dark,
    materialCls,
    frostedGlass,
    gradientBlur,
    overlayColor,
  ])

  return (
    <View
      className={cls}
      style={computedStyle}
      data-target-id={targetId}
      {...(rest as any)}
    >
      {children}
    </View>
  )
}

MaterialView.displayName = 'NutMaterialView'
