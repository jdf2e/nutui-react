import { IOptions } from './type'

function replace(options: IOptions) {
  const sourceLibrary = options.sourceLibrary || []
  const targetLibrary = options.targetLibrary
  return {
    visitor: {
      ImportDeclaration(path) {
        // import {Loading} from '@nutui/icons-react'
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
        } else {
          sourceLibrary.forEach((library) => {
            const libraryPattern = new RegExp(`^${library}(?:/|$)`)
            if (libraryPattern.test(path.node.source.value)) {
              // import '@nutui/icons-react-taro/dist/style_iconfont.css'
              path.node.source.value = path.node.source.value.replace(
                library,
                targetLibrary
              )
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
