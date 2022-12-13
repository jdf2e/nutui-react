// generate nutui.react.ts file for dev or build
const config = require('../../src/config.json')
var glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
let importStr = ``
let importMarkdownStr = ``
let importScssStr = `\n`
const packages = []
const mds = []
const raws = []

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, taro, exportEmpty } = element
    // if (show ) {
    importStr += `import ${name} from '@/packages/${name.toLowerCase()}/index.taro'\n`
    importScssStr += `import '@/packages/${name.toLowerCase()}/${name.toLowerCase()}.scss'\n`
    packages.push(name)
    // }
    // if (show) {
    glob
      .sync(
        path.join(__dirname, `../../src/packages/${name.toLowerCase()}/`) +
          '*.md'
      )
      .map((f) => {
        let lang = 'zh-CN'
        let matched = f.match(/doc\.([a-z-]+)\.md/i)
        if (matched) {
          ;[, lang] = matched
          const langComponentName = `${name}${lang.replace('-', '')}`
          importMarkdownStr += `import ${langComponentName} from '@/packages/${name.toLowerCase()}/doc.${lang}.md?raw';\n`
          raws.push(langComponentName)
        }
      })
    // fs.existsSync(path.join(__dirname, `../src/packages/${name.toLowerCase()}/doc.md`))
    // console.log(__dirname)
    importMarkdownStr += `import ${name} from '@/packages/${name.toLowerCase()}/doc.md?raw'\n`
    mds.push(name)
    raws.push(name)
    // }
  })
})

let fileStrBuild = `${importStr}
export { ${packages.join(',')} };`

fs.outputFile(
  path.resolve(__dirname, '../../src/packages/nutui.taro.react.build.ts'),
  fileStrBuild,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

let fileStr = `${importStr}
${importScssStr}
export { ${packages.join(',')} };`
fs.outputFile(
  path.resolve(__dirname, '../../src/packages/nutui.react.taro.ts'),
  fileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

let taroScssfileStr = `
${importScssStr}
export default { "NutUI":"NutUI-Taro" };`
fs.outputFile(
  path.resolve(__dirname, '../../src/packages/nutui.react.taro.scss.ts'),
  taroScssfileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

fs.outputFile(
  path.resolve(__dirname, '../../src/packages/nutui.react.scss.ts'),
  importScssStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

let mdFileStr = `${importMarkdownStr}
export const routers = [${mds.map((m) => `'${m}'`)}]
export const raws = {${raws.join(',')}}
`

fs.outputFile(
  path.resolve(__dirname, '../../src/sites/doc/docs.taro.ts'),
  mdFileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)
