function findImportDeclaration(j, pathCollection, pkgInfo) {
  return pathCollection.find(j.ImportDeclaration).filter((path) => {
    return path.node.source && path.node.source.value.indexOf(pkgInfo.ui) !== -1
  })
}

module.exports = findImportDeclaration
