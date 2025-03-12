import { LottieOptions } from 'lottie-react'
import { BaseLottie } from './base'

export interface WebLottieProps
  extends BaseLottie<Omit<LottieOptions, 'animationData'>> {}
