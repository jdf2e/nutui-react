import { BaseImagePreview } from '../base/imagepreview'

export interface TaroImagePreviewProps
  extends Omit<BaseImagePreview, 'autoPlay'> {
  autoPlay: boolean
  showMenuByLongpress: boolean
}
