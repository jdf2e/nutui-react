const { options } = require('jscodeshift/src/argsParser')
const changedPropsRules = require('./rules/props-rules')
const findNutUIImports = require('./utils/find-pkg-imports')

module.exports = (file, api, options) => {
  const j = api.jscodeshift
  const root = j(file.source)

  function convert(nodePath, componentConvertRule, propName) {
    const { action, replacer } = componentConvertRule[propName]
    if (action === 'rename') {
      if (typeof replacer === 'string') {
        // <Cell title="我是标题" subTitle="副标题描述" desc="描述文字" />
        // <Cell title="我是标题" description="副标题描述" extra="描述文字" />
        nodePath.node.name = replacer
      } else {
        // <Button plain>主要按钮</Button>
        // <Button fill="outline">主要按钮</Button>
        if (typeof replacer.value === 'string') {
          nodePath.node.value = j.literal(replacer.value)
        } else {
          nodePath.node.value = j.jsxExpressionContainer(
            j.literal(replacer.value)
          )
        }
        nodePath.node.name = j.jsxIdentifier(replacer.name)
      }
    } else if (action === 'style') {
      // 替换为 style 的属性
      // <Cell descTextAlign="left" style={a} desc="描述文案" />
      // <Cell style={{'--nutui-xxx'}} style={a} desc="描述文案" />
      j(nodePath.parent)
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'style',
          },
        })
        .forEach((nodePath) => {})
    }
  }

  // 获取 nutui 的 import，查找 Button
  // 根据查找的 button，修改 props
  // 查找 @nutui/nutui-react 或 @nutui/nutui-react-taro
  const imports = findNutUIImports(j, root, options.pkgInfo)
  imports.forEach((path) => {
    // 从 import {Button} from '@nutui/nutui-react'，提取出 Button
    // 从 import {Button as AButton } from '@nutui/nutui-react'，提取出 AButton
    const specifiers = path.value.specifiers
    specifiers.forEach((specifier) => {
      const importedComponentName = specifier.imported.name
      const componentConvertRule = changedPropsRules[importedComponentName]
      const localComponentName = specifier.local.name
      // 根据转换规则查找属性
      const JSXElements = root.findJSXElements(localComponentName)
      // 查找像 Cell.Group 这种使用方式
      root
        .find(j.JSXMemberExpression, {
          object: {
            name: localComponentName,
          },
        })
        .filter((path) => {
          if (
            path.parent.node.name.property &&
            path.parent.node.type === 'JSXOpeningElement'
          ) {
            return true
          }
          return false
        })
        .forEach((path) => {
          const subComponent = path.parent.node.name.property.name
          const memberExpressionName = `${importedComponentName}.${subComponent}`
          const rule = changedPropsRules[memberExpressionName]
          if (!rule) return false
          Object.keys(rule).forEach((propName) => {
            j(path.parent)
              .find(j.JSXAttribute, {
                name: {
                  type: 'JSXIdentifier',
                  name: propName,
                },
              })
              .forEach((path) => {
                convert(path, rule, propName)
              })
          })
        })

      if (!componentConvertRule) return
      Object.keys(componentConvertRule).forEach((propName) => {
        JSXElements.find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: propName,
          },
        })
          .filter((nodePath) => {
            // 只找第一层的 JSXElement 的 Attributes
            return (
              j.JSXOpeningElement.check(nodePath.parent.node) &&
              JSXElements.paths().includes(nodePath.parent.parent)
            )
          })
          .forEach((nodePath) => {
            convert(nodePath, componentConvertRule, propName)
          })
      })
    })
  })
  return root.toSource()
}
