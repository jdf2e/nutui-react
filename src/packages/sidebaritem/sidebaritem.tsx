import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { mergeProps } from '@/utils/merge-props'

export interface SideBarItemProps {
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
} as SideBarItemProps

export const SideBarItem: FunctionComponent<Partial<SideBarItemProps>> = (
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
