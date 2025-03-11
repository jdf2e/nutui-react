import { BaseInputNumber } from './base'

export interface WebInputNumberProps extends BaseInputNumber {
  onPlus: (e: React.MouseEvent) => void
  onMinus: (e: React.MouseEvent) => void
  onOverlimit: (
    e: React.MouseEvent | React.ChangeEvent<HTMLInputElement>
  ) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (
    param: string | number,
    e: React.MouseEvent | React.ChangeEvent<HTMLInputElement>
  ) => void
}
