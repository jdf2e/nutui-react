import { createContext } from 'react'

const CheckboxGroupContext = createContext<{
  labelPosition: 'left' | 'right'
  disabled: boolean | undefined
  value: string[]
  max: number | undefined
  check: (value: string) => void
  uncheck: (value: string) => void
} | null>(null)

export default CheckboxGroupContext
