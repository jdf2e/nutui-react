import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { mergeProps } from '@/utils/merge-props'
import { WebSideBarItemProps } from '@/types'

const defaultProps = {
  title: '',
  value: '',
  disabled: false,
} as WebSideBarItemProps

export const SideBarItem: FunctionComponent<Partial<WebSideBarItemProps>> = (
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
    <div className={classes}>{!disabled && children}</div>
  ) : null
}
