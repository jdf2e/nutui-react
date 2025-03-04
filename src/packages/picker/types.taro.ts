import { PopupProps } from '@/packages/popup/types.taro'
import { PickerProps as PickerWebProps } from './types'

export type PickerProps = Omit<PickerWebProps, 'popupProps'> & {
  popupProps: Partial<
    Omit<PopupProps, 'title' | 'onClose' | 'closeOnOverlayClick'>
  >
}
