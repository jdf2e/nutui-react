import React, { CSSProperties, FunctionComponent } from 'react'
import './grid.scss'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps {
  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  clickable: boolean
  style?: CSSProperties
}

const defaultProps = {
  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'horizontal',
  clickable: false,
} as GridProps

export const Grid: FunctionComponent<
  Partial<GridProps> & React.HTMLAttributes<HTMLDivElement>
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
    clickable,
    style,
    ...rest
  } = { ...defaultProps, ...props }
  const childrenDom = React.Children.toArray(children)

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const b = bem('grid')

  const rootClass = () => {
    const prefixCls = b()
    return `${prefixCls} ${border && !gutter ? `${b('border')}` : ''}`
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
        })
      })}
    </div>
  )
}

Grid.defaultProps = defaultProps
Grid.displayName = 'NutGrid'
