import React, { FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem'
import TabbarContext from './context'
import { WebTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index'
import { normalizeTabbarItems } from './utils'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  direction: 'vertical',
  safeArea: false,
  skinBackground: null,
  island: null,
  islandVariant: 'regular',
  islandExpanded: false,
  onSwitch: () => {},
} as WebTabbarProps

export const Tabbar: FunctionComponent<Partial<WebTabbarProps>> & {
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
    island,
    islandVariant,
    islandExpanded,
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
  const hasIsland =
    island !== null && island !== undefined && typeof island !== 'boolean'
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
    skin: hasSkin,
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
    <div
      className={classNames(`${classPrefix}-wrap`, sizeCls, {
        [`${classPrefix}-wrap-skin`]: hasSkin,
      })}
    >
      {hasSkin && (
        <div className={`${classPrefix}-skin-background`} aria-hidden="true">
          {skinBackground}
        </div>
      )}
      {hasIsland ? (
        <>
          <TabbarContext.Provider value={contextValue}>
            {renderedItems.slice(0, islandIndex)}
          </TabbarContext.Provider>
          <div
            className={`${classPrefix}-island ${classPrefix}-island-${islandVariant}`}
          >
            {island}
          </div>
          <TabbarContext.Provider value={contextValue}>
            {renderedItems.slice(islandIndex)}
          </TabbarContext.Provider>
        </>
      ) : (
        <TabbarContext.Provider value={contextValue}>
          {renderedItems}
        </TabbarContext.Provider>
      )}
    </div>
  )

  return (
    <div
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
        <div className={`${classPrefix}-main`}>
          <div className={`${classPrefix}-agent`}>{agent}</div>
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
