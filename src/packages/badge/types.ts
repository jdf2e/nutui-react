import { BasicComponent } from '@/utils/typings'

export type BadgeFill = 'solid' | 'outline'
export type BadgeDotSize = 'small' | 'normal' | 'large'

export interface BadgeProps extends BasicComponent {
  value: React.ReactNode
  dot: boolean
  max: number
  top: string | number
  right: string | number
  fill: BadgeFill
  size: BadgeDotSize
}
