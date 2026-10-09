// @nutui/nutui-react-taro-cli（Taro）的 data 快照生成：委托 core 的 prepareData，注入 Taro 端参数。
// DO NOT manual edit the output (data/). Run: pnpm run prepare-data
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { prepareData } from '@nutui/nutui-react-cli-core/scripts/prepare-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PKG_DIR = path.resolve(__dirname, '..')

prepareData({
  pkgDir: PKG_DIR,
  // Taro 端仅中文文档（doc.taro.md）。
  docKeys: { zh: 'taro' },
  demoKey: 'taro',
  apiField: 'apiTaro',
})
