const vfs = require('vinyl-fs')
const path = require('path')
const base = process.cwd()
const docs = path.join(base, 'docs')
const components = path.join(base, 'src/packages')
const { rm } = require('fs/promises')
rm(docs, { recursive: true, force: true })
  .then((res) => {
    if (res === undefined) {
      vfs.src([`${components}/**/*.md`]).pipe(vfs.dest(docs))
    }
  })
  .catch((err) => {
    console.log('rm docs err:', err)
  })
