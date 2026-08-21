/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import config from './package.json'
import {
  buildCssOptions,
  lottieAliases,
  localeAliases,
  packageAliases,
} from './vite.config.base.mts'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  return {
    mode: 'production',
    base: `/h5/react/${projectID === 'jmapp' ? 'jmapp-4x' : '4x'}`,
    resolve: {
      alias: [...lottieAliases, ...localeAliases, ...packageAliases],
    },
    css: buildCssOptions(projectID, true),
    build: {
      target: 'es2015',
      outDir: `./dist-demo/${projectID === 'jmapp' ? 'jdesign' : '4x'}/`,
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
  }
})
