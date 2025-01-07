import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Badge from '@/packages/badge/index.taro'
import TabbarContext from '@/packages/tabbar/context'
import addColorForHarmony from '@/utils/add-color-for-harmony'

export interface TabbarItemProps extends BasicComponent {
  title: ReactNode
  icon: ReactNode
  value: ReactNode
  dot: boolean
  max: number
  top: string
  right: string
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  icon: null,
  value: '',
  dot: false,
  max: 99,
  top: '0',
  right: '0',
} as TabbarItemProps

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (
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

  return (
    <View
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
            <View className={boxPrefix}>
              {addColorForHarmony(
                icon,
                active ? ctx?.activeColor : ctx?.inactiveColor
              )}
            </View>
          </Badge>
          <View
            className={titleClass}
            style={{
              color: active ? ctx?.activeColor : ctx?.inactiveColor,
            }}
          >
            {title}
          </View>
        </>
      ) : (
        <Badge {...badgeProps}>
          <View
            className={titleClass}
            style={{
              color: active ? ctx?.activeColor : ctx?.inactiveColor,
            }}
          >
            {title}
          </View>
        </Badge>
      )}
    </View>
  )
}
