import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import autoprefixer from 'autoprefixer'

const path = require('path')
const config = require('./package.json')

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/`

const { resolve } = path

let fileStr = `@import "@/styles/variables.scss";`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';`
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: fileStr,
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              '> 0.5%',
              'last 2 versions',
              'ie > 11',
              'iOS >= 10',
              'Android >= 5',
            ],
          }),
        ],
      },
    },
  },
  plugins: [reactRefresh()],
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom', '@tarojs/taro', '@tarojs/components'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@tarojs/taro': 'Taro',
        },
      },
    },
    lib: {
      entry: 'src/packages/nutui.taro.react.build.ts',
      name: 'nutui.react',
      fileName: 'nutui.react',
      formats: ['es', 'umd'],
    },
  },
})
