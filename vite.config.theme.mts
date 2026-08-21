import { defineConfig } from 'vite'
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react'
import {
  buildCssOptions,
  packageAliases,
} from './vite.config.base.mts'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

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
    alias: [...packageAliases],
  },
  css: buildCssOptions(projectID, true),
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
