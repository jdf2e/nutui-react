import { BaseProps } from '../../base/props'

export interface BaseNotify extends BaseProps {
  id: string
  duration: number
  type: string
  position: string
  onClick: () => void
  onClose: () => void
}
