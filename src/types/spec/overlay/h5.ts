import { BaseOverlay } from './base'

export interface WebOverlayProps extends Omit<BaseOverlay, 'onClick'> {
  onClick: (event: React.MouseEvent) => void
}
