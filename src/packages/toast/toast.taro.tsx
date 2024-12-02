import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import { Failure, Loading, Success, Tips } from '@nutui/icons-react-taro'
import Overlay from '@/packages/overlay/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  customEvents,
  useCustomEvent,
  useCustomEventsPath,
  useParams,
} from '@/utils/use-custom-event'
import { usePropsValue } from '@/utils/use-props-value'
import { useRtl } from '@/packages/configprovider/index.taro'
import { harmony } from '@/utils/platform-taro'
import { mergeProps } from '@/utils/merge-props'

export type ToastPosition = 'top' | 'bottom' | 'center'
export type ToastSize = 'small' | 'base' | 'large'
export type ToastWordBreak = 'normal' | 'break-all' | 'break-word'

export interface ToastProps extends BasicComponent {
  id?: string
  duration: number
  position?: ToastPosition
  title: string
  closeOnOverlayClick: boolean
  lockScroll: boolean
  size: ToastSize
  icon: React.ReactNode
  maskClassName?: string
  content: React.ReactNode
  contentClassName?: string
  contentStyle?: React.CSSProperties
  type: string
  visible: boolean
  wordBreak?: ToastWordBreak
  onClose: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  id: '',
  duration: 2, // 时长,duration为0则一直展示
  position: 'center',
  title: '',
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null,
  content: '',
  type: 'text',
  closeOnOverlayClick: false,
  lockScroll: false,
  contentClassName: '', // 内容自定义样式名
  visible: false,
  wordBreak: 'break-all',
  onClose: () => {}, // 未实现
} as unknown as ToastProps

const classPrefix = 'nut-toast'

// export default class Notification extends React.PureComponent<NotificationProps> {
export const Toast: FunctionComponent<
  Partial<ToastProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
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
      type,
      title,
      closeOnOverlayClick,
      lockScroll,
      contentClassName,
      visible,
      size,
      className,
      style,
      onClose,
      wordBreak,
    },
    setParams,
  } = useParams(mergeProps(defaultProps, props))
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

  const hasIcon = () => {
    return type !== 'text' || !!icon
  }

  const iconName = () => {
    if (icon) {
      return icon
    }

    return {
      success: <Success />,
      fail: <Failure />,
      warn: <Tips />,
      loading: <Loading />,
    }[type]
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
      {innerVisible ? (
        <Overlay
          visible={innerVisible}
          style={style}
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
              {hasIcon() ? (
                <View className={`${classPrefix}-icon-wrapper`}>
                  {iconName()}
                </View>
              ) : null}
              {title ? (
                <Text className={`${classPrefix}-title`}>{title}</Text>
              ) : null}
              {content ? (
                <Text className={`${classPrefix}-text`}>{content}</Text>
              ) : null}
            </View>
          </View>
        </Overlay>
      ) : null}
    </>
  )
}

export interface ToastOptions extends Partial<Omit<ToastProps, 'visible'>> {}

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
