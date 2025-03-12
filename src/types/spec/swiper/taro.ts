import { SwiperProps } from '@tarojs/components'
import { ReactNode } from 'react'
import { BaseSwiper, BaseSwiperItem } from './base'
import { BaseProps, Direction, SimpleValue } from '@/types'

type OmittedSwiperProps = Omit<SwiperProps, 'ref' | 'style'>
type OmittedKeys = keyof BaseSwiper
export type TaroSwiperProps = Omit<BaseSwiper, OmittedKeys> &
  OmittedSwiperProps &
  BaseProps & {
    width?: SimpleValue
    height?: SimpleValue
    direction: Direction
    indicator: ReactNode
    autoPlay: boolean
    loop: boolean
    defaultValue: number
  }

export interface TaroSwiperItemProps extends Omit<BaseSwiperItem, 'onClick'> {
  itemId?: string
  skipHiddenItemLayout?: boolean
}
