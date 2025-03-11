import { BaseProps } from '../../base/props'
import { PositionY } from '../../base/atoms'

export interface BaseSticky<CONTAINER = any> extends BaseProps {
  container: CONTAINER
  position: PositionY
  threshold: number
  zIndex: number
  onChange: (val: boolean) => void
}
