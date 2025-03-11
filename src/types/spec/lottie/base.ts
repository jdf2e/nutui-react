import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export type BaseLottie<LOTTIE_LIBRARY> = BaseProps &
  LOTTIE_LIBRARY & {
    source: NonNullable<unknown>
    loop: SimpleValue | boolean
    autoPlay: boolean
    initialSegment: [number, number]
    speed: number
  }
