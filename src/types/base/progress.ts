import { BaseProps } from './baseprops'

export interface BaseProgress extends BaseProps {
  percent: number
  background: string
  color: string
  strokeWidth: string
  showText: boolean
  animated: boolean
  lazy: boolean
  delay: number
}
