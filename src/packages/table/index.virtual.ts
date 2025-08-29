import {
  TableVirtual,
  VirtualTableRef,
  VirtualTableProps,
  useVirtualScroll,
  useThrottle,
  useDebounce,
} from './virtual'
import { TableColumnProps } from '@/types/spec/table/base'

// 导出TableVirtual组件，使其能够接收正确的props
const TableVirtualWrapper = TableVirtual

export { useVirtualScroll, useThrottle, useDebounce }
export type { TableColumnProps, VirtualTableRef, VirtualTableProps }
export default TableVirtualWrapper
