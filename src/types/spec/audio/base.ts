import { BaseProps } from '../../base/props'

export interface BaseAudio extends BaseProps {
  src: string
  muted: boolean
  autoPlay: boolean
  loop: boolean
  preload: string
  type: string
  onBack: (event: any) => void
  onForward: (event: any) => void
  onPause: (event: any) => void
  onEnd: (event: any) => void
  onMute: (event: any) => void
  onCanPlay: (event: any) => void
}
