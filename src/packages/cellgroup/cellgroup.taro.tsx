import React, { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CellGroupContext from '@/packages/cellgroup/context'

export interface CellGroupProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  children?: ReactNode
  divider: boolean
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  divider: true,
} as CellGroupProps

const classPrefix = 'nut-cell-group'

export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, className, title, description, divider, ...rest } = {
    ...defaultProps,
    ...props,
  }
  return (
    <View className={classNames(classPrefix, className)} {...rest}>
      {title ? <View className={`${classPrefix}-title`}>{title}</View> : null}
      {description ? (
        <View className={`${classPrefix}-description`}>{description}</View>
      ) : null}
      <View className={`${classPrefix}-wrap`}>
        <CellGroupContext.Provider value={{ divider, group: true }}>
          {React.Children.map(children, (child, index) => {
            // @ts-ignore
            return child?.type?.displayName === 'NutCell'
              ? // @ts-ignore
                React.cloneElement(child, {
                  isLast: index === React.Children.count(children) - 1,
                })
              : child
          })}
        </CellGroupContext.Provider>
      </View>
    </View>
  )
}

CellGroup.displayName = 'NutCellGroup'
