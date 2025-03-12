import { BasePopup } from './base'

export interface WebPopupProps extends BasePopup {
  overlayStyle: React.CSSProperties
  overlayClassName: string
  portal: any
}
