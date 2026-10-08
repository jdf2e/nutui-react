import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useState,
  useEffect,
  useRef,
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
import {
  WebDialogProps,
  DialogReturnProps,
  DialogComponent,
  DialogConfigType,
  destroyList,
} from '@/types'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  ...defaultOverlayProps,
  ...defaultContentProps,
  title: '',
  content: '',
  header: '',
  footer: '',
  subtitle: '',
  titleIcon: '',
  cancelBadge: '',
  confirmBadge: '',
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
  autoClose: 0,
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
    subtitle,
    titleIcon,
    cancelBadge,
    confirmBadge,
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
    autoClose,
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
  const [countdown, setCountdown] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (visible && autoClose > 0) {
      setCountdown(autoClose)
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current)
              timerRef.current = null
            }
            onCloseRef.current()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [visible, autoClose])

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
          <>
            {cancelBadge ? (
              <div className={`${classPrefix}-footer-cancel-container`}>
                <Button
                  type="default"
                  size="large"
                  className={`${classPrefix}-footer-cancel ${btnClass}`}
                  onClick={(e) => handleCancel(e)}
                >
                  {cancelText || locale.cancel}
                </Button>
                {cancelBadge ? (
                  <div className={`${classPrefix}-footer-cancel-badge`}>
                    {cancelBadge}
                  </div>
                ) : null}
              </div>
            ) : (
              <Button
                type="default"
                size="large"
                className={`${classPrefix}-footer-cancel ${btnClass}`}
                onClick={(e) => handleCancel(e)}
              >
                {cancelText || locale.cancel}
              </Button>
            )}
          </>
        )
      )
    }

    const renderConfirm = () => {
      return (
        !hideConfirmButton && (
          <>
            {confirmBadge ? (
              <div className={`${classPrefix}-footer-ok-container`}>
                <Button
                  type="primary"
                  size="large"
                  className={classNames(
                    `${classPrefix}-footer-ok ${btnClass}`,
                    {
                      disabled: disableConfirmButton,
                    }
                  )}
                  disabled={disableConfirmButton}
                  onClick={(e) => handleOk(e)}
                  loading={loading}
                >
                  {confirmText || locale.confirm}
                </Button>
                {confirmBadge ? (
                  <div className={`${classPrefix}-footer-ok-badge`}>
                    {confirmBadge}
                  </div>
                ) : null}
              </div>
            ) : (
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
            )}
          </>
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
    if (!closeIcon && autoClose <= 0) return null
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
      <>
        {closeIcon && (
          <div
            className={closeClasses}
            onClick={handleClose}
            role="button"
            tabIndex={0}
            aria-label={locale.close}
          >
            {React.isValidElement(closeIcon) ? closeIcon : systomIcon}
          </div>
        )}
        {autoClose > 0 && countdown > 0 && (
          <div className={`${classPrefix}-close-auto`}>
            {locale.dialog
              ? locale.dialog.autoCloseText.replace(
                  '{second}',
                  String(countdown)
                )
              : `${countdown}秒后自动关闭`}
          </div>
        )}
      </>
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
          subtitle={subtitle}
          titleIcon={titleIcon}
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

let globalConfig: DialogConfigType = {}

Dialog.config = (config: DialogConfigType) => {
  globalConfig = { ...globalConfig, ...config }
}

Dialog.destroyAll = () => {
  while (destroyList.length) {
    const close = destroyList.pop()
    close?.()
  }
}

Dialog.displayName = 'NutDialog'
