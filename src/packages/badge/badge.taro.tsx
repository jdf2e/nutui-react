import React, { CSSProperties, FunctionComponent } from 'react'

import Icon from '@/packages/icon'

export interface BadgeProps {
  value: any
  dot: boolean
  max: number
  top: string
  right: string
  zIndex: string
  color: string
  icons: any
}

export type BadgeType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
const defaultProps = {
  value: '',
  dot: false,
  max: 10000,
  top: '0',
  right: '0',
  zIndex: '0',
  color: '',
  icons: '',
} as BadgeProps
export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const { children, dot, top, right, zIndex, color, icons } = {
    ...defaultProps,
    ...props,
  }
  const content = () => {
    if (dot) return
    const { value } = props
    const { max } = props
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : value
    }
    return value
  }
  const getStyle = () => {
    const style: CSSProperties = {}
    style.top = `${top}px`
    style.right = `${right}px`
    style.zIndex = zIndex
    style.background = color
    return style
  }
  return (
    <div className="nut-badge">
      {icons != '' && (
        <div className="slot-icons">
          <Icon className="_icon" name={icons} color="#ffffff" size="12" />
        </div>
      )}
      <div>{children}</div>
      <div
        className={`${dot ? 'is-dot' : ''} nut-badge__content sup`}
        style={getStyle()}
      >
        {content()}
      </div>
    </div>
  )
}

Badge.defaultProps = defaultProps
Badge.displayName = 'NutBadge'
