import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { BasicComponent } from '@/utils/typings'

export interface SafeAreaProps extends BasicComponent {
  position: 'top' | 'bottom'
}

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<SafeAreaProps> = (props) => {
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
