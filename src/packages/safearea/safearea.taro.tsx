import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { TaroSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<TaroSafeAreaProps> = (props) => {
  return (
    <View
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${props.position}`
      )}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
