import { createContext } from 'react'

export const TabsContext = createContext<{
  value?: any
  animated?: boolean
  autoHeight?: boolean
}>({})
