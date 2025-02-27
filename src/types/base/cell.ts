import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { FlexAlign } from './baseatom'

export interface BaseCell extends BaseProps {
  title: ReactNode
  description: ReactNode
  extra: ReactNode
  radius: string | number
  align: FlexAlign
  clickable: boolean
  isLast: boolean
  onClick: (event: any) => void
}

export interface BaseCellGroup extends BaseProps {
  title: ReactNode
  description: ReactNode
  children: ReactNode
  divider: boolean
}
