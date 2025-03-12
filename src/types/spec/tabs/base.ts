import { CSSProperties, ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { Direction, PositionX, SimpleValue } from '../../base/atoms'

export type TabsTitle = {
  title: string
  disabled: boolean
  active?: boolean
  value: SimpleValue
}

export interface BaseTabs extends BaseProps {
  tabStyle: CSSProperties
  value: SimpleValue
  defaultValue: SimpleValue
  activeColor: string
  direction: Direction
  activeType: 'line' | 'smile' | 'simple' | 'card' | 'button' | 'divider'
  duration: number | string
  align: PositionX
  title: () => ReactNode[]
  onChange: (index: SimpleValue) => void
  onClick: (index: SimpleValue) => void
  autoHeight: boolean
}

export interface BaseTabPane extends BaseProps {
  title: SimpleValue
  value: SimpleValue
  disabled: boolean
}
