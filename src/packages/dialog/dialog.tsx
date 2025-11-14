import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useState,
  MouseEvent,
} from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Failure, Close } from '@nutui/icons-react'
import Button from '@/packages/button'
import confirm from './confirm'
import Overlay from '@/packages/overlay'
import { Content, defaultContentProps } from './content'
import { defaultOverlayProps } from '@/packages/overlay/overlay'
import { useConfig } from '@/packages/configprovider'
import { WebDialogProps, DialogReturnProps, DialogComponent } from '@/types'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  ...defaultOverlayProps,
  ...defaultContentProps,
  title: '',
  content: '',
  header: '',
  footer: '',
  confirmText: '',
  cancelText: '',
  closeOnOverlayClick: true,
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  footerDirection: 'horizontal',
  lockScroll: true,
  closeIconPosition: 'bottom',
  closeIcon: false,
  overlay: true,
  overlayStyle: {},
  overlayClassName: 'nut-dialog-overlay',
  zIndex: 1200,
  beforeCancel: () => true,
  beforeClose: () => true,
  onCancel: () => {},
  onClose: () => {},
  onOverlayClick: () => true,
}

const BaseDialog: ForwardRefRenderFunction<unknown, Partial<WebDialogProps>> = (
  props,
  ref
) => {
  const {
    closeOnOverlayClick,
    confirmText,
    cancelText,
    children,
    className,
    closeIconPosition,
    closeIcon,
    content,
    disableConfirmButton,
    footer,
    footerDirection,
    header,
    hideConfirmButton,
    hideCancelButton,
    lockScroll,
    overlay,
    overlayStyle,
    overlayClassName,
    style,
    title,
    visible,
    zIndex,
    beforeCancel,
    beforeClose,
    onClose,
    onCancel,
    onConfirm,
    onOverlayClick,
  } = mergeProps(defaultProps, props)
  const classPrefix = 'nut-dialog'
  const { locale } = useConfig()
  const [loading, setLoading] = useState(false)

  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (
      e: MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
      e.stopPropagation()
      if (!beforeCancel?.()) return
      onCancel()
    }

    const handleOk = async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      setLoading(true)
      try {
        await onConfirm?.(e)
        setLoading(false)
        onClose()
      } catch {
        setLoading(false)
      }
    }

    const btnClass =
      hideCancelButton || hideConfirmButton ? `${classPrefix}-footer-block` : ''

    const renderCancelOfVertical = () => {
      return (
        !hideCancelButton && (
          <div
            style={{ order: 2 }}
            className={`${classPrefix}-footer-cancel ${btnClass}`}
            onClick={(e) => handleCancel(e)}
          >
            {cancelText || locale.cancel}
          </div>
        )
      )
    }

    const renderCancel = () => {
      return (
        !hideCancelButton && (
          <Button
            type="default"
            size="large"
            className={`${classPrefix}-footer-cancel ${btnClass}`}
            onClick={(e) => handleCancel(e)}
          >
            {cancelText || locale.cancel}
          </Button>
        )
      )
    }

    const renderConfirm = () => {
      return (
        !hideConfirmButton && (
          <Button
            type="primary"
            size="large"
            className={classNames(`${classPrefix}-footer-ok ${btnClass}`, {
              disabled: disableConfirmButton,
            })}
            disabled={disableConfirmButton}
            onClick={(e) => handleOk(e)}
            loading={loading}
          >
            {confirmText || locale.confirm}
          </Button>
        )
      )
    }

    return (
      footer || (
        <>
          {footerDirection === 'vertical' ? (
            <>
              {renderConfirm()}
              {renderCancelOfVertical()}
            </>
          ) : (
            <>
              {renderCancel()}
              {renderConfirm()}
            </>
          )}
        </>
      )
    )
  }

  const renderCloseIcon = () => {
    if (!closeIcon) return null
    const handleClose = () => {
      if (!beforeClose?.()) return
      onClose()
    }
    const closeClasses = classNames({
      [`${classPrefix}-close`]: true,
      [`${classPrefix}-close-${closeIconPosition}`]: true,
    })
    const systomIcon = closeIconPosition !== 'bottom' ? <Close /> : <Failure />
    return (
      <div className={closeClasses} onClick={handleClose}>
        {React.isValidElement(closeIcon) ? closeIcon : systomIcon}
      </div>
    )
  }

  const onHandleClickOverlay = (e: MouseEvent) => {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && onCancel()
    }
  }

  const renderContent = () => {
    return (
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="fadeDialog"
        unmountOnExit
        appear
      >
        <Content
          className={className}
          style={{ zIndex, ...style }}
          title={title}
          header={header}
          close={renderCloseIcon()}
          footer={renderFooter()}
          footerDirection={footerDirection}
          visible={visible}
        >
          {content || children}
        </Content>
      </CSSTransition>
    )
  }

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      {overlay && (
        <Overlay
          zIndex={zIndex}
          visible={visible}
          style={overlayStyle}
          className={overlayClassName}
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
          onClick={onHandleClickOverlay}
        />
      )}
      {renderContent()}
    </div>
  )
}

export const Dialog: DialogComponent = forwardRef(BaseDialog) as DialogComponent

Dialog.confirm = (props: Partial<WebDialogProps>): DialogReturnProps => {
  return confirm(props)
}
;['alert'].forEach(() => {
  ;(Dialog as any).alert = (props: Partial<WebDialogProps>) => {
    return confirm({
      ...props,
    })
  }
})

Dialog.displayName = 'NutDialog'
