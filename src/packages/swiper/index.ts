import React from 'react'
import { Swiper, SwiperProps } from './swiper'
import { SwiperRef } from './types'
import { SwiperItem } from './item'

export type { SwiperProps } from './swiper'
export type { SwiperIndicator, SwiperRef, SwiperDirections } from './types'
type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<SwiperProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
    React.RefAttributes<SwiperRef>
> & {
  Item: typeof SwiperItem
}
const InnerSwiper = Swiper as CompoundedComponent
InnerSwiper.Item = SwiperItem
export default InnerSwiper
