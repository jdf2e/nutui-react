import { ITouchEvent } from '@tarojs/components'
import { BaseDialog } from './dialog.taro'

import {
  ContentProps as ContentWebProps,
  DialogBasicProps as DialogBasicWebProps,
} from './types'

export type {
  DialogConfigType,
  DialogCloseIconPosition,
  DialogFooterDirection,
  DialogWrapProps,
  DialogConfirmProps,
  DialogReturnProps,
} from './types'

export type ContentProps = Omit<ContentWebProps, 'onClick'> & {
  onClick: (event: ITouchEvent) => void
}

export type DialogBasicProps = Omit<
  DialogBasicWebProps,
  'onOverlayClick' | 'onConfirm'
> & {
  onOverlayClick: (event: ITouchEvent) => boolean | void
  onConfirm?: (e?: ITouchEvent) => PromiseLike<any> | void
}

export default BaseDialog
