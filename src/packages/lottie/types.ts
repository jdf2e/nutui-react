import React from 'react'
import { LottieOptions } from 'lottie-react'
import { BasicComponent } from '@/utils/typings'

export interface LottieProps
  extends Omit<LottieOptions, 'animationData'>,
    BasicComponent {
  style: React.CSSProperties
  source: NonNullable<unknown>
  loop: boolean | number
  autoPlay: boolean
  initialSegment: [number, number]
  speed: number
}
