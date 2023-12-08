import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type ContentPositionType = 'left' | 'center' | 'right'
export type DirectionType = 'horizontal' | 'vertical'
export interface DividerProps extends BasicComponent {
  contentPosition: ContentPositionType
  direction?: DirectionType
}
const defaultProps = {
  ...ComponentDefaults,
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
          [`${classPrefix}-center`]: children,
          [`${classPrefix}-left`]: contentPosition === 'left',
          [`${classPrefix}-right`]: contentPosition === 'right',
          [`${classPrefix}-hairline`]: true,
        })
      : classNames({
          [`${classPrefix}`]: true,
          [`${classPrefix}-vertical`]: direction === 'vertical',
        })
  return (
    <div className={`${classes} ${className || ''}`} style={style} {...rest}>
      {children}
    </div>
  )
}

Divider.defaultProps = defaultProps
Divider.displayName = 'NutDivider'
