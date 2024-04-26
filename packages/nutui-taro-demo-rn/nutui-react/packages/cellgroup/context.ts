import { createContext } from 'react'

const CellGroupContext = createContext<{
  divider: boolean
  group: boolean
} | null>(null)

export default CellGroupContext
