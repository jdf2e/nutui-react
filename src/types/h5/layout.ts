import { BaseCol, BaseRow } from '../base/layout'
import { UILayout } from '../base/baseatom'

export interface WebColProps extends BaseCol {}
export interface WebRowProps extends BaseRow {
  onClick: (e: React.MouseEvent<HTMLDivElement>, type: UILayout) => void
}
