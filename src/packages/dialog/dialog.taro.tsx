import React, { FunctionComponent, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { View, ITouchEvent } from '@tarojs/components'
import { Failure, Close } from '@nutui/icons-react-taro'
import Button from '@/packages/button/index.taro'
import { DialogBasicProps } from './types.taro'
import { Content, defaultContentProps } from './content.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Overlay from '@/packages/overlay/index.taro'
import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
  useParams,
} from '@/utils/use-custom-event'
import { useLockScrollTaro } from '@/utils/use-lock-scoll-taro'
import { mergeProps } from '@/utils/merge-props'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'

const defaultProps: DialogBasicProps = {
  ...defaultOverlayProps,
  ...defaultContentProps,
  title: '',
  content: '',
  header: '',
  footer: '',
  confirmText: '',
  cancelText: '',
  overlay: true,
  overlayStyle: {},
  overlayClassName: 'nut-dialog-overlay',
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  footerDirection: 'horizontal',
  closeIconPosition: 'bottom',
  closeIcon: false,
  zIndex: 1200,
  beforeCancel: () => true,
  beforeClose: () => true,
  onCancel: () => {},
  onClose: () => {},
  onOverlayClick: () => true,
}

export const BaseDialog: FunctionComponent<Partial<DialogBasicProps>> & {
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
      confirmText,
      cancelText,
      overlay,
      overlayStyle,
      overlayClassName,
      closeIconPosition,
      closeIcon,
      zIndex,
      beforeCancel,
      beforeClose,
      onClose,
      onCancel,
      onConfirm,
      onOverlayClick,
    },
    setParams,
  } = useParams(mergeProps(defaultProps, props))

  useCustomEvent(
    id as string,
    ({ status, options }: { status: boolean; options: any }) => {
      setParams({ ...options, visible: status })
    }
  )
  const refObject = useLockScrollTaro(!!(visible && lockScroll))
  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (
      e: ITouchEvent | React.MouseEvent<HTMLButtonElement>
    ) => {
      e.stopPropagation()
      if (!beforeCancel?.()) return
      if (!beforeClose?.()) return
      onClose?.()
      onCancel?.()
    }

    const handleOk = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
              <View
                className={`${classPrefix}-footer-cancel ${btnClass}`}
                onClick={(e: ITouchEvent) => handleCancel(e)}
              >
                {cancelText || locale.cancel}
              </View>
            ) : (
              <Button
                type="default"
                size="large"
                className={`${classPrefix}-footer-cancel ${btnClass}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleCancel(e)
                }
              >
                {cancelText || locale.cancel}
              </Button>
            ))}

          {!hideConfirmButton && (
            <Button
              size="large"
              type="primary"
              className={classNames(`${classPrefix}-footer-ok ${btnClass}`, {
                disabled: disableConfirmButton,
              })}
              disabled={disableConfirmButton}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOk(e)}
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
      <View className={closeClasses} onClick={handleCancel}>
        {React.isValidElement(closeIcon) ? closeIcon : systomIcon}
      </View>
    )
  }

  const onHandleClickOverlay = (e: ITouchEvent) => {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && onClose && onClose()
      closed && onCancel && onCancel()
    }
  }

  return (
    <View
      style={{ display: visible ? 'block' : 'none' }}
      ref={refObject}
      catchMove={lockScroll}
    >
      <>
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
