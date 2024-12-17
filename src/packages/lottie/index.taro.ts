import { ComponentType } from 'react'
import { Lottie as LottieWeb } from './web'
import { Lottie as LottieMp } from './mp'
import { LottieProps } from './types'

let implementation
if (process.env.TARO_ENV === 'h5') {
  implementation = LottieWeb
} else if (process.env.TARO_ENV === 'weapp') {
  implementation = LottieMp
}
const Lottie: ComponentType<Partial<LottieProps>> = implementation as any
export default Lottie
