import React, { CSSProperties, FunctionComponent } from 'react'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

import { GridItemProps } from '../griditem/griditem'
import GridContext from './grid.context'
export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps {
  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  className?: string
  iconSize?: string | number
  iconColor?: string
  style?: CSSProperties
  onClick: (item: GridItemProps, index: number) => void
}

const defaultProps = {
  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
  iconSize: 28,
  iconColor: '',
} as GridProps

export const Grid: FunctionComponent<
  Partial<GridProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    columnNum,
    border,
    gutter,
    center,
    square,
    reverse,
    direction,
    style,
    iconSize,
    iconColor,
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
    return `${className} ${prefixCls} ${
      border && !gutter ? `${b('border')}` : ''
    }`
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
            columnNum,
            center,
            border,
            gutter,
            square,
            reverse,
            direction,
            parentIconSize: iconSize,
            parentIconColor: iconColor,
          })
        })}
      </GridContext.Provider>
    </div>
  )
}

Grid.defaultProps = defaultProps
Grid.displayName = 'NutGrid'
