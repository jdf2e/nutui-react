import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { Direction } from './baseatom'

export type LoadingRef = any
export type LoadingType = 'spinner' | 'circular' | 'lottie'

export interface BaseLoading<LOTTIE_PROPS = any> extends BaseProps {
  type: LoadingType
  direction: Direction
  icon: ReactNode

  jsonData: any
  lottieProps: Partial<LOTTIE_PROPS>
}
