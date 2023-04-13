import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'

export interface PaginationProps {
  defaultValue: number
  current: number
  mode: 'multi' | 'simple'
  prev: React.ReactNode
  next: React.ReactNode
  total: string | number
  pageSize: string | number
  itemSize: string | number
  ellipse: boolean
  itemRender: (page: any) => React.ReactNode
  onChange: (currPage: number) => void
  style?: React.CSSProperties
  className?: string
}

const defaultProps = {
  defaultValue: 1,
  mode: 'multi',
  prev: null,
  next: null,
  total: '0',
  pageSize: '10',
  itemSize: '5',
  ellipse: false,
  className: '',
  itemRender: (item: any) => {
    return item.text
  },
} as PaginationProps
export const Pagination: FunctionComponent<
  Partial<PaginationProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  const {
    current,
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
    ...rest
  } = props

  const [currentPage, setCurrent] = useState(1)
  const [pages, setPages] = useState<unknown[]>([])
  const [countRef, setCountRef] = useState(0)
  const classPrefix = 'nut-pagination'
  // 计算页面的数量
  const computedCountRef = () => {
    const num = Math.ceil(Number(total) / Number(pageSize))
    return Number.isNaN(num) ? 1 : Math.max(1, num)
  }

  // 生成pages数组，用来遍历
  const computedPages = (_currentPage?: number, _countRef?: number) => {
    if (mode === 'simple') return []
    const items = []
    const pageCount = _countRef || countRef // 总的页面数量
    const pageSize = Number(itemSize) // 展示的页面个数
    const _current = _currentPage || Number(currentPage) // 当前页
    let startPage = 1
    let endPage = pageCount
    const partialShow = pageCount > pageSize
    if (partialShow) {
      // 选中的page在展示的page中间
      startPage = Math.max(_current - Math.floor(pageSize / 2), 1)
      endPage = startPage + pageSize - 1
      if (endPage > pageCount) {
        endPage = pageCount
        startPage = endPage - pageSize + 1
      }
    }
    // 遍历生成数组
    for (let i = startPage; i <= endPage; i++) {
      const page = setPage(i, i, _current === i)
      items.push(page)
    }
    // 判断是否有折叠
    if (partialShow && pageSize > 0 && ellipse) {
      if (startPage > 1) {
        const prevPage = setPage(startPage - 1, '...')
        items.unshift(prevPage)
      }
      if (endPage < pageCount) {
        const nextPage = setPage(endPage + 1, '...')
        items.push(nextPage)
      }
    }
    return items
  }
  // 点击选择page
  const selectPage = (curPage: number, isSelect: boolean) => {
    if (curPage > countRef || curPage < 1) return
    // 是否传入current
    if (!('current' in props)) {
      setCurrent(Number(curPage))
      if (curPage !== currentPage) {
        setPages(computedPages(curPage))
      }
    }
    if (isSelect) onChange && onChange(curPage)
  }
  // set page 对象
  const setPage = (number: any, text: any, active?: any) => {
    return { number, text, active }
  }

  useEffect(() => {
    // 初始化 判断是否传入值 计算 当前页，总页数，生成子节点
    let currentValue = props.defaultValue || 1
    if ('current' in props) {
      currentValue = Number(props.current)
    }
    const pageCount = computedCountRef()
    setCurrent(currentValue)
    setCountRef(pageCount)
    setPages(computedPages(currentValue, pageCount))
  }, [])

  if ('current' in props) {
    const current = props.current ? Number(props.current) : 1
    if (current !== currentPage) {
      setCurrent(current)
      setPages(computedPages(Number(current)))
    }
  }
  return (
    <div className={classNames(classPrefix, className)} {...rest}>
      <div
        className={classNames(
          `${classPrefix}__prev`,
          mode === 'multi' ? '' : 'simple-border',
          currentPage === 1 ? 'disabled' : ''
        )}
        onClick={(e) => selectPage(Number(currentPage) - 1, true)}
      >
        {prev || locale.pagination.prev}
      </div>
      {mode === 'multi' ? (
        <div className={`${classPrefix}__contain`}>
          {pages.map((item: any, index: number) => {
            return (
              <div
                key={`${index}pagination`}
                className={classNames(
                  `${classPrefix}__item`,
                  item.active ? 'active' : ''
                )}
                onClick={(e) =>
                  !item.active ? selectPage(item.number, true) : ''
                }
              >
                {itemRender ? itemRender(item) : item.text}
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
      {mode === 'simple' ? (
        <div className={`${classPrefix}__contain`}>
          <div className={`${classPrefix}__simple`}>
            {currentPage}/{countRef}
          </div>
        </div>
      ) : (
        ''
      )}
      <div
        className={classNames(
          `${classPrefix}__next`,
          Number(currentPage) >= countRef ? 'disabled' : ''
        )}
        onClick={(e) => selectPage(Number(currentPage) + 1, true)}
      >
        {next || locale.pagination.next}
      </div>
    </div>
  )
}

Pagination.defaultProps = defaultProps
Pagination.displayName = 'NutPagination'
