import { ReactNode } from 'react'
import { LottieComponentProps } from 'lottie-react'
import { BasicComponent } from '@/utils/typings'

export type LoadingRef = any

export type LoadingType = 'spinner' | 'circular' | 'lottie'
export type LoadingDirection = 'horizontal' | 'vertical'

export interface LoadingProps extends BasicComponent {
  type: LoadingType
  jsonData: any
  lottieProps: Omit<LottieComponentProps, 'animationData'>
  direction: LoadingDirection
  icon?: ReactNode
}
