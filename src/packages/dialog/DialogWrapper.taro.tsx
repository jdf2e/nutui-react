import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import { View } from '@tarojs/components'
import { DialogWrap } from './DialogWrap'

interface DialogWrapperProps {
  visible?: boolean
  title?: ReactNode
  footer?: ReactNode
  lockScroll?: boolean
  onCancel?: () => void
  onClosed?: () => void
}

export const DialogWrapper: FunctionComponent<
  Partial<DialogWrapperProps> & Omit<HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const { visible, lockScroll } = props

  return (
    <View
      style={{ display: visible ? 'block' : 'none' }}
      catchMove={lockScroll}
    >
      <DialogWrap {...props} />
    </View>
  )
}

DialogWrapper.displayName = 'NutDialogWrapper'
