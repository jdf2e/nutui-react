import React, { CSSProperties, FunctionComponent } from 'react'
import './griditem.scss'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps {
  text: string
  icon: string
  iconSize?: string | number
  iconColor?: string
  index: number

  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: string
}
const defaultProps = {
  text: '',
  icon: '',
  iconSize: '',
  iconColor: '',

  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
} as GridItemProps
export const GridItem: FunctionComponent<
  Partial<GridItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    columnNum,
    index,
    gutter,
    square,
    text,
    icon,
    iconColor,
    iconSize,
    border,
    center,
    reverse,
    direction,
  } = { ...defaultProps, ...props }
  const b = bem('grid-item')
  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const rootStyle = () => {
    console.log(11, columnNum)
    const style: CSSProperties = {
      flexBasis: `${100 / +columnNum}%`,
    }

    if (square) {
      style.paddingTop = `${100 / +columnNum}%`
    } else if (gutter) {
      style.paddingRight = pxCheck(gutter)
      if (index >= columnNum) {
        style.marginTop = pxCheck(gutter)
      }
    }

    return style
  }

  const contentClass = () => {
    const prefixCls = b('content')
    return `${b('content')} ${border && b('content--border')} ${
      border && gutter && b('content--surround')
    }  ${center && b('content--center')} ${square && b('content--square')} ${
      reverse && b('content--reverse')
    } ${!!direction && b(`content--${direction}`)}
      `
  }

  return (
    <div className={b()} style={rootStyle()}>
      <div className={contentClass()}>
        <Icon name={icon} size={iconSize} color={iconColor} />

        <div className="nut-grid-item__text">{text}</div>
      </div>
    </div>
  )
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'NutGridItem'
