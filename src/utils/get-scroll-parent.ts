import { canUseDom } from './can-use-dom'

type ScrollElement = HTMLElement | Window

const defaultRoot = canUseDom ? window : undefined

const overflowStylePatterns = ['scroll', 'auto', 'overlay']

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1
  return node.nodeType === ELEMENT_NODE_TYPE
}

export function getScrollParent(
  el: Element | null | undefined,
  root: ScrollElement | null | undefined = defaultRoot
): Window | Element | null | undefined {
  let node = el

  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root
    }
    const { overflowY } = window.getComputedStyle(node)
    if (
      overflowStylePatterns.includes(overflowY) &&
      node.scrollHeight > node.clientHeight
    ) {
      return node
    }
    node = node.parentNode as Element
  }
  return root
}

export function getAllScrollableParents(
  element: Element | null,
  scrollableParents: Element[] = []
): Element[] {
  if (!element) {
    return scrollableParents
  }

  // 检查元素是否具有滚动条
  const isScrollable =
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth

  if (isScrollable) {
    // 如果当前元素具有滚动条，则将其添加到数组中
    if (element.nodeName === 'HTML') {
      // @ts-ignore
      scrollableParents.push(document)
    } else {
      scrollableParents.push(element)
    }
  }

  // 递归检查父元素
  return getAllScrollableParents(element.parentElement, scrollableParents)
}
