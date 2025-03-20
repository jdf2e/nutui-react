import { ImageProps } from '@tarojs/components'
import { BaseImage } from './base'

export interface TaroImageProps
  extends Omit<BaseImage, 'onClick' | 'onError' | 'onLoad' | 'style'>,
    ImageProps {}
