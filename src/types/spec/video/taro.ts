import { VideoProps } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { BaseVideo } from './base'

export interface TaroVideoProps
  extends Omit<
    BaseVideo<Omit<VideoProps, 'src'>>,
    'onPlay' | 'onPause' | 'onPlayEnd'
  > {
  onPlay: (event: BaseEventOrig<any>) => void
  onPause: (event: BaseEventOrig<any>) => void
  onPlayEnd: (event: BaseEventOrig<any>) => void
}
