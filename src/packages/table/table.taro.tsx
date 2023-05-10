import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { DownArrow } from '@nutui/icons-react-taro'
import { BasicTableProps, TableColumnProps } from './types'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { ComponentDefaults } from '@/utils/typings'

export type TableProps = BasicTableProps

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  style: {},
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

  const [curData, setCurData] = useState(data)

  useEffect(() => {
    if (data && String(data) !== String(curData)) {
      setCurData(data)
    }
  }, [data])

  const classPrefix = 'nut-table'
  const headerClassPrefix = `nut-table__main__head__tr`
  const classes = classNames({})
  const cls = classNames(classPrefix, classes, className)

  const handleSorterClick = (item: TableColumnProps) => {
    if (item.sorter) {
      onSort && onSort(item, curData)
      if (typeof item.sorter === 'function') {
        setCurData(curData.sort(item.sorter as (a: any, b: any) => number))
      } else {
        setCurData(item.sorter === 'default' ? curData.sort() : curData)
      }
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
          {item.sorter && (sorterIcon || <DownArrow size="12px" />)}
        </span>
      )
    })
  }

  const sortDataItem = () => {
    return columns.map((columns: any) => {
      return [columns.key, columns.render]
    })
  }

  const renderBodyTds = (item: any) => {
    return sortDataItem().map(([value, render], index) => {
      return (
        <span
          className={classNames(
            'nut-table__main__body__tr__td',
            cellClasses(getColumnItem(value))
          )}
          key={value}
        >
          {typeof item[value] === 'function' || typeof render === 'function' ? (
            <div>{render ? render(item) : item[value](item)}</div>
          ) : (
            item[value]
          )}
        </span>
      )
    })
  }

  const renderBoyTrs = () => {
    return curData.map((item, index) => {
      return (
        <div className="nut-table__main__body__tr" key={index}>
          {renderBodyTds(item)}
        </div>
      )
    })
  }

  return (
    <div className={cls} style={style} {...rest}>
      <div
        className={classNames('nut-table__main', {
          'nut-table__main--striped': striped,
        })}
      >
        {showHeader && (
          <div className="nut-table__main__head">
            <div className="nut-table__main__head__tr">{renderHeadCells()}</div>
          </div>
        )}
        <div className="nut-table__main__body">{renderBoyTrs()}</div>
      </div>
      {(summary || curData.length === 0) && (
        <div className="nut-table__summary">{summary || noData}</div>
      )}
    </div>
  )
}

Table.defaultProps = defaultProps
Table.displayName = 'NutTable'
