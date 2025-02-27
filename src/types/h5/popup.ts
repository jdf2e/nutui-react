import { BasePopup } from '../base/popup'

export interface WebPopupProps extends BasePopup {
  overlayStyle: React.CSSProperties
  overlayClassName: string
  portal: any
}
