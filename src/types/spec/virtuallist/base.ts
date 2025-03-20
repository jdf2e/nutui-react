import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Direction } from '../../base/atoms'

export interface BaseVirtualList extends BaseProps {
  list: Array<any>
  containerHeight: number
  itemRender: (data: any, dataIndex: number, index: number) => ReactNode
  itemHeight: number
  itemEqual: boolean
  direction: Direction
  overscan: number
  onScroll: () => void
  key: string
}
