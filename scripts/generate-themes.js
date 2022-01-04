const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const componetsScss = glob.sync('./src/packages/**/*.scss')
let tasks = []
componetsScss.map((cs) => {
  console.log(cs)
  if (cs.indexOf('demo.scss') > -1) return
  tasks.push(
    fs
      .copy(
        path.resolve(__dirname, `.${cs}`),
        path.resolve(__dirname, `../dist`, `${cs.replace('./src/', '')}`)
      )
      .catch((error) => {})
  )
})

let fileStr = `@import '../variables.scss';\n`

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let folderName = element.name.toLowerCase()
    fileStr += `@import '../../packages/${folderName}/${folderName}.scss';\n`

    // tasks.push(
    //   fs
    //     .copy(
    //       path.resolve(__dirname, `../src/packages/${folderName}/${folderName}.scss`),
    //       path.resolve(__dirname, `../dist/packages/${folderName}/${folderName}.scss`)
    //     )
    //     .then((success) => {
    //       fileStr += `@import '@/packages/${folderName}/${folderName}.scss';\n`
    //     })
    //     .catch((error) => {})
    // )
  })
})

tasks.push(
  fs.copy(path.resolve(__dirname, '../src/styles'), path.resolve(__dirname, '../dist/styles'))
)

Promise.all(tasks).then((res) => {
  fs.outputFile(
    path.resolve(__dirname, '../dist/styles/themes/default.scss'),
    fileStr,
    'utf8',
    (error) => {
      // logger.success(`文件写入成功`);
    }
  )
})
