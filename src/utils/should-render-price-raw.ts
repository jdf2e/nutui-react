const RE_NUM = /\d+(?:\.\d+)?/g

// 价格合法字符：数字、小数点、负号、大写货币代码（HK USD EUR 等）、常见货币符号 Unicode 区块（含全角 ￥）
const PRICE_CHARS = /^[\d.\-A-Z¥￥$€£₩₹₽₺₴₪฿\u20A0-\u20CF\uFE69\uFF04\uFFE5]*$/

// 无法提取出有效价格时直接按原文展示，避免把纯文案误格式化成 0 或空串
function hasNoExtractablePrice(s: string) {
  const t = s.trim()
  if (!t) return true
  if (!/\d/.test(t)) return true
  if (t.replace(/[^\d.]/g, '') === '') return true
  return false
}

// 只有两段数字之间出现非法字符时，才认为该字符串应走原样渲染
export function shouldRenderPriceAsRaw(s: string) {
  if (hasNoExtractablePrice(s)) {
    return true
  }
  const t = s.trim()
  const matches = Array.from(t.matchAll(RE_NUM))
  if (matches.length < 2) return false
  const a = matches[0]
  const b = matches[1]
  const i0 = a.index!
  const i1 = b.index!
  const between = t.slice(i0 + a[0].length, i1)
  return !PRICE_CHARS.test(between)
}

// 提供给 Price.raw 开关：调用方可用它判断整串是否包含非法字符
export function hasNonPriceChars(s: string): boolean {
  return !PRICE_CHARS.test(s)
}
