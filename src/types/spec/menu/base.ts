import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export type MenuTriggerType = 'NORMAL' | 'REF'
export type MenuCallBack = (index: number, from?: MenuTriggerType) => void
export interface MenuOptionItem {
  text: string
  value: SimpleValue
}

export interface BaseMenu extends BaseProps {
  activeColor: string
  overlay: boolean
  closeOnOverlayClick: boolean
  scrollFixed: boolean | SimpleValue
  lockScroll: boolean
  icon: ReactNode
  children: ReactNode
  onOpen: MenuCallBack
  onClose: MenuCallBack
}

export interface BaseMenuItem extends BaseProps {
  title: ReactNode
  titleIcon: ReactNode
  options: MenuOptionItem[]
  disabled: boolean
  columns: number
  icon: ReactNode
  closeOnClickAway: boolean
  direction: string
  activeTitleClass: string
  inactiveTitleClass: string
  value: SimpleValue
  defaultValue: SimpleValue
  children: ReactNode
  onChange: (event: any) => void
}
