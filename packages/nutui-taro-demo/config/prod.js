const { execSync } = require('child_process')

const UI = process.env.UI
console.log('UI Review', UI)

let hash = ''
try {
  hash = execSync('git rev-parse HEAD').toString().trim().substring(0, 7)
  console.log(`当前 Git hash: ${hash}`)
} catch (error) {
  /* empty */
}

console.log(hash && UI ? `-${hash}` : '')

module.exports = {
  env: {
    NODE_ENV: '"production"',
  },
  outputRoot: `dist/${process.env.TARO_ENV === 'h5' ? `demo${hash && UI ? `-${hash}` : ''}` : process.env.TARO_ENV}`,
  defineConstants: {},
  mini: {},
  h5: {
    publicPath: `/taro/react/${process.env.VITE_APP_PROJECT_ID === 'jmapp' ? 'jmapp-3x' : '3x'}/demo${hash && UI ? `-${hash}` : ''}`,
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    // webpackChain (chain) {
    //   /**
    //    * 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 插件对打包体积进行分析。
    //    * @docs https://github.com/webpack-contrib/webpack-bundle-analyzer
    //    */
    //   chain.plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    //   /**
    //    * 如果 h5 端首屏加载时间过长，可以使用 prerender-spa-plugin 插件预加载首页。
    //    * @docs https://github.com/chrisvfritz/prerender-spa-plugin
    //    */
    //   const path = require('path')
    //   const Prerender = require('prerender-spa-plugin')
    //   const staticDir = path.join(__dirname, '..', 'dist')
    //   chain
    //     .plugin('prerender')
    //     .use(new Prerender({
    //       staticDir,
    //       routes: [ '/pages/index/index' ],
    //       postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
    //     }))
    // }
  },
}
