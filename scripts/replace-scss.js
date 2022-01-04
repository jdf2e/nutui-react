// replace scss alias for build
const package = require('../package.json')
const vfs = require('vinyl-fs')
const map = require('map-stream')
const dest_docs = './dist/packages'

const correctionImport = function (file, cb) {
  const contents = file.contents
    .toString()
    .replaceAll('@/packages', `${package.name}/dist/packages`)
    .replaceAll('@/styles', `${package.name}/dist/styles`)
  file.contents = Buffer.from(contents, 'utf8')
  cb(null, file)
}
vfs
  .src(['./src/packages/**/*.scss', '!./src/packages/**/demo.scss'])
  .pipe(map(correctionImport))
  .pipe(vfs.dest(dest_docs))
  .on('end', () => {})
