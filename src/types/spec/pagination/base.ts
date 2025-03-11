import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BasePagination extends BaseProps {
  defaultValue: number
  value: number
  mode: 'multi' | 'simple' | 'lite'
  prev: ReactNode
  next: ReactNode
  total: number
  pageSize: number
  itemSize: number
  ellipse: boolean
  itemRender: (page: any, index: number) => ReactNode
  onChange: (currPage: number) => void
}
