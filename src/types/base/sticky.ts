import { BaseProps } from './baseprops'
import { PositionY } from './baseatom'

export interface BaseSticky<CONTAINER = any> extends BaseProps {
  container: CONTAINER
  position: PositionY
  threshold: number
  zIndex: number
  onChange: (val: boolean) => void
}
