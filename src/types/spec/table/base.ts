import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { PositionX } from '../../base/atoms'

export interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | ReactNode
  fixed?: PositionX
  width?: number
}

export interface BaseTable extends BaseProps {
  columns: Array<TableColumnProps>
  data: Array<any>
  bordered: boolean
  summary?: ReactNode
  striped?: boolean
  noData?: ReactNode
  sorterIcon?: ReactNode
  onSort?: (column: TableColumnProps, sortedData: Array<any>) => void
  showHeader?: boolean
}
