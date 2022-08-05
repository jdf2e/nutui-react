export interface CascaderPane {
  nodes: []
  selectedNode: CascaderOption | null
  paneKey: string | undefined
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

export type CascaderValue = CascaderOption['value'][]

export interface convertConfig {
  topId?: string | number | null
  idKey?: string
  pidKey?: string
  sortKey?: string
}
