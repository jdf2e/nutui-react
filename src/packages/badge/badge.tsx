import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider'
import { BadgeProps } from './types'

const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: 0,
  right: 0,
  fill: 'solid',
  size: 'large',
} as BadgeProps
export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const rtl = useRtl()
  const {
    className,
    style,
    value,
    max,
    children,
    dot,
    top,
    right,
    fill,
    size,
  } = {
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

  const contentClasses = classNames({
    [`${classPrefix}-sup`]: isNumber() || isString() || dot,
    [`${classPrefix}-number`]: isNumber(),
    [`${classPrefix}-one`]:
      typeof content() === 'string' && `${content()}`?.length === 1,
    [`${classPrefix}-dot`]: dot,
    [`${classPrefix}-dot-${size}`]: dot,
    [`${classPrefix}-${fill}`]: fill === 'outline',
    [`${classPrefix}-content`]: children,
  })
  const getPositionStyle = () => {
    const style: CSSProperties = {}
    style.top = `${Number(top) || 0}px`
    const dir = rtl ? 'left' : 'right'
    style[dir] = `${Number(right) || parseFloat(String(right)) || 0}px`
    return style
  }

  return (
    <div className={classes} style={style}>
      {isIcon() && (
        <div
          className={classNames(`${classPrefix}-content`, {
            [`${classPrefix}-icon`]: true,
            [`${classPrefix}-icon-rtl`]: rtl,
          })}
          style={getPositionStyle()}
        >
          {value}
        </div>
      )}
      {children}
      {!isIcon() && (
        <div className={contentClasses} style={getPositionStyle()}>
          {content()}
        </div>
      )}
    </div>
  )
}

Badge.displayName = 'NutBadge'
