const rtlDirection = /\[\s*dir\s*=\s*(?:"rtl"|'rtl'|rtl)\s*(?:[is]\s*)?\]/i
const rtlClass =
  /\.nut-rtl(?![\w-])|\.(?:rtl-nut-[\w-]+|nut-backtop-rtl|nut-hoverbutton-container-rtl)(?![\w-])/

const stripRtlPlugin = {
  postcssPlugin: 'strip-rtl',
  Rule(rule) {
    const selectors = rule.selectors
    const nonRtlSelectors = selectors.filter(
      (selector) => !rtlDirection.test(selector) && !rtlClass.test(selector)
    )
    if (nonRtlSelectors.length === 0) {
      rule.remove()
    } else if (nonRtlSelectors.length < selectors.length) {
      rule.selectors = nonRtlSelectors
    }
  },
  AtRule(rule) {
    if (
      /(?:^|-)keyframes$/i.test(rule.name) &&
      /-rtl$/.test(rule.params.replace(/^['"]|['"]$/g, ''))
    ) {
      rule.remove()
    }
  },
}

export default stripRtlPlugin
