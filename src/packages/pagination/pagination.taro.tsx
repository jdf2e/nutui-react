import React, { FunctionComponent, useEffect, useState } from 'react'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import bem from '@/utils/bem'

export interface PaginationProps {
  defaultValue: number
  modelValue: number
  mode: 'multi' | 'simple'
  prevText?: React.ReactNode
  nextText?: React.ReactNode
  pageCount: string | number
  totalItems: string | number
  itemsPerPage: string | number
  showPageSize: string | number
  forceEllipses: boolean
  pageNodeRender: (page: any) => React.ReactNode
  onChange: (currPage: number) => void
  updatecurrent: (currPage: number) => void
  style?: React.CSSProperties
  className?: string
}

const defaultProps = {
  defaultValue: 1,
  mode: 'multi',
  prevText: '',
  nextText: '',
  pageCount: '',
  totalItems: '0',
  itemsPerPage: '10',
  showPageSize: '5',
  forceEllipses: false,
  className: '',
  pageNodeRender: (item: any) => {
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
    modelValue,
    mode,
    prevText,
    nextText,
    pageCount,
    totalItems,
    itemsPerPage,
    showPageSize,
    onChange,
    updatecurrent,
    forceEllipses,
    pageNodeRender,
    defaultValue,
    className,
    ...rest
  } = props

  const [currentPage, setCurrent] = useState(1)
  const [pages, setPages] = useState<unknown[]>([])
  const [countRef, setCountRef] = useState(Number(pageCount))
  const paginationBem = bem('pagination')
  // 计算页面的数量
  const computedCountRef = () => {
    const num =
      Number(pageCount) || Math.ceil(Number(totalItems) / Number(itemsPerPage))
    return Number.isNaN(num) ? 1 : Math.max(1, num)
  }

  // 生成pages数组，用来遍历
  const computedPages = (_currentPage?: number, _countRef?: number) => {
    if (mode === 'simple') return []
    const items = []
    const pageCount = _countRef || countRef // 总的页面数量
    const pageSize = Number(showPageSize) // 展示的页面个数
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
    if (partialShow && pageSize > 0 && forceEllipses) {
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
    // 是否传入modelValue
    if (!('modelValue' in props)) {
      setCurrent(Number(curPage))
      if (curPage !== currentPage) {
        setPages(computedPages(curPage))
      }
    }
    if (curPage !== currentPage) {
      updatecurrent && updatecurrent(curPage)
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
    if ('modelValue' in props) {
      currentValue = Number(props.modelValue)
    }
    const pageCount = computedCountRef()
    setCountRef(pageCount)
    setPages(computedPages(currentValue, pageCount))
  }, [])

  if ('modelValue' in props) {
    const current = props.modelValue ? Number(props.modelValue) : 1
    if (current !== currentPage) {
      setCurrent(current)
      setPages(computedPages(Number(current)))
    }
  }
  return (
    <div className={`${paginationBem('')} ${className}`} {...rest}>
      <div
        className={`${paginationBem('prev')}  ${
          mode === 'multi' ? '' : 'simple-border'
        } ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={(e) => selectPage(Number(currentPage) - 1, true)}
      >
        {prevText || locale.pagination.prev}
      </div>
      {mode === 'multi' ? (
        <div className={`${paginationBem('contain')}`}>
          {pages.map((item: any, index: number) => {
            return (
              <div
                key={`${index}pagination`}
                className={`${paginationBem('item')} ${
                  item.active ? 'active' : ''
                }`}
                onClick={(e) =>
                  !item.active ? selectPage(item.number, true) : ''
                }
              >
                {pageNodeRender ? pageNodeRender(item) : item.text}
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
      {mode === 'simple' ? (
        <div className={`${paginationBem('contain')}`}>
          <div className={`${paginationBem('simple')}`}>
            {currentPage}/{countRef}
          </div>
        </div>
      ) : (
        ''
      )}
      <div
        className={`${paginationBem('next')}  ${
          Number(currentPage) >= countRef ? 'disabled' : ''
        }`}
        onClick={(e) => selectPage(Number(currentPage) + 1, true)}
      >
        {nextText || locale.pagination.next}
      </div>
    </div>
  )
}

Pagination.defaultProps = defaultProps
Pagination.displayName = 'NutPagination'
