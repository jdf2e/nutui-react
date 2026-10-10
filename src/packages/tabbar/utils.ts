import React, { ReactElement, ReactNode } from 'react'

/** 递归归一化 Tabbar 子节点，过滤非 Tabbar.Item，并为导航项生成稳定的层级 key */
export const normalizeTabbarItems = (
  children: ReactNode,
  itemType: React.ElementType
): ReactElement[] => {
  const items: ReactElement[] = []

  const visit = (nodes: ReactNode, parentKey = '') => {
    React.Children.toArray(nodes).forEach((child) => {
      if (!React.isValidElement(child)) return

      // Fragment 中的 Item 展开为同级节点时，保留各自的 key 作用域
      const key = JSON.stringify([parentKey, child.key])

      if (child.type === React.Fragment) {
        visit((child.props as { children?: ReactNode }).children, key)
      } else if (child.type === itemType) {
        items.push(React.cloneElement(child, { key }))
      }
    })
  }

  visit(children)
  return items
}
