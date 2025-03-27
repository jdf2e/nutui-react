import { PositionY } from '@/types/base/atoms'
import { BaseProps } from '../../base/props'

export interface BaseNotify extends BaseProps {
  id: string
  distance: number
  navHeight: number
  closeable: boolean
  leftIcon: React.ReactNode
  rightIcon: React.ReactNode
  position: PositionY
  duration: number
  onClick: () => void
  onClose: () => void
}
