import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

import { GridItem, GridItemProps } from '../griditem/griditem'
import GridContext from './grid.context'

export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps {
  columns: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  className?: string
  style?: CSSProperties
  onClick: (item: GridItemProps, index: number) => void
}

const defaultProps = {
  columns: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
} as GridProps

export const Grid: FunctionComponent<
  Partial<GridProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> & {
  Item: typeof GridItem
} = (props) => {
  const { locale } = useConfig()
  const {
    children,
    columns,
    border,
    gutter,
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

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const b = bem('grid')

  const rootClass = () => {
    const prefixCls = b()
    return classNames(className, prefixCls, {
      [b('border')]: border && !gutter,
    })
  }

  const rootStyle = () => {
    let styleSelf: CSSProperties = {}
    if (style) {
      styleSelf = style
    }
    if (gutter) {
      styleSelf.paddingLeft = pxCheck(gutter)
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
            border,
            gutter,
            square,
            reverse,
            direction,
          })
        })}
      </GridContext.Provider>
    </div>
  )
}

Grid.defaultProps = defaultProps
Grid.displayName = 'NutGrid'
Grid.Item = GridItem
