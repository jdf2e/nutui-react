import { SyntheticEvent } from 'react'
import { BaseAudio } from './base'

export interface WebAudioProps
  extends Omit<
    BaseAudio,
    'onBack' | 'onForward' | 'onPause' | 'onEnd' | 'onMute' | 'onCanPlay'
  > {
  onBack: (e: HTMLAudioElement) => void
  onForward: (e: HTMLAudioElement) => void
  onPause: (e: SyntheticEvent<HTMLAudioElement>) => void
  onEnd: (e: SyntheticEvent<HTMLAudioElement>) => void
  onMute: (e: HTMLAudioElement) => void
  onCanPlay: (e: SyntheticEvent<HTMLAudioElement>) => void
}
