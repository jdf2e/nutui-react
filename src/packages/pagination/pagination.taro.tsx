import React, { FunctionComponent, ReactNode, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { useConfig } from '@/packages/configprovider/index.taro'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import addColorForHarmony from '@/utils/add-color-for-harmony'

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
  const [currentPage, setCurrentPage] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 1,
    onChange,
  })

  // (total + pageSize) => pageCount 计算页面的数量
  const pageCount = useMemo(() => {
    const num = Math.ceil(total / pageSize)
    return Number.isNaN(num) ? 1 : Math.max(1, num)
  }, [total, pageSize])

  // (currentPage + itemSize + pageCount) => pages 显示的 item 列表
  const pages = useMemo(() => {
    const items = [] as Array<any>
    let startPage = 1
    let endPage = pageCount
    const partialShow = pageCount > itemSize
    if (partialShow) {
      // 选中的 page 放在中间位置
      startPage = Math.max(currentPage - Math.floor(itemSize / 2), 1)
      endPage = startPage + itemSize - 1
      if (endPage > pageCount) {
        endPage = pageCount
        startPage = endPage - itemSize + 1
      }
    }
    // 遍历生成数组
    for (let i = startPage; i <= endPage; i++) {
      items.push({ number: i, text: i })
    }
    // 判断是否有折叠
    if (partialShow && itemSize > 0 && ellipse) {
      if (startPage > 1) {
        items.unshift({ number: startPage - 1, text: '...' })
      }
      if (endPage < pageCount) {
        items.push({ number: endPage + 1, text: '...' })
      }
    }
    return items
  }, [currentPage, itemSize, pageCount])

  const handleSelectPage = (curPage: number) => {
    if (curPage > pageCount || curPage < 1) return
    setCurrentPage(curPage)
  }

  return (
    <View className={classNames(classPrefix, className)} style={style}>
      {(mode === 'multi' || mode === 'simple') && (
        <>
          <View
            className={classNames(
              `${classPrefix}-prev`,
              mode === 'multi' ? '' : `${classPrefix}-simple-border`,
              currentPage === 1 ? `${classPrefix}-prev-disabled` : ''
            )}
            onClick={(e) => handleSelectPage(currentPage - 1)}
          >
            {addColorForHarmony(
              prev || locale.pagination.prev,
              currentPage === 1 ? '#c2c4cc' : '#ff0f23'
            )}
          </View>
          {mode === 'multi' && (
            <View className={`${classPrefix}-contain`}>
              {pages.map((item: any, index: number) => {
                return (
                  <View
                    key={`${index}pagination`}
                    className={classNames(`${classPrefix}-item`, {
                      [`${classPrefix}-item-active`]:
                        item.number === currentPage,
                    })}
                    onClick={(e) => {
                      item.number !== currentPage &&
                        handleSelectPage(item.number)
                    }}
                  >
                    {itemRender ? itemRender(item, currentPage) : item.text}
                  </View>
                )
              })}
            </View>
          )}
          {mode === 'simple' && (
            <View className={`${classPrefix}-contain`}>
              <View className={`${classPrefix}-simple`}>
                {`${currentPage}/${pageCount}`}
              </View>
            </View>
          )}
          <View
            className={classNames(
              `${classPrefix}-next`,
              currentPage >= pageCount ? `${classPrefix}-next-disabled` : ''
            )}
            onClick={(e) => handleSelectPage(currentPage + 1)}
          >
            {addColorForHarmony(
              next || locale.pagination.next,
              currentPage >= pageCount ? '#c2c4cc' : '#ff0f23'
            )}
          </View>
        </>
      )}
      {mode === 'lite' && (
        <View className={`${classPrefix}-lite`}>
          <View className={`${classPrefix}-lite-active`}>{currentPage}</View>
          <View className={`${classPrefix}-lite-spliterator`}>/</View>
          <View className={`${classPrefix}-lite-default`}>{pageCount}</View>
        </View>
      )}
    </View>
  )
}

Pagination.displayName = 'NutPagination'
