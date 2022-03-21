import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface TabPaneProps {
  title: string | number
  paneKey: string | number
  activeKey: string | number
  disabled: boolean
}

const defaultProps = {
  title: '',
  paneKey: '',
  activeKey: '',
  disabled: false,
} as TabPaneProps

export const TabPane: FunctionComponent<Partial<TabPaneProps>> = (props) => {
  const { children, paneKey, activeKey } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('tabpane')
  const classes = classNames(
    {
      active: paneKey === activeKey,
    },
    b('')
  )

  return <div className={classes}>{children}</div>
}
