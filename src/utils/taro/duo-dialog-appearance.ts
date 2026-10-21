import Taro from '@tarojs/taro'

/**
 * iOS Duo 弹层期间屏蔽导航栏（侧边栏）：
 * Taro.JDNavigationBar.setIOSDialogAppearanceSync({ active, viewBackgroundColor })
 * - active: true  隐藏整个导航栏及返回按钮，并把原生页面背景设为 viewBackgroundColor（#RRGGBB / #RRGGBBAA）
 * - active: false 结束覆盖并恢复，重复关闭安全
 * - 同步接口，仅返回值严格等于 true 才算成功；失败时不改任何状态
 *
 * 多个弹层同时打开（弹层上再弹 Dialog / Toast）时用栈管理：
 * 栈从空变非空才调 active:true，之后只更新颜色（取栈顶）；栈清空才调 active:false。
 */

/** 与蒙层默认色一致：rgba(0,0,0,0.7) / 深色 rgba(20,20,20,0.7) */
export const DUO_MASK_COLOR_LIGHT = '#000000B3'
export const DUO_MASK_COLOR_DARK = '#141414B3'

const NAMED_COLORS: Record<string, string> = {
  red: '#FF0000',
  black: '#000000',
  white: '#FFFFFF',
  transparent: '#00000000',
  blue: '#0000FF',
  green: '#008000',
  gray: '#808080',
  grey: '#808080',
}

const toHex2 = (n: number) =>
  Math.max(0, Math.min(255, Math.round(n)))
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()

const parseAlpha = (raw: string | undefined): number | null => {
  if (raw == null || raw === '') return 1
  const text = raw.trim()
  const value = text.endsWith('%') ? parseFloat(text) / 100 : parseFloat(text)
  if (!Number.isFinite(value)) return null
  return Math.max(0, Math.min(1, value))
}

/**
 * 把 CSS 颜色转成接口要求的 #RRGGBB / #RRGGBBAA（透明度在末尾，与 CSS 8 位 hex 一致）。
 * 支持 #rgb / #rgba / #rrggbb / #rrggbbaa / rgb() / rgba() 以及基础命名颜色。
 */
export function toNativeMaskColor(input: unknown): string | undefined {
  if (typeof input !== 'string') return undefined
  const text = input.trim()
  if (!text) return undefined

  const named = NAMED_COLORS[text.toLowerCase()]
  if (named) return named

  const hex = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(text)
  if (hex) {
    let digits = hex[1]
    if (digits.length <= 4) {
      digits = digits
        .split('')
        .map((c) => c + c)
        .join('')
    }
    return `#${digits.toUpperCase()}`
  }

  const rgb =
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+%?)\s*)?\)$/i.exec(
      text
    )
  if (rgb) {
    const alpha = parseAlpha(rgb[4])
    if (alpha == null) return undefined
    const base = `#${toHex2(+rgb[1])}${toHex2(+rgb[2])}${toHex2(+rgb[3])}`
    return alpha >= 1 ? base : `${base}${toHex2(alpha * 255)}`
  }
  return undefined
}

/** 蒙层色：优先取业务 overlayStyle.backgroundColor（可转换时），否则按主题取默认色 */
export function resolveDuoMaskColor(
  customBackground: unknown,
  theme?: string
): string {
  return (
    toNativeMaskColor(customBackground) ??
    (theme === 'dark' ? DUO_MASK_COLOR_DARK : DUO_MASK_COLOR_LIGHT)
  )
}

function getGlobalRoot(): any {
  if (typeof window !== 'undefined') return window
  if (typeof globalThis !== 'undefined') return globalThis
  return undefined
}

/**
 * 直接调用 Taro.JDNavigationBar.setIOSDialogAppearanceSync（严格对齐官方规范）
 */
export function callIOSDialogAppearanceSync(
  active: boolean,
  viewBackgroundColor?: string | null
): boolean {
  try {
    const root = getGlobalRoot()
    const taroObj = (Taro as any) || root?.Taro

    const nav =
      taroObj?.JDNavigationBar ||
      root?.JDNavigationBar ||
      taroObj?.jdNavigationBar

    const fn =
      nav?.setIOSDialogAppearanceSync || taroObj?.setIOSDialogAppearanceSync
    if (typeof fn === 'function') {
      const payload = active
        ? {
            active: true,
            viewBackgroundColor: viewBackgroundColor || '#000000B3',
          }
        : { active: false }
      const res = fn.call(nav || taroObj, payload)
      return res !== false
    }
  } catch {
    // 忽略异常
  }
  return false
}

interface StackEntry {
  id: number
  color: string
}

// 挂在 globalThis 上：与 jdtaro-ui 及 Picker 等其它库共享同一个栈，
// 多个弹层叠加时，最后一个关闭才恢复导航栏。
interface SharedAppearanceState {
  stack: StackEntry[]
  seq: number
  applied: boolean
  restoreTimer?: ReturnType<typeof setTimeout>
  restoreAttempts?: number
}

const SHARED_KEY = '__JD_DUO_DIALOG_APPEARANCE__'
const globalStore = globalThis as unknown as Record<
  string,
  SharedAppearanceState | undefined
>
const shared: SharedAppearanceState =
  globalStore[SHARED_KEY] ||
  (globalStore[SHARED_KEY] = { stack: [], seq: 0, applied: false })
const stack = shared.stack

/** 只在原生覆盖成功时返回 true；供布局区分业务页宽与含侧栏的全窗宽。 */
export function isDuoDialogAppearanceActive(): boolean {
  return shared.applied
}

const RESTORE_RETRY_MS = 250
const MAX_RESTORE_RETRIES = 3

function cancelRestoreRetry() {
  if (shared.restoreTimer != null) {
    clearTimeout(shared.restoreTimer)
    shared.restoreTimer = undefined
  }
}

function scheduleRestoreRetry() {
  if (
    !shared.applied ||
    stack.length ||
    (shared.restoreAttempts ?? 0) >= MAX_RESTORE_RETRIES
  )
    return
  shared.restoreAttempts = (shared.restoreAttempts ?? 0) + 1
  shared.restoreTimer = setTimeout(() => {
    shared.restoreTimer = undefined
    if (!stack.length && shared.applied) flush()
  }, RESTORE_RETRY_MS)
}

function flush() {
  cancelRestoreRetry()
  const top = stack[stack.length - 1]
  try {
    if (top) {
      const ok = callIOSDialogAppearanceSync(true, top.color)
      if (ok) {
        shared.applied = true
      }
    } else if (shared.applied) {
      const ok = callIOSDialogAppearanceSync(false)
      if (ok) {
        shared.applied = false
        shared.restoreAttempts = 0
      }
    }
  } catch {
    // 接口异常不影响弹层本身；恢复失败仍保留真实状态，并有界重试。
  }
  scheduleRestoreRetry()
}

export interface DuoDialogAppearanceHandle {
  update: (color: string) => void
  release: () => void
}

/** 登记一个弹层：屏蔽导航栏并设置背景色。返回的 release 幂等。 */
export function acquireDuoDialogAppearance(
  color: string
): DuoDialogAppearanceHandle {
  cancelRestoreRetry()
  shared.restoreAttempts = 0
  const entry: StackEntry = { id: ++shared.seq, color }
  stack.push(entry)
  flush()
  return {
    update(next) {
      if (entry.color === next || !stack.includes(entry)) return
      entry.color = next
      flush()
    },
    release() {
      const index = stack.indexOf(entry)
      if (index < 0) return
      stack.splice(index, 1)
      flush()
    },
  }
}
