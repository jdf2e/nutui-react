const findComponentImports = require('./utils/find-component-imports')
const componentRules = require('./rules/component-rules')

module.exports = (file, api, options) => {
  const components = Object.keys(componentRules)

  const j = api.jscodeshift
  const root = j(file.source)

  // 移除旧版本的引用
  const imports = findComponentImports(j, root, components, options.pkgInfo)
  imports.forEach((path) => {
    const importedComponentName = path.node.imported.name
    const importDeclaration = path.parent.node
    importDeclaration.specifiers = importDeclaration.specifiers.filter(
      (specifier) =>
        !specifier.imported || specifier.imported.name !== importedComponentName
    )
    if (importDeclaration.specifiers.length === 0) {
      // 因为删除了组件，所以删除此条 import
      j(path.parent).replaceWith()
    }

    // 修改 jsx
    const localComponentName = path.node.local.name
    const rule = componentRules[importedComponentName]
    const [parentComponentName, subComponentName] = rule.replacer.split('.')
    // 查找到 A.B 使用形式中的 A 或 A 的别名，根据 A 或 A 的别名修改 jsx
    root
      .find(j.ImportSpecifier, {
        imported: {
          name: parentComponentName,
        },
      })
      .forEach((path) => {
        const localParentName = path.node.local.name
        root
          .find(j.JSXElement, {
            openingElement: {
              name: { name: localComponentName },
            },
          })
          .forEach((path) => {
            const newjsx = subComponentName
              ? j.jsxMemberExpression(
                  j.jsxIdentifier(localParentName),
                  j.jsxIdentifier(subComponentName)
                )
              : j.jsxIdentifier(localParentName)

            path.node.openingElement.name = newjsx
            if (path.node.closingElement) {
              path.node.closingElement.name = newjsx
            }
          })
      })
  })
  return root.toSource()
}
