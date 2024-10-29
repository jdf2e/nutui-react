const postcss = require('postcss')
const path = require('path')
const optimizeCss = require('../dist/index.cjs')

const css = `
.nut-address-footer-btn {
  background: linear-gradient(135deg, var(--nutui-color-primary-stop-1, #f53d6d) 0%, var(--nutui-color-primary-stop-2, #fa2c19) 100%);
  color: var(--nutui-color-primary-text, #ffffff)
}
[dir=rtl] .ca, .xcdd {
  margin-left: 0;
  margin-right: 9px
}
[dir=rtl] .nut-address-exist-item-info, .nut-rtl .nut-address-exist-item-info {
  margin-left: 0;
  margin-right: 9px
}
`

postcss([
  optimizeCss({
    removeRtl: true,
    cssVariables: {
      include: [path.join(__dirname, 'variables.scss')],
      exclude: ['--nutui-color-primary-text'],
      type: 'replace',
    },
  }),
])
  .process(css, { from: undefined })
  .then((res) => {
    console.log(res.css.toString())
  })
