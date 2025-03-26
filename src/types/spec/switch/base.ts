import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface BaseSwitch extends BaseProps {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  activeText: ReactNode
  inactiveText: ReactNode
  loadingIcon: ReactNode
  onChange: (val: boolean) => void
}
