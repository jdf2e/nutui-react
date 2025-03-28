const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')

let fileStr = `@import '../theme-default.scss';\n@import '../variables.scss';\n`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `@import '../theme-${projectID}.scss';\n@import '../variables-${projectID}.scss';\n`
}
let tasks = []
const componentsScss = glob.sync('./src/packages/**/*.scss', { dotRelative: true })
componentsScss.map((cs) => {
  if (cs.indexOf('demo.scss') > -1) return
  tasks.push(
    fs
      .copy(
        path.resolve(__dirname, `.${cs}`),
        path.resolve(__dirname, `../dist`, `${cs.replace('./src/', '')}`)
      )
      .catch((error) => { })
  )
})

config.nav.map((item) => {
  item.packages.forEach((element) => {
    if (element.exclude) return
    let folderName = element.name.toLowerCase()
    fileStr += `@import '../../packages/${folderName}/${folderName}.scss';\n`
  })
})

tasks.push(
  fs.copy(
    path.resolve(__dirname, '../src/styles'),
    path.resolve(__dirname, '../dist/styles')
  )
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
  const themeDarkFile =  path.resolve(__dirname, '../dist/styles/theme-dark.css')
  fs.copy(
    path.resolve(__dirname, '../dist/styles/theme-dark.scss'),
    themeDarkFile
  ).then(() => {
    fs.writeFileSync(themeDarkFile,fs.readFileSync(themeDarkFile).toString().replace(/\/\/[^\n]*\n/gi, ''))
  })
  const themeDefaultFile =  path.resolve(__dirname, '../dist/styles/theme-default.css')
  fs.copy(
    path.resolve(__dirname, '../dist/styles/theme-default.scss'),
    themeDefaultFile
  ).then(() => {
    fs.writeFileSync(themeDefaultFile,fs.readFileSync(themeDefaultFile).toString().replace(/\/\/[^\n]*\n/gi, ''))
  })
  const themeJmappFile =  path.resolve(__dirname, '../dist/styles/theme-jmapp.css')
  fs.copy(
    path.resolve(__dirname, '../dist/styles/theme-jmapp.scss'),
    themeJmappFile
  ).then(() => {
    fs.writeFileSync(themeJmappFile,fs.readFileSync(themeJmappFile).toString().replace(/\/\/[^\n]*\n/gi, ''))
  })
})
