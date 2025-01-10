// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const replaceIcons = require('@nutui/replace-icons')
const projectID = process.env.VITE_APP_PROJECT_ID

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
    projectID === 'jmapp' && [
      replaceIcons({
        sourceLibrary: ['@nutui/icons-react-taro', '@nutui/icons-react'],
        targetLibrary: '@nutui/jdesign-icons-react-taro',
      }),
    ],
  ].filter(Boolean),
}
