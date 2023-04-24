import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Button from '@/packages/button/index.taro'
import { BasicDialogProps } from './config'
import { DialogWrap } from './DialogWrap'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

export type DialogProps = BasicDialogProps
const defaultProps = {
  confirmText: '',
  cancelText: '',
  overlay: true,
  closeOnOverlayClick: true,
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  cancelAutoClose: true,
  footerDirection: 'horizontal',
  lockScroll: false,
} as DialogProps

export const BaseDialog = forwardRef(
  (
    props: Partial<DialogProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'content'>,
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
      cancelAutoClose,
      closeOnOverlayClick,
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

      return footerContent
    }

    return (
      <View
        style={{ display: visible ? 'block' : 'none' }}
        catchMove={lockScroll}
      >
        <DialogWrap
          {...props}
          visible={visible}
          lockScroll={lockScroll}
          footer={renderFooter()}
          onClose={onClose}
          onCancel={onCancel}
        />
      </View>
    )
  }
)

BaseDialog.defaultProps = defaultProps
BaseDialog.displayName = 'NutDialog'
