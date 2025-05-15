import React, { FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem'
import TabbarContext from './context'
import { WebTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index'

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
    <div
      className={classNames(
        classPrefix,
        { [`${classPrefix}-fixed`]: fixed },
        className
      )}
      style={style}
    >
      <div className={`${classPrefix}-wrap ${sizeCls}`}>
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
      </div>
      {(fixed || safeArea) && <SafeArea position="bottom" />}
    </div>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
