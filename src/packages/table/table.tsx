import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { ArrowDown } from '@nutui/icons-react'
import { useConfig, useRtl } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { useTableSticky } from './utils'
import { SortStateType, TableColumnProps, WebTableProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  columns: [],
  data: [],
  bordered: true,
  striped: false,
  noData: '',
  sorterIcon: null,
  showHeader: true,
} as WebTableProps
export const Table: FunctionComponent<
  Partial<WebTableProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
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

  useEffect(() => {
    setValue(data)
  }, [data])

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
    return columns.map((item, index) => {
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
          style={getStickyStyle(item.key)}
        >
          {item.title}&nbsp;
          {item.sorter && renderSorterIcon()}
        </div>
      )
    })
  }

  const sortDataItem = () => {
    return columns.map((columns: any) => {
      return [columns.key, columns.render]
    })
  }

  const renderBodyTds = (item: any, rowIndex: number) => {
    return sortDataItem().map(([value, render]) => {
      return (
        <div
          className={classNames(
            `${bodyClassPrefix}-td`,
            cellClasses(getColumnItem(value)),
            getStickyClass(value)
          )}
          key={value}
          style={getStickyStyle(value)}
        >
          {typeof item[value] === 'function' || typeof render === 'function' ? (
            <div>{render ? render(item, rowIndex) : item[value](item)}</div>
          ) : (
            item[value]
          )}
        </div>
      )
    })
  }

  const renderBodyTrs = () => {
    return innerValue.map((item, index) => {
      const inner = renderBodyTds(item, index)
      const { rowRender } = item
      if (rowRender && typeof rowRender === 'function') {
        return rowRender(item, index, { inner })
      }
      return (
        <div className={bodyClassPrefix} key={index}>
          {inner}
        </div>
      )
    })
  }

  return (
    <div className={cls} {...rest}>
      <div
        className={classNames(
          `${classPrefix}-wrapper ${
            isSticky ? `${classPrefix}-wrapper-sticky` : ''
          }`
        )}
        style={style}
      >
        <div
          className={classNames(`${classPrefix}-main`, {
            [`${classPrefix}-main-striped`]: striped,
          })}
        >
          {showHeader && (
            <div className={`${classPrefix}-main-head`}>
              <div className={headerClassPrefix}>{renderHeadCells()}</div>
            </div>
          )}
          <div className={`${classPrefix}-main-body`}>{renderBodyTrs()}</div>
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

Table.displayName = 'NutTable'
