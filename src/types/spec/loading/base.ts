import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Direction } from '../../base/atoms'

export type LoadingRef = any
export type LoadingType = 'spinner' | 'circular' | 'lottie'

export interface BaseLoading<LOTTIE_PROPS = any> extends BaseProps {
  type: LoadingType
  direction: Direction
  icon: ReactNode

  jsonData: any
  lottieProps: Partial<LOTTIE_PROPS>
}
