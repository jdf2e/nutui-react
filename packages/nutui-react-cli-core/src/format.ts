// 输出辅助：统一 JSON 与人类可读文本两种形态。
import type { OutputFormat } from './types.js'

export function printJson(data: unknown): void {
  process.stdout.write(`${JSON.stringify(data, null, 2)}\n`)
}

export function printText(text: string): void {
  process.stdout.write(`${text}\n`)
}

// 渲染等宽对齐的文本表格。列宽按内容自适应（按显示宽度，中文按 2 计）。
export function renderTable(headers: string[], rows: string[][]): string {
  const widths = headers.map((h, i) =>
    Math.max(displayWidth(h), ...rows.map((r) => displayWidth(r[i] ?? '')))
  )
  const line = (cells: string[]) =>
    cells.map((c, i) => pad(c ?? '', widths[i])).join('  ')
  const sep = widths.map((w) => '-'.repeat(w)).join('  ')
  return [line(headers), sep, ...rows.map(line)].join('\n')
}

// 东亚宽字符按 2 个显示宽度计，用于表格对齐。
function displayWidth(s: string): number {
  let w = 0
  for (const ch of s)
    w += /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(ch) ? 2 : 1
  return w
}

function pad(s: string, width: number): string {
  return s + ' '.repeat(Math.max(0, width - displayWidth(s)))
}

// 统一的「按格式输出」入口：json 走 printJson，text 走回调产出的文本。
export function output(
  format: OutputFormat,
  jsonData: unknown,
  toText: () => string
): void {
  if (format === 'json') printJson(jsonData)
  else printText(toText())
}
