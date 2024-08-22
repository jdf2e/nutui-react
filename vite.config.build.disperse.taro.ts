import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import config from './src/config.json'

const entries: any = {
  'nutui-react.es': path.join(
    __dirname,
    `./src/packages/nutui.taro.react.build.ts`
  ),
}
const outputEntries: any = {}

config.nav.forEach((item) => {
  item.packages.forEach((element) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { name, show, exportEmpty, exclude } = element
    if (exclude) return
    if (show || exportEmpty) {
      outputEntries[`./${name.toLowerCase()}`] = `./${name}`
      entries[name] = path.join(
        __dirname,
        `./src/packages/${name.toLowerCase()}/index.taro.ts`
      )
    }
  })
})

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [reactRefresh()],
  build: {
    minify: false,
    lib: {
      entry: '',
      name: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      input: entries,
      // 请确保外部化那些你的库中不需要的依赖
      external: (id, parent) =>
        /^react/.test(id) ||
        /^lodash/.test(id) ||
        /^async-validator/.test(id) ||
        /^react-dom/.test(id) ||
        /^classnames/.test(id) ||
        /^@use-gesture/.test(id) ||
        /^@react-spring/.test(id) ||
        /^@nutui/.test(id) ||
        /^@bem-react/.test(id) ||
        /^@tarojs\/\w+$/.test(id) ||
        (/^@\/packages\/\w+$/.test(id) && !!parent),
      output: {
        paths: (id) => {
          return /@\/packages/.test(id)
            ? `${outputEntries[id.replace('@/packages/', './')]}.js`
            : id
        },
        dir: path.resolve(__dirname, './dist/esm'),
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
      },
      plugins: [commonjs(), typescript()],
    },
    emptyOutDir: false,
  },
})
