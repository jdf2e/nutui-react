import { BaseImagePreview } from './base'
import { TaroSwiperProps } from '@/types'

type props = Omit<BaseImagePreview, 'autoPlay'> &
  Omit<TaroSwiperProps, 'autoPlay' | 'autoplay' | 'indicator'>
export interface TaroImagePreviewProps extends props {
  autoPlay: boolean
  showMenuByLongpress: boolean
}
