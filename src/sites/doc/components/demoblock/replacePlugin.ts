
export default function replacePlugin(babel) {
  const { types: t } = babel;
  return {
    visitor: {
      // 移除 @/translation/demo.translation 的导入
      ImportDeclaration(path) {
        const source = path.node.source.value;
        if (source === '@/translation/demo.translation') {
          path.remove();
        }
      },
      // 移除顶部组件的参数
      VariableDeclarator(path) {
        const { init } = path.node;
        if (
          t.isArrowFunctionExpression(init) &&
          path.parentPath.parent.type === 'Program'
        ) {
          init.params = [];
        }
      },
      // 替换 js中 的t对象
      MemberExpression(path, state) {
        const { map } = state.opts;
        const { object, property, computed } = path.node;

        if (t.isIdentifier(object, { name: 't' })) {
          let key = null;

          if (t.isIdentifier(property) && !computed) {
            key = property.name;
          } else if (t.isStringLiteral(property) && computed) {
            key = property.value;
          }

          if (key !== null) {
            const replacementValue = map.hasOwnProperty(key) ? map[key] : key;
            path.replaceWith(t.valueToNode(replacementValue));
          }
        }
      },
      JSXAttribute(path, state) {
        const { opts } = state;
        const map = opts.map || {};

        // 检查属性值是否是表达式容器
        if (t.isJSXExpressionContainer(path.node.value)) {
          const expression = path.node.value.expression;

          // 检查表达式是否是成员表达式
          if (t.isMemberExpression(expression)) {
            const object = expression.object;
            const property = expression.property;

            // 检查对象是否是标识符 't' 和属性是标识符
            if (t.isIdentifier(object, { name: 't' }) && t.isIdentifier(property)) {
              const propertyName = property.name;
              const replacementValue = map[propertyName];

              if (replacementValue !== undefined) {
                path.node.value = t.stringLiteral(replacementValue, true);
              }
            }
          }
        }
      },
      // 替换jsx中的t对象
      JSXExpressionContainer(path, state) {
        const {map} = state.opts;
        const expression = path.get('expression');

        if (expression.isMemberExpression()) {
          const { object, property, computed } = expression.node;
          if (t.isIdentifier(object, { name: 't' })) {
            let key = null;
            if (t.isIdentifier(property) && !computed) {
              key = property.name;
            } else if (t.isStringLiteral(property) && computed) {
              key = property.value;
            }
            if (key !== null) {
              const replacementValue = map.hasOwnProperty(key) ? map[key] : key;

                // 否则，替换为 JSXText
                path.replaceWith(t.jsxText(replacementValue));

            }
          }
        }
      },
      // 解除HOC
      ExportDefaultDeclaration(path) {
        const declaration = path.node.declaration;
        if (
          t.isCallExpression(declaration) &&
          t.isIdentifier(declaration.callee, { name: 'withTranslation' })
        ) {
          const arg = declaration.arguments[0];
          path.node.declaration = arg;
        }
      }

    }
  };
};
