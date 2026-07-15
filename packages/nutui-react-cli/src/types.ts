// meta/components.json 的结构类型（React/H5 视角）。schema 见仓库 scripts/build-meta.mjs。

export interface Token {
  cssVar: string
  scssVar: string
  default: string | null
}

export type TableKind = 'props' | 'methods' | 'ref' | 'other'

export interface ApiRow {
  prop: string
  desc: string
  type: string
  default: string
}

export interface ApiTable {
  name: string
  kind: TableKind
  sourceComponent: string
  subComponent: string | null
  rows: ApiRow[]
}

export interface DocRefs {
  h5: string | null
  enUS: string | null
  zhTW: string | null
  taro: string | null
}

export interface Component {
  id: string
  name: string
  cName: string
  version: string
  category: { name: string; enName: string }
  taro: boolean
  v15: boolean
  v16: boolean
  author?: string
  type?: string
  desc?: string
  sort?: number
  show?: boolean
  docs: DocRefs
  demos: { h5: string[]; taro: string[] }
  api: { tables: ApiTable[] }
  tokens: Token[]
}

export interface Category {
  name: string
  enName: string
  components: string[]
}

export interface Meta {
  schemaVersion: string
  libVersion: string
  componentCount: number
  apiComponentCount: number
  categories: Category[]
  globalTokens: Token[]
  components: Record<string, Component>
}

// CLI 语言维度 -> meta.docs 的 key。React 端只支持 zh / en。
export type Lang = 'zh' | 'en'
export const LANG_TO_DOC_KEY: Record<Lang, 'h5' | 'enUS'> = {
  zh: 'h5',
  en: 'enUS',
}

export type OutputFormat = 'text' | 'json'
