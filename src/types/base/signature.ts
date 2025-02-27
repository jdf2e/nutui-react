import { ReactNode } from 'react'
import { BaseProps } from './baseprops'

export type SignatureType = 'jpg' | 'png'

export interface BaseSignature extends BaseProps {
  type: SignatureType
  lineWidth: number
  strokeStyle: string
  unsupported: ReactNode
  onConfirm: () => void
  onClear: () => void
}
