/**
 * 响应式缩放系数（--nut-scale-f）：按视口宽度计算，
 * 写入根节点 CSS 变量（--nut-scale-f / --nut-scale-font / --nut-scale-icon），
 * 供布局/字号/icon 等按比例换算（见 calcByProfile）。H5 与 Taro WebView 共用此实现。
 */
import { canUseDom } from './can-use-dom'

/** 当前基准缩放（来自视口计算） */
let scale = 1

/** 字体档位：标准、大字、老年 */
export type ScaleProfile = 'standard' | 'large' | 'elderly'
/** 不同场景可选用不同放大比例（layout 等默认可不额外放大） */
export type ScaleScene = 'layout' | 'font' | 'icon' | 'lego'
export type ScaleDevice = 'phone' | 'pad'

/** 大字模式下仅 font 场景的相对倍率 */
const LARGE_FONT_RATIO = 1.15
/** 老年模式下 font/icon/lego 场景的相对倍率 */
const ELDERLY_RATIO = 1.3

/** 全局当前档位，与 scale 共同参与 calcByProfile */
let profile: ScaleProfile = 'standard'

/** 仅 large / elderly 有效，其余一律视为 standard */
function normalizeProfile(nextProfile?: ScaleProfile) {
  if (nextProfile === 'large' || nextProfile === 'elderly') return nextProfile
  return 'standard'
}

/** 计算 CSS 变量要使用的场景缩放（基准 scale × 场景倍率） */
function getCssSceneScale(scene: ScaleScene, baseScale: number) {
  return baseScale * getSceneRatio(scene, profile)
}

/** 将缩放值同步到 :root 的 --nut-scale-f / --nut-scale-font / --nut-scale-icon */
function applyScaleCssVars(nextScale: number) {
  if (!canUseDom) return
  const rootStyle = document.documentElement.style
  rootStyle.setProperty('--nut-scale-f', formatScaleValue(nextScale))
  rootStyle.setProperty(
    '--nut-scale-font',
    formatScaleValue(getCssSceneScale('font', nextScale))
  )
  rootStyle.setProperty(
    '--nut-scale-icon',
    formatScaleValue(getCssSceneScale('icon', nextScale))
  )
}

/** >1 保留两位小数字符串；否则取整，与 CSS 消费端约定一致 */
function formatScaleValue(nextScale: number) {
  if (nextScale > 1) {
    return (Math.round(nextScale * 100) / 100).toFixed(2)
  }
  return `${Math.round(nextScale)}`
}

/** 根据屏宽粗略区分 phone / pad */
function getCurrentDevice(): ScaleDevice {
  if (!canUseDom) return 'phone'
  return window.innerWidth >= 600 ? 'pad' : 'phone'
}

/** 在 profile 与 scene 维度上叠加额外倍率（与全局 scale 相乘） */
function getSceneRatio(scene: ScaleScene, currentProfile: ScaleProfile) {
  if (
    currentProfile === 'elderly' &&
    (scene === 'font' || scene === 'icon' || scene === 'lego')
  ) {
    return ELDERLY_RATIO
  }
  if (currentProfile === 'large' && scene === 'font') {
    return LARGE_FONT_RATIO
  }
  return 1
}

/** 输出 px 等单位时的取整规则：缩放>1 或强制时保留两位小数精度 */
function roundByScaleRule(
  value: number,
  baseScale: number,
  forceKeepTwoDecimals = false
) {
  if (forceKeepTwoDecimals || baseScale > 1) {
    return Math.round(value * 100) / 100
  }
  return Math.round(value)
}

/** 按屏宽推算 scale（含平板与 375 基准窄屏区间） */
function getScaleByViewport() {
  if (!canUseDom) return 1
  const deviceWidth = window.innerWidth

  if (!deviceWidth) return 1

  if (deviceWidth >= 600) {
    return 1.2
  }

  if (deviceWidth >= 375 && deviceWidth < 600) {
    const ratio = deviceWidth / 375
    return ratio >= 1.17 ? 1.17 : ratio
  }

  return 1
}

/** 统一获取缩放：按视口规则计算 */
function getScaleF() {
  return getScaleByViewport()
}

/** 校验后更新内存中的 scale，并写入 --nut-scale-f */
function setScaleF(nextScale: number) {
  const validScale = Number.isFinite(nextScale) && nextScale > 0 ? nextScale : 1
  scale = validScale
  applyScaleCssVars(validScale)
  return scale
}

/** 重新计算缩放；可选同时切换 profile，避免与当前值相同时重复写 DOM */
function refreshScaleF(nextProfile?: ScaleProfile) {
  if (nextProfile) {
    setScaleProfile(nextProfile)
  }
  const nextScale = getScaleF()
  if (!scale || nextScale !== scale) {
    setScaleF(nextScale)
  }
  return scale
}

/** 首次计算缩放并订阅 resize；返回卸载函数（SSR 下为空函数） */
export function initScaleF(nextProfile?: ScaleProfile) {
  if (!canUseDom) return () => {}
  setScaleProfile(nextProfile)

  const handler = () => {
    refreshScaleF()
  }

  handler()
  window.addEventListener('resize', handler)

  return () => {
    window.removeEventListener('resize', handler)
  }
}

/** 更新全局 profile，并在当前 scale 下重刷 CSS 变量 */
function setScaleProfile(nextProfile?: ScaleProfile) {
  profile = normalizeProfile(nextProfile)
  // profile 切换后需要重新应用当前缩放值。
  setScaleF(scale)
  return profile
}

/** calcByProfile 的可选覆盖项：临时指定档位、场景、scale 或设备 */
type CalcByProfileOptions = {
  profile?: ScaleProfile
  scene?: ScaleScene
  scale?: number
  device?: ScaleDevice
}

/**
 * 按档位与场景将设计稿基准值换算为实际数值：base × 场景倍率 × 当前 scale，再按规则取整。
 */
export function calcByProfile(
  baseValue: number,
  options: CalcByProfileOptions = {}
) {
  const currentProfile = normalizeProfile(options.profile ?? profile)
  const scene = options.scene ?? 'layout'
  const currentScale =
    Number.isFinite(options.scale) && Number(options.scale) > 0
      ? Number(options.scale)
      : scale
  const device = options.device ?? getCurrentDevice()
  const ratio = getSceneRatio(scene, currentProfile)
  const rawValue = baseValue * ratio * currentScale
  const forceKeepTwoDecimals =
    scene === 'font' && currentProfile === 'large' && device === 'pad'
  return roundByScaleRule(rawValue, currentScale, forceKeepTwoDecimals)
}
