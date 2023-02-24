import React, { forwardRef } from 'react'
import classNames from 'classnames'
import Button from '@/packages/button/index.taro'
import { DialogWrapper } from './DialogWrapper.taro'
import { BasicDialogProps } from './config'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

export type DialogProps = BasicDialogProps
const defaultProps = {
  okText: '',
  cancelText: '',
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
} as BasicDialogProps

export const BaseDialog = forwardRef(
  (
    props: Partial<BasicDialogProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    ref
  ) => {
    const { locale } = useConfig()
    const {
      visible,
      footer,
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
      if (footer === null) return ''

      const handleCancel = function (e: MouseEvent) {
        e.stopPropagation()
        if (!cancelAutoClose) return

        onClosed?.()
        onCancel?.()
        if (lockScroll && visible) {
          document.body.classList.remove('nut-overflow-hidden')
        }
      }

      const handleOk = function (e: MouseEvent) {
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
              onClick={(e) => handleCancel(e)}
            >
              {cancelText || locale.cancel}
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
              onClick={(e) => handleOk(e)}
            >
              {okText || locale.confirm}
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
)

BaseDialog.defaultProps = defaultProps
BaseDialog.displayName = 'NutDialog'
