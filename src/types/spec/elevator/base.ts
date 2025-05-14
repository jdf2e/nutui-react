import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export interface ElevatorItem {
  name: string
  id: SimpleValue
  [key: string]: SimpleValue
}

export type ElevatorFloorKey = string
export type ElevatorList = {
  list: Array<ElevatorItem>
  [key: string]: SimpleValue | Array<ElevatorItem>
}

export type ElevatorMode = 'horizontal' | 'vertical'

export interface BaseElevator extends BaseProps {
  defaultValue?: ElevatorItem
  value?: ElevatorItem
  mode: ElevatorMode
  height: SimpleValue
  floorKey: ElevatorFloorKey
  list: ElevatorList[]
  sticky: boolean
  spaceHeight: number
  titleHeight: number
  showKeys: boolean
  onItemClick: (key: string, item: ElevatorItem) => void
  onIndexClick: (key: string) => void
}
