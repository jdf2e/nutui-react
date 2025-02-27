import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { Direction, SimpleValue } from './baseatom'

export interface FocusEffect {
  name: 'focus'
  scale: number
}

export interface BaseSwiper extends BaseProps {
  direction: Direction
  indicator: ReactNode
  loop: boolean
  duration: SimpleValue
  autoPlay: boolean | number
  defaultValue: number
  touchable: boolean
  effect: FocusEffect | undefined
  slideSize?: number
  onChange?: (index: number) => void
}

export interface BaseSwiperItem extends BaseProps {
  onClick?: (e: any) => void
}
