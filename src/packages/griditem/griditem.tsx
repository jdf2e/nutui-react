import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import GridContext from '../grid/context'
import { BasicComponent } from '@/utils/typings'
import { pxCheck } from '@/utils/px-check'

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps extends BasicComponent {
  text: string | ReactNode
  index: number
  columns: string | number
  gap: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
}

const defaultProps = {
  text: '',
  columns: 4,
  gap: 0,
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
    gap,
    square,
    text,
    center,
    reverse,
    direction,
    className,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-grid-item'
  const classes = classNames(classPrefix, className)
  const context = useContext(GridContext)

  const rootStyle = () => {
    const styles: CSSProperties = {
      flexBasis: `${100 / +columns}%`,
      ...style,
    }

    if (square) {
      styles.paddingTop = `${100 / +columns}%`
    } else if (gap) {
      styles.paddingRight = pxCheck(gap)
      if (index >= Number(columns)) {
        styles.marginTop = pxCheck(gap)
      }
    }

    return styles
  }

  const contentClass = () => {
    return classNames(`${classPrefix}-content`, {
      [`${classPrefix}-content-border`]: true,
      [`${classPrefix}-content-surround`]: gap,
      [`${classPrefix}-content-center`]: center,
      [`${classPrefix}-content-square`]: square,
      [`${classPrefix}-content-reverse`]: reverse && direction !== 'horizontal',
      [`${classPrefix}-content-${direction}`]: !!direction,
      [`${classPrefix}-content-horizontal-reverse`]:
        reverse && direction === 'horizontal',
    })
  }

  const textClass = () => {
    return classNames(`${classPrefix}-text`, {
      [`${classPrefix}-text-reverse`]: reverse && direction !== 'horizontal',
      [`${classPrefix}-text-horizontal`]: direction === 'horizontal',
      [`${classPrefix}-text-horizontal-reverse`]:
        reverse && direction === 'horizontal',
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
          gap,
          center,
          square,
          reverse,
          direction,
        },
        index
      )
  }

  return (
    <div
      className={classes}
      style={rootStyle()}
      {...rest}
      onClick={handleClick}
    >
      <div className={contentClass()}>
        {children && <>{children}</>}
        {text && <div className={textClass()}>{text}</div>}
      </div>
    </div>
  )
}

GridItem.displayName = 'NutGridItem'
