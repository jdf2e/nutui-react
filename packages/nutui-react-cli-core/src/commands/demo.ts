// demo <Component> [name] —— 列出或输出 demo 源码。
import { listDemos, readDemo, readDoc } from '../data.js'
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
  intent?: string
  format: OutputFormat
  nutuiVersion?: string
}

export function extractDemoDescriptions(
  docContent: string
): Record<string, { title: string; desc: string }> {
  const lines = docContent.split('\n')
  const demoMap: Record<string, { title: string; desc: string }> = {}
  let currentH3 = ''
  let currentDesc = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith('### ')) {
      currentH3 = line.replace(/^###\s+/, '').trim()
      currentDesc = ''
    } else if (line.startsWith('## ')) {
      currentH3 = ''
      currentDesc = ''
    } else if (
      line &&
      !line.startsWith(':::') &&
      !line.startsWith('<') &&
      !line.startsWith('```')
    ) {
      if (!currentDesc) currentDesc = line
    }

    const codeBlockMatch = line.match(
      /<CodeBlock\s+src=['"][^'"]*?(demo\d+)\.tsx['"]/
    )
    if (codeBlockMatch) {
      const demoKey = codeBlockMatch[1]
      demoMap[demoKey] = {
        title: currentH3,
        desc: currentDesc.replace(/`/g, ''),
      }
    }
  }
  return demoMap
}

export function runDemo(args: DemoArgs): void {
  const { config } = args
  const { meta, snapshotDir, versionInfo } = resolveContext(
    config,
    args.nutuiVersion
  )
  const comp = resolveOrExit(config, meta, args.component)
  const demos = listDemos(snapshotDir, comp)

  // 读取文档以提取各 demo 标题与意图
  const docContent = readDoc(snapshotDir, comp, config.defaultLang) || ''
  const demoDescriptions = extractDemoDescriptions(docContent)

  // 1. 如果指定了 intent 意图搜索
  if (args.intent && !args.name) {
    const query = args.intent.toLowerCase().trim()
    const matches: string[] = []

    for (const d of demos) {
      const dMeta = demoDescriptions[d]
      if (
        (dMeta?.title && dMeta.title.toLowerCase().includes(query)) ||
        (dMeta?.desc && dMeta.desc.toLowerCase().includes(query))
      ) {
        matches.push(d)
      } else {
        // 匹配源码关键词
        const code = readDemo(snapshotDir, comp, d)
        if (code && code.toLowerCase().includes(query)) {
          matches.push(d)
        }
      }
    }

    if (matches.length === 1) {
      // 命中唯一匹配，直接输出该 demo 源码
      const targetDemo = matches[0]
      const code = readDemo(snapshotDir, comp, targetDemo)
      const jsonData = {
        id: comp.id,
        name: comp.name,
        demo: targetDemo,
        intent: args.intent,
        title: demoDescriptions[targetDemo]?.title || targetDemo,
        code,
      }
      output(
        args.format,
        jsonData,
        () =>
          `// 🎯 命中意图「${args.intent}」的最佳示例: ${targetDemo} (${demoDescriptions[targetDemo]?.title || ''})\n\n${code}`,
        { header: '', meta: versionMeta(versionInfo) }
      )
      return
    }

    // 多条匹配或未找到：输出匹配列表
    const candidateDemos = matches.length > 0 ? matches : demos
    const notFoundNote =
      matches.length === 0
        ? `（未找到完全匹配「${args.intent}」的示例，展示全部示例）\n`
        : ''

    const richDemos = candidateDemos.map((d) => ({
      name: d,
      title: demoDescriptions[d]?.title || '',
      desc: demoDescriptions[d]?.desc || '',
    }))

    output(
      args.format,
      {
        id: comp.id,
        name: comp.name,
        intent: args.intent,
        matches,
        demos: richDemos,
      },
      () => {
        const lines = richDemos.map((d) => {
          const title = d.title ? `: ${d.title}` : ''
          const desc = d.desc ? ` (${d.desc})` : ''
          return `  - ${d.name}${title}${desc}`
        })
        return `${notFoundNote}${comp.name} ${comp.cName} 匹配示例（${candidateDemos.length} 个）：\n${lines.join('\n')}\n\n查看源码：${config.binName} demo ${comp.name} ${candidateDemos[0]}`
      },
      {
        header: versionHeaderText(config, versionInfo),
        meta: versionMeta(versionInfo),
      }
    )
    return
  }

  // 2. 无 name 且无 intent：列出带有语义标题的 demo 列表
  if (!args.name) {
    const richDemos = demos.map((d) => ({
      name: d,
      title: demoDescriptions[d]?.title || '',
      desc: demoDescriptions[d]?.desc || '',
    }))

    const jsonData = { id: comp.id, name: comp.name, demos: richDemos }
    output(
      args.format,
      jsonData,
      () => {
        if (!demos.length)
          return `${comp.name} ${comp.cName} 暂无 ${config.demoLabel} 示例。`
        const lines = richDemos.map((d) => {
          const title = d.title ? `: ${d.title}` : ''
          const desc = d.desc ? ` (${d.desc})` : ''
          return `  - ${d.name}${title}${desc}`
        })
        return `${comp.name} ${comp.cName} 的 ${config.demoLabel} 示例（${demos.length} 个）：\n${lines.join('\n')}\n\n查看源码：${config.binName} demo ${comp.name} ${demos[0]}`
      },
      {
        header: versionHeaderText(config, versionInfo),
        meta: versionMeta(versionInfo),
      }
    )
    return
  }

  // 3. 有 name：输出该 demo 源码
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

  const jsonData = {
    id: comp.id,
    name: comp.name,
    demo: args.name,
    title: demoDescriptions[args.name]?.title || '',
    code,
  }
  output(args.format, jsonData, () => code, {
    header: '',
    meta: versionMeta(versionInfo),
  })
}
