import { SimpleValue } from './baseatom'
import { BaseProps } from './baseprops'

export interface BaseInputNumber extends BaseProps {
  value?: SimpleValue
  defaultValue?: SimpleValue
  min: SimpleValue
  max: SimpleValue
  allowEmpty: boolean
  disabled: boolean
  readOnly: boolean
  step: number
  digits: number
  async: boolean
  select: boolean
  formatter?: (value?: string | number) => string
  onPlus: (e: any) => void
  onMinus: (e: any) => void
  onOverlimit: (e: any) => void
  onBlur: (e: any) => void
  onFocus: (e: any) => void
  onChange: (param: string | number, e: any) => void
}
