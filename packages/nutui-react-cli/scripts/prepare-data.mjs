// @nutui/nutui-react-cli（H5）的多版本 data 快照生成：委托 core 的 prepareAllVersions，注入 H5 端参数。
// DO NOT manual edit the output (data/). Run: pnpm run prepare-data
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { prepareAllVersions } from '@nutui/nutui-react-cli-core/scripts/prepare-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PKG_DIR = path.resolve(__dirname, '..')

await prepareAllVersions({
  pkgDir: PKG_DIR,
  docKeys: { zh: 'h5', en: 'enUS' },
  demoKey: 'h5',
  apiField: 'api',
  // H5 端迁移文档（随 v4 手写维护，v3 tag 无，缺失静默跳过）。
  migrationDocs: {
    'from-v3': 'src/sites/sites-react/doc/docs/react/migrate-from-v3.md',
  },
})
