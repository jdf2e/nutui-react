import { BaseProps } from '../../base/props'
import { Position } from '../../base/atoms'

export type SafeAreaPosition = Position | 'horizontal' | 'all'

export interface BaseSafeArea extends BaseProps {
  position: SafeAreaPosition
}
