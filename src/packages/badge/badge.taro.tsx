import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'

import Icon from '@/packages/icon/index.taro'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface BadgeProps extends BasicComponent {
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

const b = bem('badge')

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
    className,
    style,
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
    style.background = color
    return style
  }

  return (
    <div className={classNames(b(), className)} style={style}>
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
        className={classNames({ 'is-dot': dot }, b('content'), 'sup')}
        style={getStyle()}
      >
        {content()}
      </div>
    </div>
  )
}

Badge.defaultProps = defaultProps
Badge.displayName = 'NutBadge'
