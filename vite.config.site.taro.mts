/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import { join, resolve } from 'path'
// @ts-ignore
import atImport from 'postcss-import'
import rehypeHighlight from 'rehype-highlight'
import config from './package.json'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

let fileStr = `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";\n`
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
}
const refRandom = Math.random().toString(36).slice(-8)

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  const mdx = await import('@mdx-js/rollup')
  const remarkGfm = await import('remark-gfm')
  const remarkDirective = await import('remark-directive')
  return {
    base: '/taro/react/3x',
    server: {
      port: 2021,
      host: '0.0.0.0',
      // open: '/taro/react/3x/index.taro.html',
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
      __DEMO_PATH__: JSON.stringify('/taro/react/3x/demo/index.html#'),
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: fileStr,
        },
        postcss: {
          plugins: [atImport({ path: join(__dirname, 'src`') })],
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
          rehypePlugins: [rehypeHighlight],
        }),
      },
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
