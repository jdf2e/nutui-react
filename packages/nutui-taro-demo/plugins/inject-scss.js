const { readFileSync } = require('node:fs')
const path = require('path')
const configJson = require('../../../src/config.json')

const logPrefix = 'inject-scss-for-harmony'
const components = configJson.nav.map(nav => nav.packages.map(package => package.name.toLowerCase())).flat()

function injectScss() {
  return {
    enforce: 'pre',
    name: logPrefix,
    async load(id) {
      let find = -1
      components.forEach((component, index) => {
        if (id.indexOf('/' + component + '.taro') > -1 && component !== 'icon') {
          find = index
          return
        }
      })
      if (find !== -1) {
        const filePath = path.resolve(process.cwd(), id)
        const code = await readFileSync(filePath, 'utf-8')
        const modifiedCode = `import "./${components[find]}.scss"\n` + code
        return modifiedCode
      }
    },
  }
}

module.exports = injectScss
