import React, { FunctionComponent } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { DataContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type RowEventType = 'row' | 'col'

export interface RowProps extends BasicComponent {
  type: string
  justify: string
  align: string
  wrap: string
  gutter: string | number
  onClick: (e: MouseEvent<HTMLDivElement>, type: RowEventType) => void
}

const classPrefix = 'nut-row'

const defaultProps = {
  ...ComponentDefaults,
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0',
} as RowProps
export const Row: FunctionComponent<
  Partial<RowProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
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
        {children}
      </View>
    </DataContext.Provider>
  )
}

Row.defaultProps = defaultProps
Row.displayName = 'NutRow'
