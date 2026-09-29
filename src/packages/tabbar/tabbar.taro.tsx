import React, { FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem/index.taro'
import TabbarContext from './context'
import { TaroTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index.taro'
import { normalizeTabbarItems } from './utils'

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
    agent,
    className,
    style,
    onSwitch,
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-tabbar'
  const items = useMemo(
    () => normalizeTabbarItems(children, TabbarItem),
    [children]
  )
  const hasAgent =
    agent !== null && agent !== undefined && typeof agent !== 'boolean'

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })

  const sizeCls = useMemo(() => {
    const size = items.length
    return size > 3
      ? ''
      : classNames({
          [`${classPrefix}-wrap-3`]: size === 3,
          [`${classPrefix}-wrap-2`]: size === 2,
          [`${classPrefix}-wrap-${direction}`]:
            size === 2 && direction !== 'vertical',
        })
  }, [items, direction])

  const itemDirection = useMemo(() => {
    const size = items.length
    return size === 2 && direction !== 'vertical' && direction
  }, [direction, items])

  const navigation = (
    <View className={`${classPrefix}-wrap ${sizeCls}`}>
      <TabbarContext.Provider
        value={{
          selectIndex,
          activeColor,
          inactiveColor,
          handleClick: setSelectIndex,
        }}
      >
        {items.map((child, index) =>
          React.cloneElement(child, {
            ...child.props,
            key: child.key ?? index,
            index,
            direction: itemDirection,
          })
        )}
      </TabbarContext.Provider>
    </View>
  )

  return (
    <View
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-fixed`]: fixed,
          [`${classPrefix}-has-agent`]: hasAgent,
        },
        className
      )}
      style={style}
    >
      {hasAgent ? (
        <View className={`${classPrefix}-main`}>
          <View className={`${classPrefix}-agent`}>{agent}</View>
          {navigation}
        </View>
      ) : (
        navigation
      )}
      {(fixed || safeArea) && <SafeArea position="bottom" />}
    </View>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
