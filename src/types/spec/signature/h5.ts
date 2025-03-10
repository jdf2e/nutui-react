import { BaseSignature } from './base'

export interface WebSignatureProps extends Omit<BaseSignature, 'onConfirm'> {
  onConfirm?: (
    canvas: HTMLCanvasElement,
    dataurl: string,
    isSigned?: boolean
  ) => void
}
