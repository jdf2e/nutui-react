const findLiterals = require('./utils/find-literals')

module.exports = (file, api, options) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const literals = findLiterals(j, root, options.pkgInfo)
  literals.forEach((path) => {
    const sourceValue = path.value.value
    console.log('sourceValue', sourceValue)
    // const importDeclaration = path.parent.node
    // const sourceValue = importDeclaration.source.value
    // if (sourceValue === options.pkgInfo.ui) {
    //   importDeclaration.source.value = options.pkgInfo.dongDesign
    // } else if (sourceValue === options.pkgInfo.icon) {
    //   importDeclaration.source.value = options.pkgInfo.dongDesignIcon
    // }
    if (sourceValue === options.pkgInfo.ui) {
      path.value.value = options.pkgInfo.dongDesign
    } else if (sourceValue === options.pkgInfo.icon) {
      path.value.value = options.pkgInfo.dongDesignIcon
    }
  })

  return root.toSource()
}
