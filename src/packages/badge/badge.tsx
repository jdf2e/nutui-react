import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'

import Icon from '@/packages/icon'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface BadgeProps extends IComponent {
  value: any
  dot: boolean
  max: number
  top: string
  right: string
  zIndex: string
  color: string
  icons: any
  children?: ReactNode
}

export type BadgeType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

const defaultProps = {
  ...ComponentDefaults,
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
  const {
    children,
    dot,
    top,
    right,
    zIndex,
    color,
    icons,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  function content() {
    if (dot) return undefined
    const { value } = props
    const { max } = props
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : value
    }
    return value
  }
  const getStyle = () => {
    const style: CSSProperties = {}
    style.top = `${Number(top) || parseFloat(top) || 0}px`
    style.right = `${Number(right) || parseFloat(right) || 0}px`
    style.zIndex = zIndex
    style.backgroundColor = color
    return style
  }
  return (
    <div className="nut-badge">
      {icons !== '' && (
        <div className="slot-icons">
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            className="_icon"
            name={icons}
            color="#ffffff"
            size="12"
          />
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
