import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const atImport = require('postcss-import')
const path = require('path')

const { resolve } = path
// https://vitejs.dev/config/
export default defineConfig({
  base: '/react',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
      postcss: {
        plugins: [atImport({ path: path.join(__dirname, 'src`') })],
      },
    },
  },
  plugins: [reactRefresh()],
})
