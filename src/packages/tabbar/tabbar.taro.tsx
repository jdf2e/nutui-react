import React, { FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem/index.taro'
import TabbarContext from './context'
import { TaroTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index.taro'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  direction: 'vertical',
  safeArea: false,
  onSwitch: () => {},
} as TaroTabbarProps

export const Tabbar: FunctionComponent<Partial<TaroTabbarProps>> & {
  Item: typeof TabbarItem
} = (props) => {
  const {
    children,
    defaultValue,
    value,
    fixed,
    activeColor,
    inactiveColor,
    direction,
    safeArea,
    className,
    style,
    onSwitch,
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-tabbar'

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })

  const sizeCls = useMemo(() => {
    const size = React.Children.count(children)
    return size > 3
      ? ''
      : classNames({
          [`${classPrefix}-wrap-3`]: size === 3,
          [`${classPrefix}-wrap-2`]: size === 2,
          [`${classPrefix}-wrap-${direction}`]:
            size === 2 && direction !== 'vertical',
        })
  }, [children, direction])

  const itemDirection = useMemo(() => {
    const size = React.Children.count(children)
    return size === 2 && direction !== 'vertical' && direction
  }, [direction, children])

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
      <View className={`${classPrefix}-wrap ${sizeCls}`}>
        <TabbarContext.Provider
          value={{
            selectIndex,
            activeColor,
            inactiveColor,
            handleClick: setSelectIndex,
          }}
        >
          {React.Children.map(children, (child, index) =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  ...child.props,
                  index,
                  direction: itemDirection,
                })
              : null
          )}
        </TabbarContext.Provider>
      </View>
      {(fixed || safeArea) && <SafeArea position="bottom" />}
    </View>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
