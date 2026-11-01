import postcss from 'postcss'

const stripRtlPlugin = {
  postcssPlugin: 'strip-rtl',
  Rule(rule: any) {
    if (!rule.selector) return
    const selectors =
      rule.selectors || rule.selector.split(',').map((s: string) => s.trim())
    const nonRtlSelectors = selectors.filter(
      (s: string) =>
        !s.includes('.nut-rtl') &&
        !s.includes("[dir='rtl']") &&
        !s.includes('[dir="rtl"]')
    )
    if (nonRtlSelectors.length === 0) {
      rule.remove()
    } else if (nonRtlSelectors.length < selectors.length) {
      rule.selectors = nonRtlSelectors
    }
  },
}

describe('RTL strip plugin and configuration', () => {
  test('should completely strip pure RTL selectors', async () => {
    const inputCss = `
      .nut-button { color: red; }
      [dir='rtl'] .nut-button,
      .nut-rtl .nut-button {
        margin-right: 10px;
        text-align: right;
      }
      .nut-button-text { padding: 4px; }
    `

    const result = await postcss([stripRtlPlugin]).process(inputCss, {
      from: undefined,
    })
    const output = result.css

    expect(output).toContain('.nut-button { color: red; }')
    expect(output).toContain('.nut-button-text { padding: 4px; }')
    expect(output).not.toContain('.nut-rtl')
    expect(output).not.toContain("dir='rtl'")
    expect(output).not.toContain('text-align: right')
  })

  test('should preserve non-RTL selectors when mixed in comma-separated list', async () => {
    const inputCss = `
      .common-selector, .nut-rtl .special-rtl {
        font-size: 14px;
      }
    `
    const result = await postcss([stripRtlPlugin]).process(inputCss, {
      from: undefined,
    })
    expect(result.css).toContain('.common-selector')
    expect(result.css).not.toContain('.special-rtl')
    expect(result.css).not.toContain('.nut-rtl')
  })

  test('should remove all RTL rules from multi-class complex rules', async () => {
    const inputCss = `
      .nut-tabs-titles { display: flex; }
      .nut-rtl .nut-tabs-titles { flex-direction: row-reverse; }
      [dir='rtl'] .nut-col-offset-1,
      .nut-rtl .nut-col-offset-1 { margin-right: 4.166667%; margin-left: 0; }
    `
    const result = await postcss([stripRtlPlugin]).process(inputCss, {
      from: undefined,
    })
    expect(result.css).toContain('.nut-tabs-titles { display: flex; }')
    expect(result.css).not.toContain('row-reverse')
    expect(result.css).not.toContain('nut-col-offset-1')
  })
})
