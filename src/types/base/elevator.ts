import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

export interface ElevatorItem {
  name: string
  id: SimpleValue

  [key: string]: SimpleValue
}

export type ElevatorFloorKey = string
export type ElevatorList = {
  list: Array<ElevatorItem>
} & {
  [key: ElevatorFloorKey]: string // 只允许其他属性为字符串
}

export interface BaseElevator extends BaseProps {
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
