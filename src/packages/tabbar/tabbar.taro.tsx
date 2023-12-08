import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import TabbarItem from '../tabbaritem/index.taro'

export interface TabbarProps extends BasicComponent {
  defaultValue: number
  value?: number
  fixed: boolean
  inactiveColor: string
  activeColor: string
  safeArea: boolean
  onSwitch: (value: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
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

  return (
    <div
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-fixed`]: fixed,
        },
        className
      )}
      style={style}
    >
      <div className={`${classPrefix}-wrap`}>
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
            handleClick: setSelectIndex,
          }
          return React.cloneElement(child, childProps)
        })}
      </div>
      {(fixed || safeArea) && <div className={`${classPrefix}-safe-area`} />}
    </div>
  )
}

Tabbar.defaultProps = defaultProps
Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
