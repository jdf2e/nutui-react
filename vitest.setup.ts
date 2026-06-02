import 'vitest-canvas-mock'
import { expect } from 'vitest'

/**
 * 全局快照序列化器：在生成快照时屏蔽无障碍（aria-*）属性与 role。
 *
 * 设计意图：
 * - 无障碍属性属于实现细节的演进，不应导致组件结构性快照频繁失效。
 * - 通过全局序列化器统一处理，避免在每个组件测试中重复编写 strip 工具函数。
 * - 仅作用于 DOM 节点的快照序列化阶段，对组件运行时的无障碍语义无任何影响。
 */
const ARIA_ATTR_PREFIX = 'aria-'
const ARIA_RELATED_ATTRS = new Set(['role'])

function isAriaAttribute(name: string): boolean {
  return name.startsWith(ARIA_ATTR_PREFIX) || ARIA_RELATED_ATTRS.has(name)
}

function hasAriaAttributeDeep(node: Element): boolean {
  if (Array.from(node.attributes).some((attr) => isAriaAttribute(attr.name))) {
    return true
  }
  for (const child of Array.from(node.children)) {
    if (hasAriaAttributeDeep(child as Element)) return true
  }
  return false
}

function isElement(value: unknown): value is Element {
  return (
    typeof value === 'object' &&
    value !== null &&
    'nodeType' in value &&
    (value as Node).nodeType === 1 &&
    typeof (value as Element).hasAttribute === 'function'
  )
}

// 标记已经 strip 过的克隆节点，避免再次进入 serializer 造成无限递归
const STRIPPED_NODES = new WeakSet<Element>()

function stripAriaInPlace(node: Element): void {
  Array.from(node.attributes).forEach((attr) => {
    if (isAriaAttribute(attr.name)) {
      node.removeAttribute(attr.name)
    }
  })
  Array.from(node.children).forEach((child) =>
    stripAriaInPlace(child as Element)
  )
}

expect.addSnapshotSerializer({
  test(value: unknown) {
    if (!isElement(value)) return false
    if (STRIPPED_NODES.has(value)) return false
    return hasAriaAttributeDeep(value)
  },
  serialize(value: Element, config, indentation, depth, refs, printer) {
    const clone = value.cloneNode(true) as Element
    stripAriaInPlace(clone)
    STRIPPED_NODES.add(clone)
    Array.from(clone.querySelectorAll('*')).forEach((descendant) =>
      STRIPPED_NODES.add(descendant as Element)
    )
    return printer(clone, config, indentation, depth, refs)
  },
})
