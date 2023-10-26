import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from '@/packages/tabs/context'

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
  const { children, className, disabled } = {
    ...defaultProps,
    ...props,
  }
  const tabsCtx = useContext(TabsContext)

  const classPrefix = 'nut-tabpane'
  const classes = classNames(
    {
      active: !disabled && (props as any).active,
      // eslint-disable-next-line eqeqeq
      inactive: tabsCtx.autoHeight && tabsCtx.value != props.value,
    },
    classPrefix,
    className
  )

  return <div className={classes}>{!disabled && children}</div>
}
