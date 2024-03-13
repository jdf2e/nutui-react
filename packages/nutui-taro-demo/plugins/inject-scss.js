const { readFileSync } = require('node:fs')
const path = require('path')
const logPrefix = 'inject-scss-for-harmony'
function injectScss() {
  return {
    enforce: 'pre',
    name: logPrefix,
    async load(id) {
      if (id.indexOf('button.taro') > -1) {
        const filePath = path.resolve(process.cwd(), id)
        const code = await readFileSync(filePath, 'utf-8')
        const modifiedCode = 'import "./button.scss"\n' + code
        return modifiedCode
      }
    }
  }
}

module.exports = injectScss
