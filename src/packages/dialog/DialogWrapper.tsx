import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import { DialogWrap } from './DialogWrap'

interface DialogWrapperProps {
  visible?: boolean
  title?: ReactNode
  footer?: ReactNode
}

export const DialogWrapper: FunctionComponent<
  Partial<DialogWrapperProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { visible } = props

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <DialogWrap {...props} />
    </div>
  )
}

DialogWrapper.displayName = 'NutDialogWrapper'
