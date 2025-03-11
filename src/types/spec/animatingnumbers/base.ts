import { BaseProps } from '../../base/props'

export interface BaseCountUp extends BaseProps {
  length: number
  value: string
  delay: number
  duration: number
  thousands: boolean
}
