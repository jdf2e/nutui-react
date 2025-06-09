import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Direction, SimpleValue } from '../../base/atoms'

export type SwiperRef = {
  to: (index: number) => void
  next: () => void
  prev: () => void
}

export interface FocusEffect {
  name: 'focus'
  scale: number
}

export interface BaseSwiper extends BaseProps {
  direction: Direction
  indicator: ReactNode
  loop: boolean
  duration: SimpleValue
  /**
   * @deprecated Please use `autoplay` prop instead.
   */
  autoPlay: boolean | number
  autoplay: boolean | number
  defaultValue: number
  touchable: boolean
  effect: FocusEffect | undefined
  slideSize?: number
  onChange?: (index: number) => void
}

export interface BaseSwiperItem<Event = any> extends BaseProps {
  onClick?: (e: Event) => void
}
