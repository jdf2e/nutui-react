import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { TaroTabPaneProps } from '@/types'

interface TabPanelInnerProps {
  autoHeightClassName: string
}

const defaultProps = {
  title: '',
  value: '',
  disabled: false,
} as TaroTabPaneProps

export const TabPane: FunctionComponent<
  Partial<TaroTabPaneProps & TabPanelInnerProps>
> = (props) => {
  const { children, autoHeightClassName, className, disabled } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-tabpane'
  const active = !disabled && (props as any).active
  const classes = classNames(
    classPrefix,
    {
      active,
    },
    autoHeightClassName,
    className
  )

  return children ? (
    <View className={classes} ariaRole="tabpanel" tabIndex={active ? 0 : -1}>
      {!disabled && children}
    </View>
  ) : null
}
