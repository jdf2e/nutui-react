import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/hooks/use-props-value'
import { ComponentDefaults } from '@/utils/typings'
import { PaginationNode, usePagination } from '@/hooks/use-pagination'
import { WebPaginationProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 1,
  mode: 'multi',
  indicatorType: 'capsule',
  loop: false,
  prev: null,
  next: null,
  total: 50,
  pageSize: 10,
  itemSize: 5,
  ellipse: false,
} as WebPaginationProps
export const Pagination: FunctionComponent<
  Partial<WebPaginationProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    value,
    mode,
    indicatorType,
    loop,
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

  const handleClick = (item: PaginationNode) => {
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

  // lite 模式下的指示符渲染：胶囊数字型 / 纯文本型 / 进度条指示型
  const renderIndicator = () => {
    if (indicatorType === 'progress') {
      return (
        <div className={`${classPrefix}-progress`}>
          {Array.from({ length: pageCount }).map((_, index) => (
            <div
              key={`${index}progress`}
              className={classNames({
                [`${classPrefix}-progress-item`]: true,
                [`${classPrefix}-progress-item-active`]: index + 1 === current,
              })}
            />
          ))}
        </div>
      )
    }
    if (indicatorType === 'text') {
      return (
        <div className={`${classPrefix}-text`}>
          <span className={`${classPrefix}-text-active`}>{current}</span>
          <span className={`${classPrefix}-text-spliterator`}>/</span>
          <span className={`${classPrefix}-text-default`}>{pageCount}</span>
        </div>
      )
    }
    return (
      <div className={`${classPrefix}-capsule`}>
        <span className={`${classPrefix}-capsule-active`}>{current}</span>
        <span className={`${classPrefix}-capsule-spliterator`}>/</span>
        <span className={`${classPrefix}-capsule-default`}>{pageCount}</span>
      </div>
    )
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
            className={classNames({
              [`${classPrefix}-next`]: true,
              [`${classPrefix}-next-disabled`]: current >= pageCount,
            })}
            onClick={() => nextPage()}
          >
            {next || locale.pagination.next}
          </div>
        </>
      )}
      {mode === 'lite' && (
        <div
          className={classNames({
            [`${classPrefix}-lite`]: true,
            [`${classPrefix}-lite-${indicatorType}`]: true,
            [`${classPrefix}-lite-loop`]: loop,
          })}
        >
          {renderIndicator()}
        </div>
      )}
    </div>
  )
}

Pagination.displayName = 'NutPagination'
