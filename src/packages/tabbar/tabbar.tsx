import React, { useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem'
import TabbarContext from './context'
import { WebTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index'
import { normalizeTabbarItems } from './utils'
import MaterialView from '../materialview'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  direction: 'vertical',
  safeArea: false,
  material: 'standard',
  onSwitch: () => {},
} as WebTabbarProps

export function Tabbar(props: Partial<WebTabbarProps>) {
  const {
    children,
    defaultValue,
    value,
    fixed,
    activeColor,
    inactiveColor,
    direction,
    safeArea,
    material,
    skinBackground,
    addonBefore,
    className,
    style,
    onSwitch,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-tabbar'
  const items = useMemo(
    () => normalizeTabbarItems(children, TabbarItem),
    [children]
  )
  const hasAddonBefore =
    addonBefore !== null &&
    addonBefore !== undefined &&
    typeof addonBefore !== 'boolean'
  const hasSkin =
    skinBackground !== null &&
    skinBackground !== undefined &&
    typeof skinBackground !== 'boolean'
  const isFrostedMaterial = material === 'frosted' && !hasSkin
  const hasMaterialBackground = hasSkin || isFrostedMaterial

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })
  const previousSelectIndex = useRef(selectIndex)
  const [activeBackgroundAnimationKey, setActiveBackgroundAnimationKey] =
    useState(0)

  useEffect(() => {
    if (previousSelectIndex.current === selectIndex) return
    previousSelectIndex.current = selectIndex
    setActiveBackgroundAnimationKey((key) => key + 1)
  }, [selectIndex])

  const itemDirection =
    items.length === 2 && direction !== 'vertical' ? direction : undefined
  const directionCls = itemDirection
    ? `${classPrefix}-wrap-${itemDirection}`
    : ''
  const sizeCls =
    items.length === 2 || items.length === 3
      ? `${classPrefix}-wrap-${items.length}`
      : ''

  const contextValue = {
    selectIndex,
    activeColor,
    inactiveColor,
    handleClick: setSelectIndex,
    hasMaterialBackground,
  }
  const renderedItems = items.map(({ element, key }, index) =>
    React.cloneElement(element, {
      key,
      index,
      direction: itemDirection,
    })
  )

  const renderNavigationBackground = () => {
    if (hasSkin) {
      return (
        <div className={`${classPrefix}-skin-background`} aria-hidden="true">
          {skinBackground}
        </div>
      )
    }

    if (isFrostedMaterial) {
      return (
        <MaterialView
          scene="bottom-bar"
          className={`${classPrefix}-backdrop`}
          style={{
            backgroundColor:
              'var(--nut-tabbar-backdrop-tint, rgba(255, 255, 255, 0.8))',
          }}
          aria-hidden="true"
        />
      )
    }

    return null
  }

  const navigation = (
    <div
      className={classNames(`${classPrefix}-wrap`, sizeCls, directionCls, {
        [`${classPrefix}-wrap-skin`]: hasSkin,
      })}
    >
      {renderNavigationBackground()}
      {items.length > 0 &&
        isFrostedMaterial &&
        itemDirection !== 'horizontal' && (
          <div
            className={`${classPrefix}-active-background`}
            style={
              {
                '--nutui-tabbar-select-index': selectIndex,
                '--nutui-tabbar-item-count': items.length,
              } as React.CSSProperties
            }
            aria-hidden="true"
          >
            <span
              key={activeBackgroundAnimationKey}
              className={classNames(`${classPrefix}-active-background-inner`, {
                [`${classPrefix}-active-background-inner-animating`]:
                  activeBackgroundAnimationKey > 0,
              })}
            />
          </div>
        )}
      <TabbarContext.Provider value={contextValue}>
        {renderedItems}
      </TabbarContext.Provider>
    </div>
  )

  return (
    <div
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-fixed`]: fixed,
          [`${classPrefix}-has-addon-before`]: hasAddonBefore,
          [`${classPrefix}-material-background`]: hasMaterialBackground,
        },
        className
      )}
      style={style}
    >
      {hasAddonBefore ? (
        <div className={`${classPrefix}-main`}>
          <div className={`${classPrefix}-addon-before`}>{addonBefore}</div>
          {navigation}
        </div>
      ) : (
        navigation
      )}
      {(fixed || safeArea) && <SafeArea position="bottom" />}
    </div>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
