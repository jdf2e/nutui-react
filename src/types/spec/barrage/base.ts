import { BaseProps } from '../../base/props'

export interface BaseBarrage extends BaseProps {
  list: Array<string>
  interval: number
  loop: boolean
  duration: number
  rows: number
  gapY: number
}
