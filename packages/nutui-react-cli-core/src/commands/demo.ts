// demo <Component> [name] —— 列出或输出 demo 源码。
import { listDemos, readDemo } from '../data.js'
import { output } from '../format.js'
import {
  resolveContext,
  resolveOrExit,
  versionHeaderText,
  versionMeta,
  type OutputFormat,
} from './_shared.js'
import type { CliConfig } from '../config.js'

export interface DemoArgs {
  config: CliConfig
  component: string
  name?: string
  format: OutputFormat
  nutuiVersion?: string
}

export function runDemo(args: DemoArgs): void {
  const { config } = args
  const { meta, snapshotDir, versionInfo } = resolveContext(
    config,
    args.nutuiVersion
  )
  const comp = resolveOrExit(config, meta, args.component)
  const demos = listDemos(snapshotDir, comp)

  // 无 name：列出全部 demo 文件名（列表带版本头，便于确认版本）。
  if (!args.name) {
    const jsonData = { id: comp.id, name: comp.name, demos }
    output(
      args.format,
      jsonData,
      () => {
        if (!demos.length)
          return `${comp.name} ${comp.cName} 暂无 ${config.demoLabel} 示例。`
        return `${comp.name} ${comp.cName} 的 ${config.demoLabel} 示例（${demos.length} 个）：\n${demos
          .map((d) => `  - ${d}`)
          .join('\n')}\n\n查看源码：${config.binName} demo ${comp.name} ${demos[0]}`
      },
      { header: versionHeaderText(config, versionInfo), meta: versionMeta(versionInfo) }
    )
    return
  }

  // 有 name：输出该 demo 源码（正文是源码，text 不加版本头，json 带 _meta）。
  const code = readDemo(snapshotDir, comp, args.name)
  if (code === null) {
    const jsonData = {
      id: comp.id,
      name: comp.name,
      demo: args.name,
      code: null,
    }
    output(
      args.format,
      jsonData,
      () => {
        const avail = demos.length
          ? `可选：${demos.join(' / ')}`
          : `该组件暂无 ${config.demoLabel} 示例`
        return `未找到示例「${args.name}」。${avail}`
      },
      { header: '', meta: versionMeta(versionInfo) }
    )
    process.exitCode = 1
    return
  }

  const jsonData = { id: comp.id, name: comp.name, demo: args.name, code }
  output(args.format, jsonData, () => code, {
    header: '',
    meta: versionMeta(versionInfo),
  })
}
