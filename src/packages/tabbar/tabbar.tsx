import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem'
import TabbarContext from './context'
import { WebTabbarProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  safeArea: false,
  onSwitch: (value) => {},
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
      </div>
      {(fixed || safeArea) && <div className={`${classPrefix}-safe-area`} />}
    </div>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
