import React, { FunctionComponent } from 'react'
import { View } from '@tarojs/components'
import { CountUp } from './countup.taro'

export interface AnimatingNumbersProps {}
const defaultProps = {} as AnimatingNumbersProps

export const AnimatingNumbers: FunctionComponent<AnimatingNumbersProps> & {
  CountUp: typeof CountUp
} = () => {
  return <View className="nut-animatingnumbers" />
}

AnimatingNumbers.defaultProps = defaultProps
AnimatingNumbers.displayName = 'NutAnimatingNumbers'
AnimatingNumbers.CountUp = CountUp
