// @nutui/nutui-react-cli（H5）薄入口：构造 H5 CliConfig，委托 core 的 runCli。
import { hideBin } from 'yargs/helpers'
import { fileURLToPath } from 'node:url'
import { runCli, type CliConfig } from '@nutui/nutui-react-cli-core'

// tsup define 注入的包版本号。
declare const __CLI_VERSION__: string

// dist/cli.js 运行时，data/ 与 dist/ 同级（见 package.json files: [dist, data]）。
const dataDir = fileURLToPath(new URL('../data/', import.meta.url))

const config: CliConfig = {
  binName: 'nutui-react',
  cliPkgName: '@nutui/nutui-react-cli',
  platform: 'h5',
  libLabel: 'NutUI React（H5）',
  demoLabel: 'H5',
  version: __CLI_VERSION__,
  dataDir,
  langs: ['zh', 'en'],
  defaultLang: 'zh',
  langLabel: { zh: '中文', en: '英文' },
  mcp: { serverName: 'nutui-react', toolPrefix: 'nutui_' },
}

runCli(config, hideBin(process.argv))
