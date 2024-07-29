import linguistLanguages from 'linguist-languages'
import {
  printers as MarkdownPrinter,
  parsers as MarkdownParsers,
} from 'prettier/plugins/markdown'

function printTable(path, options, print) {
  // 提取整个表格中所有元素
  const contents = path.map(
    () =>
      path.map(() => {
        const text = print()
          .flat(Infinity)
          .map((item) => {
            if (typeof item === 'string') {
              return item
            }
            return item.parts.flat(Infinity).join('')
          })
          .join('')
        return { text }
      }, 'children'),
    'children'
  )
  const alignedTable = printTableContents()
  return [alignedTable]

  function printTableContents() {
    // 依次格式化第一行、第二行、其他行
    const parts = [printRow(contents[0]), printAlign()]
    if (contents.length > 1) {
      for (let i = 1; i < contents.length - 1; i++) {
        parts.push(printRow(contents[i]))
      }
      parts.push(printRow(contents[contents.length - 1], true)) // 标记结束，末尾不再添加换行符
    }
    return parts
  }

  function printAlign() {
    // 对于第二行，忽略所有的数据，一律使用 --- 进行替换
    const align = contents[0].map(() => {
      return `---`
    })

    return `| ${align.join(' | ')} |\n`
  }

  function printRow(rowContents, end = false) {
    const columns = rowContents.map(({ text }) => {
      return ` ${text} `
    })
    return end ? `|${columns.join('|')}|` : `|${columns.join('|')}|\n`
  }
}
function pluginPrint(path, options, print) {
  // 通过 path 获取到对应的节点
  const node = path.getValue()
  if (node.type === 'table') {
    // 对于 Table 类型节点，使用自定义的打印机方法
    return printTable(path, options, print)
  }
  return MarkdownPrinter.mdast.print(path, options, print)
}
export const languages = [
  {
    ...linguistLanguages.Markdown,
    parsers: ['markdown'], // 使用内置的 markdown parser
  },
]

export const parsers = {
  markdown: MarkdownParsers.markdown,
}

export const printers = {
  mdast: {
    ...MarkdownPrinter.mdast,
    print: pluginPrint, // 仅对打印机方法进行重写
  },
}
