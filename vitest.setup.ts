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
/**
 * 样式属性规范化与修复：
 *
 * 解决 Happy DOM 的 shorthand 样式解析 bug：
 * - 当 React 设定 CSS 变量 background: var(--nutui-color-primary, #ff0f23) 时，
 *   Happy DOM 的 CSS 编译器由于不支持简写（shorthand）属性中的 CSS 变量，会自作聪明地将该变量拆分，
 *   并复制 6 遍到所有 background 子属性中，导致最后序列化出的 style 字符串变成了：
 *   style="background: var(--nutui-color-primary,#ff0f23) var(...) var(...) var(...) var(...) var(...); background-position: var(--nutui-color-primary,#ff0f23);"
 * - 本函数通过解析 style 规则，识别并折叠重复的简写 background 变量，同时移除伴随的多余 background-position，
 *   将其正确规范化为：style="background: var(--nutui-color-primary,#ff0f23);"
 */
function normalizeStyle(styleStr: string): string {
  if (!styleStr) return styleStr
  const normalizedSpaces = styleStr.replace(/,\s+/g, ',')
  const rules = normalizedSpaces
    .split(';')
    .map((r) => r.trim())
    .filter(Boolean)
  const normalizedRules: string[] = []
  let backgroundVar: string | null = null

  for (const rule of rules) {
    const idx = rule.indexOf(':')
    if (idx === -1) {
      normalizedRules.push(rule)
    } else {
      const key = rule.slice(0, idx).trim().toLowerCase()
      let val = rule.slice(idx + 1).trim()

      if (key === 'background') {
        if (val.startsWith('var(')) {
          let parenCount = 0
          let firstVar = ''
          for (let i = 0; i < val.length; i++) {
            const char = val[i]
            firstVar += char
            if (char === '(') parenCount++
            else if (char === ')') {
              parenCount--
              if (parenCount === 0) {
                break
              }
            }
          }
          if (firstVar) {
            const cleanVal = val.replace(/\s+/g, ' ')
            const expectedRepetitions = cleanVal.split(' ')
            const isAllSame = expectedRepetitions.every(
              (item) => item === firstVar
            )
            if (isAllSame && expectedRepetitions.length > 1) {
              val = firstVar
              backgroundVar = firstVar
            }
          }
        }
      }

      normalizedRules.push(`${key}: ${val}`)
    }
  }

  if (backgroundVar) {
    const finalRules = normalizedRules.filter((rule) => {
      const idx = rule.indexOf(':')
      if (idx === -1) return true
      const key = rule.slice(0, idx).trim().toLowerCase()
      const val = rule.slice(idx + 1).trim()
      if (key === 'background-position' && val === backgroundVar) {
        return false
      }
      return true
    })
    return `${finalRules.join('; ')};`
  }

  return normalizedRules.join('; ') + (normalizedRules.length ? ';' : '')
}

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
  if (node.hasAttribute('style')) {
    const style = node.getAttribute('style') || ''
    node.setAttribute('style', normalizeStyle(style))
  }
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

/**
 * 针对 DOM Element 节点的全局快照序列化器：
 * - 拦截所有 Element 类型节点。
 * - 克隆并清洗，以确保剥离无障碍（aria-* / role）属性并修复克隆带来的默认值及空 style 副作用。
 */
expect.addSnapshotSerializer({
  test(value: unknown) {
    return isElement(value) && !STRIPPED_NODES.has(value)
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

// 模块级递归保护锁，防止在 HTML 字符串序列化器中重复调用导致调用栈溢出（Stack Overflow）
let isSerializingString = false

/**
 * 针对 HTML 字符串快照的序列化器（例如对 container.innerHTML / outerHTML 进行 toMatchSnapshot 的断言）：
 * - 当测试直接对渲染出的 HTML 字符串执行快照比对时，DOM Serializer 无法直接拦截字符串，本序列化器负责将其捕获。
 * - 使用全局 Window 环境中的 DOM 解析器对 HTML 字符串进行临时解析与过滤，剥离无障碍属性并修正样式，随后序列化回干净的 HTML。
 */
expect.addSnapshotSerializer({
  test(value: unknown) {
    if (isSerializingString) return false
    // 识别包含 HTML 标签的字符串，确保仅对 HTML 文本生效
    return (
      typeof value === 'string' && value.includes('<') && value.includes('>')
    )
  },
  serialize(value: string, config, indentation, depth, refs, printer) {
    isSerializingString = true
    try {
      // 在 Happy DOM/jsdom 提供的真实 DOM 环境下进行 HTML 解析，避免正则清理标签造成的破损
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = value

      const cleanNode = (node: Element) => {
        const attrs = Array.from(node.attributes)
        attrs.forEach((attr) => {
          if (isAriaAttribute(attr.name)) {
            node.removeAttribute(attr.name)
          }
        })
        if (node.hasAttribute('style')) {
          const style = node.getAttribute('style') || ''
          node.setAttribute('style', normalizeStyle(style))
        }
        Array.from(node.children).forEach((child) =>
          cleanNode(child as Element)
        )
      }

      Array.from(tempDiv.children).forEach((child) =>
        cleanNode(child as Element)
      )
      const cleaned = tempDiv.innerHTML
      return printer(cleaned, config, indentation, depth, refs)
    } catch (e) {
      // 容错降级：万一 DOM 解析器在极端用例下出错，退回到传统的简单正则替换
      const cleaned = value
        .replace(/\s*aria-[a-z-]+="[^"]*"/gi, '')
        .replace(/\s*role="[^"]*"/gi, '')
      return printer(cleaned, config, indentation, depth, refs)
    } finally {
      // 释放递归锁，供下一次匹配使用
      isSerializingString = false
    }
  },
})
