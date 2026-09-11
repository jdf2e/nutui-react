// 命令间共享：解析组件名，未命中则打印 did-you-mean 并退出。
import { resolveComponent, suggestComponents } from '../data.js'
import type { CliConfig } from '../config.js'
import type { Component, Meta } from '../types.js'

export function resolveOrExit(
  config: CliConfig,
  meta: Meta,
  query: string
): Component {
  const comp = resolveComponent(meta, query)
  if (comp) return comp
  const suggestions = suggestComponents(meta, query)
  let msg = `未找到组件「${query}」。`
  if (suggestions.length) msg += ` 你是否想找：${suggestions.join(' / ')}？`
  msg += `\n运行 ${config.binName} list 查看全部组件。`
  process.stderr.write(`${msg}\n`)
  process.exit(1)
}
