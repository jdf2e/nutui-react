import React from 'react'
import { IComponent } from '@/utils/typings'

export interface ITableProps extends IComponent {
  className: string
  style: React.CSSProperties
  columns: Array<TableColumnProps>
  data: Array<any>
  bordered: boolean
  summary?: React.ReactNode
  striped?: boolean
  noData?: React.ReactNode
  onSorter?: (item: TableColumnProps, data: Array<any>) => void
}

export interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}
