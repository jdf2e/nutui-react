import { BaseProps } from './baseprops'

export interface BaseVideo extends BaseProps {
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
  onPlay: (element: any) => void
  onPause: (element: any) => void
  onPlayEnd: (element: any) => void
}
