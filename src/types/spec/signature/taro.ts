import { SignatureType } from './base'
import { BaseProps } from '../../base/props'

export interface TaroSignatureProps extends BaseProps {
  canvasId: string
  type: SignatureType
  lineWidth: number
  strokeStyle: string
  unSupportTpl?: string
  onConfirm?: (dataurl: string, isSigned?: boolean) => void
  onClear?: () => void
}
