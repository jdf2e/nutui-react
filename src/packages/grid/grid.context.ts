import React from 'react'
import { GridItemProps } from '../griditem/griditem'

const gridContext = {
  onChange: (item: GridItemProps, index: number) => {},
}

export default React.createContext(gridContext)
