import React, { ReactElement, ReactNode } from 'react'

interface NormalizedTabbarItem {
  element: ReactElement
  key: string
}

/** 递归展开 Fragment，识别 Tabbar.Item 及同名包装组件，并生成稳定的层级 key */
export const normalizeTabbarItems = (
  children: ReactNode,
  itemType: React.ElementType & { displayName?: string }
): NormalizedTabbarItem[] => {
  const items: NormalizedTabbarItem[] = []
  const itemDisplayName = itemType.displayName

  const visit = (nodes: ReactNode, parentKey = '') => {
    React.Children.toArray(nodes).forEach((child) => {
      if (!React.isValidElement(child)) return

      // Fragment 中的子元素展开为同级节点时，保留各自的 key 作用域
      const key = JSON.stringify([parentKey, child.key])

      if (child.type === React.Fragment) {
        visit((child.props as { children?: ReactNode }).children, key)
      } else if (
        child.type === itemType ||
        (itemDisplayName &&
          typeof child.type !== 'string' &&
          (child.type as { displayName?: string }).displayName ===
            itemDisplayName)
      ) {
        items.push({ element: child, key })
      }
    })
  }

  visit(children)
  return items
}
