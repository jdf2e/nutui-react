import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { WebTabPaneProps } from '@/types'

interface TabPanelInnerProps {
  autoHeightClassName: string
}

const defaultProps = {
  title: '',
  value: '',
  disabled: false,
} as WebTabPaneProps

export const TabPane: FunctionComponent<
  Partial<WebTabPaneProps & TabPanelInnerProps>
> = (props) => {
  const { children, autoHeightClassName, className, disabled, ariaLabel } = {
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
    <div
      className={classes}
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-label={ariaLabel}
    >
      {!disabled && children}
    </div>
  ) : null
}
