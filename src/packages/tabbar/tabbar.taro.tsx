import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TabbarProps extends BasicComponent {
  visible: number | string
  activeVisible?: number | string
  fixed: boolean
  size: string | number
  inactiveColor: string
  activeColor: string
  safeAreaInsetBottom: boolean
  onSwitch: (child: React.ReactElement<any>, active: number) => void
  children?: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  visible: 0,
  fixed: false,
  size: 20,
  inactiveColor: '',
  activeColor: '',
  safeAreaInsetBottom: false,
  onSwitch: (child, activeVisible) => {},
} as TabbarProps

export const Tabbar: FunctionComponent<Partial<TabbarProps>> = (props) => {
  const {
    children,
    visible,
    activeVisible,
    fixed,
    size,
    activeColor,
    inactiveColor,
    safeAreaInsetBottom,
    className,
    style,
    onSwitch,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-tabbar'

  const [selectIndex, setSelectIndex] = useState(activeVisible || visible)

  const handleClick = (idx: number) => {
    if (!('activeVisible' in props)) {
      setSelectIndex(idx)
    }
  }

  useEffect(() => {
    if (activeVisible !== undefined) {
      setSelectIndex(activeVisible)
    }
  }, [activeVisible])

  return (
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}__bottom`]: fixed || safeAreaInsetBottom,
        [`${classPrefix}__safebottom`]: safeAreaInsetBottom,
      })}
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
          inactiveColor,
          activeColor,
          size,
          handleClick: () => {
            handleClick(idx)
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
