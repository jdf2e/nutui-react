import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'
import GridContext from '../grid/grid.context'

import { BasicComponent } from '@/utils/typings'

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps extends BasicComponent {
  text: string | ReactNode
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
    style,
    columns,
    index,
    gutter,
    square,
    text,
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
    const styles: CSSProperties = {
      flexBasis: `${100 / +columns}%`,
      ...style,
    }

    if (square) {
      styles.paddingTop = `${100 / +columns}%`
    } else if (gutter) {
      styles.paddingRight = pxCheck(gutter)
      if (index >= Number(columns)) {
        styles.marginTop = pxCheck(gutter)
      }
    }

    return styles
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
        {children && <>{children}</>}
        {text && <div className="nut-grid-item__text">{text}</div>}
      </div>
    </div>
  )
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'NutGridItem'
