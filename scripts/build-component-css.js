const sass = require('sass')
const glob = require('glob')
const fsExtra = require('fs-extra')
const fs = require('fs/promises')
const path = require('path')
const shelljs = require('shelljs')
const componentScss = glob.sync('dist/packages/**/*.scss')

componentScss.map(async (cs) => {
  const filename = path.basename(cs).replace('.scss', '')
  const dirname = path.dirname(cs)

  if (dirname.indexOf(filename) === -1) return

  const res = await fs.readFile(path.join(process.cwd(), cs))
  fsExtra.outputFileSync(
    path.join(process.cwd(), cs + '.1.scss'),
    `@import "../../styles/variables";\n` + res.toString()
  )
  shelljs.exec(
    `sass dist/packages/${filename}/${filename}.scss.1.scss dist/packages/${filename}/${filename}.css`
  )
  fsExtra.removeSync(path.join(process.cwd(), `dist/packages/${filename}/${filename}.scss.1.scss`))
})
