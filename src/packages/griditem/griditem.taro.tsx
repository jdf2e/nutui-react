import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import bem from '@/utils/bem'

import { BasicComponent } from '@/utils/typings'
import GridContext from '../grid/grid.taro.context'

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps extends BasicComponent {
  text: string | ReactNode
  icon: ReactNode
  index: number
  columns: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
}

const defaultProps = {
  text: '',
  icon: null,
  columns: 4,
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
    columns,
    index,
    gutter,
    square,
    text,
    icon,
    border,
    center,
    reverse,
    direction,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('grid-item')
  const context = useContext(GridContext)
  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const rootStyle = () => {
    const style: CSSProperties = {
      flexBasis: `${100 / +columns}%`,
    }

    if (square) {
      style.paddingTop = `${100 / +columns}%`
    } else if (gutter) {
      style.paddingRight = pxCheck(gutter)
      if (index >= columns) {
        style.marginTop = pxCheck(gutter)
      }
    }

    return style
  }

  const contentClass = () => {
    return classNames(b('content'), {
      [b('content--border')]: border,
      [b('content--surround')]: border && gutter,
      [b('content--center')]: center,
      [b('content--square')]: square,
      [b('content--reverse')]: reverse,
      [b(`content--${direction}`)]: !!direction,
    })
  }

  const handleClick = (e: any) => {
    onClick && onClick(e)
    context.onClick &&
      context.onClick(
        {
          text,
          icon,
          index,
          columns,
          border,
          gutter,
          center,
          square,
          reverse,
          direction,
        },
        index
      )
  }

  return (
    <div className={b()} style={rootStyle()} {...rest} onClick={handleClick}>
      <div className={contentClass()}>
        {icon && <>{icon}</>}
        {text && <div className="nut-grid-item__text">{text}</div>}
        {children && <>{children}</>}
      </div>
    </div>
  )
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'NutGridItem'
