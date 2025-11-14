import { BaseProps } from '../../base/props'

export interface BaseProgress extends BaseProps {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
  lazy: boolean
  delay: number
  borderRadius: string
  fontSize: string
  activeMode: string
  duration: number
  ariaLabel: string
  onActiveEnd: () => void
}
