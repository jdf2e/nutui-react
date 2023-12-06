const fse = require('fs-extra')
const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')
const config = require('../src/config.json')
const navs = config.nav

const mypath = `/Users/tongen/Documents/开源/UI-Demos/my-nutui-22`
const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to)
    })
    .catch((err) => {
      console.error(err)
    })
}

// 在mobile-taro下创建相应的文件夹，并创建index.config.ts、index.tsx
// 将packages下的demo.taro.tsx 的内容拷贝到 mobile-taro 下的 index.tsx 中。
const createIndexConfig = (enName, package) => {
  return new Promise((resolve, reject) => {
    if (package.show && package.taro) {
      // 生成index.config.ts
      const name = package.name
      const nameLc = package.name.toLowerCase()
      let content = `export default {
  navigationBarTitleText: '${name}',
}`
      const dirPath = path.join(`${mypath}/src/${enName}/pages/${nameLc}`)
      const filePath = path.join(dirPath, `index.config.ts`)
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }, (err) => {
          console.log('mkdir error', err)
        })
      }

      fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.log('eerrr')
          throw err
        }
        resolve(`生成index.config.ts文件成功`)
      })

      // 生成 index.tsx
      const demoContent = `import Demo from './demo.taro';
export default Demo;`
      const demoDirPath = path.join(`${mypath}/src/${enName}/pages/${nameLc}`)
      const demoFilePath = path.join(demoDirPath, `index.tsx`)
      if (!fs.existsSync(demoDirPath)) {
        fs.mkdirSync(demoDirPath, { recursive: true }, (err) => {
          console.log('mkdir error', err)
        })
      }
      fs.writeFile(demoFilePath, demoContent, (err) => {
        if (err) {
          throw err
        }
        resolve(`生成 index.tsx 文件成功`)
      })

      // 拷贝 demo.taro.tsx 到目标路径
      let docpath = `src/packages/${nameLc}/demo.taro.tsx`
      fse.readFile(docpath, (err, data) => {
        if (!err) {
          copyFile(
            docpath,
            `${mypath}/src/${enName}/pages/${nameLc}/demo.taro.tsx`
          )
        }
      })
    }
  })
}

const replaceAppSCSS = () => {
  const dirPath = path.join(__dirname, `../../packages/nutui-taro-demo/src`)
  const filePath = path.join(dirPath, `app.scss`)
  fse.readFile(filePath, (err, data) => {
    if (!err) {
      let fileString = data.toString()
      const lines = fileString.split('\n')
      if (lines[0].indexOf(`@import '../../../styles/font`) !== -1) {
        lines[0] = ''
      }
      fsExtra.outputFile(filePath, fileString, 'utf8', (error) => {
        if (error) console.log('Error', error)
      })
    }
  })
}

function create() {
  navs.map((nav) => {
    nav.packages.map((package) => {
      return createIndexConfig(nav.enName, package)
    })
  })
  replaceAppSCSS()
}

create()
