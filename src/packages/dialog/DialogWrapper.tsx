import React, {
  FunctionComponent,
  ReactNode,
  HTMLAttributes,
  useEffect,
} from 'react'
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
  Partial<DialogWrapperProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { visible, lockScroll } = props
  useEffect(() => {
    if (lockScroll && visible) {
      document.body.classList.add('nut-overflow-hidden')
    } else {
      document.body.classList.remove('nut-overflow-hidden')
    }
  }, [visible])
  useEffect(() => {
    return () => {
      if (document.body.classList.value.includes('nut-overflow-hidden')) {
        document.body.classList.remove('nut-overflow-hidden')
      }
    }
  }, [])

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <DialogWrap {...props} />
    </div>
  )
}

DialogWrapper.displayName = 'NutDialogWrapper'
