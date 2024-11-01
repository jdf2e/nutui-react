const path = require('path')

let fileStr = `src/styles/variables.scss`
let themeStr = `src/styles/theme-default.scss`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `src/styles/variables-${projectID}.scss`
  themeStr = `src/styles/theme-${projectID}.scss`
}

const config = {
  projectName: 'first',
  date: '2022-7-11',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${
    process.env.TARO_ENV === 'h5' ? 'demo' : process.env.TARO_ENV
  }`,
  plugins: ['@tarojs/plugin-html'],
  compiler: 'webpack5',
  alias: {
    '@nutui/nutui-react-taro/dist/locales/en-US.ts': path.resolve(
      __dirname,
      '../../../src/locales/en-US.ts',
    ),
    '@/packages': path.resolve(__dirname, '../../../src/packages'),
    '@/sites': path.resolve(__dirname, '../../../src/sites'),
    '@/locales': path.resolve(__dirname, '../../../src/locales'),
    '@/utils': path.resolve(__dirname, '../../../src/utils'),
    '@nutui/nutui-react-taro': path.resolve(
      __dirname,
      '../../../src/packages/nutui.react.taro.ts',
    ),
  },
  sass: {
    resource: [
      path.resolve(__dirname, '../../../', fileStr),
      path.resolve(__dirname, '../../../', themeStr),
    ],
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
        config: { selectorBlackList: ['nut-', 'demo', 'index', 'page'] },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    compile: {
      include: [
        path.resolve(__dirname, '..', 'node_modules/@tarojs/components'),
        path.resolve(__dirname, '../../..', 'src'),
      ],
    },
    postcss: {
      pxtransform: {
        enable: true,
        // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
        config: {
          selectorBlackList: ['nut-', 'demo', 'index', 'flex-', 'page'],
        },
      },
      url: {
        enable: true,
        config: {
          url: 'inline',
          limit: 1024, // 设定转换尺寸上限
        },
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
      // 自定义 Webpack 配置
      devServer: {},
    },
    output: {
      environment: {
        asyncFunction: true,
      },
    },
  },
  isWatch: true,
}

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
