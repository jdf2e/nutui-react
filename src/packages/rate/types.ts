import { BasicComponent } from '@/utils/typings'

export type RateSize = 'large' | 'normal' | 'small'

export interface RateProps extends BasicComponent {
  size: RateSize
  showScore: boolean
  count: number
  value: number
  defaultValue: number
  min: number
  checkedIcon: React.ReactNode
  uncheckedIcon: React.ReactNode
  disabled: boolean
  readOnly: boolean
  allowHalf: boolean
  touchable: boolean
  onChange: (value: number) => void
  onTouchEnd: (e: TouchEvent, value: number) => void
}
