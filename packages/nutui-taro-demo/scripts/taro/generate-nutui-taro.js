// generate nutui.react.ts file for dev or build
const config = require('../../nutui-react/config.json')
var glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
let importStr = ``
let importRNStr = ``
let importMarkdownStr = ``
let importScssStr = `\n`
const packages = []
const mds = []
const raws = []

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, taro, exportEmpty, exclude, version, rn, dd } = element
    if (exclude) return
    if (!dd) return

    importStr += `import ${name} from '@/packages/${name.toLowerCase()}/index.taro'\n`
    importStr += `export * from '@/packages/${name.toLowerCase()}/index.taro'\n`
    importRNStr += `import ${name} from '@/packages/${name.toLowerCase()}/index.${rn?'rn':'taro'}'\n`
    importRNStr += `export * from '@/packages/${name.toLowerCase()}/index.${rn?'rn':'taro'}'\n`
    importScssStr += `import '@/packages/${name.toLowerCase()}/${name.toLowerCase()}.harmony.css'\n`
    packages.push(name)

    glob
      .sync(
        path.join(__dirname, `../../nutui-react/packages/${name.toLowerCase()}/`) +
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
    importMarkdownStr += `import ${name} from '@/packages/${name.toLowerCase()}/doc.md?raw'\n`
    mds.push(name)
    raws.push(name)
  })
})

let fileStr = `${importStr}
${importScssStr}
export { ${packages.join(',')} };`
fs.outputFile(
  path.resolve(__dirname, '../../nutui-react/packages/nutui.react.taro.ts'),
  fileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

// let fileRNStr = `${importRNStr}
// ${importScssStr}
// export { ${packages.join(',')} };`
// fs.outputFile(
//   path.resolve(__dirname, '../../nutui-react/packages/nutui.react.rn.ts'),
//   fileRNStr,
//   'utf8',
//   (error) => {
//     if (error) throw error
//   }
// )
//
let taroScssfileStr = `
${importScssStr}
export default { "NutUI":"NutUI-Taro" };`
fs.outputFile(
  path.resolve(__dirname, '../../nutui-react/packages/nutui.react.scss.taro.ts'),
  taroScssfileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)
