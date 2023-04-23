import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

export type ContentPositionType = 'left' | 'center' | 'right'
export type DirectionType = 'horizontal' | 'vertical'
export interface DividerProps {
  contentPosition: ContentPositionType
  style?: React.CSSProperties
  className?: string
  direction?: DirectionType
}
const defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
} as DividerProps

const classPrefix = `nut-divider`
export const Divider: FunctionComponent<
  Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, contentPosition, style, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const classes =
    direction === 'horizontal'
      ? classNames({
          [`${classPrefix}`]: true,
          [`${classPrefix}__center`]: children,
          [`${classPrefix}__left`]: contentPosition === 'left',
          [`${classPrefix}__right`]: contentPosition === 'right',
          [`${classPrefix}__hairline`]: true,
        })
      : classNames({
          [`${classPrefix}`]: true,
          [`${classPrefix}__vertical`]: direction === 'vertical',
        })
  return (
    <div className={`${classes} ${className || ''}`} style={style} {...rest}>
      {children}
    </div>
  )
}

Divider.defaultProps = defaultProps
Divider.displayName = 'NutDivider'
