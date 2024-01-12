import React from 'react'
import { Swiper, SwiperProps } from './swiper'
import { SwiperRef } from './types'
import { SwiperItem } from '../swiperitem/swiperitem'
import { SwiperFocus } from './swiper-focus'

export type { SwiperProps } from './swiper'
export type { SwiperIndicator, SwiperRef, SwiperDirections } from './types'
type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<SwiperProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
    React.RefAttributes<SwiperRef>
> & {
  Item: typeof SwiperItem
  Focus: typeof SwiperFocus
}
const InnerSwiper = Swiper as CompoundedComponent
InnerSwiper.Item = SwiperItem
InnerSwiper.Focus = SwiperFocus
export default InnerSwiper
