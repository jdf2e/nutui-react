import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { useConfig } from '@/packages/configprovider/index.taro'
import { usePropsValue } from '@/hooks/use-props-value'
import { ComponentDefaults } from '@/utils/typings'
import { addColorForHarmony } from '@/utils/taro/add-color-for-harmony'
import { PaginationNode, usePagination } from '@/hooks/use-pagination'
import { TaroPaginationProps } from '@/types'

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
} as TaroPaginationProps
export const Pagination: FunctionComponent<
  Partial<TaroPaginationProps> &
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

  return (
    <View className={classNames(classPrefix, className)} style={style}>
      {(mode === 'multi' || mode === 'simple') && (
        <>
          <View
            className={classNames({
              [`${classPrefix}-prev`]: true,
              [`${classPrefix}-simple-border`]: mode !== 'multi',
              [`${classPrefix}-prev-disabled`]: current === 1,
            })}
            onClick={() => prevPage()}
          >
            {addColorForHarmony(
              prev || locale.pagination.prev,
              current === 1 ? '#c2c4cc' : '#ff0f23'
            )}
          </View>
          {mode === 'multi' && (
            <View className={`${classPrefix}-contain`}>
              {pages.map((item: any, index: number) => {
                return (
                  <View
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
                  </View>
                )
              })}
            </View>
          )}
          {mode === 'simple' && (
            <View className={`${classPrefix}-contain`}>
              <View className={`${classPrefix}-simple`}>
                {`${current}/${pageCount}`}
              </View>
            </View>
          )}
          <View
            className={classNames({
              [`${classPrefix}-next`]: true,
              [`${classPrefix}-next-disabled`]: current >= pageCount,
            })}
            onClick={() => nextPage()}
          >
            {addColorForHarmony(
              next || locale.pagination.next,
              current >= pageCount ? '#c2c4cc' : '#ff0f23'
            )}
          </View>
        </>
      )}
      {mode === 'lite' && (
        <View className={`${classPrefix}-lite`}>
          <Text className={`${classPrefix}-lite-active`}>{current}</Text>
          <Text className={`${classPrefix}-lite-spliterator`}>/</Text>
          <Text className={`${classPrefix}-lite-default`}>{pageCount}</Text>
        </View>
      )}
    </View>
  )
}

Pagination.displayName = 'NutPagination'
