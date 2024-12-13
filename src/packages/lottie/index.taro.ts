import { miniprogram, web } from '@/utils/platform-taro'
import { Lottie as LottieWeb } from './web'
import { Lottie as LottieMp } from './mp'

let implementation
if (web()) {
  implementation = LottieWeb
} else if (miniprogram()) {
  implementation = LottieMp
}
export default implementation
