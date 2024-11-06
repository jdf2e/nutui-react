import React, { FunctionComponent, HTMLAttributes } from 'react'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Content } from './content'
import { OverlayProps, defaultOverlayProps } from '@/packages/overlay/overlay'
import { ComponentDefaults } from '@/utils/typings'
import Overlay from '@/packages/overlay'
import { mergeProps } from '@/utils/merge-props'

interface DialogWrapProps extends OverlayProps {
  visible: boolean
  overlay: boolean
  overlayStyle: React.CSSProperties
  overlayClassName: string
  footer: React.ReactNode
  close: React.ReactNode
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
    onOverlayClick,
  } = mergeProps(defaultDialogProps, props)

  const onHandleClickOverlay = (e: any) => {
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
          className={classNames('nut-dialog-overlay', overlayClassName)}
          visible={visible}
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
DialogWrap.displayName = 'NutDialogWrap'
