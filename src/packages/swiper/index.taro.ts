import React from 'react'
import { Swiper, SwiperProps } from './swiper.taro'
import SwiperItem from '@/packages/swiperitem/index.taro'

export type { SwiperProps } from './swiper.taro'
type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<SwiperProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
    React.RefAttributes<any>
> & {
  Item: typeof SwiperItem
}
const InnerSwiper = Swiper as CompoundedComponent
InnerSwiper.Item = SwiperItem
export default InnerSwiper
