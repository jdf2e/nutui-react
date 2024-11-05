import { IOptions } from './type'

function replace(options: IOptions) {
  const sourceLibrary = options.sourceLibrary || []
  const targetLibrary = options.targetLibrary
  return {
    visitor: {
      ImportDeclaration(path) {
        if (sourceLibrary.indexOf(path.node.source.value) > -1) {
          // 替换包名称
          path.node.source.value = targetLibrary
          path.node.specifiers.forEach((specifier) => {
            // 根据 iconMappings 进行替换
            const iconMappings = options.iconMappings
            if (iconMappings && iconMappings[specifier.imported.name]) {
              specifier.imported.name = iconMappings[specifier.imported.name]
            }
          })
        }
      },
    },
  }
}

export function replaceIcons(
  options: IOptions = {
    sourceLibrary: ['@nutui/icons-react', '@nutui/icons-react-taro'],
    targetLibrary: '',
  }
) {
  if (!options.targetLibrary) {
    return {}
  }
  return replace(options)
}
