// meta/components.json 的结构类型。schema 见仓库 scripts/build-meta.mjs。
// 注：随包 data 快照里，prepare-data 已把平台对应的 api 归一到 `api` 字段，
// 运行时代码只读 `api`，不感知 apiTaro。apiTaro 仅出现在仓库根 meta，类型此处保留以备。

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
  apiTaro?: { tables: ApiTable[] }
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

// 文档语言维度。具体支持哪些由各包 CliConfig.langs 决定（H5: zh/en；Taro: zh）。
export type Lang = string

export type OutputFormat = 'text' | 'json'
