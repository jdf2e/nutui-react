module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
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
  },
  h5: {},
}
