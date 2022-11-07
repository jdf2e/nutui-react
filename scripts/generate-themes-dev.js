const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
let fileStr = `@import '../variables.scss';\n`
let tasks = []
let sassStyles = ''
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let folderName = element.name.toLowerCase()
    sassStyles += '\n'
    sassStyles += fs.readFileSync(
      path.resolve(
        __dirname,
        `../src/packages/${folderName}/${folderName}.scss`
      ),
      'utf8'
    )
    fileStr += `@import '../../packages/${folderName}/${folderName}.scss';\n`
  })
})

tasks.push(
  fs.copy(
    path.resolve(__dirname, '../src/styles'),
    path.resolve(__dirname, '../dist/theme-react/source/styles')
  )
)

Promise.all(tasks).then((res) => {
  fs.copy(
    path.resolve(__dirname, '../src/styles/variables.scss'),
    path.resolve(
      __dirname,
      '../dist/theme-react/source/styles/variables.scss_source'
    )
  )

  fs.writeFile(
    path.resolve(
      __dirname,
      `../dist/theme-react/source/styles/sass-styles.scss_source`
    ),
    sassStyles,
    'utf8'
  )

  fs.outputFile(
    path.resolve(
      __dirname,
      '../dist/theme-react/source/styles/themes/default.scss'
    ),
    fileStr,
    'utf8',
    (error) => {
      // logger.success(`文件写入成功`);
    }
  )
})
