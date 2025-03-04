import React, { ForwardRefRenderFunction, forwardRef, useState } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { Failure, Close } from '@nutui/icons-react'
import Button from '@/packages/button'
import confirm from './confirm'
import { DialogWrap, defaultDialogWrapProps } from './dialogwrap'
import { useConfig } from '@/packages/configprovider'
import {
  DialogBasicProps,
  DialogReturnProps,
  DialogComponent,
  DialogConfirmProps,
} from './types'

const defaultProps: DialogBasicProps = {
  ...defaultDialogWrapProps,
  confirmText: '',
  cancelText: '',
  overlay: true,
  closeOnOverlayClick: true,
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  footerDirection: 'horizontal',
  lockScroll: true,
  closeIconPosition: 'bottom',
  closeIcon: false,
  zIndex: 1200,
  beforeCancel: () => true,
  beforeClose: () => true,
}

const BaseDialog: ForwardRefRenderFunction<
  unknown,
  Partial<DialogBasicProps>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    visible,
    footer,
    hideConfirmButton,
    hideCancelButton,
    lockScroll,
    disableConfirmButton,
    closeOnOverlayClick,
    confirmText,
    cancelText,
    closeIconPosition,
    closeIcon,
    footerDirection,
    onClose,
    onCancel,
    onConfirm,
    beforeCancel,
    beforeClose,
    ...restProps
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-dialog'
  const [loading, setLoading] = useState(false)

  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (
      e: MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
      e.stopPropagation()
      if (!beforeCancel?.()) return
      if (!beforeClose?.()) return
      onClose?.()
      onCancel?.()
    }

    const handleOk = async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      setLoading(true)
      try {
        await onConfirm?.(e)
        setLoading(false)
        onClose?.()
      } catch {
        setLoading(false)
      }
    }

    const btnClass =
      hideCancelButton || hideConfirmButton ? `${classPrefix}-footer-block` : ''

    return (
      footer || (
        <>
          {!hideCancelButton &&
            (footerDirection === 'vertical' ? (
              <div
                style={{ order: 2 }}
                className={`${classPrefix}-footer-cancel ${btnClass}`}
                onClick={(e) => handleCancel(e)}
              >
                {cancelText || locale.cancel}
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
            ))}
          {!hideConfirmButton && (
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

  const renderCloseIcon = () => {
    if (!closeIcon) return null
    const handleCancel = () => {
      if (!beforeCancel?.()) return
      if (!beforeClose?.()) return
      onClose?.()
      onCancel?.()
    }
    const closeClasses = classNames({
      [`${classPrefix}-close`]: true,
      [`${classPrefix}-close-${closeIconPosition}`]: true,
    })
    const systomIcon = closeIconPosition !== 'bottom' ? <Close /> : <Failure />
    return (
      <div className={closeClasses} onClick={handleCancel}>
        {React.isValidElement(closeIcon) ? closeIcon : systomIcon}
      </div>
    )
  }

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <DialogWrap
        {...restProps}
        visible={visible}
        lockScroll={lockScroll}
        footer={renderFooter()}
        footerDirection={footerDirection}
        close={renderCloseIcon()}
        onClose={onClose}
        onCancel={onCancel}
      />
    </div>
  )
}

export const Dialog: DialogComponent = forwardRef(BaseDialog) as DialogComponent

Dialog.confirm = (props: Partial<DialogConfirmProps>): DialogReturnProps => {
  return confirm(props)
}
;['alert'].forEach((type) => {
  ;(Dialog as any)[type] = (props: Partial<DialogConfirmProps>) => {
    return confirm({
      ...props,
      isNotice: false,
      noticeType: type,
    })
  }
})

Dialog.displayName = 'NutDialog'
