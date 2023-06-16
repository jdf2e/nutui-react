import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Failure, Loading, Success, Tips } from '@nutui/icons-react-taro'
import Overlay from '@/packages/overlay/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type ToastPositionType = 'top' | 'bottom' | 'center'

export interface ToastProps extends BasicComponent {
  id?: string
  maskClassName?: string
  contentClassName?: string
  contentStyle?: React.CSSProperties
  icon: string | React.ReactNode
  iconSize: string
  msg: string | React.ReactNode
  duration: number
  position?: ToastPositionType
  type: string
  title: string
  closeOnOverlayClick: boolean
  lockScroll: boolean
  size: string | number
  visible: boolean
  onClose: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  id: '',
  icon: null,
  iconSize: '20',
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
  onClose: () => {}, // 未实现
} as unknown as ToastProps

const classPrefix = 'nut-toast'

// export default class Notification extends React.PureComponent<NotificationProps> {
export const Toast: FunctionComponent<
  Partial<ToastProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    id,
    position,
    contentStyle,
    icon,
    iconSize,
    msg,
    duration,
    type,
    title,
    closeOnOverlayClick,
    lockScroll,
    contentClassName,
    size,
    visible,
    className,
    style,
    onClose,
    ...rest
  } = { ...defaultProps, ...props }
  let timer: number | null

  const [openState, SetOpenState] = useState(false)

  useEffect(() => {
    if (visible) {
      SetOpenState(true)
      show()
    } else {
      hide()
    }
  }, [visible])

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const hide = () => {
    SetOpenState(false)
    onClose()
  }
  const show = () => {
    clearTimer()
    if (duration) {
      timer = window.setTimeout(() => {
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
      success: <Success color="#ffffff" width={iconSize} height={iconSize} />,
      fail: <Failure color="#ffffff" width={iconSize} height={iconSize} />,
      warn: <Tips color="#ffffff" width={iconSize} height={iconSize} />,
      loading: <Loading color="#ffffff" width={iconSize} height={iconSize} />,
    }[type]
  }

  const classes = classNames({
    'nut-toast-has-icon': icon,
    [`nut-toast-${size}`]: true,
  })
  return (
    <>
      {openState ? (
        <Overlay
          visible={openState}
          style={style}
          className={`${classPrefix}__overlay-default ${className}`}
          closeOnOverlayClick={closeOnOverlayClick}
          lockScroll={lockScroll}
          onClick={() => {
            clickCover()
          }}
        >
          <div className={`${classPrefix} ${classes}`} id={id}>
            <div
              className={`${classPrefix}__inner ${classPrefix}-${position} ${contentClassName}`}
              style={contentStyle}
            >
              {hasIcon() ? (
                <p className={`${classPrefix}__icon-wrapper`}>{iconName()}</p>
              ) : null}
              {title ? (
                <div className={`${classPrefix}-title`}>{title}</div>
              ) : null}
              <span className={`${classPrefix}-text`}>{msg}</span>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  )
}

Toast.defaultProps = defaultProps
Toast.displayName = 'NutToast'
