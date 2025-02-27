import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { SimpleValue } from './baseatom'

export interface BaseSideBarItem extends BaseProps {
  title: string
  disabled: boolean
  active?: boolean
  value: SimpleValue
}

export interface BaseSideBar extends BaseProps {
  value: SimpleValue
  defaultValue: SimpleValue
  contentDuration: number
  sidebarDuration: number
  onChange: (index: SimpleValue) => void
  onClick: (index: SimpleValue) => void
  children?: ReactNode
}
