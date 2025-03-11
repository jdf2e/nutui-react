import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { mergeProps } from '@/utils/merge-props'
import { TaroSideBarItemProps } from '@/types'

const defaultProps = {
  title: '',
  value: '',
  disabled: false,
} as TaroSideBarItemProps

export const SideBarItem: FunctionComponent<Partial<TaroSideBarItemProps>> = (
  props
) => {
  const { children, className, disabled } = mergeProps(defaultProps, props)

  const classPrefix = 'nut-sidebaritem'
  const classes = classNames(
    classPrefix,
    {
      active: !disabled && (props as any).active,
    },
    className
  )

  return children ? (
    <View className={classes}>{!disabled && children}</View>
  ) : null
}
