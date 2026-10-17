const CJK = /[\u4E00-\u9FFF]/
const RE_NUM = /\d+(?:\.\d+)?/g

function hasNoExtractablePrice(s: string) {
  const t = s.trim()
  if (!t) return true
  if (!/\d/.test(t)) return true
  if (t.replace(/[^\d.]/g, '') === '') return true
  return false
}

export function shouldRenderPriceAsRaw(s: string) {
  if (hasNoExtractablePrice(s)) {
    return true
  }
  const t = s.trim()
  if (!CJK.test(t)) return false
  const matches = Array.from(t.matchAll(RE_NUM))
  if (matches.length < 2) return false
  const a = matches[0]
  const b = matches[1]
  const i0 = a.index!
  const i1 = b.index!
  const between = t.slice(i0 + a[0].length, i1)
  return CJK.test(between)
}
