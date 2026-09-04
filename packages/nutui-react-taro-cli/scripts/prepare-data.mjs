// @nutui/nutui-react-taro-cli（Taro）的多版本 data 快照生成：委托 core 的 prepareAllVersions，注入 Taro 端参数。
// DO NOT manual edit the output (data/). Run: pnpm run prepare-data
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { prepareAllVersions } from '@nutui/nutui-react-cli-core/scripts/prepare-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PKG_DIR = path.resolve(__dirname, '..')

await prepareAllVersions({
  pkgDir: PKG_DIR,
  // Taro 端仅中文文档（doc.taro.md）。
  docKeys: { zh: 'taro' },
  demoKey: 'taro',
  apiField: 'apiTaro',
  // Taro 端迁移文档（随 v4 手写维护，v3 tag 无，缺失静默跳过）。
  migrationDocs: {
    'from-v3': 'src/sites/sites-react/doc/docs/taro/migrate-from-v3.md',
  },
})
