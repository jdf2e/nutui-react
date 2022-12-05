import React, {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
} from 'react'
import classNames from 'classnames'
import Button from '@/packages/button'
import { DialogWrapper } from './DialogWrapper'
import confirm from './Confirm'
import {
  BasicDialogProps,
  DialogReturnProps,
  DialogComponent,
  ConfirmProps,
} from './config'

export type DialogProps = BasicDialogProps
const defaultProps = {
  okText: '确认',
  cancelText: '取消',
  mask: true,
  closeOnClickOverlay: true,
  noFooter: false,
  noOkBtn: false,
  noCancelBtn: false,
  okBtnDisabled: false,
  cancelAutoClose: true,
  textAlign: 'center',
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
    noFooter,
    noOkBtn,
    noCancelBtn,
    lockScroll,
    okBtnDisabled,
    cancelAutoClose,
    okText,
    cancelText,
    onClosed,
    onCancel,
    onOk,
    ...restProps
  } = props

  const renderFooter = function () {
    if (footer === null || noFooter) return ''

    const handleCancel = (e: MouseEvent) => {
      e.stopPropagation()
      if (!cancelAutoClose) return

      onClosed?.()
      onCancel?.()
      if (lockScroll && visible) {
        document.body.classList.remove('nut-overflow-hidden')
      }
    }

    const handleOk = (e: MouseEvent) => {
      e.stopPropagation()
      onClosed?.()
      onOk?.(e)
      if (lockScroll && visible) {
        document.body.classList.remove('nut-overflow-hidden')
      }
    }

    const footerContent = footer || (
      <>
        {!noCancelBtn && (
          <Button
            size="small"
            plain
            type="primary"
            className="nut-dialog__footer-cancel"
            onClick={handleCancel}
          >
            {cancelText}
          </Button>
        )}
        {!noOkBtn && (
          <Button
            size="small"
            type="primary"
            className={classNames('nut-dialog__footer-ok', {
              disabled: okBtnDisabled,
            })}
            disabled={okBtnDisabled}
            onClick={handleOk}
          >
            {okText}
          </Button>
        )}
      </>
    )

    return footerContent
  }

  return (
    <DialogWrapper
      {...restProps}
      visible={visible}
      lockScroll={lockScroll}
      footer={renderFooter()}
      onClosed={onClosed}
      onCancel={onCancel}
    />
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
