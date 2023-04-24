import React, { FunctionComponent, HTMLAttributes } from 'react'
import classNames from 'classnames'
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
  onClick: (e: MouseEvent) => void
  onClickOverlay: (e: MouseEvent) => boolean | void
}

const defaultDialogProps = {
  ...ComponentDefaults,
  overlay: true,
  overlayStyle: {},
  overlayClassName: '',
  onCancel: () => {},
  onClose: () => {},
  onClick: (e: MouseEvent) => {},
  onClickOverlay: (e: MouseEvent) => true,
  ...defaultOverlayProps,
} as DialogWrapProps

export const DialogWrap: FunctionComponent<
  Partial<DialogWrapProps> &
    Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content' | 'onClick'>
> = (props) => {
  const {
    className,
    style,
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

  const classPrefix = 'nut-dialog'
  const baseStyle = {
    // zIndex: index,
    // animationDuration: `${duration}s`,
  }
  const overlayStyles = {
    ...overlayStyle,
    ...baseStyle,
  }

  const onHandleClickOverlay = (e: any) => {
    console.log('onClose?.()', closeOnOverlayClick)
    if (closeOnOverlayClick) {
      const closed = onClickOverlay && onClickOverlay(e)
      closed && onClose?.()
    }
  }

  const handleClick = (e: any) => {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      onClose?.()
      onCancel?.()
    }
  }

  const wrapStyle = {
    ...style,
    display: visible ? 'block' : 'none',
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
          // duration={duration}
          onClick={(e) => onHandleClickOverlay(e)}
        />
      ) : null}

      <CSSTransition
        in={visible}
        timeout={300}
        classNames="fadeDialog"
        unmountOnExit
        appear
      >
        <div
          className={classNames(`${classPrefix}__wrap`, className)}
          onClick={handleClick}
          style={wrapStyle}
        >
          <Content {...props} visible={visible} />
        </div>
      </CSSTransition>
    </>
  )
}

DialogWrap.defaultProps = defaultDialogProps
DialogWrap.displayName = 'NutDialogWrap'
