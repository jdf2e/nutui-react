import { Lottie as LottieWeb } from './web'
import { Lottie as LottieMp } from './mp'

let implementation
if (process.env.TARO_ENV === 'h5') {
  implementation = LottieWeb
} else if (process.env.TARO_ENV === 'weapp') {
  implementation = LottieMp
}
export default implementation
