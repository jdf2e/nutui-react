/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import { resolve, join } from 'path'
// @ts-ignore
import atImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import config from './package.json'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";@import '@/styles/theme-default.scss';\n`
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n@import '@/styles/font-${projectID}/iconfont.css';\n@import '@/styles/theme-${projectID}.scss';\n`
}

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  return {
    mode: 'production',
    base: `/h5/react/${projectID === 'jmapp' ? 'jdesign' : '3x'}`,
    resolve: {
      alias: [
        {
          find: '@nutui/nutui-react/dist/es/lottie/animation/light/loading.json',
          replacement: resolve(
            __dirname,
            './src/packages/lottie/animation/light/loading.json'
          ),
        },
        {
          find: '@nutui/nutui-react/dist/es/lottie/animation/light/global.json',
          replacement: resolve(
            __dirname,
            './src/packages/lottie/animation/light/global.json'
          ),
        },
        {
          find: '@nutui/nutui-react/dist/es/lottie/animation/light/pulltorefresh.json',
          replacement: resolve(
            __dirname,
            './src/packages/lottie/animation/light/pulltorefresh.json'
          ),
        },
        {
          find: '@nutui/nutui-react/dist/es/lottie/animation/dark/loading.json',
          replacement: resolve(
            __dirname,
            './src/packages/lottie/animation/dark/loading.json'
          ),
        },
        {
          find: '@nutui/nutui-react/dist/es/lottie/animation/dark/global.json',
          replacement: resolve(
            __dirname,
            './src/packages/lottie/animation/dark/global.json'
          ),
        },
        {
          find: '@nutui/nutui-react/dist/es/lottie/animation/dark/pulltorefresh.json',
          replacement: resolve(
            __dirname,
            './src/packages/lottie/animation/dark/pulltorefresh.json'
          ),
        },
        {
          find: '@nutui/nutui-react/dist/locale/en-US',
          replacement: resolve(__dirname, './src/locales/en-US.ts'),
        },
        {
          find: '@nutui/nutui-react-taro/dist/locales/en-US',
          replacement: resolve(__dirname, './src/locales/en-US.ts'),
        },
        { find: '@', replacement: resolve(__dirname, './src') },
        {
          find: '@nutui/nutui-react',
          replacement: resolve(__dirname, './src/packages/nutui.react.ts'),
        },
        {
          find: '@nutui/nutui-react-taro',
          replacement: resolve(__dirname, './src/packages/nutui.react.taro.ts'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // example : additionalData: `@import "./src/dclearesign/styles/variables";`
          // dont need include file extend .scss
          api: 'modern-compiler',
          additionalData: fileStr,
          // 这里查看可选值：https://github.com/sass/sass/blob/1c9ec00/js-api-doc/deprecations.d.ts#L180
          silenceDeprecations: ['import', 'global-builtin'],
        },
        postcss: {
          plugins: [
            atImport({ path: join(__dirname, 'src`') }),
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
    build: {
      target: 'es2015',
      outDir: `./dist-demo/${projectID === 'jmapp' ? 'jdesign' : '3x'}/`,
      cssCodeSplit: true,
      rollupOptions: {
        input: {
          mobile: resolve(__dirname, 'demo.html'),
        },
        output: {
          entryFileNames: `demo-${config.version}/[name].js`,
          chunkFileNames: `demo-${config.version}/[name].js`,
          assetFileNames: `demo-${config.version}/[name].[ext]`,
        },
      },
    },
  }
})
