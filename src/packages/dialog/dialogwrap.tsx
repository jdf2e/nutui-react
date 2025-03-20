import React, { FunctionComponent, HTMLAttributes } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Content, defaultContentProps } from './content'
import { defaultOverlayProps } from '@/packages/overlay/overlay'
import Overlay from '@/packages/overlay'
import { DialogWrapProps } from './types'

export const defaultDialogWrapProps: DialogWrapProps = {
  ...defaultOverlayProps,
  ...defaultContentProps,
  overlay: true,
  overlayStyle: {},
  overlayClassName: 'nut-dialog-overlay',
  onCancel: () => {},
  onClose: () => {},
  onOverlayClick: () => true,
}

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
    zIndex,
    onClose,
    onCancel,
    onOverlayClick,
    ...restProps
  } = { ...defaultDialogWrapProps, ...props }

  const onHandleClickOverlay = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && onClose?.()
      closed && onCancel?.()
    }
  }
  return (
    <>
      {overlay && (
        <Overlay
          zIndex={zIndex}
          style={overlayStyle}
          className={overlayClassName}
          visible={visible}
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
          onClick={onHandleClickOverlay}
        />
      )}

      <CSSTransition
        in={visible}
        timeout={300}
        classNames="fadeDialog"
        unmountOnExit
        appear
      >
        <Content {...restProps} style={{ zIndex }} visible={visible} />
      </CSSTransition>
    </>
  )
}
DialogWrap.displayName = 'NutDialogWrap'
