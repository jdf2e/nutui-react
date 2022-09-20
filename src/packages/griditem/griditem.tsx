import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'

import { IComponent, ComponentDefaults } from '@/utils/typings'

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps extends IComponent {
  text: string | ReactNode
  icon: string | ReactNode
  iconSize?: string | number
  iconColor?: string
  parentIconSize?: string | number
  parentIconColor?: string
  index: number

  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
}

const defaultProps = {
  ...ComponentDefaults,
  text: '',
  icon: '',
  iconSize: '',
  iconColor: '',
  parentIconSize: '',
  parentIconColor: '',

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
    parentIconSize,
    parentIconColor,
    border,
    center,
    reverse,
    direction,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('grid-item')

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const rootStyle = () => {
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
    return `${b('content')} ${border && b('content--border')} ${
      border && gutter && b('content--surround')
    }  ${center && b('content--center')} ${square && b('content--square')} ${
      reverse && b('content--reverse')
    } ${!!direction && b(`content--${direction}`)}
      `
  }

  const isIconName = () => {
    return typeof icon === 'string'
  }

  return (
    <div className={b()} style={rootStyle()} {...rest}>
      <div className={contentClass()}>
        {icon && isIconName() ? (
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            name={icon as string}
            size={iconSize || parentIconSize}
            color={iconColor || parentIconColor}
          />
        ) : (
          <>{icon}</>
        )}
        {text && <div className="nut-grid-item__text">{text}</div>}
        {children && <>{children}</>}
      </div>
    </div>
  )
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'NutGridItem'
