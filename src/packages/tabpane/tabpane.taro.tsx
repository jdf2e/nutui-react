import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from '@/packages/tabs/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

interface TabPanelInnerProps {
  autoHeightClassName: string
}

export interface TabPaneProps extends BasicComponent {
  title: string | number
  value: string | number
  disabled: boolean
  children?: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  value: '',
  disabled: false,
} as TabPaneProps

export const TabPane: FunctionComponent<
  Partial<TabPaneProps & TabPanelInnerProps>
> = (props) => {
  const { children, className, style, disabled } = {
    ...defaultProps,
    ...props,
  }
  const tabsCtx = useContext(TabsContext)

  const classPrefix = 'nut-tabpane'
  const classes = classNames(
    {
      // eslint-disable-next-line eqeqeq
      active: !disabled && tabsCtx.value == props.value,
      // eslint-disable-next-line eqeqeq
      inactive: tabsCtx.autoHeight && tabsCtx.value != props.value,
    },
    classPrefix,
    className
  )

  return (
    <div className={classes} style={style}>
      {!disabled && children}
    </div>
  )
}
