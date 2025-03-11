import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseSwitch<EVENT = any> extends BaseProps {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  activeText: ReactNode
  inactiveText: ReactNode
  onChange: (val: boolean, event: EVENT) => void
}
