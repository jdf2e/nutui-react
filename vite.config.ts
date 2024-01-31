import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path'
import atImport from 'postcss-import'

const projectID = process.env.VITE_APP_PROJECT_ID

const { resolve } = path

let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";@import '@/styles/theme-default.scss';\n`
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n@import '@/styles/font-${projectID}/iconfont.css';\n@import '@/styles/theme-${projectID}.scss';\n`
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  base: '/react/',
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
    },
    postcss: {
      plugins: [
        atImport({ path: path.join(__dirname, 'src') }),
        // process.env.VITE_RTL === 'rtl' ? rtl() : () => {},
      ],
    },
  },
  plugins: [reactRefresh()],
})
