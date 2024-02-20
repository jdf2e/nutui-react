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
export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup')
  const remarkGfm = await import('remark-gfm')
  const remarkDirective = await import('remark-directive')
  return {
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
      reactRefresh(),
    ],
  }
})
