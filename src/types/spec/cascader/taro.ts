import { BaseCascader } from './base'
import { PopupProps } from '@/packages/popup'
import { TaroPopupProps } from '@/types'

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

export interface TaroCascaderProps extends BaseCascader, PickerProps {
  popupProps: Partial<
    Omit<
      TaroPopupProps,
      | 'closeIcon'
      | 'closeable'
      | 'title'
      | 'left'
      | 'closeIconPosition'
      | 'onClose'
    >
  >
}
