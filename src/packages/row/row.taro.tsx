import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { DataContext } from './context'
import { ComponentDefaults } from '@/utils/typings'
import { TaroRowProps } from '@/types'

const classPrefix = 'nut-row'

const defaultProps = {
  ...ComponentDefaults,
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0',
} as TaroRowProps
export const Row: FunctionComponent<
  Partial<TaroRowProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    className,
    style,
    children,
    type,
    justify,
    align,
    wrap,
    gutter,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const getClass = (prefix: string, type: string) => {
    const classType = type ? `nut-row-${prefix}-${type}` : ''
    if (prefix) return classType
    if (type) return `nut-row-${type}`
    return ''
  }
  const getClasses = () => {
    return classNames(
      classPrefix,
      getClass('', type),
      getClass('justify', justify),
      getClass('align', align),
      getClass('flex', wrap)
    )
  }
  const parentRow = {
    gutter,
  }

  return (
    <DataContext.Provider value={parentRow}>
      <View
        className={classNames(getClasses(), className)}
        style={style}
        onClick={(e) => {
          onClick?.(e as any, 'row')
        }}
      >
        {React.Children.map(children, (child, index) => {
          // @ts-ignore
          return child?.type?.displayName === 'NutCol'
            ? // @ts-ignore
              React.cloneElement(child, {
                isFirst: index === 0,
                isLast: index === React.Children.count(children) - 1,
              })
            : child
        })}
      </View>
    </DataContext.Provider>
  )
}

Row.displayName = 'NutRow'
