import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { Direction, SimpleValue } from './baseatom'

export interface BaseGrid extends BaseProps {
  columns: SimpleValue
  gap: SimpleValue
  center: boolean
  square: boolean
  reverse: boolean
  direction: Direction
  onClick: (item: BaseGridItem, index: number) => void
}

export interface BaseGridItem extends BaseProps {
  text: ReactNode
  index: number
  columns: SimpleValue
  gap: SimpleValue
  center: boolean
  square: boolean
  reverse: boolean
  direction: Direction
}
