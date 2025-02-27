import { BaseProps } from './baseprops'

export interface BaseOverlay extends BaseProps {
  zIndex: number
  duration: number
  visible: boolean
  lockScroll: boolean
  closeOnOverlayClick: boolean

  afterShow: () => void
  afterClose: () => void
  onClick: (event: any) => void
}
