import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'
import atImport from 'postcss-import'

const { resolve } = path
let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/theme-react/',
  publicDir: './src/sites/assets',
  server: {
    port: 2022,
    host: '0.0.0.0',
    open: '/theme-react/theme.html#/base',
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, ''),
      },
      '/devTheme': {
        target: 'https://nutui.jd.com/theme-react/source',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devTheme/, ''),
      },
    },
  },
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
        plugins: [
          atImport({ path: path.join(__dirname, 'src`') }),
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
    target: 'es2015',
    outDir: './dist/theme-react/',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        theme: resolve(__dirname, 'theme.html'),
        mobile: resolve(__dirname, 'demo.html'),
      },
    },
  },
})
