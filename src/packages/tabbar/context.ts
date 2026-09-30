import React from 'react'

export interface TabbarContext {
  selectIndex: number
  inactiveColor: string
  activeColor: string
  skin: boolean
  handleClick: (value: number) => void
}

export default React.createContext<TabbarContext | null>(null)
