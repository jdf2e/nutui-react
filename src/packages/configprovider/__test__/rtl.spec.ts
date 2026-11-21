import postcss from 'postcss'
import * as sass from 'sass'
import stripRtlPlugin from '../../../../scripts/strip-rtl.mjs'

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

  test('strips the unquoted dir attribute emitted by Sass', async () => {
    const css = sass.compileString(`
      .nut-button { padding: 4px; }
      [dir='rtl'] .nut-button { padding-right: 8px; }
    `).css
    expect(css).toContain('[dir=rtl]')
    const result = await postcss([stripRtlPlugin]).process(css, {
      from: undefined,
    })
    expect(result.css).toContain('.nut-button')
    expect(result.css).not.toContain('[dir=rtl]')
    expect(result.css).not.toContain('padding-right')
  })

  test('strips standalone RTL aliases and their dedicated keyframes', async () => {
    const result = await postcss([stripRtlPlugin]).process(
      `
      .rtl-nut-range-tick { right: 0; }
      .nut-backtop-rtl { left: 10px; }
      .nut-hoverbutton-container-rtl { right: 10px; }
      @keyframes moving { to { transform: translateX(100%); } }
      @keyframes moving-rtl { to { transform: translateX(-100%); } }
      @-webkit-keyframes moving-rtl { to { transform: translateX(-100%); } }
    `,
      { from: undefined }
    )
    expect(result.css).not.toContain('.rtl-nut-range')
    expect(result.css).not.toContain('.nut-backtop-rtl')
    expect(result.css).not.toContain('.nut-hoverbutton-container-rtl')
    expect(result.css).not.toContain('moving-rtl')
    expect(result.css).toContain('@keyframes moving')
  })

  test('preserves nested component modifiers and unrelated attributes', async () => {
    const css = `
      .nut-range .nut-range-rtl { direction: rtl; }
      .nut-rtl-toggle, [data-dir=rtl] { color: red; }
      .nut-button:is(.primary, .default), [dir="rtl"] .nut-button { padding: 4px; }
    `
    const result = await postcss([stripRtlPlugin]).process(css, {
      from: undefined,
    })
    expect(result.css).toContain('.nut-range .nut-range-rtl')
    expect(result.css).toContain('.nut-rtl-toggle')
    expect(result.css).toContain('[data-dir=rtl]')
    expect(result.css).toContain('.nut-button:is(.primary, .default)')
    expect(result.css).not.toContain('[dir="rtl"]')
  })
})
