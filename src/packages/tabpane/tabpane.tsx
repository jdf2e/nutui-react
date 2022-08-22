import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface TabPaneProps {
  title: string | number
  paneKey: string | number
  activeKey: string | number
  disabled: boolean
  autoHeightClassName: string
  children?: React.ReactNode
}

const defaultProps = {
  title: '',
  paneKey: '',
  activeKey: '',
  disabled: false,
} as TabPaneProps

export const TabPane: FunctionComponent<Partial<TabPaneProps>> = (props) => {
  const { children, paneKey, activeKey, autoHeightClassName } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('tabpane')
  const classes = classNames(
    {
      active: paneKey === activeKey,
    },
    b(''),
    autoHeightClassName
  )

  return <div className={classes}>{children}</div>
}
