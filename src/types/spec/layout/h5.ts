import { BaseCol, BaseRow } from './base'
import { UILayout } from '@/types'

export interface WebColProps extends BaseCol {}
export interface WebRowProps extends BaseRow {
  onClick: (e: React.MouseEvent<HTMLDivElement>, type: UILayout) => void
}
