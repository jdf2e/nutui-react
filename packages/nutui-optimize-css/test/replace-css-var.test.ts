import postcss from 'postcss'
import path from 'path'
import { describe, expect, it } from 'vitest'
import optimizeCss from '../dist/index.cjs'

const css = `
.nut-address-footer-btn {
  background: linear-gradient(135deg, var(--nutui-color-primary-stop-1, #f53d6d) 0%, var(--nutui-color-primary-stop-2, #fa2c19) 100%);
  color: var(--nutui-color-primary-text)
}
`
describe('@nutui/optimize-css', () => {
  it('optimize css', async () => {
    const a = await postcss([
      optimizeCss({
        cssVariables: {
          include: [path.join(__dirname, 'variables.scss')],
          exclude: ['--nutui-color-primary-text'],
          type: 'replace',
        },
      }),
    ]).process(css, { from: undefined })
    const optimizedCsss = a.css.toString()
    console.log(optimizedCsss)
    // @ts-ignore
    expect(optimizedCsss).toMatchSnapshot()
  })
})
