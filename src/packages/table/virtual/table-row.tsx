import React, { memo } from 'react'
import classNames from 'classnames'
import { TableColumnProps } from '@/types'

interface TableRowProps {
  // 行数据
  item: any
  // 行索引
  rowIndex: number
  // 行类名前缀
  bodyClassPrefix: string
  // 单元格类名计算函数
  cellClasses: (item: TableColumnProps) => Record<string, boolean | undefined>
  // 获取粘性类名
  getStickyClass: (
    key: string
  ) => Record<string, boolean | undefined> | undefined
  // 获取粘性样式
  getStickyStyle: (key: string) => Record<string, any> | undefined
  // 获取列配置
  getColumnItem: (value: string) => TableColumnProps
  // 列数据项
  sortDataItem: () => [
    string,
    ((item: any, index: number) => React.ReactNode) | undefined,
    number,
  ][]
  // 是否启用动态高度
  dynamicHeight?: boolean
  // 获取行引用的方法
  getRowRef?: (index: number) => (element: HTMLElement | null) => void
}

/**
 * 表格行组件 - 使用React.memo优化性能
 * 只有当行数据或相关属性变化时才会重新渲染
 */
const TableRow: React.FC<TableRowProps> = ({
  item,
  rowIndex,
  bodyClassPrefix,
  cellClasses,
  getStickyClass,
  getStickyStyle,
  getColumnItem,
  sortDataItem,
  dynamicHeight,
  getRowRef,
}) => {
  // 渲染单元格
  const renderBodyTds = () => {
    return sortDataItem().map(
      ([value, render, width]: [
        string,
        ((item: any, index: number) => React.ReactNode) | undefined,
        number,
      ]) => {
        return (
          <div
            className={classNames(
              `${bodyClassPrefix}-td`,
              cellClasses(getColumnItem(value)),
              getStickyClass(value)
            )}
            key={value}
            style={{
              ...getStickyStyle(value),
              width,
            }}
          >
            {typeof item[value] === 'function' ||
            typeof render === 'function' ? (
              <div>{render ? render(item, rowIndex) : item[value](item)}</div>
            ) : (
              item[value]
            )}
          </div>
        )
      }
    )
  }

  // 处理自定义行渲染
  const { rowRender } = item
  if (rowRender && typeof rowRender === 'function') {
    const inner = renderBodyTds()
    const renderedRow = rowRender(item, rowIndex, { inner })

    // 如果自定义渲染函数返回的是React元素，我们需要添加ref
    if (React.isValidElement(renderedRow) && dynamicHeight && getRowRef) {
      return React.cloneElement(renderedRow, {
        // @ts-ignore
        ref: getRowRef(rowIndex),
      })
    }
    return renderedRow
  }

  // 标准行渲染
  return (
    <div
      className={bodyClassPrefix}
      key={`row-${rowIndex}`}
      ref={dynamicHeight && getRowRef ? getRowRef(rowIndex) : undefined}
    >
      {renderBodyTds()}
    </div>
  )
}

// 使用React.memo包装组件，避免不必要的重渲染
// 只有当props发生变化时，组件才会重新渲染
export default memo(TableRow, (prevProps, nextProps) => {
  // 如果行索引不同，需要重新渲染
  if (prevProps.rowIndex !== nextProps.rowIndex) {
    return false
  }

  // 如果行数据引用不同，需要进一步比较
  if (prevProps.item !== nextProps.item) {
    // 简单比较对象的键值是否相同
    // 注意：这是一个浅比较，对于复杂嵌套对象可能需要更深入的比较
    const prevKeys = Object.keys(prevProps.item)
    const nextKeys = Object.keys(nextProps.item)

    if (prevKeys.length !== nextKeys.length) {
      return false
    }

    // 比较每个键的值
    for (const key of prevKeys) {
      if (prevProps.item[key] !== nextProps.item[key]) {
        return false
      }
    }
  }

  // 其他props变化也需要重新渲染
  if (
    prevProps.bodyClassPrefix !== nextProps.bodyClassPrefix ||
    prevProps.dynamicHeight !== nextProps.dynamicHeight
  ) {
    return false
  }

  // 如果所有比较都通过，则认为组件不需要重新渲染
  return true
})
