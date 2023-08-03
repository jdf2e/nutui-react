const markdownIt = require('markdown-it')()
const fs = require('fs')
const path = require('path')
const TurndownService = require('turndown')
const turndownPluginGfm = require('turndown-plugin-gfm')

function convertMdTables(inputFile, outputFile) {
  const mdText = fs.readFileSync(inputFile, 'utf8')

  let html = markdownIt.render(mdText)

  // 在 HTML 中查找表格，并将其转换为数组
  const tables = html.match(/<table[\s\S]*?<\/table>/g)
  // 将数组中的每个表格转换为对象
  const tableObjects = tables.map((table) => {
    const rows = table.match(/<tr[\s\S]*?<\/tr>/g)
    const headers = rows[0].match(/<th[\s\S]*?<\/th>/g).map((th) => {
      return th.replace(/<\/?th>/g, '')
    })
    const bodyRows = rows.slice(1).map((row) => {
      const cells = row.match(/<td[\s\S]*?<\/td>/g).map((td) => {
        return td.replace(/<\/?td>/g, '')
      })
      const rowObj = {}
      headers.forEach((header, index) => {
        rowObj[header] = cells[index]
      })
      return rowObj
    })
    return bodyRows
  })

  // html 转 markdown 的初始化
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
  })
  turndownService.use(turndownPluginGfm.gfm)

  // 单元格格式处理
  const formatRow = (row) => {
    const waitForFormat = [
      '类型',
      '默认值',
      'Type',
      'Default',
      'Default Value',
      '類型',
      '默認值',
    ]
    waitForFormat.forEach((key) => {
      if (row[key]) {
        row[key] =
          '`' + row[key].replace(/<\/?code>/g, '').replace(/\|/g, '\\|') + '`'
      }
    })
    Object.keys(row).forEach((key) => {
      if (row[key].indexOf('<code>') > -1) {
        row[key] = row[key].replace(/<\/?code>/g, '`').replace(/\|/g, '\\|')
      }
      if (row[key] === '') {
        row[key] = '`-`'
      }
    })
    return row
  }
  // 将表格对象转换为 Markdown 格式的表格
  const mdTables = tableObjects.map((table) => {
    const headers = Object.keys(table[0])
    const correctTable = table.map((row) => {
      return formatRow(row)
    })
    const headerRow = `| ${headers.join(' | ')} |\n|${headers
      .map(() => ' --- ')
      .join('|')}|\n`
    const bodyRows = correctTable
      .map(
        (row) =>
          `| ${Object.values(row)
            .map((val) => val.replace('|', '\\|'))
            .join(' | ')
            .replace('&gt;', '>')} |`
      )
      .join('\n')

    return markdownIt.render(`${headerRow}${bodyRows}`)
  })

  // 将 Markdown 表格插入回 Markdown 文本中
  mdTables.forEach((mdTable, index) => {
    html = html.replace(tables[index], mdTable)
  })

  // 将 HTML 转换回 Markdown
  const md = turndownService.turndown(html)
  fs.writeFileSync(outputFile, md, 'utf8')
}

const fileType = ['doc.md', 'doc.en-US.md', 'doc.zh-TW.md', 'doc.taro.md']
const component = process.argv[2]
const basePath = path.join(
  __dirname,
  `../src/packages/${component.toLowerCase()}/`
)

if (!component) return console.error('Required component name')
fileType.forEach((file) => {
  convertMdTables(path.join(basePath, file), path.join(basePath, file))
})
