import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

export type BaseLottie<LOTTIE_LIBRARY> = BaseProps &
  LOTTIE_LIBRARY & {
    source: NonNullable<unknown>
    loop: SimpleValue
    autoPlay: boolean
    initialSegment: [number, number]
    speed: number
  }
