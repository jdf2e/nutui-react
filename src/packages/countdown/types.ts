import { BasicComponent } from '@/utils/typings'

export type CountDownType = 'default' | 'primary' | 'text'

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
  onUpdate: (restTime: any) => void
  children: React.ReactNode
}
