import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

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

  return children && <div className={classes}>{!disabled && children}</div>
}
