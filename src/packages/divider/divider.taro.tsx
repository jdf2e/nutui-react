import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'

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
export const Divider: FunctionComponent<
  Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, contentPosition, style, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const dividerBem = bem('divider')
  const classes =
    direction === 'horizontal'
      ? classNames({
          [dividerBem()]: true,
          [dividerBem('center')]: children,
          [dividerBem('left')]: contentPosition === 'left',
          [dividerBem('right')]: contentPosition === 'right',
          [dividerBem('hairline')]: true,
        })
      : classNames({
          [dividerBem()]: true,
          [dividerBem('vertical')]: direction === 'vertical',
        })
  return (
    <div className={`${classes} ${className || ''}`} style={style} {...rest}>
      {children}
    </div>
  )
}

Divider.defaultProps = defaultProps
Divider.displayName = 'NutDivider'
