import { BasicComponent } from '@/utils/typings'

export type PriceSize = 'xlarge' | 'large' | 'normal' | 'small' | 'mini'
export type PriceType = 'default' | 'primary'
export interface PriceProps extends BasicComponent {
  type: PriceType
  price: number | string
  symbol: string
  digits: number
  thousands: boolean
  position: string
  size: PriceSize
  line: boolean
}
