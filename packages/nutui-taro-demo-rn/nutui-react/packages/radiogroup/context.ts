import React from 'react'
import { RadioGroupShape } from './types'

export default React.createContext<{
  labelPosition: 'left' | 'right'
  disabled: boolean | undefined
  value: string | number
  shape: RadioGroupShape | undefined
  check: (value: string | number) => void
  uncheck: () => void
} | null>(null)
