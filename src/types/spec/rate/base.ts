import { ReactNode } from 'react'
import { BasicComponent } from '@/utils/typings'
import { UISize } from '../../base/atoms'

export type RateSize = Extract<UISize, 'large' | 'normal' | 'small'>

export interface BaseRate extends BasicComponent {
  size: RateSize
  showScore: boolean
  count: number
  value: number
  defaultValue: number
  min: number
  checkedIcon: ReactNode
  uncheckedIcon: ReactNode
  disabled: boolean
  readOnly: boolean
  allowHalf: boolean
  touchable: boolean
  onChange: (value: number) => void
  onTouchEnd: (e: TouchEvent, value: number) => void
}
