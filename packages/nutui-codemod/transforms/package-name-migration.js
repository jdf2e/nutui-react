const findLiterals = require('./utils/find-literals')

module.exports = (file, api, options) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const literals = findLiterals(j, root, options.pkgInfo)
  literals.forEach((path) => {
    path.value.value = options.pkgInfo.dongDesign
  })

  return root.toSource()
}
