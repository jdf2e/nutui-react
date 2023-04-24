import React, {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
} from 'react'
import classNames from 'classnames'
import Button from '@/packages/button'
import confirm from './Confirm'
import { DialogWrap } from './DialogWrap'
import {
  BasicDialogProps,
  DialogReturnProps,
  DialogComponent,
  ConfirmProps,
} from './config'

export type DialogProps = BasicDialogProps
const defaultProps = {
  confirmText: '确认',
  cancelText: '取消',
  overlay: true,
  closeOnClickOverlay: true,
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  cancelAutoClose: true,
  footerDirection: 'horizontal',
  lockScroll: false,
} as DialogProps

const BaseDialog: ForwardRefRenderFunction<
  unknown,
  Partial<DialogProps> & HTMLAttributes<HTMLDivElement>
> = (props, ref) => {
  const {
    visible,
    footer,
    hideConfirmButton,
    hideCancelButton,
    lockScroll,
    disableConfirmButton,
    cancelAutoClose,
    confirmText,
    cancelText,
    onClose,
    onCancel,
    onConfirm,
    ...restProps
  } = props
  const classPrefix = 'nut-dialog'

  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (e: MouseEvent) => {
      e.stopPropagation()
      if (!cancelAutoClose) return

      onClose?.()
      onCancel?.()
    }

    const handleOk = (e: MouseEvent) => {
      e.stopPropagation()
      onClose?.()
      onConfirm?.(e)
    }

    const footerContent = footer || (
      <>
        {!hideCancelButton && (
          <Button
            size="small"
            fill="outline"
            type="primary"
            className={`${classPrefix}__footer-cancel`}
            onClick={handleCancel}
          >
            {cancelText}
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
            onClick={handleOk}
          >
            {confirmText}
          </Button>
        )}
      </>
    )

    return footerContent
  }

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <DialogWrap
        {...restProps}
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
