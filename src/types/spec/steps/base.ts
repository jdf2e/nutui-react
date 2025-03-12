import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseStep extends BaseProps {
  title: ReactNode
  description: ReactNode
  value: number
  icon: ReactNode
}

export interface BaseSteps extends BaseProps {
  value: number
  direction: string
  dot: boolean
  onStepClick: (index: number) => void
}
