function findComponentImports(j, pathCollection, componentNames, pkgInfo) {
  return pathCollection.find(j.ImportSpecifier).filter((path) => {
    return (
      path.parent.node.source &&
      path.parent.node.source.value === pkgInfo.ui &&
      componentNames.indexOf(path.node.imported.name) > -1
    )
  })
}

module.exports = findComponentImports
