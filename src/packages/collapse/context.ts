import { createContext } from 'react'

const collapseContext = {
  isOpen: (name: string) => {
    return true
  },
  updateValue: (name: string) => {},
  expandIcon: null as any,
  rotate: 180,
}

export default createContext(collapseContext)
