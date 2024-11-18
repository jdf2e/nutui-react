import { ReactNode } from 'react'
import { BasicComponent } from '@/utils/typings'

export interface SegmentedItem {
  label: ReactNode
  value: string | number
  icon?: ReactNode
  disabled?: boolean
  className?: string
}

export interface SegmentedProps extends BasicComponent {
  options: string[] | number[] | SegmentedItem[]
  value: string | number
  defaultValue: string | number
  onChange: (value: string | number) => void
}
