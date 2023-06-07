const path = require('path')
const fs = require('fs')
const MarkdownIt = require('markdown-it')()

const basePath = path.resolve(__dirname, './../src/packages')
const componentDirs = fs.readdirSync(basePath, 'utf8')
const cfg = require('./../src/config.json')
const TBODY_OPEN = 'tbody_open'
const TBODY_CLOSE = 'tbody_close'
const TR_OPEN = 'tr_open'
const TR_CLOSE = 'tr_close'
const argv = process.argv[2]

const gen = (tokens) => {
  const getNextTable = (t, index) => {
    const list = t.slice(index)
    const start = list.findIndex((token) => token.type === TBODY_OPEN)
    const end = list.findIndex((token) => token.type === TBODY_CLOSE)
    return start === -1 || end === -1 ? [0, 0] : [index + start, index + end]
  }
  const parseTable = (t, left, right) => {
    const sourcesMap = []
    const currSources = t.slice(left, right + 1)
    while (currSources.filter((source) => source.type === TR_OPEN).length) {
      let trStartIndex = currSources.findIndex(
        (source) => source.type === TR_OPEN
      )
      let trEndIndex = currSources.findIndex(
        (source) => source.type === TR_CLOSE
      )
      sourcesMap.push(currSources.slice(trStartIndex, trEndIndex + 1))
      currSources.splice(trStartIndex, trEndIndex - trStartIndex + 1)
    }
    return sourcesMap
  }
  const searchName = (t, left) => {
    const list = t.slice(0, left).reverse()
    const h2 = list.findIndex(
      (token) => token.tag === 'h2' && token.type === 'heading_open'
    )
    const h3 = list.findIndex(
      (token) => token.tag === 'h3' && token.type === 'heading_open'
    )
    return [list[h2 - 1]?.content || '', list[h3 - 1]?.content || '']
  }
  const res = []
  let index = 0
  while (true) {
    // 1、找到一个表格
    const [left, right] = getNextTable(tokens, index)
    if (left >= right) {
      // 已扫描到文档结尾
      break
    }
    index = right + 1
    // 2、回溯寻找其 h2 层级与 h3 层级的名称
    const [h2, h3] = searchName(tokens, left)
    // 3、解析表格内容，合并结果
    const data = {
      h2,
      h3,
      list: parseTable(tokens, left, right),
    }
    res.push(data)
  }
  return res
}

const genaratorWebTypes = () => {
  let typesData = []

  if (!componentDirs.length) return

  for (let componentDir of componentDirs) {
    let stat = fs.lstatSync(`${basePath}/${componentDir}`)
    if (stat.isDirectory()) {
      let absolutePath = path.join(`${basePath}/${componentDir}`, `doc.md`)
      if (argv === 'taro') {
        absolutePath = path.join(`${basePath}/${componentDir}`, `doc.taro.md`)
      }
      if (!fs.existsSync(absolutePath)) continue
      const data = fs.readFileSync(absolutePath, 'utf8')
      let sources = MarkdownIt.parse(data, {})
      const res = gen(sources)
      res.forEach((r) => {
        if (r.h2.includes('主题')) return
        for (let sourceMap of r.list) {
          const inlineItem = sourceMap.filter(
            (source) => source.type === 'inline'
          ).length
            ? sourceMap.filter((source) => source.type === 'inline')
            : []
          const propItem =
            inlineItem.length > 0
              ? `${inlineItem[0].content.replace(/`.*?`/g, '')}`
              : ''
          const infoItem =
            inlineItem.length > 1 ? `${inlineItem[1].content}` : ''
          const typeItem =
            inlineItem.length > 2
              ? `${inlineItem[2].content.toLowerCase()}`
              : ''
          let defaultItem =
            inlineItem.length > 3 ? `${inlineItem[3].content}` : ''
          const formatDefault = (str) => {
            str = str.trim()
            if (str[0] === '`') {
              str = str.slice(1)
            }
            if (str[str.length - 1] === '`') {
              str = str.slice(0, str.length - 1)
            }
            return str.trim()
          }
          defaultItem = formatDefault(defaultItem)
          typesData.push({
            组件名: r.h2,
            表格名: r.h3,
            第一列: propItem,
            第二列: infoItem,
            第三列: typeItem,
            第四列: defaultItem,
          })
        }
      })
    }
  }

  return typesData
}

const writeWebTypes = () => {
  const typesData = genaratorWebTypes()
  const innerText = `${JSON.stringify(typesData, null, 2)}`
  const componentWebTypespPath = path.resolve(__dirname, './properties.json')
  fs.writeFileSync(componentWebTypespPath, innerText)
}

writeWebTypes()
