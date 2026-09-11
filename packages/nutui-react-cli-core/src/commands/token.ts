// token [Component] —— 输出 Design Token。无参列全局 token，有参列组件 token。
import { loadMeta } from '../data.js'
import { output, renderTable } from '../format.js'
import { resolveOrExit } from './_shared.js'
import type { CliConfig } from '../config.js'
import type { OutputFormat, Token } from '../types.js'

export interface TokenArgs {
  config: CliConfig
  component?: string
  format: OutputFormat
}

export function runToken(args: TokenArgs): void {
  const { config } = args
  const meta = loadMeta(config.dataDir)

  // 无参：全局 token。
  if (!args.component) {
    output(args.format, { scope: 'global', tokens: meta.globalTokens }, () =>
      renderTokenText(
        `${config.libLabel}全局 Design Token（${meta.globalTokens.length} 个）`,
        meta.globalTokens
      )
    )
    return
  }

  // 有参：组件 token。
  const comp = resolveOrExit(config, meta, args.component)
  const tokens = comp.tokens ?? []
  output(args.format, { scope: comp.id, name: comp.name, tokens }, () => {
    if (!tokens.length) {
      return `${comp.name} ${comp.cName} 无专属 Design Token（可运行 ${config.binName} token 查看全局 token）。`
    }
    return renderTokenText(
      `${comp.name} ${comp.cName} 的 Design Token（${tokens.length} 个）`,
      tokens
    )
  })
}

function renderTokenText(title: string, tokens: Token[]): string {
  const rows = tokens.map((t) => [t.cssVar, t.scssVar, t.default ?? ''])
  return `${title}\n${renderTable(['CSS 变量', 'SCSS 变量', '默认值'], rows)}`
}
