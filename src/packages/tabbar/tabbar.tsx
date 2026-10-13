import React, { useMemo } from 'react'
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

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })

  const itemDirection =
    items.length === 2 && direction !== 'vertical' ? direction : undefined
  const directionCls = itemDirection
    ? `${classPrefix}-wrap-${itemDirection}`
    : ''

  const contextValue = {
    selectIndex,
    activeColor,
    inactiveColor,
    handleClick: setSelectIndex,
  }
  const renderedItems = items.map(({ element, key }, index) =>
    React.cloneElement(element, {
      key,
      index,
      direction: itemDirection,
    })
  )

  const navigation = (
    <div
      className={classNames(`${classPrefix}-wrap`, directionCls, {
        [`${classPrefix}-wrap-skin`]: hasSkin,
      })}
    >
      {hasSkin ? (
        <div className={`${classPrefix}-skin-background`} aria-hidden="true">
          {skinBackground}
        </div>
      ) : (
        <MaterialView
          scene="bottom-bar"
          className={`${classPrefix}-backdrop`}
          style={{
            borderRadius: 16,
            backgroundColor:
              'var(--nut-tabbar-backdrop-tint, rgba(255, 255, 255, 0.8))',
          }}
          aria-hidden="true"
        />
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
