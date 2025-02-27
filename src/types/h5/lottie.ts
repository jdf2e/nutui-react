import { LottieOptions } from 'lottie-react'
import { BaseLottie } from '../base/lottie'

export interface WebLottieProps
  extends BaseLottie<Omit<LottieOptions, 'animationData'>> {}
