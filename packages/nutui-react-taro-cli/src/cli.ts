// @nutui/nutui-react-taro-cli（Taro）薄入口：构造 Taro CliConfig，委托 core 的 runCli。
import { hideBin } from 'yargs/helpers'
import { fileURLToPath } from 'node:url'
import { runCli, type CliConfig } from '@nutui/nutui-react-cli-core'

// tsup define 注入的包版本号。
declare const __CLI_VERSION__: string

// dist/cli.js 运行时，data/ 与 dist/ 同级（见 package.json files: [dist, data]）。
const dataDir = fileURLToPath(new URL('../data/', import.meta.url))

const config: CliConfig = {
  binName: 'nutui-react-taro',
  cliPkgName: '@nutui/nutui-react-taro-cli',
  platform: 'taro',
  libLabel: 'NutUI React（Taro 多端）',
  demoLabel: 'Taro',
  version: __CLI_VERSION__,
  dataDir,
  // Taro 端暂无英文组件文档，仅提供中文。
  langs: ['zh'],
  defaultLang: 'zh',
  langLabel: { zh: '中文', en: '英文' },
  mcp: { serverName: 'nutui-react-taro', toolPrefix: 'nutui_' },
}

runCli(config, hideBin(process.argv))
