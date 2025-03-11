import React from 'react'
import { Swiper } from './swiper'
import SwiperItem from '@/packages/swiperitem'
import { SwiperRef, WebSwiperProps } from '@/types'

export type { SwiperRef, WebSwiperProps as SwiperProps } from '@/types'
type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<WebSwiperProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
    React.RefAttributes<SwiperRef>
> & {
  Item: typeof SwiperItem
}
const InnerSwiper = Swiper as CompoundedComponent
InnerSwiper.Item = SwiperItem
export default InnerSwiper
