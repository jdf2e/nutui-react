import React, { FunctionComponent, useState } from 'react'

import bem from '@/utils/bem'

export interface TabbarProps {
  visible: number | string
  bottom: boolean
  size: string | number
  unactiveColor: string
  activeColor: string
  safeAreaInsetBottom: boolean
  className: string
  style: React.CSSProperties
  tabSwitch: (child: React.ReactElement<any>, active: number) => void
  onSwitch: (child: React.ReactElement<any>, active: number) => void
  children?: React.ReactNode
}

const defaultProps = {
  visible: 0,
  bottom: false,
  size: 20,
  unactiveColor: '',
  activeColor: '',
  safeAreaInsetBottom: false,
  className: '',
  style: {},
  tabSwitch: () => {},
  onSwitch: () => {},
} as TabbarProps

export const Tabbar: FunctionComponent<Partial<TabbarProps>> = (props) => {
  const {
    children,
    visible,
    bottom,
    size,
    activeColor,
    unactiveColor,
    safeAreaInsetBottom,
    className,
    style,
    tabSwitch,
    onSwitch,
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('tabbar')

  const [selectIndex, setSelectIndex] = useState(visible)

  const handleClick = (idx: number) => {
    setSelectIndex(idx)
  }

  return (
    <div
      className={[
        `${b()}`,
        bottom ? `${b('bottom')}` : '',
        safeAreaInsetBottom ? `${b('bottom')} ${b('safebottom')}` : '',
        className,
      ].join(' ')}
      style={style}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) {
          return null
        }
        const childProps = {
          ...child.props,
          active: idx === selectIndex,
          index: idx,
          unactiveColor,
          activeColor,
          size,
          handleClick: () => {
            handleClick(idx)
            tabSwitch(child, idx)
            onSwitch(child, idx)
          },
        }
        return React.cloneElement(child, childProps)
      })}
    </div>
  )
}

Tabbar.defaultProps = defaultProps
Tabbar.displayName = 'NutTabbar'
