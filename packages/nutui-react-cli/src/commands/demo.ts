// nutui-react demo <Component> [name] —— 列出或输出 H5 demo 源码。
import { listDemos, loadMeta, readDemo } from '../data.js'
import { output } from '../format.js'
import { resolveOrExit } from './_shared.js'
import type { OutputFormat } from '../types.js'

export interface DemoArgs {
  component: string
  name?: string
  format: OutputFormat
}

export function runDemo(args: DemoArgs): void {
  const meta = loadMeta()
  const comp = resolveOrExit(meta, args.component)
  const demos = listDemos(comp)

  // 无 name：列出全部 demo 文件名。
  if (!args.name) {
    const jsonData = { id: comp.id, name: comp.name, demos }
    output(args.format, jsonData, () => {
      if (!demos.length) return `${comp.name} ${comp.cName} 暂无 H5 示例。`
      return `${comp.name} ${comp.cName} 的 H5 示例（${demos.length} 个）：\n${demos
        .map((d) => `  - ${d}`)
        .join('\n')}\n\n查看源码：nutui-react demo ${comp.name} ${demos[0]}`
    })
    return
  }

  // 有 name：输出该 demo 源码。
  const code = readDemo(comp, args.name)
  if (code === null) {
    const jsonData = {
      id: comp.id,
      name: comp.name,
      demo: args.name,
      code: null,
    }
    output(args.format, jsonData, () => {
      const avail = demos.length
        ? `可选：${demos.join(' / ')}`
        : '该组件暂无 H5 示例'
      return `未找到示例「${args.name}」。${avail}`
    })
    process.exitCode = 1
    return
  }

  const jsonData = { id: comp.id, name: comp.name, demo: args.name, code }
  output(args.format, jsonData, () => code)
}
