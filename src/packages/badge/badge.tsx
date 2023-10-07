import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface BadgeProps extends BasicComponent {
  value: ReactNode
  dot: boolean
  max: number
  top: string | number
  right: string | number
  color: string
}
const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: '0',
  right: '5',
  color: '',
} as BadgeProps
export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const { className, style, value, max, children, dot, top, right, color } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-badge'
  const classes = classNames(classPrefix, className)
  const contentClasses = classNames(
    { [`${classPrefix}__dot`]: dot },
    `${classPrefix}__content`,
    `${classPrefix}__sup`
  )
  function content() {
    if (dot || typeof value === 'object') return null
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : value
    }
    return value
  }
  const getStyle = () => {
    const style: CSSProperties = {}
    style.top = `${Number(top) || parseFloat(String(top)) || 0}px`
    style.right = `${Number(right) || parseFloat(String(right)) || 0}px`
    style.background = color
    return style
  }
  return (
    <div className={classes} style={style}>
      {typeof value === 'object' && value && (
        <div className={`${classPrefix}__icon`}>{value}</div>
      )}
      <div>{children}</div>
      <div className={contentClasses} style={getStyle()}>
        {content()}
      </div>
    </div>
  )
}

Badge.defaultProps = defaultProps
Badge.displayName = 'NutBadge'
