const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
let importScssStr = `\n`
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, exportEmpty } = element
    const nameLowerCase = name.toLowerCase()
    const file = path.resolve(process.cwd(), `dist/esm/${name}/style/index.js`)
    if (show || exportEmpty) {
      importScssStr = `import '../../../packages/${nameLowerCase}/${nameLowerCase}.scss'`
      fs.outputFileSync(file, importScssStr)
    }
  })
})
