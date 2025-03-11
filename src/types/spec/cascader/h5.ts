import { BaseCascader } from './base'
import { PopupProps } from '@/packages/popup'
import { WebPopupProps } from '@/types'

type PickerProps = Pick<
  PopupProps,
  | 'className'
  | 'style'
  | 'closeIcon'
  | 'closeable'
  | 'title'
  | 'left'
  | 'closeIconPosition'
  | 'onClose'
>

export interface WebCascaderProps extends BaseCascader, PickerProps {
  popupProps: Partial<
    Omit<
      WebPopupProps,
      | 'closeIcon'
      | 'closeable'
      | 'title'
      | 'left'
      | 'closeIconPosition'
      | 'onClose'
    >
  >
}
