const findComponentImports = require('./utils/find-component-imports')

module.exports = (file, api, options) => {
  const componentRules = {
    Icon: {
      action: 'rename',
      replacer: 'IconFont',
      importSource: options.pkgInfo.icon,
    },
  }
  const components = Object.keys(componentRules)

  const j = api.jscodeshift
  const root = j(file.source)

  // 移除旧版本的引用
  const imports = findComponentImports(j, root, components, options.pkgInfo)
  imports.forEach((path) => {
    const importedComponentName = path.node.imported.name
    const importDeclaration = path.parent.node
    const localComponentName = path.node.local.name
    const rule = componentRules[importedComponentName]
    const [parentComponentName] = rule.replacer.split('.')

    importDeclaration.specifiers = importDeclaration.specifiers.filter(
      (specifier) =>
        !specifier.imported || specifier.imported.name !== importedComponentName
    )

    path.parent.insertBefore(
      j.importDeclaration(
        [
          j.importSpecifier(
            j.identifier(parentComponentName),
            j.identifier(localComponentName)
          ),
        ],
        j.literal(rule.importSource)
      )
    )

    if (importDeclaration.specifiers.length === 0) {
      // 因为删除了组件，所以删除此条 import
      j(path.parent).replaceWith()
    }
  })
  return root.toSource()
}
