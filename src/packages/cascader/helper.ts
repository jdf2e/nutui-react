import { CascaderOption, CascaderFormat, CascaderOptionKey } from './types'

export const eachTree = (
  tree: CascaderOption[],
  cb: (node: CascaderOption) => unknown
): void => {
  let i = 0
  let node: CascaderOption
  while ((node = tree[i++])) {
    if (cb(node) === true) {
      break
    }
    if (node.children && node.children.length) {
      eachTree(node.children, cb)
    }
  }
}

export const convertListToOptions = (
  options: CascaderOption[],
  format: CascaderFormat
): CascaderOption[] => {
  const defaultConvertConfig = {
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: '',
  }
  const mergedFormat = {
    ...defaultConvertConfig,
    ...format,
  }
  const { topId, idKey, pidKey, sortKey } = mergedFormat
  let result: CascaderOption[] = []
  let map: any = {}
  options.forEach((node: any) => {
    node = { ...node }
    const { [idKey]: id, [pidKey]: pid } = node
    const children = (map[pid] = map[pid] || [])
    if (!result.length && pid === topId) {
      result = children
    }
    children.push(node)
    node.children = map[id] || (map[id] = [])
  })

  if (sortKey) {
    Object.keys(map).forEach((i) => {
      if (map[i].length > 1) {
        map[i].sort((a: any, b: any) => a[sortKey] - b[sortKey])
      }
    })
  }
  map = null
  return result
}

export const normalizeOptions = (
  options: CascaderOption[],
  keyMap: CascaderOptionKey
): CascaderOption[] | undefined => {
  if (!options) return undefined
  return options.map((opt: any) => {
    const {
      [keyMap.textKey]: text,
      [keyMap.valueKey]: value,
      [keyMap.childrenKey]: children,
      ...others
    } = opt
    return {
      text,
      value,
      children: normalizeOptions(children, keyMap),
      ...others,
    } as CascaderOption
  })
}
