import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { Direction } from './baseatom'

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
