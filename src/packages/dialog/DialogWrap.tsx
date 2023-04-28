import React, { FunctionComponent, HTMLAttributes } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Content } from './Content'
import { OverlayProps, defaultOverlayProps } from '@/packages/overlay/overlay'
import { ComponentDefaults } from '@/utils/typings'
import Overlay from '@/packages/overlay'

interface DialogWrapProps extends OverlayProps {
  visible: boolean
  overlay: boolean
  overlayStyle: React.CSSProperties
  overlayClassName: string
  footer: React.ReactNode
  onCancel: () => void
  onClose: () => void
  onClickOverlay: (e: MouseEvent) => boolean | void
}

const defaultDialogProps = {
  ...ComponentDefaults,
  overlay: true,
  overlayStyle: {},
  overlayClassName: '',
  onCancel: () => {},
  onClose: () => {},
  onClickOverlay: (e: MouseEvent) => true,
  ...defaultOverlayProps,
} as DialogWrapProps

export const DialogWrap: FunctionComponent<
  Partial<DialogWrapProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'>
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
    onClickOverlay,
  } = props

  const overlayStyles = {
    ...overlayStyle,
  }

  const onHandleClickOverlay = (e: any) => {
    console.log('onClose?.()', closeOnOverlayClick)
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onClickOverlay && onClickOverlay(e)
      closed && onClose?.()
      closed && onCancel?.()
    }
  }

  return (
    <>
      {overlay ? (
        <Overlay
          style={overlayStyles}
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
