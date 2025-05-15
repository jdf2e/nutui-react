import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import { Failure, Loading, Success, Tips } from '@nutui/icons-react-taro'
import Overlay from '@/packages/overlay/index.taro'
import { defaultOverlayProps } from '@/packages/overlay/overlay.taro'

import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
  useParams,
} from '@/hooks/taro/use-custom-event'
import { usePropsValue } from '@/hooks/use-props-value'
import { useRtl } from '@/packages/configprovider/index.taro'
import { harmony } from '@/utils/taro/platform'
import { mergeProps } from '@/utils/merge-props'
import { TaroToastProps } from '@/types'

const defaultProps: TaroToastProps = {
  ...defaultOverlayProps,
  id: '',
  duration: 2, // 时长,duration为0则一直展示
  position: 'middle',
  title: '',
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  content: '',
  contentClassName: '',
  contentStyle: {},
  closeOnOverlayClick: false,
  lockScroll: false,
  visible: false,
  wordBreak: 'break-all',
  zIndex: 1300,
  onClose: () => {},
}

export const Toast: FunctionComponent<
  Partial<TaroToastProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
> & {
  show: typeof show
  hide: typeof hide
} = (props) => {
  const {
    params: {
      id,
      position,
      contentStyle,
      icon,
      content,
      duration,
      title,
      closeOnOverlayClick,
      lockScroll,
      contentClassName,
      visible,
      size,
      className,
      style,
      wordBreak,
      zIndex,
      onClose,
    },
    setParams,
  } = useParams(mergeProps(defaultProps, props))
  const classPrefix = 'nut-toast'
  const timer = useRef(-1)
  const rtl = useRtl()

  const [innerVisible, setInnerVisible] = usePropsValue({
    value: visible,
    defaultValue: undefined,
    finalValue: false,
    onChange: (v: boolean) => {
      !v && onClose?.()
    },
  })
  useEffect(() => {
    if (innerVisible) {
      autoClose()
    }
  }, [innerVisible, duration])

  useCustomEvent(
    id as string,
    ({ status, options }: { status: boolean; options: any }) => {
      if (status) {
        options.visible = true
        setParams(options)
        show()
      } else {
        setParams({ visible: false } as any)
        hide()
      }
    }
  )
  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = -1
    }
  }
  const show = () => {
    setInnerVisible(true)
  }
  const hide = () => {
    clearTimer()
    setInnerVisible(false)
  }
  const autoClose = () => {
    clearTimer()
    if (duration) {
      timer.current = window.setTimeout(() => {
        setParams({ visible: false } as any)
        hide()
      }, duration * 1000)
    }
  }

  const clickCover = () => {
    if (closeOnOverlayClick) {
      hide()
    }
  }

  const renderIcon = () => {
    let iconNode = icon
    if (typeof icon === 'string') {
      iconNode = {
        success: <Success />,
        fail: <Failure />,
        warn: <Tips />,
        loading: <Loading className="nut-icon-loading" />,
      }[icon]
    }
    return (
      iconNode && (
        <View className={`${classPrefix}-icon-wrapper`}>{iconNode}</View>
      )
    )
  }

  const classes = classNames({
    'nut-toast-has-icon': icon,
    'nut-toast-rtl': rtl,
  })

  const styles = harmony()
    ? { left: '50%', transform: 'translate(-50%, -50%)' }
    : null

  return (
    <>
      {innerVisible && (
        <Overlay
          visible={innerVisible}
          style={style}
          zIndex={zIndex}
          className={`${classPrefix}-overlay-default-taro ${className}`}
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
          onClick={() => {
            clickCover()
          }}
        >
          <View className={`${classPrefix} ${classes}`} id={id}>
            <View
              className={classNames(
                `${classPrefix}-inner`,
                `${classPrefix}-${position}`,
                contentClassName,
                `${classPrefix}-inner-${size}`,
                `${classPrefix}-inner-${wordBreak}`,
                {
                  [`${classPrefix}-inner-descrption`]: content,
                }
              )}
              style={{ ...styles, ...contentStyle }}
            >
              {renderIcon()}
              {title && <Text className={`${classPrefix}-title`}>{title}</Text>}
              {content && (
                <Text className={`${classPrefix}-text`}>{content}</Text>
              )}
            </View>
          </View>
        </Overlay>
      )}
    </>
  )
}

export interface ToastOptions
  extends Partial<Omit<TaroToastProps, 'visible'>> {}

export function show(selector: string, options: ToastOptions) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, { status: true, options })
}

export function hide(selector: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useCustomEventsPath(selector)
  customEvents.trigger(path, { status: false })
}

Toast.displayName = 'NutToast'
Toast.show = show
Toast.hide = hide
