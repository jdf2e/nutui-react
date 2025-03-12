/**
 * 通过在其他脚本 import codeShift 方法，可以向生成的组件类型文件中增加 JSDoc
 * 通过npm scripts 触发，可在 src/types 下生成 props.json 文件
 */
import * as path from 'path'
import { dirname } from 'path'
import fse from 'fs-extra'
import j from 'jscodeshift'
import markdownit from 'markdown-it'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PROPS_JSON = process.env.PROPS_JSON

/**
 * 通过 cofnig.json 获取所有组件的数据
 */
function readAllComponents() {
  const config = JSON.parse(fse.readFileSync(path.join(__dirname, '../src/config.json')).toString())
  const components = config.nav.reduce(function(accumulator, currentValue) {
    currentValue.packages.forEach((pkg) => {
      if (pkg.exclude) {
        return
      }
      accumulator.push(pkg)
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
  const MarkdownIt = markdownit()
  let sources = MarkdownIt.parse(doc, {})
  const tables = {}
  sources.forEach((token, index) => {
    if (
      token.type == 'heading_open' &&
      token.tag == 'h3' &&
      sources[index + 1].type == 'inline' &&
      sources[index + 1].content.toLowerCase() == 'props'
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

/**
 * step 1: 从 config.json 中读取组件列表，迭代
 *    step a: 读取组件的 doc.md 或 doc.taro.md
 *    step b: 提取文档中的 Props 相关的表格，并转换为 JSON 数据
 *    step c: 添加注释
 */
export function codeShift(platform) {
  const components = readAllComponents()
  const componentsProps = {}
  components.forEach((component) => {
    const { name } = component
    const componentDocumentPath = path.join(
      __dirname,
      '../src/packages',
      name.toLowerCase(),
      platform === 'taro' ? 'doc.taro.md' : 'doc.md',
    )
    if (fse.pathExistsSync(componentDocumentPath)) {
      const tables = extractPropsTable(
        readComponentDocument(componentDocumentPath),
      )
      Object.keys(tables).forEach((key) => {
        const table = markdownTable2Json(tables[key])
        componentsProps[key.toLowerCase()] = table.reduce((acc, [key, desc, types, defaultValue]) => {
          acc[key] = {
            desc: desc,
            types: types,
            defaultValue: defaultValue,
          }
          return acc
        }, {})
      })
    } else {
      // console.warn(name + ' document file does not exist')
    }
    if (!PROPS_JSON) {
      if (!component.exportEmpty) addJSDoc(componentsProps, name, platform)
    }
  })
  if (PROPS_JSON) {
    const jsonContent = JSON.stringify(componentsProps, ' ', 2)
    fse.writeFileSync(path.join(__dirname, '../src/types', `props.json`), jsonContent)
  }
}

function addJSDoc(propsJson, componentName, platform) {
  const transform = (file, api) => {
    const j = api.jscodeshift.withParser('ts')
    const ast = j(file.source)
    function addComment(item) {
      if (!item.key) return
      const description = propsJson[componentName.toLowerCase()][item.key.name]
      if (!description) return
      item['comments'] = [
        j.commentBlock(`*\n* ${description['desc']}\n`),
      ]
    }
    ast
      .find(j.TSTypeAliasDeclaration).forEach((path) => {
        const annotationTypes = path.value.typeAnnotation.types
        if (!annotationTypes) return
        const typeLiteral = annotationTypes[annotationTypes.length - 1]
        if (!typeLiteral.members) return
        typeLiteral.members.forEach((item) => {
          addComment(item)
        })
      })
    ast.find(j.TSInterfaceDeclaration, {
        id: {
          name: `Base${componentName}`,
          type: 'Identifier',
        },
      })
      .forEach((path) => {
        path.value?.body?.body?.forEach((item) => {
          addComment(item)
        })
      })

      return ast.toSource()
  }
  const baseType = path.join(__dirname, `../release/${platform || 'h5'}/dist/es/types/spec/${componentName.toLowerCase()}/base.d.ts`)
  const source = fse.readFileSync(baseType, { encoding: 'utf8' })
  const result = transform({ source }, { jscodeshift: j })
  fse.writeFileSync(baseType, result)
}

PROPS_JSON && codeShift('h5')