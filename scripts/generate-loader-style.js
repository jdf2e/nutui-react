const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, exportEmpty } = element
    const nameLowerCase = name.toLowerCase()
    const file = path.resolve(process.cwd(), `dist/esm/${name}/style/index.js`)
    const cssFile = path.resolve(process.cwd(), `dist/esm/${name}/style/css.js`)
    if (show || exportEmpty) {
      fs.outputFileSync(file, `require('../../../packages/${nameLowerCase}/${nameLowerCase}.scss')`)
      fs.outputFileSync(
        cssFile,
        `require('../../../packages/${nameLowerCase}/${nameLowerCase}.css')`
      )
    }
  })
})
