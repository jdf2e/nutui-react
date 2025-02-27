import { BasePopup } from '../base/popup'

export interface TaroPopupProps extends BasePopup {
  overlayStyle: React.CSSProperties
  overlayClassName: string
  portal: any
}
