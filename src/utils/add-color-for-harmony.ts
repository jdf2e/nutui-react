import React, { ReactElement, ReactNode } from 'react'
import { harmony } from './platform-taro'

interface ColorProps {
  color?: string
}

/**
 * 为支持 Harmony 的 React 元素添加颜色属性
 * @param maybeElement - 要处理的 React 节点
 * @param color - 要添加的颜色值（如：'#ff0000'）
 * @returns 处理后的 React 节点
 */
function addColorForHarmony(maybeElement: ReactNode, color?: string) {
  if (React.isValidElement(maybeElement) && harmony()) {
    return React.cloneElement<ColorProps>(maybeElement as ReactElement, {
      color,
    })
  }
  return maybeElement
}

export default addColorForHarmony
