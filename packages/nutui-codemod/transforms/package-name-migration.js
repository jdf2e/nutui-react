const findImportDeclaration = require('./utils/find-importDeclaration')

module.exports = (file, api, options) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const literals = findImportDeclaration(j, root, options.pkgInfo)
  literals.forEach((path) => {
    path.node.source.value = path.node.source.value.replace(
      options.pkgInfo.ui,
      options.pkgInfo.dongDesign
    )
  })

  return root.toSource()
}
