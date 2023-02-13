import React, { FunctionComponent, useEffect } from 'react'

import bem from '@/utils/bem'
import Icon from '@/packages/icon'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TabbarItemProps extends BasicComponent {
  dot: boolean
  size: string | number
  iconSize: string | number
  className: string
  tabTitle: string
  icon: string
  href: string
  num: string | number
  active: boolean
  activeColor: string
  unactiveColor: string
  index: number
  handleClick: (idx: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  dot: false,
  size: '',
  iconSize: '',
  className: '',
  tabTitle: '',
  icon: '',
  href: '',
  num: '',
  active: false,
  activeColor: '',
  unactiveColor: '',
  index: 0,
  handleClick: (idx) => {},
} as TabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (
  props
) => {
  const {
    dot,
    size,
    iconSize,
    className,
    style,
    tabTitle,
    icon,
    href,
    num,
    active,
    activeColor,
    unactiveColor,
    index,
    handleClick,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('tabbar-item')
  const bIcon = bem('tabbar-item__icon-box')

  useEffect(() => {
    if (active && href) {
      window.location.href = href
    }
  }, [active, href])

  return (
    <div
      className={`${b({ active })} ${className}`}
      style={{
        ...style,
        color: active ? activeColor : unactiveColor,
      }}
      onClick={() => {
        handleClick(index)
      }}
    >
      <div className={`${bIcon()}`}>
        {!dot ? (
          <>
            {num && num <= 99 && (
              <div className={`${bIcon('tips', [bIcon('num')])}`}>{num}</div>
            )}
            {num && num >= 100 && (
              <div className={`${bIcon('tips', [bIcon('nums')])}`}>99+</div>
            )}
          </>
        ) : (
          <div className={`${bIcon('tips', [bIcon('dot')])}`} />
        )}

        {icon && (
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            size={iconSize || size}
            name={icon}
          />
        )}
      </div>
      {tabTitle && (
        <div
          className={bIcon({ 'nav-word': true }, [
            bIcon({ 'big-word': !icon }),
          ])}
        >
          {tabTitle}
        </div>
      )}
    </div>
  )
}
