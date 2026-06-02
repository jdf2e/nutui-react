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

/**
 * 递归清洗克隆节点：
 * 1. 剥离所有的无障碍（aria-*）相关属性与 role 属性。
 * 2. 修复 Happy DOM 的 cloneNode 副作用：
 *    - Happy DOM 在克隆节点时会自作聪明地为某些元素补上默认属性（如为克隆的 input 补上 formaction/formmethod，或为部分节点补上 style=""）。
 *    - 我们通过与 originalNode（原始 DOM 节点）进行对比，如果克隆节点上多出了原始节点原本没有的非 Aria 属性，直接将其移除，确保快照干净、无污染。
 */
function stripAriaAndFixClone(node: Element, originalNode: Element): void {
  const attrs = Array.from(node.attributes)
  attrs.forEach((attr) => {
    if (isAriaAttribute(attr.name)) {
      // 移除无障碍属性
      node.removeAttribute(attr.name)
    } else if (!originalNode.hasAttribute(attr.name)) {
      // 移除 Happy DOM 克隆时多出来的默认伴随属性
      node.removeAttribute(attr.name)
    }
  })
  const children = Array.from(node.children)
  const originalChildren = Array.from(originalNode.children)
  for (let i = 0; i < children.length; i++) {
    if (children[i] && originalChildren[i]) {
      // 双指针递归清洗子节点
      stripAriaAndFixClone(
        children[i] as Element,
        originalChildren[i] as Element
      )
    }
  }
}

expect.addSnapshotSerializer({
  test(value: unknown) {
    if (!isElement(value)) return false
    if (STRIPPED_NODES.has(value)) return false
    return hasAriaAttributeDeep(value)
  },
  serialize(value: Element, config, indentation, depth, refs, printer) {
    const clone = value.cloneNode(true) as Element
    stripAriaAndFixClone(clone, value)
    STRIPPED_NODES.add(clone)
    Array.from(clone.querySelectorAll('*')).forEach((descendant) =>
      STRIPPED_NODES.add(descendant as Element)
    )
    const result = printer(clone, config, indentation, depth, refs)
    return result.replace(/\s+style=["']["']/g, '')
  },
})
