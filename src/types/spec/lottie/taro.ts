import { LottieOptions } from 'lottie-react'
import { BaseLottie } from './base'

export interface TaroLottieProps
  extends BaseLottie<Omit<LottieOptions, 'animationData'>> {
  dpr: boolean
}
