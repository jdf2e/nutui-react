import React from 'react'
import { Swiper } from './swiper.taro'
import SwiperItem from '@/packages/swiperitem/index.taro'
import { TaroSwiperProps } from '@/types'

export type { TaroSwiperProps as SwiperProps } from '@/types'
type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<TaroSwiperProps> & React.RefAttributes<any>
> & {
  Item: typeof SwiperItem
}
const InnerSwiper = Swiper as CompoundedComponent
InnerSwiper.Item = SwiperItem
export default InnerSwiper
