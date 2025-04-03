import React, { FunctionComponent, useState, MouseEvent } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { View, ITouchEvent } from '@tarojs/components'
import { Failure, Close } from '@nutui/icons-react-taro'
import Button from '@/packages/button/index.taro'
import { TaroDialogProps } from '@/types'
import { Content, defaultContentProps } from './content.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Overlay from '@/packages/overlay/index.taro'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'
import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
  useParams,
} from '@/hooks/use-custom-event'
import { useLockScrollTaro } from '@/hooks/use-lock-scoll-taro'
import { mergeProps } from '@/utils/merge-props'
import { harmony } from '@/utils/platform-taro'

const defaultProps = {
  ...defaultOverlayProps,
  ...defaultContentProps,
  title: '',
  content: '',
  header: '',
  footer: '',
  confirmText: '',
  cancelText: '',
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  footerDirection: 'horizontal',
  closeIconPosition: 'bottom',
  closeIcon: false,
  overlay: true,
  overlayStyle: {},
  overlayClassName: 'nut-dialog-overlay',
  zIndex: 1200,
  beforeCancel: () => true,
  beforeClose: () => true,
  onCancel: () => {},
  onClose: () => {},
  onConfirm: () => {},
  onOverlayClick: () => true,
}

export const BaseDialog: FunctionComponent<Partial<TaroDialogProps>> & {
  open: typeof open
  close: typeof close
} = (props) => {
  const {
    params: {
      id,
      closeOnOverlayClick,
      confirmText,
      cancelText,
      children,
      className,
      closeIconPosition,
      closeIcon,
      content,
      disableConfirmButton,
      footer,
      footerDirection,
      header,
      hideConfirmButton,
      hideCancelButton,
      lockScroll,
      overlay,
      overlayStyle,
      overlayClassName,
      style,
      title,
      visible,
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
  const classPrefix = 'nut-dialog'
  const { locale } = useConfig()
  const [loading, setLoading] = useState(false)

  useCustomEvent(
    id as string,
    ({ status, options }: { status: boolean; options: any }) => {
      setParams({ ...options, visible: status })
    }
  )
  const refObject = useLockScrollTaro(!!(visible && lockScroll))
  const renderFooter = () => {
    if (footer === null) return ''

    const handleCancel = (e: ITouchEvent | MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (!beforeCancel?.()) return
      if (!beforeClose?.()) return
      onClose()
      onCancel()
    }

    const handleOk = async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      setLoading(true)
      try {
        await onConfirm?.(e)
        setLoading(false)
        onClose()
      } catch {
        setLoading(false)
      }
    }

    const btnClass =
      hideCancelButton || hideConfirmButton ? `${classPrefix}-footer-block` : ''

    const renderCancelOfVertical = () => {
      return (
        !hideCancelButton && (
          <View
            className={`${classPrefix}-footer-cancel ${btnClass}`}
            onClick={(e) => handleCancel(e)}
          >
            {cancelText || locale.cancel}
          </View>
        )
      )
    }

    const renderCancel = () => {
      return (
        !hideCancelButton && (
          <Button
            type="default"
            size="large"
            className={`${classPrefix}-footer-cancel ${btnClass}`}
            onClick={(e) => handleCancel(e)}
          >
            {cancelText || locale.cancel}
          </Button>
        )
      )
    }

    const renderConfirm = () => {
      return (
        !hideConfirmButton && (
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
        )
      )
    }

    return (
      footer || (
        <>
          {footerDirection === 'vertical' ? (
            <>
              {renderConfirm()}
              {renderCancelOfVertical()}
            </>
          ) : (
            <>
              {renderCancel()}
              {renderConfirm()}
            </>
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
      onClose()
      onCancel()
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
      closed && onClose()
      closed && onCancel()
    }
  }

  const renderContent = () => {
    const contentZIndex = harmony() ? zIndex + 1 : zIndex // 解决harmony层级问题
    return (
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="fadeDialog"
        unmountOnExit
        appear
      >
        <Content
          className={className}
          style={{ zIndex: contentZIndex, ...style }}
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
    )
  }

  return (
    <View
      style={{ display: visible ? 'block' : 'none' }}
      ref={refObject}
      catchMove={lockScroll}
    >
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
      {renderContent()}
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
