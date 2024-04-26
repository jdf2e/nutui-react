import { createContext } from 'react'
import { CheckboxLimit, CheckboxLabelPosition } from './types'

const CheckboxGroupContext = createContext<{
  labelPosition: CheckboxLabelPosition
  disabled: boolean | undefined
  list: boolean
  value: string[]
  max: number | undefined
  check: (value: string) => void
  uncheck: (value: string) => void
  onLimit: (type: CheckboxLimit) => void
} | null>(null)

export default CheckboxGroupContext
