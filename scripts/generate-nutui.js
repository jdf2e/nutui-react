// generate nutui.react.ts file for dev or build
const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
let importStr = ``
let importScssStr = `\n`
const packages = []

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element
    if (show || exportEmpty) {
      importStr += `import ${name} from '@/packages/${name.toLowerCase()}';\n`
      importScssStr += `import '@/packages/${name.toLowerCase()}/${name.toLowerCase()}.scss';\n`
      packages.push(name)
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
