import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'
import classNames from 'classnames'
import { ArrowDown } from '@nutui/icons-react'
import { useConfig, useRtl } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { useTableSticky } from './utils'
import { useVirtualScroll } from './virtual-scroll'
import { SortStateType, TableColumnProps, WebTableProps } from '@/types'

export interface VirtualTableProps extends Omit<WebTableProps, 'bordered'> {
  // 是否启用虚拟滚动
  virtual?: boolean
  // 表格可视区域高度
  height?: number
  // 每行高度
  rowHeight?: number
  // 预加载的行数
  overscan?: number
  // 滚动到指定索引的方法
  scrollToIndex?: (index: number) => void
  // 覆盖WebTableProps中的bordered，使其可选
  bordered?: boolean
  // 是否启用动态高度（如果为true，将尝试获取每行的实际高度）
  dynamicHeight?: boolean
}

// 定义组件引用类型
export interface VirtualTableRef {
  // 滚动到指定索引的方法
  scrollToIndex: (index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  columns: [],
  data: [],
  bordered: true,
  striped: false,
  noData: '',
  sorterIcon: null,
  showHeader: true,
  virtual: false,
  height: 300,
  rowHeight: 40,
  overscan: 5,
  dynamicHeight: false,
} as VirtualTableProps

// 使用ForwardRefRenderFunction来定义组件，以便支持ref转发
const TableVirtualComponent: ForwardRefRenderFunction<
  VirtualTableRef,
  VirtualTableProps
> = (props, ref) => {
  const { locale } = useConfig()
  const rtl = useRtl()
  defaultProps.noData = locale.noData

  const {
    children,
    className,
    style,
    columns,
    data,
    bordered,
    summary,
    striped,
    noData,
    sorterIcon,
    showHeader,
    onSort,
    virtual,
    height,
    rowHeight,
    overscan,
    scrollToIndex,
    dynamicHeight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const sortedMapping = useRef<{ [key: string]: SortStateType }>({})
  const [innerValue, setValue] = usePropsValue({
    defaultValue: data,
    finalValue: [],
  })
  const {
    isSticky,
    stickyLeftWidth,
    stickyRightWidth,
    getStickyClass,
    getStickyStyle,
  } = useTableSticky(columns, rtl)

  // 表头高度
  const [headerHeight, setHeaderHeight] = useState(rowHeight)
  const headerRef = useRef<HTMLDivElement>(null)

  // 计算表头高度
  useEffect(() => {
    if (headerRef.current && showHeader) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height)
    } else if (!showHeader) {
      setHeaderHeight(0)
    }
  }, [showHeader, headerRef.current])

  // 虚拟滚动相关
  const {
    visibleRange,
    totalHeight,
    offsetY,
    onScroll,
    containerRef,
    scrollTo,
    getRowRef,
    updateItemHeight,
  } = useVirtualScroll({
    total: innerValue.length,
    viewportHeight: (height || 300) - (showHeader ? headerHeight || 0 : 0),
    itemHeight: rowHeight || 40,
    overscan: overscan || 5,
    dynamicHeight: dynamicHeight || false,
  })

  // 使用useImperativeHandle暴露方法给外部
  useImperativeHandle(
    ref,
    () => ({
      scrollToIndex: scrollTo,
    }),
    [scrollTo]
  )

  // 当数据变化时，更新内部值
  useEffect(() => {
    setValue(data)

    // 当数据变化时，如果启用了虚拟滚动，需要重新计算虚拟滚动状态
    if (virtual && containerRef.current) {
      // 保存当前滚动位置
      const currentScrollTop = containerRef.current.scrollTop

      // 延迟一帧，确保内部状态已更新
      requestAnimationFrame(() => {
        // 确保容器引用仍然有效
        if (containerRef.current) {
          // 手动触发滚动事件以更新虚拟滚动状态
          const scrollEvent = new UIEvent('scroll', {
            bubbles: true,
          })
          containerRef.current.dispatchEvent(scrollEvent)

          // 如果数据量变化较大，可能需要再次触发滚动事件
          if (data.length !== innerValue.length) {
            setTimeout(() => {
              if (containerRef.current) {
                const secondScrollEvent = new UIEvent('scroll', {
                  bubbles: true,
                })
                containerRef.current.dispatchEvent(secondScrollEvent)
              }
            }, 50)
          }
        }
      })
    }
  }, [data, virtual, innerValue.length])

