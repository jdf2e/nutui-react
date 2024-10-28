// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const repleaceIcons = require('@dongdesign/replace-icons')

module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
    [
      repleaceIcons({
        targetIconLibary: '@nutui/jdesign-icons-react-taro',
      }),
    ],
  ],
}
