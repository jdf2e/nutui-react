import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const path = require('path')
const atImport = require('postcss-import')
const config = require('./package.json')

const { resolve } = path
let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/h5/react/2x',
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
    },
    postcss: {
      plugins: [
        atImport({ path: path.join(__dirname, 'src`') }),
        // eslint-disable-next-line global-require
        require('autoprefixer')({
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
  plugins: [reactRefresh()],
  build: {
    target: 'es2015',
    outDir: './dist/2x/',
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
})
