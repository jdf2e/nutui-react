import React, { FunctionComponent, HTMLAttributes } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Content } from './content.taro'
import {
  OverlayProps,
  defaultOverlayProps,
} from '@/packages/overlay/overlay.taro'
import { ComponentDefaults } from '@/utils/typings'
import Overlay from '@/packages/overlay/index.taro'

interface DialogWrapProps extends OverlayProps {
  visible: boolean
  overlay: boolean
  overlayStyle: React.CSSProperties
  overlayClassName: string
  footer: React.ReactNode
  onCancel: () => void
  onClose: () => void
  onOverlayClick: (e: MouseEvent) => boolean | void
}

const defaultDialogProps = {
  ...ComponentDefaults,
  overlay: true,
  overlayStyle: {},
  overlayClassName: '',
  onCancel: () => {},
  onClose: () => {},
  onOverlayClick: (e: MouseEvent) => true,
  ...defaultOverlayProps,
} as DialogWrapProps

export const DialogWrap: FunctionComponent<
  Partial<DialogWrapProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content' | 'onClick'>
> = (props) => {
  const {
    visible,
    overlay,
    overlayStyle,
    overlayClassName,
    closeOnOverlayClick,
    lockScroll,
    onClose,
    onCancel,
    onOverlayClick,
  } = props

  const onHandleClickOverlay = (e: any) => {
    console.log('onClose?.()', closeOnOverlayClick)
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && onClose?.()
      closed && onCancel?.()
    }
  }

  return (
    <>
      {overlay ? (
        <Overlay
          style={overlayStyle}
          className={overlayClassName}
          visible
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
          onClick={onHandleClickOverlay}
        />
      ) : null}

      <CSSTransition
        in={visible}
        timeout={300}
        classNames="fadeDialog"
        unmountOnExit
        appear
      >
        <Content {...props} visible={visible} />
      </CSSTransition>
    </>
  )
}

DialogWrap.defaultProps = defaultDialogProps
DialogWrap.displayName = 'NutDialogWrap'
