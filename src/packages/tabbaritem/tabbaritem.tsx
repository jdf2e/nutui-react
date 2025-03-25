import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import Badge from '@/packages/badge/index'
import TabbarContext from '@/packages/tabbar/context'
import { WebTabbarItemProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  icon: null,
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
    value,
    dot,
    max,
    top,
    right,
    // @ts-ignore
    index,
    onDoubleClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const active = index === ctx?.selectIndex
  const classPrefix = 'nut-tabbar-item'
  const tabbarItemClass = classNames(
    classPrefix,
    {
      [`${classPrefix}-active`]: active,
      [`${classPrefix}-large`]: !icon || !title,
    },
    className
  )

  const badgeValue =
    value && typeof value === 'function' ? value(active) : value

  const badgeProps = {
    value: badgeValue,
    dot,
    max,
    top,
    right,
    color: ctx?.activeColor,
  }

  const renderTitleText = () => {
    return (
      title && (
        <div className={`${classPrefix}-text`}>
          {typeof title === 'function' ? title(active) : title}
        </div>
      )
    )
  }

  const renderTitle = () => {
    return <Badge {...badgeProps}>{renderTitleText()}</Badge>
  }

  const renderIconAndTitle = () => {
    return (
      <>
        <Badge {...badgeProps}>
          {icon && typeof icon === 'function' ? icon(active) : icon}
        </Badge>
        {renderTitleText()}
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
      onClick={() => (active ? onDoubleClick?.() : ctx?.handleClick(index))}
      {...rest}
    >
      {icon && renderIconAndTitle()}
      {!icon && renderTitle()}
    </div>
  )
}
