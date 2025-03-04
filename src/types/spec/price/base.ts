import { BaseProps } from '../../base/props'
import { SimpleValue, UISize } from '../../base/atoms'

export type PriceSize = Exclude<UISize, 'mini'>
export type PriceColor = 'primary' | 'gray' | 'darkgray'

export interface BasePrice extends BaseProps {
  color: PriceColor
  price: SimpleValue
  symbol: string
  digits: number
  thousands: boolean
  position: string
  size: PriceSize
  line: boolean
}
