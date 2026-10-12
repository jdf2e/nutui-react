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

  const contentClasses = classNames(classPrefix, `${classPrefix}-visual`, {
    [`${classPrefix}-number`]: isNumber(),
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

  const hasBadge = !!(getContent() || dot)
  const standalonePositionStyle: CSSProperties = {
    ...(Number(top) ? { top: `${Number(top)}px` } : {}),
    ...(Number(right)
      ? { [rtl ? 'left' : 'right']: `${Number(right)}px` }
      : {}),
  }

  if (!children && hasBadge && !isIcon()) {
    return (
      <div
        className={classNames(contentClasses, className)}
        style={{ ...style, ...standalonePositionStyle }}
      >
        {!dot && <div className={`${classPrefix}-sup`}>{getContent()}</div>}
      </div>
    )
  }

  return (
    <div className={classNames(classes, `${classPrefix}-wrap`)} style={style}>
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
      {!isIcon() && hasBadge && (
        <div className={contentClasses} style={getPositionStyle()}>
          {!dot && <div className={`${classPrefix}-sup`}>{getContent()}</div>}
        </div>
      )}
    </div>
  )
}

Badge.displayName = 'NutBadge'
