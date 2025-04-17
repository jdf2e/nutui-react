import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { TaroSafeAreaProps } from '@/types'
import { jd, weapp } from '../nutui.react.build.taro'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<TaroSafeAreaProps> = (props) => {
  const getSafeAreaStyle = () => {
    if (weapp() || jd()) {
      const { screenHeight, safeArea } = Taro.getSystemInfoSync()
      if (props.position === 'top') {
        return { paddingTop: safeArea?.top || 0 }
      }
      if (props.position === 'bottom') {
        const bottom = safeArea?.bottom || screenHeight
        return { paddingBottom: screenHeight - bottom }
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
