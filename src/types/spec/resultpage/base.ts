import { ReactNode } from 'react'
import { UIFill, UISize, UIType } from '../../base/atoms'
import { BaseProps } from '../../base/props'

export type ResultPageStatusOptions = {
  [key: string]: React.ReactNode
}
export type ResultPageStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'waiting'

export type ResultPageAction = {
  text: ReactNode
  type?: UIType
  size?: UISize
  fill?: UIFill
  disabled?: boolean
  onClick?: () => void
}

export interface BaseResultPage extends BaseProps {
  title: ReactNode
  description: ReactNode
  icon: ReactNode
  status: ResultPageStatus
  actions: ResultPageAction[]
}
