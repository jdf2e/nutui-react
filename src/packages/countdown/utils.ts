import { CountDownTime } from '@/types'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/**
 * 将剩余毫秒拆成 d/h/m/s/ms（不做 format 进位）。
 */
export const parseRemainTime = (t: number): CountDownTime => {
  const rest: CountDownTime = { d: 0, h: 0, m: 0, s: 0, ms: 0 }
  const ts = t
  if (ts > 0) {
    rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0
    rest.h = Math.floor((ts % DAY) / HOUR)
    rest.m = Math.floor((ts % HOUR) / MINUTE)
    rest.s = Math.floor((ts % MINUTE) / SECOND)
    rest.ms = Math.floor(ts % SECOND)
  }
  return rest
}

/**
 * 按 format 缺省单位向上进位（与 H5 展示逻辑一致）：
 * 无 DD → 天折进小时；无 HH → 小时折进分钟；以此类推。
 */
export const applyFormatCarry = (
  time: CountDownTime,
  format: string
): CountDownTime => {
  let { d, h, m, s, ms } = time
  if (!format.includes('DD')) {
    h += Number(d) * 24
    d = 0
  }
  if (!format.includes('HH')) {
    m += Number(h) * 60
    h = 0
  }
  if (!format.includes('mm')) {
    s += Number(m) * 60
    m = 0
  }
  if (!format.includes('ss')) {
    ms += Number(s) * 1000
    s = 0
  }
  return { d, h, m, s, ms }
}

/**
 * 按 format 最细展示单位得到剩余时间的「展示档」桶值，
 * 用于 RAF 下仅在展示变化时触发 setState。
 */
export const getDisplayBucket = (
  remainTime: number,
  format: string
): number => {
  const t = Math.max(remainTime, 0)
  if (format.includes('SSS')) return t
  if (format.includes('SS')) return Math.floor(t / 10)
  if (format.includes('i')) return Math.floor(t / 100)
  // SSS / SS 已提前返回，此处 S 即为个位百分秒
  if (format.includes('S')) return Math.floor(t / 100)
  if (format.includes('ss')) return Math.floor(t / 1000)
  if (format.includes('mm')) return Math.floor(t / (60 * 1000))
  return Math.floor(t / 1000)
}
