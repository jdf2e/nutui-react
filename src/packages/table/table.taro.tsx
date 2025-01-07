import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { ArrowDown } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { BasicTableProps, TableColumnProps } from './types'
import { useConfig, useRtl } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { useTableSticky } from './utils'

export type TableProps = BasicTableProps

const defaultProps = {
  ...ComponentDefaults,
  columns: [],
  data: [],
  bordered: true,
  striped: false,
  noData: '',
  sorterIcon: null,
  showHeader: true,
} as TableProps
export const Table: FunctionComponent<
  Partial<TableProps> & React.HTMLAttributes<HTMLDivElement>
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
  const sortedMapping = useRef<{ [key: string]: boolean }>({})
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
    if (item.sorter && !sortedMapping.current[item.key]) {
      const copied = [...innerValue]
      if (typeof item.sorter === 'function') {
        copied.sort(item.sorter as (a: any, b: any) => number)
      } else if (item.sorter === 'default') {
        copied.sort()
      }
      sortedMapping.current[item.key] = true
      setValue(copied, true)
      onSort && onSort(item, copied)
    } else {
      sortedMapping.current[item.key] = false
      setValue(data)
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
      return (
        <View
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
          {item.sorter &&
            (sorterIcon || <ArrowDown width="12px" height="12px" />)}
        </View>
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
        <View
          className={classNames(
            `${bodyClassPrefix}-td`,
            cellClasses(getColumnItem(value)),
            getStickyClass(value)
          )}
          key={value}
          style={getStickyStyle(value)}
        >
          {typeof item[value] === 'function' || typeof render === 'function' ? (
            <View>{render ? render(item, rowIndex) : item[value](item)}</View>
          ) : (
            item[value]
          )}
        </View>
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
        <View className={bodyClassPrefix} key={index}>
          {inner}
        </View>
      )
    })
  }

  return (
    <div className={cls} {...rest}>
      <View
        className={classNames(
          `${classPrefix}-wrapper ${
            isSticky ? `${classPrefix}-wrapper-sticky` : ''
          }`
        )}
        style={style}
      >
        <View
          className={classNames(`${classPrefix}-main`, {
            [`${classPrefix}-main-striped`]: striped,
          })}
        >
          {showHeader && (
            <View className={`${classPrefix}-main-head`}>
              <View className={headerClassPrefix}>{renderHeadCells()}</View>
            </View>
          )}
          <View className={`${classPrefix}-main-body`}>{renderBodyTrs()}</View>
        </View>
      </View>
      {isSticky ? (
        <>
          <View
            className={`${classPrefix}-sticky-left`}
            style={{ width: stickyLeftWidth }}
          />
          <View
            className={`${classPrefix}-sticky-right`}
            style={{ width: stickyRightWidth }}
          />
        </>
      ) : null}
      {(summary || innerValue.length === 0) && (
        <View className={`${classPrefix}-summary`}>{summary || noData}</View>
      )}
    </div>
  )
}

Table.displayName = 'NutTable'
