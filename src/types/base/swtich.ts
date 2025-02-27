import { ReactNode } from 'react'
import { BaseProps } from './baseprops'

export interface BaseSwitch extends BaseProps {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  activeText: ReactNode
  inactiveText: ReactNode
  onChange: (val: boolean, event: any) => void
}
