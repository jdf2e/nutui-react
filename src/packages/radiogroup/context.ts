import React from 'react'

export default React.createContext<{
  labelPosition: 'left' | 'right'
  disabled: boolean | undefined
  value: string | number
  check: (value: string | number) => void
  uncheck: () => void
} | null>(null)
