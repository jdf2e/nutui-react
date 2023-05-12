const path = require('path')
const fs = require('fs')
const MarkdownIt = require('markdown-it')()

const basePath = path.resolve(__dirname, './../src/packages')
const componentDirs = fs.readdirSync(basePath, 'utf8')
const cfg = require('./../src/config.json')
const TYPE_IDENTIFY_OPEN = 'tbody_open'
const TYPE_IDENTIFY_CLOSE = 'tbody_close'
const TR_TYPE_IDENTIFY_OPEN = 'tr_open'
const TR_TYPE_IDENTIFY_CLOSE = 'tr_close'
const argv = process.argv[2]
let packages = []

const kebabCase = (str) => {
  str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase())
  return str.replace(
    /([a-z])([A-Z])/g,
    (_, p1, p2) => p1 + '-' + p2.toLowerCase()
  )
}

const getCompName = (name) => {
  if (!packages.length) {
    cfg.nav.forEach((item, index) => {
      packages = packages.concat(item.packages)
    })
  }
  const packageName = packages.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  )
  return packageName.name
}

const getNextTable = (sources) => {
  let sourcesMap = []
  const startIndex = sources.findIndex(
    (source) => source.type === TYPE_IDENTIFY_OPEN
  )
  const endIndex = sources.findIndex(
    (source) => source.type === TYPE_IDENTIFY_CLOSE
  )
  if (startIndex === -1 || endIndex === -1) {
    return [0, 0]
  }
  const currSources = sources.slice(startIndex, endIndex + 1)
  while (
    currSources.filter((source) => source.type === TR_TYPE_IDENTIFY_OPEN).length
  ) {
    let trStartIndex = currSources.findIndex(
      (source) => source.type === TR_TYPE_IDENTIFY_OPEN
    )
    let trEndIndex = currSources.findIndex(
      (source) => source.type === TR_TYPE_IDENTIFY_CLOSE
    )
    sourcesMap.push(currSources.slice(trStartIndex, trEndIndex + 1))
    currSources.splice(trStartIndex, trEndIndex - trStartIndex + 1)
  }
  return [sourcesMap, sources.slice(endIndex + 1)]
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
      let sourcesMap
      ;[sourcesMap, sources] = getNextTable(sources)
      let n = 1
      while (true) {
        if (!sourcesMap) {
          break
        }
        let compoentName = kebabCase(getCompName(componentDir))
        for (let sourceMap of sourcesMap) {
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
            组件名: `${compoentName}`,
            表格名: n,
            第一列: propItem,
            第二列: infoItem,
            第三列: typeItem,
            第四列: defaultItem,
          })
        }
        ;[sourcesMap, sources] = getNextTable(sources)
        n++
      }
    }
  }

  return typesData
}

const writeWebTypes = () => {
  const typesData = genaratorWebTypes()
  let innerText = `${JSON.stringify(typesData, null, 2)}`
  const componentWebTypespPath = path.resolve(__dirname, './properties.json')
  fs.writeFileSync(componentWebTypespPath, innerText)
}

writeWebTypes()
