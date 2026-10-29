// doc <Component> [--lang ...] —— 输出组件完整文档原文。
import { readDoc } from '../data.js'
import { output } from '../format.js'
import {
  resolveContext,
  resolveOrExit,
  versionMeta,
  type OutputFormat,
} from './_shared.js'
import type { CliConfig } from '../config.js'
import type { Lang } from '../types.js'

export interface DocArgs {
  config: CliConfig
  component: string
  lang: Lang
  format: OutputFormat
  nutuiVersion?: string
}

export function runDoc(args: DocArgs): void {
  const { meta, snapshotDir, versionInfo } = resolveContext(
    args.config,
    args.nutuiVersion
  )
  const comp = resolveOrExit(args.config, meta, args.component)
  const content = readDoc(snapshotDir, comp, args.lang)
  const langName = args.config.langLabel[args.lang] ?? args.lang

  // 文档正文是原始 markdown，text 格式不加版本头以免污染可直接保存的内容；
  // json 格式仍在 _meta 里带版本信息。
  if (content === null) {
    const jsonData = {
      id: comp.id,
      name: comp.name,
      lang: args.lang,
      content: null,
    }
    output(
      args.format,
      jsonData,
      () => `${comp.name} ${comp.cName} 暂无${langName}文档（可能是隐藏子组件）。`,
      { header: '', meta: versionMeta(versionInfo) }
    )
    return
  }

  const jsonData = { id: comp.id, name: comp.name, lang: args.lang, content }
  output(args.format, jsonData, () => content, {
    header: '',
    meta: versionMeta(versionInfo),
  })
}
