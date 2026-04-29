import { canUseDom } from './can-use-dom'

type NativeScaleResponse = {
  status?: string
  data?: {
    scale?: number | string
  }
}

type NativeCaller = (
  plugin: string,
  method: string,
  params: string,
  extra: string
) => Promise<NativeScaleResponse>

declare global {
  interface Window {
    jmfe?: {
      callNative?: NativeCaller
    }
  }
}

export let scale = 1

// 站外兜底规则：按屏宽计算缩放系数。
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

// 站内场景：优先走原生能力获取缩放系数。
async function getScaleByNative() {
  if (!canUseDom || !window.jmfe?.callNative) return null

  try {
    const res = await window.jmfe.callNative(
      'DongScreenAdapterPlugin',
      'getScale',
      JSON.stringify({}),
      ''
    )
    if (res?.status === '0' && res.data?.scale !== undefined) {
      const parsed = Number(res.data.scale)
      if (Number.isFinite(parsed) && parsed > 0) {
        return parsed
      }
    }
  } catch (error) {
    // ignore native failures and fallback to viewport rule
  }

  return null
}

// 统一对外获取缩放系数：站内优先，失败时走站外规则。
export async function getScaleF() {
  const nativeScale = await getScaleByNative()
  if (nativeScale) return nativeScale
  return getScaleByViewport()
}

// 同步设置当前缩放值，并写入 CSS 变量 --scale-f。
export function setScaleF(nextScale: number) {
  const validScale = Number.isFinite(nextScale) && nextScale > 0 ? nextScale : 1
  scale = validScale
  if (canUseDom) {
    document.documentElement.style.setProperty('--scale-f', `${validScale}`)
  }
  return scale
}

// 刷新缩放值，仅在值变化时更新，避免重复写样式。
export async function refreshScaleF() {
  const nextScale = await getScaleF()
  if (!scale || nextScale !== scale) {
    setScaleF(nextScale)
  }
  return scale
}

// 初始化缩放监听：首次执行一次，并在窗口 resize 时自动刷新。
export function initScaleF() {
  if (!canUseDom) return () => {}

  const handler = () => {
    refreshScaleF()
  }

  handler()
  window.addEventListener('resize', handler)

  return () => {
    window.removeEventListener('resize', handler)
  }
}
