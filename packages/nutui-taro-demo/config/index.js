const path = require('path')

let fileStr = `src/styles/variables.scss`
let themeStr = `src/styles/theme-default.scss`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `src/styles/variables-${projectID}.scss`
  themeStr = `src/styles/theme-${projectID}.scss`
}

let plugins = !['harmony', 'jdharmony', 'rn', 'jdrn'].includes(
  process.env.TARO_ENV
)
  ? ['@tarojs/plugin-html']
  : []

if (process.env.TARO_ENV === 'harmony') {
  plugins.push('@tarojs/plugin-platform-harmony-ets')
}

if (process.env.TARO_ENV === 'rn' || process.env.TARO_ENV === 'jdrn') {
  plugins.push('@jdtaro/plugin-platform-jdrn')
}

// 小程序、jd H5 通过此插件覆盖
if (
  process.env.TARO_ENV === 'weapp' ||
  process.env.TARO_ENV === 'jd' ||
  process.env.TARO_ENV === 'jdhybrid'
) {
  plugins.push('@dongdesign/inject-jd-platform-styles')
}

if (process.env.TARO_ENV === 'jdhybrid') {
  plugins.push([
    '@jdtaro/plugin-platform-jdhybrid',
    {
      externals: {
        '@jdtaro/plugin-platform-jdhybrid': 'local',
      },
    },
  ])
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
if (process.env.TARO_ENV === 'jdharmony') {
  plugins = ['@jdtaro/taro-platform-jdharmony']
}
if (process.env.TARO_ENV === 'jdharmony_cpp') {
  plugins = ['@jdtaro/plugin-platform-jdharmony-cpp']
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// if (process.env.TARO_ENV === 'jdharmony') {
//   plugins = ['@test/taro-platform-jdharmony']
// }

const isHarmony = process.env.TARO_ENV === 'harmony'
const isHarmonycpp = process.env.TARO_ENV === 'jdharmony_cpp'

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
  outputRoot: `dist/${process.env.TARO_ENV === 'h5' ? 'demo' : process.env.TARO_ENV}`,
  plugins: [...plugins],
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['@nutui/icons-react-taro']
    },
  },
  alias:
    process.env.TARO_ENV === 'rn' || process.env.TARO_ENV === 'jdrn'
      ? {
          '@nutui/nutui-react-taro/dist/locales/en-US': path.resolve(
            __dirname,
            '../nutui-react/locales/en-US.ts'
          ),
          '@/packages': path.resolve(__dirname, '../nutui-react/packages'),
          '@/sites': path.resolve(__dirname, '../nutui-react/sites'),
          '@/locales': path.resolve(__dirname, '../nutui-react/locales'),
          '@/utils': path.resolve(__dirname, '../nutui-react/utils'),
          '@nutui/nutui-react-taro': path.resolve(
            __dirname,
            '../nutui-react/packages/nutui.react.rn.ts'
          ),
          '@nutui/icons-react-taro': path.resolve(
            __dirname,
            '../nutui-react/packages/nutui.react.rn.ts'
          ),
          '@styles': path.resolve(__dirname, '../styles'),
        }
      : {
          '@nutui/nutui-react-taro/dist/locales/en-US': path.resolve(
            __dirname,
            '../../../src/locales/en-US.ts'
          ),
          '@/packages': path.resolve(__dirname, '../../../src/packages'),
          '@/sites': path.resolve(__dirname, '../../../src/sites'),
          '@/locales': path.resolve(__dirname, '../../../src/locales'),
          '@/utils': path.resolve(__dirname, '../../../src/utils'),
          '@nutui/nutui-react-taro': path.resolve(
            __dirname,
            '../../../src/packages/nutui.react.taro.ts'
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
  // harmony 相关配置
  harmony: {
    ohPackage: {
      dependencies: {
        '@jd-oh/taro_library': '2.0.70',
        '@jd-oh/taro_cpp_library': '0.1.2-alpha.0',
      },
    },
    // 将编译方式设置为使用 Vite 编译
    compiler: { type: 'vite' },
    // 【必填】鸿蒙主应用的绝对路径，例如：
    projectPath: path.resolve(
      process.cwd(),
      isHarmony
        ? '../nutui-harmony'
        : isHarmonycpp
          ? '../nutui-jdharmonycpp'
          : '../nutui-jdharmony'
    ),
    // 【可选】HAP 的名称，默认为 'entry'
    hapName: isHarmony ? 'entry' : 'library',
    useNesting: true,
    postcss: {
      pxtransform: {
        enable: true,
        // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
        // config: { selectorBlackList: ['nut-', 'demo', 'index', 'page'] },
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
  mini: {
    compile: {
      include: [path.resolve(__dirname, '../../../src')],
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
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
    compile: {
      include: [path.resolve(__dirname, '../../../src')],
    },
    publicPath: '/',
    staticDirectory: 'static',
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
  rn: {
    appName: 'JDReactAPIDemos',
    postcss: {
      'postcss-css-variables': {
        enable: true,
        config: {
          // variables: {
          //   '--nutui-color-primary': '#000',
          //   '--nutui-color-primary-stop-1': '#000',
          //   '--nutui-color-primary-stop-2': '#000',
          // },
        },
      },
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
