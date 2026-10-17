import { BaseImagePreview } from './base'
import { WebSwiperProps } from '@/types'

type props = BaseImagePreview & Omit<WebSwiperProps, 'autoPlay' | 'indicator'>
export interface WebImagePreviewProps extends Omit<props, 'autoplay'> {}
