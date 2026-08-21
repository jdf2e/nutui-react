/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync } from 'node:fs'
import {
  buildCssOptions,
  buildMdxPlugin,
  lottieAliases,
  localeAliases,
  packageAliases,
} from './vite.config.base.mts'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  return {
    server: {
      host: '0.0.0.0',
    },
    base: '/react/',
    define: {
      __DEMO_PATH__: JSON.stringify('/react/demo.html#'),
    },
    resolve: {
      alias: [...lottieAliases, ...localeAliases, ...packageAliases],
    },
    css: buildCssOptions(projectID),
    plugins: [
      await buildMdxPlugin(),
      {
        name: 'test',
        apply: 'serve',
        async load(id: string) {
          if (id.endsWith('.scss')) {
            const filePath = resolve(process.cwd(), id)
            const scssCode = await readFileSync(filePath, 'utf-8')
            const modifiedCode = scssCode.replace(
              /@import\s+['"](\.{2}?\/)[^'".]+(.s?css)['"];/g,
              ''
            )
            return modifiedCode
          }
        },
      },
      reactRefresh(),
    ],
    test: {
      setupFiles: ['./vitest.setup.ts'],
      globals: true,
      environment: 'happy-dom',
      coverage: {
        all: false,
        provider: 'v8',
      },
      include: ['src/packages/**/*.(test|spec).(ts|tsx)'],
      reporters: ['default', 'html'],
    },
  }
})
