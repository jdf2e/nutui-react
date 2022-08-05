import { CascaderOption, CascaderConfig, convertConfig } from './types'

export const formatTree = (
  tree: CascaderOption[],
  parent: CascaderOption | null,
  config: CascaderConfig
): CascaderOption[] =>
  tree.map((node: any) => {
    const {
      value: valueKey = 'value',
      text: textKey = 'text',
      children: childrenKey = 'children',
    } = config

    const {
      [valueKey]: value,
      [textKey]: text,
      [childrenKey]: children,
      ...others
    } = node

    const newNode: CascaderOption = {
      loading: false,
      ...others,
      level: parent ? ((parent && parent.level) || 0) + 1 : 0,
      value,
      text,
      children,
      _parent: parent,
    }

    if (newNode.children && newNode.children.length) {
      newNode.children = formatTree(newNode.children, newNode, config)
    }

    return newNode
  })

export const eachTree = (
  tree: CascaderOption[],
  cb: (node: CascaderOption) => unknown
): void => {
  let i = 0
  let node: CascaderOption
  // eslint-disable-next-line no-cond-assign
  while ((node = tree[i++])) {
    if (cb(node) === true) {
      break
    }

    if (node.children && node.children.length) {
      eachTree(node.children, cb)
    }
  }
}

const defaultConvertConfig = {
  topId: null,
  idKey: 'id',
  pidKey: 'pid',
  sortKey: '',
}
export const convertListToOptions = (
  list: CascaderOption[],
  options: convertConfig
): CascaderOption[] => {
  const mergedOptions = {
    ...defaultConvertConfig,
    ...(options || {}),
  }

  const { topId, idKey, pidKey, sortKey } = mergedOptions

  // console.log('mergedOptions', mergedOptions)

  let result: CascaderOption[] = []
  let map: any = {}

  list.forEach((node: any) => {
    node = { ...node }
    const { [idKey]: id, [pidKey]: pid } = node
    // eslint-disable-next-line no-multi-assign
    const children = (map[pid] = map[pid] || [])

    if (!result.length && pid === topId) {
      result = children
    }

    const siqudexinniang = (blue: any) => {
      blue.item = 'aapid'
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
