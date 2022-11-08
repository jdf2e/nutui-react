const path = require('path')
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
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: ['@tarojs/plugin-html'],
  compiler: 'webpack5',
  alias: {
    react: path.resolve(__dirname, '../../../../node_modules/react'),
    '@/packages': path.resolve(__dirname, '../../../../src/packages'),
    '@/utils': path.resolve(__dirname, '../../../../src/utils'),
    '@': path.resolve(__dirname, '../../../../src'),
  },
  sass: {
    resource: path.resolve(__dirname, '../../../', 'styles/variables.scss'),
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  mini: {
    webpackChain(chain, webpack) {
      chain.optimization.splitChunks({
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          common: {
            name: 'common',
            minChunks: 2,
            priority: 1,
          },
          vendors: {
            name: 'vendors',
            minChunks: 2,
            test: (module) => {
              return /[\\/]node_modules[\\/]/.test(module.resource)
            },
            priority: 10,
          },
          // taro: {
          //   name: 'taro',
          //   test: (module) => {
          //     if (/@tarojs[\\/][a-z]+/.test(module.context)) {
          //       console.log(module.context)
          //     }
          //     return /@tarojs[\\/][a-z]+/.test(module.context)
          //   },
          //   priority: 100,
          // },
        },
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
        config: { selectorBlackList: ['nut-', 'demo', 'index'] },
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
    postcss: {
      pxtransform: {
        enable: true,
        // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
        config: { selectorBlackList: ['nut-', 'demo', 'index'] },
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
  },
  isWatch: true,
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
