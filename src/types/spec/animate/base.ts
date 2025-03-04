import { BaseProps } from '../../base/props'

export type AnimateType =
  | 'shake'
  | 'ripple'
  | 'breath'
  | 'float'
  | 'slide-right'
  | 'slide-left'
  | 'slide-top'
  | 'slide-bottom'
  | 'jump'
  | 'twinkle'
  | 'flicker'
export type AnimateAction = 'initial' | 'click'

export interface BaseAnimate extends BaseProps {
  type: AnimateType
  action: AnimateAction
  loop: boolean
  onClick: (event: any) => void
}
