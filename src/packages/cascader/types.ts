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

export interface CascaderFormat {
  topId?: string | number | null
  idKey?: string
  pidKey?: string
  sortKey?: string
}
