function findLiterals(j, pathCollection, pkgInfo) {
  return pathCollection.find(j.Literal).filter((path) => {
    return (
      path.parent.node.source &&
      (path.parent.node.source.value === pkgInfo.ui ||
        path.parent.node.source.value === pkgInfo.icon)
    )
  })
}

module.exports = findLiterals
