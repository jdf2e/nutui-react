/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import { resolve } from 'path'
import config from './package.json'
// @ts-ignore
import llmsPlugin from './scripts/site/vite-plugin-llms.mjs'
import {
  buildCssOptions,
  buildMdxPlugin,
  packageAliases,
} from './vite.config.base.mts'

const projectID = process.env.VITE_APP_PROJECT_ID || ''
const refRandom = Math.random().toString(36).slice(-8)

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  return {
    base: '/taro/react/4x',
    server: {
      port: 2021,
      host: '0.0.0.0',
      open: false,
      proxy: {
        '/devServer': {
          target: 'https://nutui.jd.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/devServer/, ''),
        },
      },
    },
    define: {
      __DEMO_PATH__: JSON.stringify('/taro/react/4x/demo/index.html#'),
    },
    resolve: {
      alias: [...packageAliases],
    },
    css: buildCssOptions(projectID),
    plugins: [
      await buildMdxPlugin(),
      reactRefresh(),
    ],
    build: {
      outDir: './dist-site/taro',
      assetsDir: `${config.version}-${refRandom}`,
      cssCodeSplit: true,
      rollupOptions: {
        input: {
          react: resolve(__dirname, 'index.taro.html'),
        },
        output: {
          entryFileNames: `${config.version}-${refRandom}/[name].js`,
          chunkFileNames: `${config.version}-${refRandom}/[name].js`,
          assetFileNames: `${config.version}-${refRandom}/[name].[ext]`,
        },
      },
    },
  }
})
