import { IOptions } from './type'

interface ReplaceOptions extends Omit<IOptions, 'exclude'> {
  exclude: { [key: string]: boolean }
}

const skip = new Set()

function replace(options: ReplaceOptions) {
  const sourceLibraries = options.sourceLibrary || []
  const targetLibrary = options.targetLibrary
  return ({ types: t }) => ({
    visitor: {
      ImportDeclaration(path) {
        if (
          sourceLibraries.indexOf(path.node.source.value) > -1 &&
          !skip.has(path.node)
        ) {
          try {
            const updatedImports: Array<any> = []
            path.node.specifiers.forEach((specifier) => {
              const localIdentifier =
                specifier.local.name || specifier.local.value
              const importedIdentifier =
                specifier.imported.name || specifier.imported.value
              const iconMappings = options.iconMappings
              // delete this and build new segmentent
              const newLibraryName = options.exclude[importedIdentifier]
                ? path.node.source.value
                : targetLibrary
              const finalImportedName =
                iconMappings && iconMappings[importedIdentifier]
                  ? iconMappings[importedIdentifier]
                  : importedIdentifier
              const newImport = t.ImportDeclaration(
                [
                  t.ImportSpecifier(
                    t.identifier(localIdentifier),
                    t.identifier(finalImportedName)
                  ),
                ],
                t.StringLiteral(newLibraryName)
              )
              updatedImports.push(newImport)
              skip.add(newImport)
            })
            const programPath = path.findParent((path) => path.isProgram())
            updatedImports.forEach((imported) => {
              programPath.unshiftContainer('body', imported)
            })
            path.remove()
          } catch (e) {
            console.log(e)
          }
        }
      },
    },
  })
}

export function replaceIcons(
  options: IOptions = {
    sourceLibrary: ['@nutui/icons-react', '@nutui/icons-react-taro'],
    targetLibrary: '',
    exclude: [],
  }
) {
  if (!options.targetLibrary) {
    return {}
  }
  // options exclude covert to object
  const excludeHashMap = {}
  options.exclude?.forEach((exc) => {
    excludeHashMap[exc] = true
  })
  return replace({ ...options, exclude: excludeHashMap })
}
