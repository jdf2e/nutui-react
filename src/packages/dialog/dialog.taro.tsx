import React, { FunctionComponent, useState, MouseEvent } from 'react'
import classNames from 'classnames'
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
} from '@/hooks/taro/use-custom-event'
import { useLockScrollTaro } from '@/hooks/taro/use-lock-scoll'
import { useDuoLayout } from '@/hooks/taro/use-duo-layout'
import { resolveDuoMaskColor } from '@/utils/taro/duo-dialog-appearance'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  ...defaultOverlayProps,
  ...defaultContentProps,
  title: '',
  content: '',
  header: '',
  footer: '',
  cancelBadge: '',
  confirmBadge: '',
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
  duoOverlayScope: 'window',
} as TaroDialogProps

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
      cancelBadge,
      confirmBadge,
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
      segment,
      microBent,
      duoOverlayScope,
    },
    setParams,
  } = useParams(mergeProps(defaultProps, props))
  const classPrefix = 'nut-dialog'
  const { locale } = useConfig()
  const [loading, setLoading] = useState(false)

  const duoLayout = useDuoLayout(
    !!visible,
    'center',
    {
      overlayScope: duoOverlayScope ?? 'window',
      centerMaxWidth: null,
    },
    {
      // 仅在蒙层铺满整窗时屏蔽导航栏（盖住右侧安全区）；base 蒙层只盖内容区
      enabled: !!overlay && (duoOverlayScope ?? 'window') !== 'base',
      color: resolveDuoMaskColor(
        (overlayStyle as React.CSSProperties | undefined)?.backgroundColor,
        (props as any).theme
      ),
    }
  )

  const isHalfOpenState = duoLayout.enabled && duoLayout.hingeX !== null

  const effectiveMicroBent = microBent ?? isHalfOpenState
  let effectiveSegment = segment || 'center'
  if (segment && segment !== 'center') {
    effectiveSegment = segment
  } else if (isHalfOpenState) {
    effectiveSegment = 'left'
  } else {
    effectiveSegment = 'center'
  }

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
          <>
            {cancelBadge ? (
              <View className={`${classPrefix}-footer-cancel-container`}>
                <Button
                  type="default"
                  size="large"
                  className={`${classPrefix}-footer-cancel ${btnClass}`}
                  onClick={(e) => handleCancel(e)}
                >
                  {cancelText || locale.cancel}
                </Button>
                {cancelBadge ? (
                  <View className={`${classPrefix}-footer-cancel-badge`}>
                    {cancelBadge}
                  </View>
                ) : null}
              </View>
            ) : (
              <Button
                type="default"
                size="large"
                className={`${classPrefix}-footer-cancel ${btnClass}`}
                onClick={(e) => handleCancel(e)}
              >
                {cancelText || locale.cancel}
              </Button>
            )}
          </>
        )
      )
    }

    const renderConfirm = () => {
      return (
        !hideConfirmButton && (
          <>
            {confirmBadge ? (
              <View className={`${classPrefix}-footer-ok-container`}>
                <Button
                  type="primary"
                  size="large"
                  className={classNames(
                    `${classPrefix}-footer-ok ${btnClass}`,
                    {
                      disabled: disableConfirmButton,
                    }
                  )}
                  disabled={disableConfirmButton}
                  onClick={(e) => handleOk(e)}
                  loading={loading}
                >
                  {confirmText || locale.confirm}
                </Button>
                {confirmBadge ? (
                  <View className={`${classPrefix}-footer-ok-badge`}>
                    {confirmBadge}
                  </View>
                ) : null}
              </View>
            ) : (
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
            )}
          </>
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
    const handleClose = () => {
      if (!beforeClose?.()) return
      onClose()
    }
    const closeClasses = classNames({
      [`${classPrefix}-close`]: true,
      [`${classPrefix}-close-${closeIconPosition}`]: true,
    })
    const systemIcon =
      closeIconPosition !== 'bottom' ? (
        <Close {...({ 'aria-hidden': true } as any)} />
      ) : (
        <Failure {...({ 'aria-hidden': true } as any)} />
      )
    return (
      <View
        className={closeClasses}
        onClick={handleClose}
        ariaRole="button"
        ariaLabel={locale.close}
        // @ts-ignore
        tabIndex={0}
      >
        {React.isValidElement(closeIcon) ? closeIcon : systemIcon}
      </View>
    )
  }

  const onHandleClickOverlay = (e: ITouchEvent) => {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && onCancel()
    }
  }

  const renderContent = () => {
    const contentZIndex = (Number(zIndex) || 1200) + 1
    return (
      <Content
        className={className}
        style={{
          zIndex: contentZIndex,
          ...duoLayout.contentStyle,
          ...style,
        }}
        title={title}
        header={header}
        close={renderCloseIcon()}
        footer={renderFooter()}
        footerDirection={footerDirection}
        visible={visible}
        segment={effectiveSegment}
        microBent={effectiveMicroBent}
      >
        {content || children}
      </Content>
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
          style={{
            ...overlayStyle,
            ...(duoOverlayScope === 'base' ? duoLayout.baseMaskStyle : {}),
          }}
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
