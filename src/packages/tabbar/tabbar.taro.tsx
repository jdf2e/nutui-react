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
import MaterialView from '../materialview/index.taro'

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
    skinBackground,
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
  const hasSkin =
    skinBackground !== null &&
    skinBackground !== undefined &&
    typeof skinBackground !== 'boolean'
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

  const contextValue = {
    selectIndex,
    activeColor,
    inactiveColor,
    handleClick: setSelectIndex,
  }
  const renderedItems = items.map((child, index) =>
    React.cloneElement(child, {
      ...child.props,
      key: child.key ?? index,
      index,
      direction: itemDirection,
    })
  )

  const navigation = (
    <View
      className={classNames(`${classPrefix}-wrap`, sizeCls, {
        [`${classPrefix}-wrap-skin`]: hasSkin,
      })}
    >
      {hasSkin ? (
        <View className={`${classPrefix}-skin-background`} aria-hidden="true">
          {skinBackground}
        </View>
      ) : (
        <MaterialView
          scene="bottom-bar"
          className={`${classPrefix}-backdrop`}
          style={{ borderRadius: 16 }}
          aria-hidden="true"
        />
      )}
      <TabbarContext.Provider value={contextValue}>
        {renderedItems}
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
