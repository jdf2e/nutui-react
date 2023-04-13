import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from './UserContext'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type EventType = 'row' | 'col'

export interface RowProps extends BasicComponent {
  type: string
  justify: string
  align: string
  wrap: string
  gutter: string | number
  onClick: (e: any, type: EventType) => void
}
const prefixCls = 'nut-row'

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
    const className = prefix ? classType : `nut-row-${type}`
    return className
  }
  const getClasses = () => {
    return `
    ${getClass('', type)}
    ${getClass('justify', justify)}
    ${getClass('align', align)}
    ${getClass('flex', wrap)}
    ${prefixCls}
   `
  }
  const parentRow = {
    gutter,
  }

  return (
    <DataContext.Provider value={parentRow}>
      {React.createElement(
        'div',
        {
          className: classNames(getClasses(), className),
          style,
          onClick: (e: any) => {
            onClick && onClick(e, 'row')
          },
        },
        children
      )}
    </DataContext.Provider>
  )
}

Row.defaultProps = defaultProps
Row.displayName = 'NutRow'
