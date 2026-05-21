/**
 * 仅在发布构建链路中（内存里）把组件 SCSS 声明值里的裸 Npx 转为 scale-px(Npx)，
 * 与 .cursor/skills/nutui-proportional-scaling/SKILL.md 约定一致；不修改磁盘上的源文件。
 *
 * 规则摘要：
 * - 仅处理 Declaration，不处理 @media 等 at-rule 参数（避免断点被 scale）。
 * - 跳过 font-size、font、以及自定义属性 --*。
 * - 整段保留 scale-font-px(...) / scale-icon-px(...)；已写的 scale-px(...) 不嵌套。
 * - 数值 0 的 px → 字面量 0（不写 scale-px(0px)）。
 * - 已是 calc(Npx * var(--nut-scale-f,...)) 的不再包 scale-px。
 * - 含 Sass 变量 $ 且含除法 / 的 calc(...) 整段先占位再替换 px（避免 calc($var / 2) 被 postcss-scss 拆坏）。
 */
const postcss = require('postcss')
const postcssScss = require('postcss-scss')

const PROP_SKIP = new Set(['font-size', 'font'])

function matchingCloseParen(str, openParenIdx) {
  let depth = 1
  for (let i = openParenIdx + 1; i < str.length; i++) {
    const c = str[i]
    if (c === '(') depth++
    else if (c === ')') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

/** 最左侧的「体内不含 calc(」的 calc 块（同一层里先处理最左） */
function findInnermostCalcRange(str) {
  let best = null
  let scan = 0
  const lower = str.toLowerCase()
  while (true) {
    const idx = lower.indexOf('calc(', scan)
    if (idx === -1) break
    const openParen = idx + 4
    const close = matchingCloseParen(str, openParen)
    if (close < 0) {
      scan = idx + 5
      continue
    }
    const body = str.slice(openParen + 1, close)
    if (!body.toLowerCase().includes('calc(')) {
      if (!best || idx < best.start) {
        best = { start: idx, end: close + 1, body }
      }
    }
    scan = idx + 5
  }
  return best
}

/** 体内同时有 $ 与 / 时整段保护（典型：calc(#{$var} / 2)） */
function shouldProtectCalcBody(body) {
  return /\$/.test(body) && /\//.test(body)
}

function protectCalcsForPxPass(value) {
  const saved = []
  let v = value
  while (true) {
    const m = findInnermostCalcRange(v)
    if (!m) break
    if (!shouldProtectCalcBody(m.body)) break
    saved.push(v.slice(m.start, m.end))
    v = `${v.slice(0, m.start)}__NUT_CALC_${saved.length - 1}__${v.slice(m.end)}`
  }
  return { value: v, saved }
}

function restoreCalcs(value, saved) {
  let out = value
  for (let i = saved.length - 1; i >= 0; i--) {
    out = out.split(`__NUT_CALC_${i}__`).join(saved[i])
  }
  return out
}

function wrapBarePxInSegment(seg) {
  return seg.replace(
    /(-?\d*\.?\d+)px\b(?!\s*\*\s*var\(\s*--nut-scale-f)/g,
    (full, numStr) => {
      const n = parseFloat(numStr)
      if (!Number.isFinite(n) || n === 0) return '0'
      return `scale-px(${numStr}px)`
    },
  )
}

/** 在非 scale-px(...) 段内包裸 px */
function transformScalePxChunks(chunk) {
  return chunk.split(/(\bscale-px\s*\([^)]*\))/g).map((part, i) => {
    if (i % 2 === 1) return part
    return wrapBarePxInSegment(part)
  }).join('')
}

function transformDeclValue(value) {
  if (value == null || !/[\d.]+\s*px/i.test(value)) return value
  const { value: v1, saved } = protectCalcsForPxPass(value)
  let out = v1
    .split(/(\bscale-(?:font|icon)-px\s*\([^)]*\))/g)
    .map((outer, oi) => {
      if (oi % 2 === 1) return outer
      return transformScalePxChunks(outer)
    })
    .join('')
  return restoreCalcs(out, saved)
}

function pxToScalePxInComponentScssPlugin() {
  return {
    postcssPlugin: 'nutui-px-to-scale-px-in-component-scss',
    Once(root) {
      root.walkDecls((decl) => {
        const prop = decl.prop.toLowerCase()
        if (PROP_SKIP.has(prop)) return
        if (decl.prop.startsWith('--')) return
        decl.value = transformDeclValue(decl.value)
      })
    },
  }
}

function pxToScalePxInComponentScss(source) {
  const result = postcss([pxToScalePxInComponentScssPlugin()]).process(source, {
    from: undefined,
    syntax: postcssScss,
  })
  return result.css
}

module.exports = pxToScalePxInComponentScss
module.exports.pxToScalePxInComponentScss = pxToScalePxInComponentScss
