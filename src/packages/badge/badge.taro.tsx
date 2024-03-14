import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'

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
  top: '4',
  right: '8',
  color: '',
} as BadgeProps
export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const rtl = useRtl()
  const { className, style, value, max, children, dot, top, right, color } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-badge'
  const classes = classNames(classPrefix, className)

  function content() {
    if (dot || typeof value === 'object' || value === 0) return null
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : `${value}`
    }
    return value
  }

  function isIcon() {
    if (typeof value === 'object' && value) return value
  }

  function isNumber() {
    if (typeof value === 'number' && value) return value
  }

  function isString() {
    if (typeof value === 'string' && value) return value
  }

  const contentClasses = classNames(
    { [`${classPrefix}-dot`]: dot },
    `${classPrefix}-content`,
    { [`${classPrefix}-sup`]: isNumber() || isString() || dot },
    {
      [`${classPrefix}-one`]:
        typeof content() === 'string' && `${content()}`?.length === 1,
    }
  )
  const getStyle = () => {
    const style: CSSProperties = {}
    style.top = `${Number(top) || parseFloat(String(top)) || 0}px`
    const dir = rtl ? 'left' : 'right'
    style[dir] = `${Number(right) || parseFloat(String(right)) || 0}px`
    style.background = color
    return style
  }
  return (
    <div className={classes} style={style}>
      {isIcon() && <div className={`${classPrefix}-icon`}>{value}</div>}
      {children}
      {!isIcon() && (
        <div className={contentClasses} style={getStyle()}>
          {content()}
        </div>
      )}
    </div>
  )
}

Badge.defaultProps = defaultProps
Badge.displayName = 'NutBadge'
