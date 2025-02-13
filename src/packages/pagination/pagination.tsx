import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { ButtonItem, usePagination } from '@/hooks/use-pagination'

export interface PaginationProps extends BasicComponent {
  defaultValue: number
  value: number
  mode: 'multi' | 'simple' | 'lite'
  prev: ReactNode
  next: ReactNode
  total: number
  pageSize: number
  itemSize: number
  ellipse: boolean
  itemRender: (page: any, index: number) => ReactNode
  onChange: (currPage: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 1,
  mode: 'multi',
  prev: null,
  next: null,
  total: 50,
  pageSize: 10,
  itemSize: 5,
  ellipse: false,
} as PaginationProps
export const Pagination: FunctionComponent<
  Partial<PaginationProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    value,
    mode,
    prev,
    next,
    total,
    pageSize,
    itemSize,
    onChange,
    ellipse,
    itemRender,
    defaultValue,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-pagination'
  const [current, setCurrent] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 1,
    onChange,
  })

  const [pages, pageCount] = usePagination({
    total,
    ellipse,
    current,
    displayCount: itemSize,
    itemsPerPage: pageSize,
  })

  const handleClick = (item: ButtonItem) => {
    if (item.selected) return
    if (item.number > pageCount || item.number < 1) return
    setCurrent(item.number)
  }
  const prevPage = () => {
    const prev = current - 1
    prev >= 1 && setCurrent(prev)
  }
  const nextPage = () => {
    const next = current + 1
    next <= pageCount && setCurrent(next)
  }

  return (
    <div className={classNames(classPrefix, className)} {...rest}>
      {(mode === 'multi' || mode === 'simple') && (
        <>
          <div
            className={classNames({
              [`${classPrefix}-prev`]: true,
              [`${classPrefix}-simple-border`]: mode !== 'multi',
              [`${classPrefix}-prev-disabled`]: current === 1,
            })}
            onClick={() => prevPage()}
          >
            {prev || locale.pagination.prev}
          </div>
          {mode === 'multi' && (
            <div className={`${classPrefix}-contain`}>
              {pages.map((item: any, index: number) => {
                return (
                  <div
                    key={`${index}pagination`}
                    className={classNames({
                      [`${classPrefix}-item`]: true,
                      [`${classPrefix}-item-active`]: item.selected,
                    })}
                    onClick={() => {
                      handleClick(item)
                    }}
                  >
                    {itemRender ? itemRender(item, current) : item.text}
                  </div>
                )
              })}
            </div>
          )}
          {mode === 'simple' && (
            <div className={`${classPrefix}-contain`}>
              <div className={`${classPrefix}-simple`}>
                {current}/{pageCount}
              </div>
            </div>
          )}
          <div
            className={classNames(
              `${classPrefix}-next`,
              current >= pageCount ? `${classPrefix}-next-disabled` : ''
            )}
            onClick={() => nextPage()}
          >
            {next || locale.pagination.next}
          </div>
        </>
      )}
      {mode === 'lite' && (
        <div className={`${classPrefix}-lite`}>
          <div className={`${classPrefix}-lite-active`}>{current}</div>
          <div className={`${classPrefix}-lite-spliterator`}>/</div>
          <div className={`${classPrefix}-lite-default`}>{pageCount}</div>
        </div>
      )}
    </div>
  )
}

Pagination.displayName = 'NutPagination'
