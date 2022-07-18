import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const glob = require('glob')
const path = require('path')
const config = require('./package.json')

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`

interface Entries {
  [key: string]: string
}

const entries: Entries = {}

const locales = glob.sync(`./src/locales/*.ts`)

locales.forEach((item: string) => {
  entries[item.replace('.ts', '').replace('./src/locales/', '')] = path.join(
    __dirname,
    item
  )
})

export default defineConfig({
  plugins: [
    dts({
      include: './src/locales/*.ts',
      outputDir: './dist/locales',
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
