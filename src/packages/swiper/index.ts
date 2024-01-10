import React from 'react'
import { Swiper, SwiperProps } from './swiper'
import { SwiperRef } from './types'
import { SwiperItem } from './item'
import { Stack } from './stack'

export type { SwiperProps } from './swiper'
export type { SwiperIndicator, SwiperRef, SwiperDirections } from './types'
type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<SwiperProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
    React.RefAttributes<SwiperRef>
> & {
  Item: typeof SwiperItem
  Stack: typeof Stack
}
const InnerSwiper = Swiper as CompoundedComponent
InnerSwiper.Item = SwiperItem
InnerSwiper.Stack = Stack
export default InnerSwiper
