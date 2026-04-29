import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { TaroSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<TaroSafeAreaProps> = (props) => {
  const { className, style, position, ...rest } = props

  return (
    <View
      {...rest}
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${position}`,
        className
      )}
      style={style}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
