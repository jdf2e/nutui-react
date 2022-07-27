// generate nutui.react.ts file for dev or build
const config = require('../src/config.json')
var glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
let importStr = ``
let importMarkdownStr = ``
let importOnlineEditScssStr = ``
let importScssStr = `\n`
const packages = []
const onlineEditScss = []
const mds = []
const raws = []

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element
    if (show || exportEmpty) {
      importStr += `import ${name} from '@/packages/${name.toLowerCase()}';\n`
      importScssStr += `import '@/packages/${name.toLowerCase()}/${name.toLowerCase()}.scss';\n`

      packages.push(name)
    }
    if (show) {
      glob
        .sync(
          path.join(__dirname, `../src/packages/${name.toLowerCase()}/`) +
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
      glob
        .sync(
          path.join(__dirname, `../src/packages/${name.toLowerCase()}/`) +
            'demo.scss'
        )
        .map((f) => {
          onlineEditScss.push(name)
          importOnlineEditScssStr += `import ${name}Scss from '@/packages/${name.toLowerCase()}/demo.scss?raw';\n`
        })
      importMarkdownStr += `import ${name} from '@/packages/${name.toLowerCase()}/doc.md?raw';\n`
      mds.push(name)
      raws.push(name)
    }
  })
})

let fileStrBuild = `${importStr}
export { ${packages.join(',')} };`

fs.outputFile(
  path.resolve(__dirname, '../src/packages/nutui.react.build.ts'),
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
  path.resolve(__dirname, '../src/packages/nutui.react.ts'),
  fileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

fs.outputFile(
  path.resolve(__dirname, '../src/packages/nutui.react.scss.ts'),
  importScssStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)

let mdFileStr = `${importMarkdownStr}
${importOnlineEditScssStr}
export const scssRaws = { ${onlineEditScss.map((r) => r + 'Scss').join(',')} }
export const routers = [${mds.map((m) => `'${m}'`)}]
export const raws = {${raws.join(',')}}
`

fs.outputFile(
  path.resolve(__dirname, '../src/sites/doc/docs.ts'),
  mdFileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)
