import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import bem from '@/utils/bem'

interface TabPanelInnerProps {
  autoHeightClassName: string
}

export interface TabPaneProps {
  title: string | number
  paneKey: string | number
  activeKey: string | number
  disabled: boolean
  className: string
  children?: React.ReactNode
}

const defaultProps = {
  title: '',
  paneKey: '',
  activeKey: '',
  disabled: false,
} as TabPaneProps

export const TabPane: FunctionComponent<
  Partial<TabPaneProps & TabPanelInnerProps>
> = (props) => {
  const {
    children,
    paneKey,
    activeKey,
    autoHeightClassName,
    className,
    disabled,
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('tabpane')
  const classes = classNames(
    {
      active: !disabled && paneKey === activeKey,
    },
    b(''),
    autoHeightClassName,
    className
  )

  return <div className={classes}>{!disabled && children}</div>
}
