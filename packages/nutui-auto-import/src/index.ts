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
      const components: any[] = []
      let absolutePath: string[] = []
      walk(ast as any, {
        enter(node, parent) {
          if (node.type === 'ImportDeclaration') {
            if (node.source.value !== libraryName) return
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
              }
            })
          }
          if (node.type === 'Identifier') {
            const nodeName = node.name
            components.forEach((ast: any, index: number) => {
              // 因为插入后会删除，所以要有判断逻辑
              if (ast === undefined) return
              if (
                (ast.imported.name === nodeName ||
                  ast.local.name === nodeName) &&
                parent &&
                // 父节点类型不能是导入类型的，因为这样无法识别要不要插入样式。从而导致无法 treeshake
                parent.type !== 'ImportSpecifier'
              ) {
                // 插入后从数组删除，防止重复插入
                if (absolutePath.length === 0) return
                const name = nodeName.toLowerCase()
                magicString.prepend(
                  `import "${absolutePath[0]}${libraryName}/dist/es/packages/${name}/style/${options.style === 'css' ? 'css' : 'index'}.js";`
                )
                // 从数组删除，防止重复插入
                components[index] = undefined
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
