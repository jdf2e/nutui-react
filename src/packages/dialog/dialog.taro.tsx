import React, { FunctionComponent } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { View } from '@tarojs/components'
import Button from '@/packages/button/index.taro'
import { BasicDialogProps } from './config'
import { Content } from './content.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Overlay from '@/packages/overlay/index.taro'
import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
  useParams,
} from '@/utils/use-custom-event'
import { BasicComponent } from '@/utils/typings'

export type DialogProps = BasicDialogProps & BasicComponent
const defaultProps = {
  title: '',
  content: '',
  footer: '',
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

export const BaseDialog: FunctionComponent<Partial<DialogProps>> & {
  open: typeof open
  close: typeof close
} = (props) => {
  const classPrefix = 'nut-dialog'
  const { locale } = useConfig()

  const {
    params: {
      id,
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
    },
    setParams,
  } = useParams({ ...defaultProps, ...props })

  useCustomEvent(
    id as string,
    ({ status, options }: { status: boolean; options: any }) => {
      if (status) {
        setParams({ ...options, visible: true })
      } else {
        setParams({ ...options, visible: false })
      }
    }
  )

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
  console.log('props', props, visible)

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

export function open(selector: string, options: Partial<typeof defaultProps>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, { status: true, options })
}

export function close(selector: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, { status: false })
}

BaseDialog.defaultProps = defaultProps
BaseDialog.displayName = 'NutDialog'
BaseDialog.open = open
BaseDialog.close = close
