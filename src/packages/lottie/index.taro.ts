import { ComponentType } from 'react'
import { Lottie as LottieWeb } from './web.taro'
import { Lottie as LottieMp } from './mp.taro'
import { LottieProps } from './types'

let implementation
if (process.env.TARO_ENV === 'h5') {
  // @ts-ignore
  implementation = LottieWeb
} else if (process.env.TARO_ENV === 'weapp') {
  // @ts-ignore
  implementation = LottieMp
} else {
  // throw new Error(`不支持的 TARO_ENV: ${process.env.TARO_ENV}`)
  implementation = (props: any) => {
    return props.children
  }
}
const Lottie: ComponentType<Partial<LottieProps>> = implementation as any
export default Lottie
