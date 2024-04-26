import React from 'react'
import { BasicComponent } from '@/utils/typings'

export interface BasicTableProps extends BasicComponent {
  columns: Array<TableColumnProps>
  data: Array<any>
  bordered: boolean
  summary?: React.ReactNode
  striped?: boolean
  noData?: React.ReactNode
  sorterIcon?: React.ReactNode
  onSort?: (column: TableColumnProps, sortedData: Array<any>) => void
  showHeader?: boolean
}

export interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}
