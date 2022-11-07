const fse = require('fs-extra')
const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')
const config = require('../../src/config.json')
const navs = config.nav

// 在mobile-taro下创建相应的文件夹，并创建index.config.ts、index.tsx
// 将packages下的demo.taro.tsx 的内容拷贝到 mobile-taro 下的 index.tsx 中。
const createIndexConfig = (enName, package) => {
  return new Promise((resolve, reject) => {
    if (package.show && package.taro) {
      const name = package.name
      const nameLc = package.name.toLowerCase()
      let content = `export default {
  navigationBarTitleText: '${name}',
}`
      const dirPath = path.join(
        __dirname,
        `../../src/sites/mobile-taro/src/${enName}/pages/${nameLc}`
      )
      const filePath = path.join(dirPath, `index.config.ts`)
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }, (err) => {
          console.log('mkdir error', err)
        })
      }

      fs.writeFile(filePath, content, (err) => {
        if (err) {
          throw err
        }
        resolve(`生成index.config.ts文件成功`)
      })

      // 拷贝demo
      const fileDemoPath = path.resolve(dirPath, `index.tsx`)
      let demoPath = `src/packages/${nameLc}/demo.taro.tsx`
      fse.readFile(demoPath, (err, data) => {
        if (!err) {
          let fileString = data.toString()
          const lines = fileString.split('\n')
          const reg =
            /import{1,}[\w\s\S]+(\'@\/packages\/nutui\.react\.taro\'){1,}/g
          let fileStrArr = fileString.match(reg)
          fileStrArr = fileStrArr[0].split('import')
          // let importScssStr = ''
          // for (let i = 0, lens = fileStrArr.length; i < lens; i++) {
          //   if (fileStrArr[i].indexOf('@/packages/nutui.react.taro') != -1) {
          //     let str = fileStrArr[i]
          //     str = str.substring(str.indexOf('{') + 1, str.indexOf('}'))
          //     let strs = str.split(',')
          //     strs.forEach((namestr) => {
          //       namestr = namestr.trim()
          //       namestr &&
          //         (importScssStr += `import '@/packages/${namestr.toLowerCase()}/${namestr.toLowerCase()}.scss';\n`)
          //     })
          //   }
          // }
          // lines.splice(1, 0, importScssStr)
          fileString = lines.join('\n')
          fsExtra.outputFile(fileDemoPath, fileString, 'utf8', (error) => {
            if (error) console.log('Error', error)
            // console.log(`文件写入成功`)
          })
        }
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
}

create()
