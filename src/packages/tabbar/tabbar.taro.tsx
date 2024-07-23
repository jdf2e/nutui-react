import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import TabbarItem from '../tabbaritem/index.taro'
import TabbarContext from './context'

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
    <View
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-fixed`]: fixed,
        },
        className
      )}
      style={style}
    >
      <View className={`${classPrefix}-wrap`}>
        <TabbarContext.Provider
          value={{
            selectIndex,
            activeColor,
            inactiveColor,
            handleClick: setSelectIndex,
          }}
        >
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null
            return React.cloneElement(child, { ...child.props, index })
          })}
        </TabbarContext.Provider>
      </View>
      {(fixed || safeArea) && <View className={`${classPrefix}-safe-area`} />}
    </View>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
