import {
  TableVirtual,
  VirtualTableRef,
  VirtualTableProps,
} from './table-virtual'
import { useVirtualScroll } from './virtual-scroll'
import { TableColumnProps } from '@/types/spec/table/base'

// 导出TableVirtual组件，使其能够接收正确的props
const TableVirtualWrapper = TableVirtual

export { useVirtualScroll }
export type { TableColumnProps, VirtualTableRef, VirtualTableProps }
export default TableVirtualWrapper
