import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import { globSync } from 'glob'
import config from './package.json'

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/`

interface Entries {
  [key: string]: string
}

const entries: Entries = {}

const locales = globSync(`./src/locales/*.ts`)
locales.forEach((item: string) => {
  entries[item.replace('.ts', '').replace('src/locales/', '')] = path.join(
    __dirname,
    item
  )
})

export default defineConfig({
  plugins: [
    dts({
      include: './src/locales/*.ts',
      outDir: './dist/locales',
      beforeWriteFile(filePath, content) {
        return { filePath: filePath.replace('src/locales', ''), content }
      },
    }),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: '',
      name: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      input: entries,
      output: {
        banner,
        dir: './dist/locales',
        entryFileNames: '[name].js',
      },
    },
  },
})
