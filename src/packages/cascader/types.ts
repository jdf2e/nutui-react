import { ReactNode } from 'react'
import { PopupProps } from '@/packages/popup'

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
  loading?: boolean

  [key: string]: any
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

export interface CascaderFormat {
  topId?: string | number | null
  idKey?: string
  pidKey?: string
  sortKey?: string
}

export type CascaderActions = {
  open: () => void
  close: () => void
}
export type CascaderPopupProps = Pick<
  PopupProps,
  | 'className'
  | 'style'
  | 'closeIcon'
  | 'closeable'
  | 'title'
  | 'left'
  | 'closeIconPosition'
  | 'onClose'
>
export type CascaderSupportPopupProps = Partial<
  Omit<
    PopupProps,
    | 'closeIcon'
    | 'closeable'
    | 'title'
    | 'left'
    | 'closeIconPosition'
    | 'onClose'
  >
>

export interface CascaderProps extends CascaderPopupProps {
  visible: boolean
  value: CascaderValue
  activeColor: string
  activeIcon: ReactNode
  defaultValue: CascaderValue
  options: CascaderOption[]
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  closeable: boolean
  closeIcon: ReactNode
  closeIconPosition: string
  popup: boolean
  popupProps: CascaderSupportPopupProps
  lazy: boolean
  onLoad: (
    node: CascaderOption,
    levelIndex: number
  ) => Promise<CascaderOption[]>
  onChange: (value: CascaderValue, pathNodes: CascaderOption[]) => void
  onPathChange: (value: CascaderValue, pathNodes: CascaderOption[]) => void
  onTabsChange: (index: number) => void
  onClose: () => void
}
