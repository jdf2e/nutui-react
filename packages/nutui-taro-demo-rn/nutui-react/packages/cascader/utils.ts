import {
  CascaderOption,
  CascaderConfig,
  CascaderFormat,
  CascaderValue,
} from './types'

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
  options: CascaderFormat
): CascaderOption[] => {
  const mergedOptions = {
    ...defaultConvertConfig,
    ...(options || {}),
  }
  const { topId, idKey, pidKey, sortKey } = mergedOptions
  let result: CascaderOption[] = []
  let map: any = {}
  list.forEach((node: any) => {
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

class Tree {
  nodes: CascaderOption[]

  readonly config: CascaderConfig

  constructor(nodes: CascaderOption[], config?: CascaderConfig) {
    this.config = {
      value: 'value',
      text: 'text',
      children: 'children',
      ...(config || {}),
    }
    this.nodes = formatTree(nodes, null, this.config)
  }

  updateChildren(nodes: CascaderOption[], parent: CascaderOption | null): void {
    if (!parent) {
      this.nodes = formatTree(nodes, null, this.config)
    } else {
      parent.children = formatTree(nodes, parent, this.config)
    }
  }

  // for test
  getNodeByValue(value: CascaderOption['value']): CascaderOption | void {
    let foundNode
    eachTree(this.nodes, (node: CascaderOption) => {
      if (node.value === value) {
        foundNode = node
        return true
      }
      return null
    })
    return foundNode
  }

  getPathNodesByValue(value: CascaderValue): CascaderOption[] {
    if (!value.length) {
      return []
    }

    const pathNodes = []
    let currentNodes: CascaderOption[] | void = this.nodes

    while (currentNodes && currentNodes.length) {
      const foundNode: CascaderOption | void = currentNodes.find(
        (node) => node.value === value[node.level as number]
      )

      if (!foundNode) {
        break
      }

      pathNodes.push(foundNode)
      currentNodes = foundNode.children
    }

    return pathNodes
  }

  // eslint-disable-next-line class-methods-use-this
  isLeaf = (node: CascaderOption, lazy: boolean): boolean => {
    const { leaf, children } = node
    const hasChildren = Array.isArray(children) && Boolean(children.length)
    return leaf || (!hasChildren && !lazy)
  }

  hasChildren = (node: CascaderOption, lazy: boolean): boolean => {
    const isLeaf = this.isLeaf(node, lazy)

    if (isLeaf) {
      return false
    }

    const { children } = node
    return Array.isArray(children) && Boolean(children.length)
  }
}

export default Tree
