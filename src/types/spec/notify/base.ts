import { BaseProps } from '../../base/props'

export interface BaseNotify extends BaseProps {
  id: string
  distance: number
  closeable: boolean
  leftIcon: React.ReactNode
  rightIcon: React.ReactNode
  position: string
  duration: number
  onClick: () => void
  onClose: () => void
}
