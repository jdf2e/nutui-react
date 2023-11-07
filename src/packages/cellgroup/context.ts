import { createContext } from 'react'

const CellGroupContext = createContext<{ divider: boolean } | null>(null)

export default CellGroupContext
