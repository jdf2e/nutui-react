import { BaseProps } from '../../base/props'
import { SimpleValue } from '../../base/atoms'

export interface BaseInputNumber extends BaseProps {
  value: SimpleValue
  defaultValue: SimpleValue
  allowEmpty: boolean
  min: SimpleValue
  max: SimpleValue
  disabled: boolean
  readOnly: boolean
  step: number
  digits: number
  select: boolean
  formatter?: (value?: SimpleValue) => string
  onPlus: (e: any) => void
  onMinus: (e: any) => void
  onOverlimit: (e: any) => void
  onBlur: (e: any) => void
  onFocus: (e: any) => void
  beforeChange: (value: SimpleValue) => boolean | Promise<boolean>
  onChange: (param: string | number, e: any) => void
}
