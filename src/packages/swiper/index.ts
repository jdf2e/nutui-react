import React from 'react'
import { Swiper, SwiperProps } from './swiper'
import SwiperItem from '@/packages/swiperitem'
import { SwiperRef } from '@/packages/swiper/types'

export type { SwiperProps } from './swiper'
export type { SwiperRef } from './types'
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
