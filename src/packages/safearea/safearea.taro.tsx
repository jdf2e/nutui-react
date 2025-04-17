import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { TaroSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<TaroSafeAreaProps> = (props) => {
  const getSafeAreaStyle = () => {
    if (['WEAPP', 'JD'].includes(Taro.getEnv())) {
      const { screenHeight, safeArea } = Taro.getSystemInfoSync()
      if (props.position === 'top') {
        return { paddingTop: `${safeArea?.top || 0}px` }
      }
      if (props.position === 'bottom') {
        const bottom = safeArea?.bottom || screenHeight
        return { paddingBottom: `${screenHeight - bottom}px` }
      }
    }
    return {}
  }

  return (
    <View
      style={getSafeAreaStyle()}
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${props.position}`
      )}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
