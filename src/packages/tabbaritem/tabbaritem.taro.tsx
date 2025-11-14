import React, { FunctionComponent, useContext, ReactNode } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import Badge from '@/packages/badge/index.taro'
import TabbarContext from '@/packages/tabbar/context'
import { TaroTabbarItemProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  icon: null,
  value: '',
  dot: false,
  max: 99,
  top: '0',
  right: '0',
  direction: 'vertical',
} as TaroTabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TaroTabbarItemProps>> = (
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
    direction,
    onActiveClick,
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

  const renderNodeWithActive = (
    node: ReactNode | ((active: boolean) => ReactNode)
  ) => {
    return node && typeof node === 'function' ? node(active) : node
  }
  const badgeProps = {
    value: renderNodeWithActive(value),
    dot,
    max,
    top,
    right,
    color: ctx?.activeColor,
  }

  const renderTitleText = () => {
    return (
      title && (
        <View
          className={`${classPrefix}-text`}
          style={{
            color: active ? ctx?.activeColor : ctx?.inactiveColor,
          }}
        >
          {renderNodeWithActive(title)}
        </View>
      )
    )
  }

  const renderTitle = () => {
    return (
      <Badge size="normal" {...badgeProps}>
        {renderTitleText()}
      </Badge>
    )
  }

  const renderIcon = () => {
    const distIcon = renderNodeWithActive(icon)
    // 鸿蒙差异处理，需要手动给icon一个color
    return React.isValidElement(distIcon)
      ? React.cloneElement(distIcon, {
          ...distIcon.props,
          color: active ? ctx?.activeColor : ctx?.inactiveColor,
        })
      : null
  }

  const renderIconAndTitle = () => {
    return (
      <>
        <Badge size="normal" {...badgeProps} top={3}>
          {renderIcon()}
        </Badge>
        {renderTitleText()}
      </>
    )
  }

  const renderDualItem = () => {
    return dot ? null : (
      <>
        {renderIcon()}
        {renderTitleText()}
        <Badge {...badgeProps} />
      </>
    )
  }

  return (
    <View
      className={tabbarItemClass}
      style={{
        color: active ? ctx?.activeColor : ctx?.inactiveColor,
        ...style,
      }}
      onClick={() => (active ? onActiveClick?.() : ctx?.handleClick(index))}
      {...rest}
    >
      {direction === 'horizontal' && !dot ? (
        renderDualItem()
      ) : (
        <>
          {icon && renderIconAndTitle()}
          {!icon && renderTitle()}
        </>
      )}
    </View>
  )
}
