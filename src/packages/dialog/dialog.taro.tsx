import React, { FunctionComponent, useState } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { View } from '@tarojs/components'
import { Close } from '@nutui/icons-react-taro'
import Button from '@/packages/button/index.taro'
import { DialogBasicProps } from './config'
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
import { useLockScrollTaro } from '@/utils/use-lock-scoll-taro'
import { mergeProps } from '@/utils/merge-props'

export type DialogProps = DialogBasicProps & BasicComponent
const defaultProps = {
  title: '',
  content: '',
  header: '',
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
  closeIconPosition: 'bottom',
  closeIcon: false,
  beforeCancel: () => true,
  beforeClose: () => true,
  onOverlayClick: () => true,
} as DialogProps

export const BaseDialog: FunctionComponent<Partial<DialogProps>> & {
  open: typeof open
  close: typeof close
} = (props) => {
  const classPrefix = 'nut-dialog'
  const { locale } = useConfig()
  const [loading, setLoading] = useState(false)

  const {
    params: {
      id,
      className,
      style,
      visible,
      footer,
      title,
      header,
      content,
      children,
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
      closeIconPosition,
      closeIcon,
      onClose,
      onCancel,
      onConfirm,
      beforeCancel,
      beforeClose,
    },
    setParams,
  } = useParams(mergeProps(defaultProps, props))

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
  const refObject = useLockScrollTaro(!!(visible && lockScroll))
  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
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

    return (
      footer || (
        <>
          {!hideCancelButton && (
            <Button
              type="default"
              className={`${classPrefix}-footer-cancel`}
              onClick={(e) => handleCancel(e)}
            >
              {cancelText || locale.cancel}
            </Button>
          )}
          {!hideConfirmButton && (
            <Button
              type="primary"
              className={classNames(`${classPrefix}-footer-ok`, {
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
    return (
      <View className={closeClasses} onClick={handleCancel}>
        {React.isValidElement(closeIcon) ? closeIcon : <Close />}
      </View>
    )
  }

  const onHandleClickOverlay = (e: any) => {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onOverlayClick && onOverlayClick()
      closed && onClose?.()
      closed && onCancel?.()
    }
  }

  return (
    <View
      style={{ display: visible ? 'block' : 'none' }}
      ref={refObject}
      catchMove={lockScroll}
    >
      <>
        {overlay ? (
          <Overlay
            visible={visible}
            closeOnOverlayClick={closeOnOverlayClick}
            lockScroll={lockScroll}
            onClick={onHandleClickOverlay}
            className={classNames('nut-dialog-overlay')}
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
            className={className}
            style={style}
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

BaseDialog.displayName = 'NutDialog'
BaseDialog.open = open
BaseDialog.close = close
