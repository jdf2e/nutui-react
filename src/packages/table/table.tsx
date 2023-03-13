import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'
import { BasicTableProps, TableColumnProps } from './types'
import { useConfig } from '@/packages/configprovider'
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
  noData: '无数据',
  hideHeader: false,
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
    onSorter,
    iconClassPrefix,
    iconFontClassName,
    hideHeader = false,
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

  const b = bem('table')
  const classes = classNames({})
  const cls = classNames(b(), classes, className)

  const handleSorterClick = (item: TableColumnProps) => {
    if (item.sorter) {
      onSorter && onSorter(item, curData)

      if (typeof item.sorter === 'function') {
        setCurData(curData.sort(item.sorter as (a: any, b: any) => number))
      } else {
        setCurData(item.sorter === 'default' ? curData.sort() : curData)
      }
    }
  }

  const cellClasses = (item: TableColumnProps) => {
    return {
      'nut-table__main__head__tr--border': props.bordered,
      [`nut-table__main__head__tr--align${item.align ? item.align : ''}`]: true,
    }
  }

  const getColumnItem = (value: string): TableColumnProps => {
    return columns.filter((item: TableColumnProps) => item.key === value)[0]
  }

  const renderHeadCells = () => {
    return columns.map((item, index) => {
      return (
        <span
          className={classNames(
            'nut-table__main__head__tr__th',
            cellClasses(item)
          )}
          key={item.key}
          onClick={() => handleSorterClick(item)}
        >
          {item.title}
          {item.sorter && (
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name="down-arrow"
              size="12px"
            />
          )}
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
        {!hideHeader && (
          <div className="nut-table__main__head">
            <div className="nut-table__main__head__tr">{renderHeadCells()}</div>
          </div>
        )}
        <div className="nut-table__main__body">{renderBoyTrs()}</div>
      </div>
      {summary && (
        <div className="nut-table__summary">
          <span className="nut-table__summary__text">{summary}</span>
        </div>
      )}
      {curData.length === 0 && (
        <div className="nut-table__nodata">
          <div className="nut-table__nodata">
            <div className="nut-table__nodata__text">{noData}</div>
          </div>
        </div>
      )}
    </div>
  )
}

Table.defaultProps = defaultProps
Table.displayName = 'NutTable'
