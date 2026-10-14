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
  const withoutFineMs = format.replace(/SSS/g, '').replace(/SS/g, '')
  if (withoutFineMs.includes('S')) return Math.floor(t / 100)
  if (format.includes('ss')) return Math.floor(t / 1000)
  if (format.includes('mm')) return Math.floor(t / (60 * 1000))
  return Math.floor(t / 1000)
}
