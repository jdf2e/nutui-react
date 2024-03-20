// .stylelintrc.js
const mergeConfig = require('stylelint-taro/lib/config')

// 合并配置，填写需要适配的端："h5", "miniprogram", "harmony", "rn"
module.exports = mergeConfig(['h5', 'miniprogram', 'harmony'], {
  // 自定义样式规范: 支持sass的语言规范
  // customSyntax: "postcss-scss"
  // 自定义Stylelint配置
  rules: {},
})