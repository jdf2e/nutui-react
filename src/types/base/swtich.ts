import { ReactNode } from 'react'
import { BaseProps } from './baseprops'

export interface BaseSwitch<EVENT = any> extends BaseProps {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  activeText: ReactNode
  inactiveText: ReactNode
  onChange: (val: boolean, event: EVENT) => void
}
