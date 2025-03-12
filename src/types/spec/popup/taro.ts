import { BasePopup } from './base'

export interface TaroPopupProps extends BasePopup {
  overlayStyle: React.CSSProperties
  overlayClassName: string
  portal: any
}
