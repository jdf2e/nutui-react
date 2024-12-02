import { BasicComponent } from '@/utils/typings'

export type CountDownType = 'default' | 'primary' | 'text'

export interface CountDownTimeProps {
  d: number
  h: number
  m: number
  s: number
  ms: number
}

export interface CountDownProps extends BasicComponent {
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
  onUpdate: (restTime: string | CountDownTimeProps) => void
  children: React.ReactNode
}