  // 当表头高度变化时，更新虚拟滚动状态
  useEffect(() => {
    if (virtual && containerRef.current && showHeader) {
      // 触发一次滚动事件，以更新虚拟滚动状态
      const scrollEvent = new UIEvent('scroll', { bubbles: true })
      containerRef.current.dispatchEvent(scrollEvent)
    }
  }, [headerHeight, virtual, showHeader])

  // 将scrollTo方法暴露给外部（兼容旧的API）
  useEffect(() => {
    if (scrollToIndex && virtual && typeof scrollToIndex === 'function') {
      // 直接将内部的scrollTo方法赋值给外部的scrollToIndex
      // 这样外部可以通过ref.current.scrollToIndex(index)来调用
      scrollToIndex(scrollTo as any)
    }
  }, [scrollToIndex, virtual, scrollTo])

  const classPrefix = 'nut-table'
  const headerClassPrefix = `${classPrefix}-main-head-tr`
  const bodyClassPrefix = `${classPrefix}-main-body-tr`
  const cls = classNames(classPrefix, className)

  const handleSorterClick = (item: TableColumnProps) => {
    if (!item.sorter) return

    // 获取当前排序状态，如果不存在则默认为 null（不排序）
    const currentSortState = sortedMapping.current[item.key] || null

    // 根据当前状态确定下一个状态：null -> asc -> desc -> null
    let nextSortState: 'asc' | 'desc' | null
    if (currentSortState === null) {
      nextSortState = 'asc' // 默认不排序 -> 升序
    } else if (currentSortState === 'asc') {
      nextSortState = 'desc' // 升序 -> 降序
    } else {
      nextSortState = null // 降序 -> 不排序
    }

    // 更新排序状态
    sortedMapping.current[item.key] = nextSortState

    // 根据排序状态执行相应的排序操作
    if (nextSortState === null) {
      // 不排序，恢复原始数据
      setValue(data)
      onSort && onSort(item)
    } else {
      const copied = [...innerValue]
      if (typeof item.sorter === 'function') {
        // 使用自定义排序函数
        if (nextSortState === 'asc') {
          copied.sort(item.sorter as (a: any, b: any) => number)
        } else {
          // 降序：交换排序函数的参数顺序
          copied.sort(
            (a, b) => -(item.sorter as (a: any, b: any) => number)(a, b)
          )
        }
      } else if (item.sorter === 'default') {
        // 默认排序
        if (nextSortState === 'asc') {
          copied.sort()
        } else {
          copied.sort().reverse()
        }
      } else if (item.sorter === true) {
        // 简单排序，根据列的 key 值进行排序
        const key = item.key
        if (nextSortState === 'asc') {
          copied.sort((a, b) => (a[key] > b[key] ? 1 : -1))
        } else {
          copied.sort((a, b) => (a[key] > b[key] ? -1 : 1))
        }
      }
      setValue(copied, true)
      onSort && onSort(item, copied, nextSortState)
    }
  }

  const cellClasses = (item: TableColumnProps) => {
    return {
      [`${headerClassPrefix}-border`]: bordered,
      [`${headerClassPrefix}-align${item.align ? item.align : ''}`]: true,
    }
  }

  const getColumnItem = (value: string): TableColumnProps => {
    return columns.filter((item: TableColumnProps) => item.key === value)[0]
  }

  const renderHeadCells = () => {
    return columns.map((item: TableColumnProps, index: number) => {
      // 获取当前列的排序状态
      const currentSortState = sortedMapping.current[item.key] || null

      // 根据排序状态决定是否显示图标以及显示什么图标
      const renderSorterIcon = () => {
        if (!item.sorter) return null

        // 如果列提供了自定义的排序图标函数，优先使用
        if (item.sorterIcon) {
          return item.sorterIcon(currentSortState)
        }

        // 如果提供了全局的排序图标，使用全局图标
        if (sorterIcon) {
          return sorterIcon
        }

        // 默认图标逻辑：根据排序状态显示不同的图标
        if (currentSortState === 'asc') {
          // 升序状态
          return (
            <ArrowDown
              width="12px"
              height="12px"
              style={{ transform: 'rotate(180deg)' }}
            />
          )
        }
        if (currentSortState === 'desc') {
          // 降序状态
          return <ArrowDown width="12px" height="12px" />
        }
        // 未排序状态 - 显示较淡的图标
        return <ArrowDown width="12px" height="12px" style={{ opacity: 0.3 }} />
      }

      return (
        <div
          className={classNames(
            `${headerClassPrefix}-th`,
            cellClasses(item),
            getStickyClass(item.key)
          )}
          key={item.key}
          onClick={() => handleSorterClick(item)}
          style={{
            ...getStickyStyle(item.key),
            width: item.width,
          }}
        >
          {item.title}&nbsp;
          {item.sorter && renderSorterIcon()}
        </div>
      )
    })
  }

