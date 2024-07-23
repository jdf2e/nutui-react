import React from 'react'
import { GridItemProps } from '../griditem/types'

const gridContext = {
  onClick: (item: GridItemProps, index: number) => {},
}

export default React.createContext(gridContext)
