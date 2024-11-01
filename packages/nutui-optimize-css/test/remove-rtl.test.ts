import postcss from 'postcss'
import { describe, expect, it } from 'vitest'
import optimizeCss from '../dist/index.cjs'

const css = `
[dir=rtl] .ca, .xcdd {
  margin-left: 0;
  margin-right: 9px
}
[dir=rtl] .nut-address-exist-item-info, .nut-rtl .nut-address-exist-item-info {
  margin-left: 0;
  margin-right: 9px
}
`
describe('@nutui/optimize-css', () => {
  it('remove rtl', async () => {
    const a = await postcss([
      optimizeCss({
        removeRtl: true,
      }),
    ]).process(css, { from: undefined })
    const optimizedCsss = a.css.toString()
    // @ts-ignore
    expect(optimizedCsss).toMatchSnapshot()
  })
})
