import React, { ForwardRefRenderFunction, forwardRef } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import Button from '@/packages/button'
import confirm from './confirm'
import { DialogWrap } from './dialogwrap'
import { useConfig } from '@/packages/configprovider'
import {
  BasicDialogProps,
  DialogReturnProps,
  DialogComponent,
  ConfirmProps,
} from './config'
import { ComponentDefaults } from '@/utils/typings'

export type DialogProps = BasicDialogProps
const defaultProps = {
  ...ComponentDefaults,
  confirmText: '',
  cancelText: '',
  overlay: true,
  closeOnOverlayClick: true,
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  footerDirection: 'horizontal',
  lockScroll: true,
  beforeCancel: () => true,
  beforeClose: () => true,
} as DialogProps

const BaseDialog: ForwardRefRenderFunction<unknown, Partial<DialogProps>> = (
  props,
  ref
) => {
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
    onClose,
    onCancel,
    onConfirm,
    beforeCancel,
    beforeClose,
    ...restProps
  } = props
  const classPrefix = 'nut-dialog'

  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (!beforeCancel?.()) return
      if (!beforeClose?.()) return
      onClose?.()
      onCancel?.()
    }

    const handleOk = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onClose?.()
      onConfirm?.(e)
    }

    return (
      footer || (
        <>
          {!hideCancelButton && (
            <Button
              size="small"
              fill="outline"
              type="primary"
              className={`${classPrefix}__footer-cancel`}
              onClick={(e) => handleCancel(e)}
            >
              {cancelText || locale.cancel}
            </Button>
          )}
          {!hideConfirmButton && (
            <Button
              size="small"
              type="primary"
              className={classNames(`${classPrefix}__footer-ok`, {
                disabled: disableConfirmButton,
              })}
              disabled={disableConfirmButton}
              onClick={(e) => handleOk(e)}
            >
              {confirmText || locale.confirm}
            </Button>
          )}
        </>
      )
    )
  }

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <DialogWrap
        {...props}
        visible={visible}
        lockScroll={lockScroll}
        footer={renderFooter()}
        onClose={onClose}
        onCancel={onCancel}
      />
    </div>
  )
}

export const Dialog: DialogComponent = forwardRef(BaseDialog) as DialogComponent

Dialog.confirm = (props: ConfirmProps): DialogReturnProps => {
  return confirm(props)
}
;['alert'].forEach((type) => {
  ;(Dialog as any)[type] = (props: ConfirmProps) => {
    return confirm({
      ...props,
      isNotice: false,
      noticeType: type,
    })
  }
})

Dialog.defaultProps = defaultProps
Dialog.displayName = 'NutDialog'
