import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export type CollapseActiveName = Array<string> | string

export interface BaseCollapse extends BaseProps {
  activeName: CollapseActiveName
  defaultActiveName: CollapseActiveName
  accordion: boolean
  expandIcon: ReactNode
  rotate: number
  onChange: (
    activeName: CollapseActiveName,
    name: string,
    isOpen: boolean
  ) => void
}

export interface BaseCollapseItem extends BaseProps {
  title: ReactNode
  name: string
  expandIcon: ReactNode
  disabled: boolean
  rotate: number
  extra: ReactNode
}
