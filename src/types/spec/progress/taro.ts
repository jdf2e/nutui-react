import { BaseProgress } from './base'

export interface TaroProgressProps extends BaseProgress {
  showInfo: boolean
  activeColor: string
  backgroundColor: string
  active: boolean
}
export type TaroVideoProgressProps = TaroProgressProps
