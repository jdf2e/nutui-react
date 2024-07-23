import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import GridContext from './context'
import { GridItem } from '../griditem/griditem'
import { GridItemProps } from '../griditem/types'
import { pxCheck } from '@/utils/px-check'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps extends BasicComponent {
  columns: string | number
  gap: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  onClick: (item: GridItemProps, index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  columns: 4,
  gap: 0,
  center: true,
  direction: 'vertical',
} as GridProps

export const Grid: FunctionComponent<
  Partial<GridProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> & {
  Item: typeof GridItem
} = (props) => {
  const classPrefix = 'nut-grid'
  const {
    children,
    columns,
    gap,
    center,
    square,
    reverse,
    direction,
    style,
    className,
    onClick,
    ...rest
  } = { ...defaultProps, ...props }
  const childrenDom = React.Children.toArray(children)

  const rootClass = () => {
    return classNames(
      classPrefix,
      {
        [`${classPrefix}-border`]: !gap,
      },
      className
    )
  }

  const rootStyle = () => {
    const styleSelf: CSSProperties = style || {}
    if (gap) {
      styleSelf.paddingLeft = pxCheck(gap)
    }
    return styleSelf
  }

  return (
    <div className={rootClass()} style={rootStyle()} {...rest}>
      <GridContext.Provider value={{ onClick }}>
        {childrenDom.map((item: any, idex: number) => {
          return React.cloneElement(item, {
            index: idex,
            columns,
            center,
            gap,
            square,
            reverse,
            direction,
          })
        })}
      </GridContext.Provider>
    </div>
  )
}

Grid.displayName = 'NutGrid'
Grid.Item = GridItem
