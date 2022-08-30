const vfs = require('vinyl-fs')
const map = require('map-stream')

const config = require('../src/config.json')
const dest_docs = './dist/types'
const types = []

function exportComponentProps() {
  config.nav.map((item) => {
    item.packages.forEach((element) => {
      let { name, show, type, exportEmpty } = element
      if (show || exportEmpty) {
        types.push(
          `export type { ${name}Props } from './${name.toLowerCase()}/${name.toLowerCase()}';`
        )
      }
    })
  })
  vfs
    .src(['./dist/types/nutui.react.d.ts'])
    .pipe(
      map((file, cb) => {
        const contents = file.contents.toString() + '\n' + types.join('\n')
        file.contents = Buffer.from(contents, 'utf8')
        cb(null, file)
      })
    )
    .pipe(vfs.dest(dest_docs, { overwrite: true }))
}

module.exports = exportComponentProps
