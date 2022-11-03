import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import autoprefixer from 'autoprefixer'

const config = require('./package.json')
const atImport = require('postcss-import')
const path = require('path')

const { resolve } = path
// https://vitejs.dev/config/
export default defineConfig({
  base: '/theme-react/',
  publicDir: './src/sites/assets',
  server: {
    port: 2022,
    host: '0.0.0.0',
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
    open: '/theme-react/theme.html#/',
  },
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
