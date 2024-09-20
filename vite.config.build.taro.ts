import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import fse from 'fs-extra'
import path from 'path'
import config from './package.json'

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
  plugins: [
    dts({
      outDir: 'dist/types',
      clearPureImport: false,
      exclude: [
        'node_modules/**',
        'src/sites/**',
        'src/**/demo.tsx',
        'src/**/demo.taro.tsx',
        'src/**/*.spec.tsx',
      ],
      beforeWriteFile(filePath, content) {
        return { filePath: filePath.replace('src/', ''), content }
      },
      afterBuild: () => {
        fse
          .readFile(
            './dist/types/packages/nutui.taro.react.build.d.ts',
            'utf-8'
          )
          .then((data: string) => {
            fse.remove('./dist/types/packages/nutui.taro.react.build.d.ts')
            fse.outputFile(
              './dist/types/index.d.ts',
              `${data.replace(/\.\//g, './packages/')}`
            )
          })
      },
    }),
  ],
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom', '@tarojs/taro', '@tarojs/components'],
      output: [
        {
          banner,
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          format: 'es',
          entryFileNames: 'nutui.react.es.js',
        },
        {
          banner,
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          name: 'nutui.react',
          format: 'umd',
          entryFileNames: 'nutui.react.umd.js',
        },
      ],
    },
    lib: {
      entry: 'src/packages/nutui.taro.react.build.ts',
    },
  },
})
