import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path'
import atImport from 'postcss-import'
import { readFileSync } from 'node:fs'

const projectID = process.env.VITE_APP_PROJECT_ID || ''

const { resolve } = path

let fileStr = `@import "@/styles/mixins/index.scss";@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";\n`
if (projectID) {
  fileStr = `@import "@/styles/mixins/index.scss";@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  base: '/react/',
  define: {
    __PROJECTID__: JSON.stringify(`${projectID}` ? `-${projectID}` : ''),
  },
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
    },
    postcss: {
      plugins: [atImport({ path: path.join(__dirname, 'src') })],
    },
  },
  plugins: [
    reactRefresh(),
    {
      name: 'test',
      async load(id) {
        if (id.endsWith('.scss')) {
          // 移除 @import 语句
          const filePath = resolve(process.cwd(), id)
          const scssCode = await readFileSync(filePath, 'utf-8')
          const modifiedCode = scssCode.replace(
            /@import\s+['"][^'"]+['"];/g,
            ''
          )
          return modifiedCode
        }
      },
    },
  ],
})
