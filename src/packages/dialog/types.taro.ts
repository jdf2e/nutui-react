import { ITouchEvent } from '@tarojs/components'

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
  'onOverlayClick' | 'onClick'
> & {
  onClick: (event: ITouchEvent) => void
  onOverlayClick: (event: ITouchEvent) => boolean | void
}
