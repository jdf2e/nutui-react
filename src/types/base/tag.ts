import { ReactNode } from 'react'
import { BaseProps } from './baseprops'
import { UIType } from './baseatom'

export interface BaseTag<EVENT = any> extends BaseProps {
  type: UIType
  background: string
  color: string
  plain: boolean
  round: boolean
  mark: boolean
  closeable: boolean
  closeIcon: ReactNode
  onClick: (e: EVENT) => void
  onClose: (e: EVENT) => void
}
