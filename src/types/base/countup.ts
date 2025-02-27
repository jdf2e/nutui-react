import { BaseProps } from './baseprops'

export interface BaseCountUp extends BaseProps {
  length: number
  value: string
  delay: number
  duration: number
  thousands: boolean
}
