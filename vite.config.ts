/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path'
import atImport from 'postcss-import'
import { readFileSync } from 'node:fs'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

const { resolve } = path

let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";@import '@/styles/theme-default.scss';\n`
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n@import '@/styles/font-${projectID}/iconfont.css';\n@import '@/styles/theme-${projectID}.scss';\n`
}

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  const mdx = await import('@mdx-js/rollup')
  const remarkGfm = await import('remark-gfm')
  const remarkDirective = await import('remark-directive')
  return {
    server: {
      host: '0.0.0.0',
    },
    base: '/react/',
    resolve: {
      alias: [
        {
          find: '@nutui/nutui-react/dist/locale/enUS',
          replacement: resolve(__dirname, './src/locales/en-US.ts'),
        },
        {
          find: '@nutui/nutui-react-taro/dist/locales/en-US.ts',
          replacement: resolve(__dirname, './src/locales/en-US.ts'),
        },
        { find: '@', replacement: resolve(__dirname, './src') },
        {
          find: '@nutui/nutui-react',
          replacement: resolve(__dirname, './src/packages/nutui.react.ts'),
        },
        {
          find: '@nutui/nutui-react-taro',
          replacement: resolve(__dirname, './src/packages/nutui.react.taro.ts'),
        },
      ],
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
    plugins: [
      {
        enforce: 'pre',
        ...mdx.default({
          providerImportSource: '@mdx-js/react',
          mdExtensions: [],
          mdxExtensions: ['.md'],
          remarkPlugins: [remarkGfm.default, remarkDirective.default],
        }),
      },
      {
        name: 'test',
        apply: 'serve',
        async load(id: string) {
          if (id.endsWith('.scss')) {
            // 移除 @import 语句
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