  const sortDataItem = () => {
    return columns.map((column: TableColumnProps) => {
      return [column.key, column.render, column.width] as [
        string,
        ((item: any, index: number) => React.ReactNode) | undefined,
        number,
      ]
    })
  }

  const renderBodyTds = (item: any, rowIndex: number) => {
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

  const renderBodyTrs = () => {
    // 如果启用了虚拟滚动，只渲染可视区域内的行
    const dataToRender = virtual
      ? innerValue.slice(
          Math.min(visibleRange[0], innerValue.length - 1),
          Math.min(visibleRange[1] + 1, innerValue.length)
        )
      : innerValue

    // 如果没有数据要渲染，返回空数组
    if (dataToRender.length === 0) {
      return []
    }

    return dataToRender
      .map((item: any, index: number) => {
        // 计算实际行索引（用于虚拟滚动）
        const actualIndex = virtual ? visibleRange[0] + index : index

        // 确保item存在且是一个有效的对象
        if (!item || typeof item !== 'object') {
          console.warn('Invalid item in table data:', item)
          return null
        }

        const inner = renderBodyTds(item, actualIndex)
        const { rowRender } = item
        if (rowRender && typeof rowRender === 'function') {
          const renderedRow = rowRender(item, actualIndex, { inner })
          // 如果自定义渲染函数返回的是React元素，我们需要添加ref
          if (React.isValidElement(renderedRow) && dynamicHeight) {
            return React.cloneElement(renderedRow, {
              // @ts-ignore
              ref: getRowRef(actualIndex),
            })
          }
          return renderedRow
        }
        return (
          <div
            className={bodyClassPrefix}
            key={`row-${actualIndex}`}
            ref={dynamicHeight ? getRowRef(actualIndex) : undefined}
          >
            {inner}
          </div>
        )
      })
      .filter(Boolean) // 过滤掉无效的行
  }

  return (
    <div className={cls} {...rest}>
      <div
        className={classNames(
          `${classPrefix}-wrapper ${
            isSticky ? `${classPrefix}-wrapper-sticky` : ''
          }`
        )}
        ref={virtual ? containerRef : undefined}
        onScroll={virtual ? (e) => onScroll(e) : undefined}
        style={{
          ...style,
          ...(virtual
            ? {
                height: height || 300,
                maxHeight: height || 300,
                overflow: 'auto',
                position: 'relative',
              }
            : {
                height: height || 300,
              }),
        }}
      >
        <div
          className={classNames(`${classPrefix}-main`, {
            [`${classPrefix}-main-striped`]: striped,
            [`${classPrefix}-main-virtual`]: virtual,
          })}
        >
          {showHeader && (
            <div className={`${classPrefix}-main-head`} ref={headerRef}>
              <div className={headerClassPrefix}>{renderHeadCells()}</div>
            </div>
          )}
          <div
            className={`${classPrefix}-main-body`}
            style={{
              height: totalHeight,
              position: 'relative',
            }}
          >
            {virtual && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: `translateY(${offsetY}px)`,
                  display: 'table-row',
                  width: '100%',
                }}
              >
                {renderBodyTrs()}
              </div>
            )}
            {!virtual && renderBodyTrs()}
          </div>
        </div>
      </div>
      {isSticky ? (
        <>
          <div
            className={`${classPrefix}-sticky-left`}
            style={{ width: stickyLeftWidth }}
          />
          <div
            className={`${classPrefix}-sticky-right`}
            style={{ width: stickyRightWidth }}
          />
        </>
      ) : null}
      {(summary || innerValue.length === 0) && (
        <div className={`${classPrefix}-summary`}>{summary || noData}</div>
      )}
    </div>
  )
}

// 使用forwardRef包装组件，以便支持ref转发
export const TableVirtual = forwardRef<VirtualTableRef, VirtualTableProps>(
  TableVirtualComponent
)

TableVirtual.displayName = 'NutTableVirtual'
