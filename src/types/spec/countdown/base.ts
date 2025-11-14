import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type CountDownType = 'default' | 'primary' | 'text'

export interface CountDownTime {
  d: number
  h: number
  m: number
  s: number
  ms: number
}

export interface BaseCountDown extends BaseProps {
  type: CountDownType
  paused: boolean
  startTime: number
  endTime: number
  remainingTime: number
  millisecond: boolean
  format: string
  autoStart: boolean
  time: number
  destroy: boolean
  onEnd: () => void
  onPaused: (restTime: number) => void
  onRestart: (restTime: number) => void
  onUpdate: (restTime: string | CountDownTime) => void
  children: ReactNode
}
