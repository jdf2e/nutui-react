import React from 'react'
import { GridItemProps } from '../griditem/griditem'

const context = {
  onClick: (item: GridItemProps, index: number) => {},
}

export default React.createContext(context)
