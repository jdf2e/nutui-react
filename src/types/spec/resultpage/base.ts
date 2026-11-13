import { ReactNode } from 'react'
import { UIFill, UISize, UIType } from '../../base/atoms'
import { BaseProps } from '../../base/props'

export type ResultPageStatusOptions = {
  [key: string]: React.ReactNode
}
export type ResultPageStatus =
  'success' | 'error' | 'warning' | 'info' | 'waiting'

/**
 * ResultPage 操作按钮配置项。
 * 复合组件按需引入轻量基础按钮样式（button-base，节省 ~19.7KB），原生支持 default / primary 核心类型、常用尺寸（normal/large/small）及全部 5 种 fill 填充形态；
 * 如需在 actions 中使用 success/danger/golden/warning/info 等扩展按钮变体或 mini/xlarge 等扩展尺寸，请在页面中另行显式引入 Button 组件样式（如 import '@nutui/nutui-react/dist/es/packages/button/style' 或对应 Taro 样式）。
 */
export type ResultPageAction = {
  text: ReactNode
  type?: UIType
  size?: UISize
  fill?: UIFill
  disabled?: boolean
  onClick?: () => void
}

export interface BaseResultPage extends BaseProps {
  title: ReactNode
  description: ReactNode
  icon: ReactNode
  status: ResultPageStatus
  actions: ResultPageAction[]
}
