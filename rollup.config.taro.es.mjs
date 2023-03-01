import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const config = require('./src/config.json');

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

const entries = {
  'nutui-react.es': path.join(
    __dirnameNew,
    `./src/packages/nutui.taro.react.build.ts`
  ),
}
const outputEntries = {}

config.nav.map((item) => {
  item.packages.forEach((element) => {
    const { name, show, type, exportEmpty } = element
    if (show || exportEmpty) {
      outputEntries[`./${name.toLowerCase()}`] = `./${name}`
      entries[name] = path.join(
        __dirnameNew,
        `./src/packages/${name.toLowerCase()}/index.taro.ts`
      )
    }
  })
})

export default {
  input: entries,
  external: (id, parent) => {
    ;/^react/.test(id) ||
      /^react-dom/.test(id) ||
      /^classnames/.test(id) ||
      /^@use-gesture/.test(id) ||
      /^@react-spring/.test(id) ||
      /^@bem-react/.test(id) ||
      (/^@\/packages\/\w+$/.test(id) && !!parent)
  },
  output: {
    format: 'esm',
    dir: './dist/esm',
    name: '[entryName].js',
    paths: (id) => {
      return /@\/packages/.test(id)
        ? `${outputEntries[id.replace('@/packages/', './')]}.js`
        : id
    },
  },
  plugins: [commonjs(), typescript()],
}
