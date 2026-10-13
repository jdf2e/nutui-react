import React, { ReactElement, ReactNode } from 'react'

/** 递归展开 Fragment、过滤空节点，并为有效子元素生成稳定的层级 key */
export const normalizeTabbarItems = (children: ReactNode): ReactElement[] => {
  const items: ReactElement[] = []

  const visit = (nodes: ReactNode, parentKey = '') => {
    React.Children.toArray(nodes).forEach((child) => {
      if (!React.isValidElement(child)) return

      // Fragment 中的子元素展开为同级节点时，保留各自的 key 作用域
      const key = JSON.stringify([parentKey, child.key])

      if (child.type === React.Fragment) {
        visit((child.props as { children?: ReactNode }).children, key)
      } else {
        items.push(React.cloneElement(child, { key }))
      }
    })
  }

  visit(children)
  return items
}
