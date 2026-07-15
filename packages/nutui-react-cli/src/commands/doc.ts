// nutui-react doc <Component> [--lang zh|en] —— 输出组件完整文档原文。
import { loadMeta, readDoc } from '../data.js'
import { output } from '../format.js'
import { resolveOrExit } from './_shared.js'
import type { Lang, OutputFormat } from '../types.js'

export interface DocArgs {
  component: string
  lang: Lang
  format: OutputFormat
}

export function runDoc(args: DocArgs): void {
  const meta = loadMeta()
  const comp = resolveOrExit(meta, args.component)
  const content = readDoc(comp, args.lang)

  if (content === null) {
    const jsonData = {
      id: comp.id,
      name: comp.name,
      lang: args.lang,
      content: null,
    }
    output(args.format, jsonData, () => {
      const langName = args.lang === 'en' ? '英文' : '中文'
      return `${comp.name} ${comp.cName} 暂无${langName}文档（可能是隐藏子组件）。`
    })
    return
  }

  const jsonData = { id: comp.id, name: comp.name, lang: args.lang, content }
  output(args.format, jsonData, () => content)
}
