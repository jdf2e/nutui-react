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
    base: '/h5/react/4x',
    server: {
      port: 2021,
      host: '0.0.0.0',
      open: '/h5/react/4x/index.react.html',
      proxy: {
        '/devServer': {
          target: 'https://nutui.jd.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/devServer/, ''),
        },
      },
    },
    resolve: {
      alias: [...packageAliases],
    },
    define: {
      __DEMO_PATH__: JSON.stringify('/h5/react/4x/demo.html#'),
    },
    css: buildCssOptions(projectID),
    plugins: [
      await buildMdxPlugin(),
      reactRefresh(),
    ],
    build: {
      outDir: './dist-site/h5',
      assetsDir: `${config.version}-${refRandom}`,
      cssCodeSplit: true,
      rollupOptions: {
        input: {
          react: resolve(__dirname, 'index.html'),
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
