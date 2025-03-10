import { ReactNode } from 'react'
import { PopupCloseIconPosition } from '../popup/base'

export interface CascaderPane {
  nodes: []
  selectedNode: CascaderOption | null
  paneKey: string
}

export interface CascaderOption {
  text?: string
  value?: number | string
  paneKey?: string
  disabled?: boolean
  children?: CascaderOption[]
  leaf?: boolean
  level?: number
  loading?: boolean
  root?: boolean
}

export interface CascaderConfig {
  value?: string
  text?: string
  children?: string
}

export type CascaderValue = Exclude<CascaderOption['value'], undefined>[]

export interface CascaderOptionKey {
  textKey: string
  valueKey: string
  childrenKey: string
}
export type CascaderActions = {
  open: () => void
  close: () => void
}
export interface CascaderFormat {
  topId?: string | number | null
  idKey?: string
  pidKey?: string
  sortKey?: string
}

export interface BaseCascader {
  popup: boolean
  visible: boolean // popup visible
  activeColor: string
  activeIcon: string
  options: CascaderOption[]
  value?: CascaderValue
  defaultValue?: CascaderValue
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  closeable: boolean
  closeIconPosition: PopupCloseIconPosition
  closeIcon: ReactNode
  lazy: boolean
  onLoad: (node: any, resolve: any) => void
  onChange: (value: CascaderValue, params?: any) => void
  onPathChange: (value: CascaderValue, params: any) => void
}
