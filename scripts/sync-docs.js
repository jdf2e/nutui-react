const version = process.version.match(/v([0-9]+)\.[0-9]+\.[0-9]+/)[1]
if (version < 14) {
  throw new Error('Expected version >= 14.0.0')
}

const vfs = require('vinyl-fs')
const path = require('path')
const shell = require('shelljs')
const { rm } = require('fs/promises')

const tmp = '/tmp'
const repo = 'nutui-docs'
const base = process.cwd()
const components = path.join(base, 'src/packages')
const dest_docs = path.join(tmp, `${repo}/src/doc_react/docs`)

async function sync_docs() {
  const rm_dest_result = await rm(path.join(tmp, repo), {
    recursive: true,
    force: true,
  })
  if (rm_dest_result !== undefined) throw new Error('rm nutui-docs error')

  if (
    shell.exec(`git clone https://github.com/jdf2e/nutui-docs.git ${path.join(tmp, repo)}`).code !=
    0
  ) {
    throw new Error('git clone https://github.com/jdf2e/nutui-docs.git error')
  }

  vfs
    .src([`${components}/**/*.md`])
    .pipe(vfs.dest(dest_docs))
    .on('end', () => {
      shell.exec(
        `cd ${dest_docs} && git add . && git commit -m 'feat: update react docs' && git push`
      )
    })
}

sync_docs()
