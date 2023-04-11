import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const atImport = require('postcss-import')
const path = require('path')

const { resolve } = path
let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
}

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
        additionalData: fileStr,
      },
      postcss: {
        plugins: [atImport({ path: path.join(__dirname, 'src`') })],
      },
    },
  },
  plugins: [reactRefresh()],
})
