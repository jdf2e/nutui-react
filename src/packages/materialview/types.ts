import { BasicComponent } from '@/utils/typings'

/** 材质场景（7 种，业务按场景选用）：
 * - top-solid       浅色背景悬浮容器（带实色底 + 内发光）
 * - top-plain       白色背景高透悬浮容器（透明容器，无填充）
 * - top-bar         吸顶背板（纯色毛玻璃，无内发光）
 * - promotion-fair  浅色换肤悬浮容器
 * - promotion-deep  深色换肤悬浮容器
 * - immersive       沉浸式悬浮容器（暗色）
 * - bottom-bar      底部导航背板
 */
export type MaterialScene =
  | 'top-solid'
  | 'top-plain'
  | 'top-bar'
  | 'promotion-fair'
  | 'promotion-deep'
  | 'immersive'
  | 'bottom-bar'

/**
 * FrostedGlassConfig 毛玻璃配置
 */
export interface FrostedGlassConfig {
  style:
    | 'ultra-thin-light'
    | 'ultra-thin-dark'
    | 'thin-light'
    | 'thin-dark'
    | 'regular-light'
    | 'regular-dark'
    | 'thick-light'
    | 'thick-dark'
    | 'chrome-light'
    | 'chrome-dark'
  alpha?: number
}

/**
 * GradientBlurConfig 渐变模糊配置
 */
export interface GradientBlurConfig {
  /** 底端模糊强度比例 [0,1]，未设置为 0 */
  minBlur?: number
  /** 顶端模糊强度比例 [0,1]，未设置为 0 */
  maxBlur?: number
  /** 颜色渐变遮罩的透明度 [0,1]，未设置为 0 */
  overlayAlpha?: number
  /** 颜色遮罩色值 */
  overlayColor?: string
}

/**
 * MaterialView 属性
 */
export interface MaterialViewProps extends BasicComponent {
  /** 材质场景，7 种见 MaterialScene */
  scene?: MaterialScene
  /** 模糊标识/ID（可选） */
  targetId?: string
  /** 暗色模式开关（可选，未设置时自动跟随系统主题） */
  darkMode?: boolean
  /** 自定义毛玻璃配置 */
  frostedGlass?: FrostedGlassConfig
  /** 自定义渐变模糊配置 */
  gradientBlur?: GradientBlurConfig
  /** 自定义叠加色 */
  overlayColor?: string
}

export interface FrostedPreset {
  /** 模糊半径（数值，消费侧拼为 blur(NPX)，大写 PX 防 postcss 转换） */
  blurRadius: number
  /** 圆角 px */
  borderRadius: number
  /** 叠加色（含 alpha） */
  tintColor?: string
  /** 多层 inset 内发光阴影 */
  boxShadow?: string
}
