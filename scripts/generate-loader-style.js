const config = require('../src/config.json')
const path = require('path')
const fse = require('fs-extra')
const fs = require('fs')

const components = []

config.nav.forEach((c) => {
  c.packages.forEach((p) => {
    components.push(p.name)
  })
})

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, exportEmpty } = element
    const nameLowerCase = name.toLowerCase()

    const file = path.resolve(process.cwd(), `dist/esm/${name}/style/index.js`)
    if (show || exportEmpty) {
      const componentSassFile = path.join(
        __dirname,
        `../dist/packages/${nameLowerCase}/${nameLowerCase}.scss`
      )
      // 这里匹配 @import，并转换为 require()
      let data = fs.readFileSync(componentSassFile, {
        encoding: 'utf8',
        flag: 'r',
      })
      const matched = data.match(/@import.*?[;][\n\r]?/gi)

      let rewrite = ''
      console.log(matched)
      if (matched && matched.length) {
        rewrite = matched.map((im) => {
          if (im.indexOf('../../styles/') > -1) {
            if (im.indexOf('.css') > -1) {
              data = data.replace(im, '')

              // return im
              //   .toLowerCase()
              //   .replace('@import ', `require(`)
              //   .replace('../../', '../../../')
              //   .replace("';", "')")

              return im
                .toLowerCase()
                .replace('@import ', `import`)
                .replace('../../', '../../../')
            }
            return ''
          } else {
            data = data.replace(im, '')
            // 补全文件扩展名
            if (im.indexOf('.scss') == -1) {
              im = im.replace("';", ".scss';")
            }
            // 引入的组件转换
            // @import '../popup/popup.scss';
            // require('../../Popup/style')
            const matchGroup = im.match(/\.\.\/(?<package>[a-z]+)\//)
            if (matchGroup && matchGroup.groups && matchGroup.groups.package) {
              const find = components.filter(
                (c) => c.toLowerCase() == matchGroup.groups.package
              )[0]
              if (find) {
                // return `require('../../${find}/style')`
                return `import '../../${find}/style'`
              }
            }

            // 替换为 js 文件内容
            // @import './countup.scss';
            // require('../../../packages/animatingnumbers/countup.scss')

            // return im
            //   .toLowerCase()
            //   .replace('@import ', `require(`)
            //   .replace('../', '../../../packages/')
            //   .replace("'./", `'../../../packages/${nameLowerCase}/`)
            //   .replace("';", "')")

            return im
              .toLowerCase()
              .replace('@import ', `import`)
              .replace('../', '../../../packages/')
              .replace("'./", `'../../../packages/${nameLowerCase}/`)
          }
        })
        console.log('rewrite', rewrite)
        rewrite = rewrite.join('\r\n')
        fse.outputFileSync(componentSassFile, data)
      }
      fse.outputFileSync(
        file,
        // `${rewrite}${'\n'}require('../../../packages/${nameLowerCase}/${nameLowerCase}.scss')`
        `${rewrite}${'\n'}import '../../../packages/${nameLowerCase}/${nameLowerCase}.scss'`
      )
    }
  })
})
