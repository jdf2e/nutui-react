import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { GridItem, GridItemProps } from '../griditem/griditem'
import GridContext from './grid.context'
import { pxCheck } from '@/utils/px-check'

export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps {
  columns: string | number
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

  const classPrefix = 'nut-grid'

  const rootClass = () => {
    return classNames(className, classPrefix, {
      [`${classPrefix}__border`]: !gutter,
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
