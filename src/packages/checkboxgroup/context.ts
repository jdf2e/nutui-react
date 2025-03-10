import { createContext } from 'react'
import { CheckboxLimit, PositionX } from '@/types'

const CheckboxGroupContext = createContext<{
  labelPosition: PositionX
  disabled: boolean | undefined
  list: boolean
  value: string[]
  max: number | undefined
  check: (value: string) => void
  uncheck: (value: string) => void
  onLimit: (type: CheckboxLimit) => void
} | null>(null)

export default CheckboxGroupContext
