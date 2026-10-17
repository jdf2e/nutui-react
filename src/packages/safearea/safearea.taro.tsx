import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { TaroSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<TaroSafeAreaProps> = (props) => {
  const { position = 'bottom', className, style, ...rest } = props
  return (
    <View
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${position}`,
        className
      )}
      style={style}
      {...rest}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
