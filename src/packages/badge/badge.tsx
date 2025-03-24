import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider'
import { WebBadgeProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: 0,
  right: 0,
  fill: 'solid',
  size: 'large',
  disabled: false,
} as WebBadgeProps

export const Badge: FunctionComponent<Partial<WebBadgeProps>> = (props) => {
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
    disabled,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-badge'
  const classes = classNames(classPrefix, className)

  const getContent = () => {
    if (dot || value === 0) return null
    if (typeof value === 'number') {
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
      typeof getContent() === 'string' && `${getContent()}`?.length === 1,
    [`${classPrefix}-dot`]: dot,
    [`${classPrefix}-dot-${size}`]: dot,
    [`${classPrefix}-${fill}`]: fill === 'outline',
    [`${classPrefix}-content`]: children,
    [`${classPrefix}-disabled`]: disabled,
  })

  const getPositionStyle = (): CSSProperties => ({
    top: `${Number(top) || 0}px`,
    [rtl ? 'left' : 'right']: `${Number(right) || 0}px`,
  })

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
      {!isIcon() && (getContent() || dot) && (
        <div className={contentClasses} style={getPositionStyle()}>
          {getContent()}
        </div>
      )}
    </div>
  )
}

Badge.displayName = 'NutBadge'
