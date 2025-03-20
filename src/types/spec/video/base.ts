import { BaseProps } from '../../base/props'

export type BaseVideo<TaroVideo = any> = TaroVideo &
  BaseProps & {
    source: {
      type: string
      src: string
    }
    options: {
      controls?: boolean
      muted?: boolean
      autoplay?: boolean
      poster?: string
      playsinline?: boolean
      loop?: boolean
    }
    onPlay?: (element: any) => void
    onPause?: (element: any) => void
    onPlayEnd?: (element: any) => void
  }
