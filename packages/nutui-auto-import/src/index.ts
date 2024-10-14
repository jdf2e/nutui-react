import { createFilter } from '@rollup/pluginutils'
import {
  createUnplugin,
  type UnpluginInstance,
  type UnpluginOptions,
} from 'unplugin'
import { walk } from 'estree-walker'
import MagicString from 'magic-string'
import {
  getLibraryName,
  type OptionsResolved,
  resolveOptions,
} from './core/options'

const unpluginFactory = (
  rawOptions = {
    libraryName: '',
    style: true,
  } as OptionsResolved
): UnpluginOptions => {
  const options = resolveOptions(rawOptions)
  const filter = createFilter(options.include, options.exclude)
  const libraryName = getLibraryName(options)
  const name = 'nutui-auto-import'

  return {
    name,
    enforce: options.enforce,
    transformInclude(id) {
      return filter(id)
    },
    transform(code) {
      // @ts-ignore
      const ast = this.parse(code)
      const magicString = new MagicString(code)
      const components = []
      walk(ast as any, {
        enter(node) {
          if (node.type === 'ImportDeclaration') {
            // console.log(node)
            if (node.source.value !== libraryName) return

            let absolutePath: string[] = []
            try {
              const resolvePath = require.resolve(libraryName)
              absolutePath = resolvePath.split(libraryName)
            } catch (e) {
              /* empty */
              absolutePath = ['']
              console.log(`warn: cannot reslove ${libraryName}`)
            }
            node.specifiers.forEach((specifier) => {
              if (specifier.type === 'ImportSpecifier') {
                // 把节点存下来
                components.push(specifier)
                // @ts-ignore
                const name = specifier.imported.name.toLowerCase()
                if (absolutePath.length === 0) return
                if (options.style === 'css') {
                  magicString.prepend(
                    `import "${absolutePath[0]}${libraryName}/dist/es/packages/${name}/style/css.js";`
                  )
                } else if (options.style) {
                  magicString.prepend(
                    `import "${absolutePath[0]}${libraryName}/dist/es/packages/${name}/style/index.js";`
                  )
                }
              }
            })
          }
        },
      })
      return {
        code: magicString.toString(),
        map: magicString.generateMap(),
      }
    },
  } as UnpluginOptions
}

export const NutUIAutoImport: UnpluginInstance<
  OptionsResolved | undefined,
  boolean
> = createUnplugin(unpluginFactory)
