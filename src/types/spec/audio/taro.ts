import { InnerAudioContext } from '@tarojs/taro'
import { BaseAudio } from './base'

export interface TaroAudioProps
  extends Omit<
    BaseAudio,
    | 'onBack'
    | 'onForward'
    | 'onPause'
    | 'onEnd'
    | 'onMute'
    | 'onCanPlay'
    | 'muted'
    | 'autoPlay'
    | 'preload'
  > {
  autoplay: boolean
  onFastBack: (ctx: InnerAudioContext) => void
  onForward: (ctx: InnerAudioContext) => void
  onPause: any
  onPlay: any
  onPlayEnd: (ctx: InnerAudioContext) => void
  onCanPlay: (ctx: InnerAudioContext) => void
}
