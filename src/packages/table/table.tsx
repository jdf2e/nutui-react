import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DownArrow } from '@nutui/icons-react'
import { BasicTableProps, TableColumnProps } from './types'
import { useConfig } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

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

  const [innerValue, setValue] = usePropsValue({
    value: data,
    finalValue: [],
  })

  const classPrefix = 'nut-table'
  const headerClassPrefix = `${classPrefix}__main__head__tr`
  const bodyClassPrefix = `${classPrefix}__main__body__tr`
  const cls = classNames(classPrefix, className)

  const handleSorterClick = (item: TableColumnProps) => {
    if (item.sorter) {
      let sortedValue = innerValue
      if (typeof item.sorter === 'function') {
        sortedValue = innerValue.sort(item.sorter as (a: any, b: any) => number)
      } else if (item.sorter === 'default') {
        sortedValue = innerValue.sort()
      }
      setValue(sortedValue, true)
      onSort && onSort(item, sortedValue)
    }
  }

  const cellClasses = (item: TableColumnProps) => {
    return {
      [`${headerClassPrefix}--border`]: props.bordered,
      [`${headerClassPrefix}--align${item.align ? item.align : ''}`]: true,
    }
  }

  const getColumnItem = (value: string): TableColumnProps => {
    return columns.filter((item: TableColumnProps) => item.key === value)[0]
  }

  const renderHeadCells = () => {
    return columns.map((item, index) => {
      return (
        <span
          className={classNames(`${headerClassPrefix}__th`, cellClasses(item))}
          key={item.key}
          onClick={() => handleSorterClick(item)}
        >
          {item.title}&nbsp;
          {item.sorter &&
            (sorterIcon || <DownArrow width="12px" height="12px" />)}
        </span>
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
        <span
          className={classNames(
            `${bodyClassPrefix}__td`,
            cellClasses(getColumnItem(value))
          )}
          key={value}
        >
          {typeof item[value] === 'function' || typeof render === 'function' ? (
            <div>{render ? render(item, rowIndex) : item[value](item)}</div>
          ) : (
            item[value]
          )}
        </span>
      )
    })
  }

  const renderBoyTrs = () => {
    return innerValue.map((item, index) => {
      return (
        <div className={bodyClassPrefix} key={index}>
          {renderBodyTds(item, index)}
        </div>
      )
    })
  }

  return (
    <div className={cls} style={style} {...rest}>
      <div
        className={classNames(`${classPrefix}__main`, {
          [`${classPrefix}__main--striped`]: striped,
        })}
      >
        {showHeader && (
          <div className={`${classPrefix}__main__head`}>
            <div className={headerClassPrefix}>{renderHeadCells()}</div>
          </div>
        )}
        <div className={`${classPrefix}__main__body`}>{renderBoyTrs()}</div>
      </div>
      {(summary || innerValue.length === 0) && (
        <div className={`${classPrefix}__summary`}>{summary || noData}</div>
      )}
    </div>
  )
}

Table.defaultProps = defaultProps
Table.displayName = 'NutTable'
