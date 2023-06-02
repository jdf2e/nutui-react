/**
 * 向生成的组件类型文件中注入注释
 */
const fse = require('fs-extra')
const path = require('path')
const j = require('jscodeshift')
const TARO = process.env.TARO

/**
 * 通过 cofnig.json 获取所有组件的数据
 */
function readAllComponents() {
  const config = require('../src/config.json')
  const components = config.nav.reduce(function (accumulator, currentValue) {
    currentValue.packages.forEach((package) => {
      if (package.exclude || package.version !== '2.0.0') {
        return
      }
      accumulator.push(package)
    })
    return accumulator
  }, [])
  return components
}

/**
 * 按照组件名称读取 doc 文档的内容
 * @param name
 * @returns {*}
 */
function readComponentDocument(docFile) {
  return fse.readFileSync(docFile).toString()
}

/**
 * 获取 doc 文档中 Props 相关的 table
 * @param doc
 * @returns {{}} 返回 markdownIt 的 token. 当文档中存在父子组件，都会提取出来
 */
function extractPropsTable(doc) {
  const MarkdownIt = require('markdown-it')()
  let sources = MarkdownIt.parse(doc, {})
  const tables = {}
  sources.forEach((token, index) => {
    if (
      token.type == 'heading_open' &&
      token.tag == 'h3' &&
      sources[index + 1].type == 'inline' &&
      sources[index + 1].content === 'Props'
    ) {
      const componentName = sources[index - 2].content
      let startIndex = index + 3
      tables[componentName] = []
      while (startIndex < sources.length) {
        tables[componentName].push(sources[startIndex])
        if (sources[startIndex].type == 'table_close') {
          startIndex = null
          break
        }
        startIndex = startIndex + 1
      }
    }
  })
  return tables
}

/**
 * 读入 markdown 的 table token，返回 json 数据
 * @param table
 * @returns {{}}
 */
function markdownTable2Json(table) {
  const rows = []
  let row = []
  let collectBodyFlag = false
  table.forEach((token) => {
    if (token.type === 'tbody_open') {
      collectBodyFlag = true
    }
    if (token.type === 'tbody_close') {
      collectBodyFlag = false
    }
    if (collectBodyFlag) {
      if (token.type === 'tr_close') {
        rows.push(row)
        row = []
      }
      if (token.type == 'inline') {
        row.push(token.content.replace(/`/g, ''))
      }
    }
  })
  return rows
}

function addComments(dtsPath, propsTable, componentName) {
  const source = fse.readFileSync(dtsPath).toString()

  function findInTable(identifierName) {
    const [info] = propsTable.filter(
      (t) => t[0].replace(/'/g, '') === identifierName
    )
    return info
  }

  const transform = (file, api) => {
    const j = api.jscodeshift.withParser('ts')
    return j(file.source)
      .find(j.TSInterfaceDeclaration, {
        id: {
          name: componentName + 'Props',
          type: 'Identifier',
        },
      })
      .forEach((path) => {
        path.value?.body?.body?.forEach((item) => {
          if (!item.key) return
          const info = findInTable(item.key.name)
          if (!info) return
          item['comments'] = [
            j.commentBlock(`*\n* ${info[1]}\n* @default ${info[3]}\n`),
          ]
        })
      })
      .toSource()
  }
  const result = transform({ source }, { jscodeshift: j })
  if (result) {
    fse.writeFileSync(dtsPath, result)
  }
}

function getDtsPath(key) {
  // Tabs.Tabpane -> tabpane
  let name
  if (key === 'Tabs.Tabpane') {
    name = 'tabpane'
  } else {
    name = key.toLowerCase().replace('.', '')
  }
  const file = path.join(
    __dirname,
    '../dist/types/packages',
    name,
    name + (TARO ? '.taro.d.ts' : '.d.ts')
  )
  return file
}

function getComponentName(key) {
  // Tabs.Tabpane -> tabpane
  let name = key
  if (key === 'Tabs.Tabpane') {
    name = 'TabPane'
  }
  return name.replace('.', '')
}

/**
 * step 1: 从 config.json 中读取组件列表，迭代
 *    step a: 读取组件的 doc.md 或 doc.taro.md
 *    step b: 提取文档中的 Props 相关的表格，并转换为 JSON 数据
 *    step c: 添加注释
 */
function codeShift() {
  const components = readAllComponents()
  components.forEach((component) => {
    const { name } = component
    const componentDocumentPath = path.join(
      __dirname,
      '../src/packages',
      name.toLowerCase(),
      TARO ? 'doc.taro.md' : 'doc.md'
    )
    if (fse.pathExistsSync(componentDocumentPath)) {
      const tables = extractPropsTable(
        readComponentDocument(componentDocumentPath)
      )
      Object.keys(tables).forEach((key) => {
        const dtsPath = getDtsPath(key)
        if (fse.pathExistsSync(dtsPath)) {
          const table = markdownTable2Json(tables[key])
          addComments(dtsPath, table, getComponentName(key))
        } else {
          console.warn(name + ' dts file does not exist')
        }
      })
    } else {
      // console.warn(name + ' document file does not exist')
    }
  })
}

codeShift()
