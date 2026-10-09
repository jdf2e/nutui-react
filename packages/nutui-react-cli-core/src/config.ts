// CLI 品牌配置：H5 与 Taro 两个发布包共享 core 的命令 / MCP / 数据逻辑，
// 平台差异全部收敛到本接口。各叶子包在自己的薄 cli 入口构造 CliConfig 后调 runCli。

export interface CliConfig {
  // yargs scriptName，也用于报错文案里的命令名。'nutui-react' | 'nutui-react-taro'
  binName: string
  // npm 包名，用于 MCP TTY 提示与文档链接。'@nutui/nutui-react-cli' | '@nutui/nutui-react-taro-cli'
  cliPkgName: string
  platform: 'h5' | 'taro'
  // list 命令头部标签。'NutUI React（H5）' | 'NutUI React（Taro 多端）'
  libLabel: string
  // demo 相关文案里的端标签。'H5' | 'Taro'
  demoLabel: string
  // 由各包 tsup define 注入的自身版本号。
  version: string
  // 随包 data/ 快照的绝对路径，由各包薄入口用 import.meta.url 注入。
  dataDir: string
  // 支持的文档语言。H5: ['zh','en']；Taro: ['zh']。驱动 --lang choices 与 MCP nutui_doc 的 enum。
  langs: readonly string[]
  defaultLang: string
  // 语言 → 中文名，用于「暂无 X 文档」文案。{ zh: '中文', en: '英文' }
  langLabel: Record<string, string>
  mcp: {
    // MCP server name，两端不同以便客户端区分。'nutui-react' | 'nutui-react-taro'
    serverName: string
    // 工具名前缀，两端均 'nutui_'（工具名一致降低 Agent 认知成本，靠 serverName 区分端）。
    toolPrefix: string
  }
}
