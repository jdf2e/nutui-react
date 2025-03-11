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
    },
    className
  )
  const boxPrefix = `${classPrefix}-icon-box`
  const titleClass = classNames(boxPrefix, `${boxPrefix}-nav`, {
    [`${boxPrefix}-large`]: !icon,
  })

  const badgeProps = {
    value,
    dot,
    max,
    top,
    right,
    color: ctx?.activeColor,
  }

  const renderTitleText = () => {
    return title && <div className={titleClass}>{title}</div>
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
      {icon ? (
        <>
          <Badge {...badgeProps}>
            <div className={boxPrefix}>{icon}</div>
          </Badge>
          {renderTitleText()}
        </>
      ) : (
        <Badge {...badgeProps}>{renderTitleText()}</Badge>
      )}
    </div>
  )
}
