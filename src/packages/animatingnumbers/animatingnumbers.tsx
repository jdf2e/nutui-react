import React, { FunctionComponent } from 'react'

import { CountUp } from './countup'

export interface AnimatingNumbersProps {}
const defaultProps = {} as AnimatingNumbersProps

export const AnimatingNumbers: FunctionComponent<AnimatingNumbersProps> & {
  CountUp: typeof CountUp
} = () => {
  return <div className="nut-animatingnumbers" />
}

AnimatingNumbers.defaultProps = defaultProps
AnimatingNumbers.displayName = 'NutAnimatingNumbers'
AnimatingNumbers.CountUp = CountUp
