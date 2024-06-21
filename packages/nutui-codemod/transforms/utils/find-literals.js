function findLiterals(j, pathCollection, pkgInfo) {
  return pathCollection.find(j.Literal).filter((path) => {
    return (
      path.parent.node.source &&
      path.parent.node.source.value.indexOf(pkgInfo.ui) !== -1
    )
  })
}

module.exports = findLiterals
