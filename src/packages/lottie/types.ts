import React from 'react'
import { LottieOptions } from 'lottie-react'

export interface LottieProps extends Omit<LottieOptions, 'animationData'> {
  style: React.CSSProperties
  source: NonNullable<unknown>
  loop: boolean
  autoPlay: boolean
  initialSegment: [number, number]
  speed: number
}
