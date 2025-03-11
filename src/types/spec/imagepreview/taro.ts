import { BaseImagePreview } from './base'

export interface TaroImagePreviewProps
  extends Omit<BaseImagePreview, 'autoPlay'> {
  autoPlay: boolean
  showMenuByLongpress: boolean
}
