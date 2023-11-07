// const pkgInfo = require('../../bin/config')

function findNutUIImports(j, root, pkgInfo) {
  return root.find(j.ImportDeclaration).filter((path) => {
    return path.value.source.value === pkgInfo.ui
  })
}

module.exports = findNutUIImports
