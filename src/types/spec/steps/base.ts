import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type StepStatus = 'wait' | 'process' | 'finish'
export type StepType = 'text' | 'dot' | 'icon'
export type StepLayout = 'single' | 'double'
export type StepDirection = 'horizontal' | 'vertical'
export type StepsStatus = 'default' | 'business' | 'dynamic' | 'enhanced'
export interface BaseStep extends BaseProps {
  title: ReactNode
  description: ReactNode
  value: number
  icon: ReactNode
  type: StepType
}

export interface BaseSteps extends BaseProps {
  status: StepsStatus
  direction: StepDirection
  value: number
  type: StepType
  layout: StepLayout
  icon: ReactNode
  onStepClick: (index: number) => void
}
