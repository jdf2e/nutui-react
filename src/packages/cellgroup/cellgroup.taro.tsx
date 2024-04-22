import React, { FunctionComponent, ReactNode } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
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
  const { children, className, style, title, description, divider, ...rest } = {
    ...defaultProps,
    ...props,
  }
  return (
    <View className={classNames(classPrefix, className)} {...rest}>
      {title ? <View className={`${classPrefix}-title`}>{title}</View> : null}
      {description ? (
        <View className={`${classPrefix}-description`}>{description}</View>
      ) : null}
      <View
        className={`${classPrefix}-wrap ${
          divider ? `${classPrefix}-wrap-divider` : ''
        }`}
      >
        <CellGroupContext.Provider value={{ divider }}>
          {children}
        </CellGroupContext.Provider>
      </View>
    </View>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
