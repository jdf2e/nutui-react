import { ReactNode } from 'react'
import { LottieProps } from '../lottie/types'
import { BasicComponent } from '@/utils/typings'

export type LoadingRef = any

export type LoadingType = 'spinner' | 'circular' | 'lottie'
export type LoadingDirection = 'horizontal' | 'vertical'

export interface LoadingProps extends BasicComponent {
  type: LoadingType
  jsonData: any
  lottieProps: Partial<LottieProps>
  direction: LoadingDirection
  icon?: ReactNode
}
