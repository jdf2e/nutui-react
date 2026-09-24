import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { FlexAlign } from '../../base/atoms'

export interface BaseCell extends BaseProps {
  title: ReactNode
  description: ReactNode
  extra: ReactNode
  icon: ReactNode
  content: ReactNode
  radius: string | number
  align: FlexAlign
  clickable: boolean
  isLast: boolean
  onClick: (event: any) => void
}

// 历史导出名，等价于 FlexAlign，供既有引用继续使用
export type CellAlign = FlexAlign

export interface BaseCellGroup extends BaseProps {
  title: ReactNode
  description: ReactNode
  children: ReactNode
  divider: boolean
}
