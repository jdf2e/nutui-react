import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
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
import { mergeProps } from '@/utils/merge-props'

export type ToastPosition = 'top' | 'bottom' | 'center'
export type ToastSize = 'small' | 'base' | 'large'
export type ToastWordBreak = 'normal' | 'break-all' | 'break-word'

export interface ToastProps extends BasicComponent {
  id?: string
  maskClassName?: string
  contentClassName?: string
  contentStyle?: React.CSSProperties
  icon: React.ReactNode
  iconSize: string
  content: React.ReactNode
  duration: number
  position?: ToastPosition
  type: string
  title: string
  closeOnOverlayClick: boolean
  lockScroll: boolean
  size: ToastSize
  visible: boolean
  wordBreak?: ToastWordBreak
  onClose: () => void
  /**
   * @deprecated Please use `content` prop instead.
   */
  msg: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  id: '',
  icon: null,
  iconSize: '20',
  content: '',
  msg: '',
  duration: 2, // 时长,duration为0则一直展示
  position: 'center',
  type: 'text',
  title: '',
  closeOnOverlayClick: false,
  lockScroll: false,
  contentClassName: '', // 内容自定义样式名
  size: 'base', // 设置字体大小，默认base,可选large\small\base
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
      iconSize,
      content,
      msg,
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
    if (type !== 'text') {
      return true
    }
    return !!icon
  }

  const iconName = () => {
    if (icon) {
      return icon
    }
    return {
      success: <Success color="#ffffff" size={iconSize} />,
      fail: <Failure color="#ffffff" size={iconSize} />,
      warn: <Tips color="#ffffff" size={iconSize} />,
      loading: <Loading color="#ffffff" size={iconSize} />,
    }[type]
  }

  const classes = classNames({
    'nut-toast-has-icon': icon,
    [`nut-toast-${size}`]: true,
  })
  return (
    <>
      {innerVisible ? (
        <Overlay
          visible={innerVisible}
          style={style}
          className={`${classPrefix}-overlay-default ${className}`}
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
          onClick={() => {
            clickCover()
          }}
        >
          <div className={`${classPrefix} ${classes}`} id={id}>
            <div
              className={`${classPrefix}-inner ${classPrefix}-${position} ${contentClassName} ${wordBreak}`}
              style={contentStyle}
            >
              {hasIcon() ? (
                <p className={`${classPrefix}-icon-wrapper`}>{iconName()}</p>
              ) : null}
              {title ? (
                <div className={`${classPrefix}-title`}>{title}</div>
              ) : null}
              <span className={`${classPrefix}-text`}>{content || msg}</span>
            </div>
          </div>
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
