import { BasicComponent } from '@/utils/typings'

export type PriceSize = 'xlarge' | 'large' | 'normal' | 'small'
export type PriceColor = 'primary' | 'gray' | 'darkgray'
export interface PriceProps extends BasicComponent {
  color: PriceColor
  price: number | string
  symbol: string
  digits: number
  thousands: boolean
  position: string
  size: PriceSize
  line: boolean
}
