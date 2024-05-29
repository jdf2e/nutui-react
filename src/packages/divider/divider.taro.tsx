import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '../configprovider/configprovider.taro'

export type DividerContentPosition = 'left' | 'center' | 'right'
export type DividerDirection = 'horizontal' | 'vertical'
export interface DividerProps extends BasicComponent {
  contentPosition: DividerContentPosition
  direction?: DividerDirection
}
const defaultProps = {
  ...ComponentDefaults,
  contentPosition: 'center',
  direction: 'horizontal',
} as DividerProps

const classPrefix = `nut-divider`
export const Divider: FunctionComponent<
  Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, contentPosition, style, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const rtl = useRtl()
  const classes =
    direction === 'horizontal'
      ? classNames({
          [`${classPrefix}`]: true,
          [`${classPrefix}-center`]: children,
          [`${classPrefix}-left`]: contentPosition === 'left',
          [`${classPrefix}-right`]: contentPosition === 'right',
          [`${classPrefix}-rtl`]:
            (['left', 'right'].includes(contentPosition) || children) && rtl,
        })
      : classNames({
          [`${classPrefix}`]: true,
          [`${classPrefix}-vertical`]: direction === 'vertical',
        })
  const getClassNames = (direction: string) => {
    return `${classes
      .split(' ')
      .map((item) => `${item}-${direction}`)
      .join(' ')}`
  }
  return (
    <View className={`${classes} ${className || ''}`} style={style}>
      {direction === 'horizontal' && (
        <View className={getClassNames('before')} style={style} />
      )}
      {children}
      {direction === 'horizontal' && (
        <View className={getClassNames('after')} style={style} />
      )}
    </View>
  )
}

Divider.displayName = 'NutDivider'
