/**
 * iPhone Duo 折叠屏（仅 iOS Hybrid）
 * JDHybridScreenPlugin.listenFoldScreenChange / onFoldScreenChanged
 */

const PLUGIN = 'JDHybridScreenPlugin'
const LISTEN = 'listenFoldScreenChange'
const EVENT = 'onFoldScreenChanged'

export type FoldScreenInfo = {
  isSlightBent?: number | string | boolean
  hingeAngle?: number | string
  [key: string]: unknown
}

export type FoldSegment = 'left' | 'center'

type Listener = (info: FoldScreenInfo) => void

const listeners = new Set<Listener>()
let started = false
let lastInfo: FoldScreenInfo | null = null

const unwrap = (raw: any): FoldScreenInfo => {
  let v = typeof raw === 'string' ? safeJson(raw) : raw
  if (v?.detail != null)
    v = typeof v.detail === 'string' ? safeJson(v.detail) : v.detail
  if (v?.data != null)
    v = typeof v.data === 'string' ? safeJson(v.data) : v.data
  return v && typeof v === 'object' ? (v as FoldScreenInfo) : {}
}

const safeJson = (s: string) => {
  try {
    return JSON.parse(s)
  } catch {
    return s
  }
}

/** 微弯：isSlightBent === 1 */
export const isFoldSlightBent = (info: FoldScreenInfo) =>
  info.isSlightBent === true ||
  info.isSlightBent === 1 ||
  info.isSlightBent === '1'

/** 微弯 → left，否则 center */
export const resolveSegmentByFold = (info: FoldScreenInfo): FoldSegment =>
  isFoldSlightBent(info) ? 'left' : 'center'

export const getLastFoldScreenInfo = () => lastInfo

const emit = (raw: any) => {
  const info = unwrap(raw)
  if (info.isSlightBent === undefined && info.hingeAngle === undefined) return
  lastInfo = info
  listeners.forEach((fn) => fn(info))
}

const startNative = () => {
  if (started || typeof window === 'undefined') return
  started = true
  const win = window as any

  window.addEventListener(EVENT, emit as EventListener)
  const prev = win[EVENT]
  win[EVENT] = (r: any) => {
    prev?.(r)
    emit(r)
  }

  const call = () => {
    try {
      win.jmfe?.callNative?.(PLUGIN, LISTEN, {}, '0')
      return !!win.jmfe?.callNative
    } catch {
      return false
    }
  }
  if (!call()) {
    let n = 0
    const t = setInterval(() => {
      if (call() || ++n > 40) clearInterval(t)
    }, 250)
  }
}

/** 订阅姿态；首次 callNative 开启监听，并回放缓存 */
export const subscribeFoldScreenChange = (fn: Listener) => {
  listeners.add(fn)
  startNative()
  if (lastInfo) fn(lastInfo)
  return () => {
    listeners.delete(fn)
  }
}
