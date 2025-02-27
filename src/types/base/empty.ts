import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { SimpleValue, UIFill, UISize, UIType } from './baseatom'

export interface EmptyAction {
  text: ReactNode
  type: UIType
  size: UISize
  fill: UIFill
  disabled: boolean
  onClick: () => void
}

export type EmptyState = 'empty' | 'error' | 'network'

type statusOptions = {
  [key: string]: string
}

export interface BaseEmpty extends BaseProps {
  image: ReactNode
  imageSize: SimpleValue
  title: ReactNode
  description: ReactNode
  size: Extract<UISize, 'small' | 'base'>
  status: EmptyState
  actions: Array<EmptyAction>
}
