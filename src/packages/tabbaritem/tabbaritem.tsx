import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import Badge from '@/packages/badge/index'
import TabbarContext from '@/packages/tabbar/context'
import { WebTabbarItemProps } from '@/types'

// 是否支持双击事件？
const defaultProps = {
  ...ComponentDefaults,
  title: '',
  icon: null,
  activeIcon: null,
  value: '',
  dot: false,
  max: 99,
  top: '0',
  right: '0',
} as WebTabbarItemProps

export const TabbarItem: FunctionComponent<Partial<WebTabbarItemProps>> = (
  props
) => {
  const ctx = useContext(TabbarContext)
  const {
    className,
    style,
    title,
    icon,
    activeIcon,
    value,
    dot,
    max,
    top,
    right,
    // @ts-ignore
    index,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const active = index === ctx?.selectIndex
  const classPrefix = 'nut-tabbar-item'

  // 默认有 icon 和 text，icon+badge
  // 考虑 只有icon时，icon large，icon+badge
  // 考虑 只有text时，text large，text+badge

  // 如果有 activeIcon，则icon为默认态，activeIcon为选中态；
  // 如果有 activeIcon，但没有 icon，则异常
  // 如果没有 activeIcon，则icon为默认态，同时也为选中态，遵循默认选中规则
  const tabbarItemClass = classNames(
    classPrefix,
    {
      [`${classPrefix}-active`]: active,
      [`${classPrefix}-large`]: !icon || !title,
    },
    className
  )

  const badgeProps = {
    value,
    dot,
    max,
    top,
    right,
    color: ctx?.activeColor,
  }

  const renderTitleText = () => {
    return title && <div className={`${classPrefix}-text`}>{title}</div>
  }

  const renderTitle = () => {
    return <Badge {...badgeProps}>{renderTitleText()}</Badge>
  }

  const renderIconAndTitle = () => {
    return (
      <>
        <Badge {...badgeProps}>{icon}</Badge>
        {renderTitleText()}
      </>
    )
  }

  const renderIconAndActiveIcon = () => {
    return (
      <>
        <Badge {...badgeProps}>{active ? activeIcon : icon}</Badge>
        {active && renderTitleText()}
      </>
    )
  }

  return (
    <div
      className={tabbarItemClass}
      style={{
        color: active ? ctx?.activeColor : ctx?.inactiveColor,
        ...style,
      }}
      onClick={() => ctx?.handleClick(index)}
      {...rest}
    >
      {icon && !activeIcon && renderIconAndTitle()}
      {!icon && renderTitle()}
      {icon && activeIcon && renderIconAndActiveIcon()}
    </div>
  )
}
