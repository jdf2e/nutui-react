import React, { FunctionComponent, useEffect } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import TabbarItem from '../tabbaritem'

export interface TabbarProps extends BasicComponent {
  defaultValue: number
  value?: number
  fixed: boolean
  size: string | number
  inactiveColor: string
  activeColor: string
  safeArea: boolean
  onSwitch: (value: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  size: 20,
  inactiveColor: '',
  activeColor: '',
  safeArea: false,
  onSwitch: (value) => {},
} as TabbarProps

export const Tabbar: FunctionComponent<Partial<TabbarProps>> & {
  Item: typeof TabbarItem
} = (props) => {
  const {
    children,
    defaultValue,
    value,
    fixed,
    size,
    activeColor,
    inactiveColor,
    safeArea,
    className,
    style,
    onSwitch,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-tabbar'

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })

  useEffect(() => {
    if (value !== undefined) {
      setSelectIndex(value)
    }
  }, [value])

  return (
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}__bottom`]: fixed || safeArea,
        [`${classPrefix}__safebottom`]: safeArea,
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
          handleClick: setSelectIndex,
        }
        return React.cloneElement(child, childProps)
      })}
    </div>
  )
}

Tabbar.defaultProps = defaultProps
Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
