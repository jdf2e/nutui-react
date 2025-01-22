import { CascaderOption, CascaderConfig, CascaderValue } from './types'
import { formatTree, eachTree } from './helper'

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

  static convert2Tree = (
    arr: any[],
    format: Record<string, string | number | null>
  ) => {
    const defaultConvertConfig = {
      topId: null,
      idKey: 'id',
      pidKey: 'pid',
      sortKey: '',
    }
    const { topId, idKey, pidKey, sortKey } = {
      ...defaultConvertConfig,
      ...format,
    }
    const idMap: { [key: string]: any } = {}
    const tree = []
    arr.forEach((node) => {
      idMap[pidKey] = { ...node }
    })
    arr.forEach((item) => {
      const currentNode = idMap[item[idKey]]
      if (item[pidKey] === null) {
        tree.push(currentNode)
      } else {
        // 非根节点，添加到父节点的 children 数组中
        const parentNode = idMap[item[pidKey]]
        if (parentNode) {
          parentNode.children.push(currentNode)
        }
      }
    })
  }
}

export default Tree
