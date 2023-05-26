// replace types alias for build
const vfs = require('vinyl-fs')
const map = require('map-stream')
const fs = require('fs-extra')
const exportPropsTypes = require('./export-props')
const dest_docs = './dist/types'

vfs
  .src(['./dist/esm/types/src/packages/nutui.react.d.ts'])
  .pipe(
    map((file, cb) => {
      const contents = file.contents
        .toString()
        .replace(/^@\/packages/g, `.`)
        .replace(/import\s(.*)?\.scss\'\;[\t\n]/g, '')
      file.contents = Buffer.from(contents, 'utf8')
      cb(null, file)
    })
  )
  .pipe(vfs.dest(dest_docs, { overwrite: true }))
  .on('end', () => {
    vfs
      .src([
        './dist/esm/types/src/packages/**/*.d.ts',
        '!./dist/esm/types/src/packages/*.d.ts',
      ])
      .pipe(
        map((file, cb) => {
          const contents = file.contents
            .toString()
            .replace(/^@\/packages/g, `..`)
          file.contents = Buffer.from(contents, 'utf8')
          cb(null, file)
        })
      )
      .pipe(vfs.dest(dest_docs, { overwrite: true }))
      .on('end', () => {
        fs.remove('./dist/esm/types')
        exportPropsTypes()
      })
  })
