import React, { forwardRef } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { View } from '@tarojs/components'
import Button from '@/packages/button/index.taro'
import { BasicDialogProps } from './config'
import { Content } from './content.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Overlay from '@/packages/overlay/index.taro'

export type DialogProps = BasicDialogProps
const defaultProps = {
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
  onOverlayClick: () => undefined,
} as DialogProps

export const BaseDialog = forwardRef(
  (
    props: Partial<DialogProps> &
      Omit<
        React.HTMLAttributes<HTMLDivElement>,
        'title' | 'content' | 'onClick'
      >,
    ref
  ) => {
    const { locale } = useConfig()
    const {
      visible,
      footer,
      title,
      footerDirection,
      hideConfirmButton,
      hideCancelButton,
      lockScroll,
      disableConfirmButton,
      closeOnOverlayClick,
      onOverlayClick,
      confirmText,
      cancelText,
      overlay,
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
    const onHandleClickOverlay = (e: any) => {
      console.log('onClose?.()', closeOnOverlayClick)
      if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
        const closed = onOverlayClick && onOverlayClick()
        closed && onClose?.()
        closed && onCancel?.()
      }
    }

    return (
      <View
        style={{ display: visible ? 'block' : 'none' }}
        catchMove={lockScroll}
      >
        <>
          {overlay ? (
            <Overlay
              visible
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
            <Content
              title={title}
              footer={renderFooter()}
              footerDirection={footerDirection}
              visible={visible}
            />
          </CSSTransition>
        </>
      </View>
    )
  }
)

BaseDialog.defaultProps = defaultProps
BaseDialog.displayName = 'NutDialog'
