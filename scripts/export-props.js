const vfs = require('vinyl-fs')
const map = require('map-stream')
const fs = require('fs')
const path = require('path')

const config = require('../src/config.json')
const dest_docs = './dist/types'
const types = []

exportComponentProps(process.env.npm_config_taro)

function exportComponentProps(isTaro) {
  console.log('taro props:', isTaro)
  const fileExt = isTaro ? '.taro' : ''
  config.nav.map((item) => {
    item.packages.forEach((element) => {
      let { name, show, type, exportEmpty } = element
      if (show || exportEmpty) {
        if (isTaro) {
          const fileExist = fs.existsSync(
            path.join(
              process.cwd(),
              'src/packages/',
              `${name.toLowerCase()}/${name.toLowerCase()}${fileExt}.tsx`
            )
          )
          types.push(
            `export type { ${name}Props } from '@/packages/${name.toLowerCase()}/${name.toLowerCase()}${
              fileExist ? fileExt : ''
            }';`
          )
        } else {
          types.push(
            `export type { ${name}Props } from '@/packages/${name.toLowerCase()}/${name.toLowerCase()}${fileExt}';`
          )
        }
      }
    })
  })
  vfs
    .src([
      isTaro
        ? './src/packages/nutui.taro.react.build.ts'
        : './src/packages/nutui.react.build.ts',
    ])
    .pipe(
      map((file, cb) => {
        const contents = file.contents.toString() + '\n' + types.join('\n')
        file.contents = Buffer.from(contents, 'utf8')
        cb(null, file)
      })
    )
    .pipe(vfs.dest(dest_docs, { overwrite: true }))
}
