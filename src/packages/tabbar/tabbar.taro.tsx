import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { View, ViewProps } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem/index.taro'
import TabbarContext from './context'
import { TaroTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index.taro'
import { normalizeTabbarItems } from './utils'
import {
  getTabbarNativeMaterial,
  getTabbarNativePlatform,
  getTabbarNativeViewProps,
  TabbarNativeViewProps,
} from './material.taro'

const MaterialView = View as React.ComponentType<
  ViewProps & TabbarNativeViewProps
>

const getNativeInfo = () => {
  try {
    const info = Taro.getSystemInfoSync()
    return {
      platform: getTabbarNativePlatform(
        String(Taro.getEnv()),
        String(info.platform || '')
      ),
      dark: String(info.theme || '').toLowerCase() === 'dark',
    }
  } catch {
    return { platform: getTabbarNativePlatform('', ''), dark: false }
  }
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  direction: 'vertical',
  safeArea: false,
  island: null,
  islandVariant: 'regular',
  islandExpanded: false,
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
    island,
    islandVariant,
    islandExpanded,
    materialTargetId,
    className,
    style,
    onSwitch,
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-tabbar'
  const [nativeInfo] = useState(getNativeInfo)
  const [dark, setDark] = useState(nativeInfo.dark)

  useEffect(() => {
    if (nativeInfo.platform === 'none') return
    const handleThemeChange = (result: string | { theme?: string }) => {
      const theme = typeof result === 'string' ? result : result.theme
      setDark(String(theme || '').toLowerCase() === 'dark')
    }
    try {
      Taro.onThemeChange?.(handleThemeChange)
      return () => Taro.offThemeChange?.(handleThemeChange)
    } catch {
      return undefined
    }
  }, [nativeInfo.platform])

  const nativeMaterial = getTabbarNativeMaterial(nativeInfo.platform, dark)
  const nativeViewProps = getTabbarNativeViewProps(
    nativeMaterial,
    materialTargetId
  )
  const items = useMemo(
    () => normalizeTabbarItems(children, TabbarItem),
    [children]
  )
  const hasAgent =
    agent !== null && agent !== undefined && typeof agent !== 'boolean'
  const hasIsland =
    island !== null && island !== undefined && typeof island !== 'boolean'

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
  const islandIndex = Math.ceil(items.length / 2)

  const navigation = (
    <MaterialView
      className={classNames(`${classPrefix}-wrap`, sizeCls, {
        [`${classPrefix}-native`]: nativeInfo.platform !== 'none',
      })}
      {...nativeViewProps}
    >
      {hasIsland ? (
        <>
          <TabbarContext.Provider value={contextValue}>
            {renderedItems.slice(0, islandIndex)}
          </TabbarContext.Provider>
          <View
            className={`${classPrefix}-island ${classPrefix}-island-${islandVariant}`}
          >
            {island}
          </View>
          <TabbarContext.Provider value={contextValue}>
            {renderedItems.slice(islandIndex)}
          </TabbarContext.Provider>
        </>
      ) : (
        <TabbarContext.Provider value={contextValue}>
          {renderedItems}
        </TabbarContext.Provider>
      )}
    </MaterialView>
  )

  return (
    <View
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-fixed`]: fixed,
          [`${classPrefix}-has-agent`]: hasAgent,
          [`${classPrefix}-has-island`]: hasIsland,
          [`${classPrefix}-island-expanded`]: hasIsland && islandExpanded,
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
