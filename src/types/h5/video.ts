import { BaseVideo } from '../base/video'

export interface WebVideoProps
  extends Omit<BaseVideo, 'onPlay' | 'onPause' | 'onPlayEnd'> {
  onPlay?: (element: HTMLVideoElement) => void
  onPause?: (element: HTMLVideoElement) => void
  onPlayEnd?: (element: HTMLVideoElement) => void
}
