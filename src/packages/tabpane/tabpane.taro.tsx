import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'

interface TabPanelInnerProps {
  autoHeightClassName: string
}

export interface TabPaneProps {
  title: string | number
  value: string | number
  disabled: boolean
  className: string
  children?: React.ReactNode
}

const defaultProps = {
  title: '',
  value: '',
  disabled: false,
} as TabPaneProps

export const TabPane: FunctionComponent<
  Partial<TabPaneProps & TabPanelInnerProps>
> = (props) => {
  const { children, autoHeightClassName, className, disabled } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-tabpane'
  const classes = classNames(
    classPrefix,
    {
      active: !disabled && (props as any).active,
    },
    autoHeightClassName,
    className
  )

  return children && <View className={classes}>{!disabled && children}</View>
}
