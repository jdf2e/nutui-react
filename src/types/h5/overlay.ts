import { BaseOverlay } from '../base/overlay'

export interface WebOverlayProps extends Omit<BaseOverlay, 'onClick'> {
  onClick: (event: React.MouseEvent) => void
}
