import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Failure, Loading, Success, Tips } from '@nutui/icons-react-taro'
import bem from '@/utils/bem'
import Overlay from '@/packages/overlay/index'

export interface ToastProps {
  id?: string
  maskClassName?: string
  maskStyle?: React.CSSProperties
  contentClassName?: string
  contentStyle?: React.CSSProperties
  icon: string | null
  iconSize: string
  msg: string | React.ReactNode
  duration: number
  position?: 'top' | 'center' | 'bottom'
  type: string
  title: string
  closeOnOverlayClick: boolean
  size: string | number
  visible: boolean
  onClose: () => void
}

const defaultProps = {
  id: '',
  maskStyle: {},
  icon: null,
  iconSize: '20',
  msg: '',
  duration: 2, // 时长,duration为0则一直展示
  position: 'center',
  type: 'text',
  title: '',
  closeOnOverlayClick: true,
  contentClassName: '', // 内容自定义样式名
  maskClassName: '', // mask自定义样式名
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  visible: false,
  onClose: () => {}, // 未实现
} as unknown as ToastProps

// export default class Notification extends React.PureComponent<NotificationProps> {
export const Toast: FunctionComponent<
  Partial<ToastProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    id,
    position,
    maskStyle,
    contentStyle,
    icon,
    iconSize,
    msg,
    duration,
    type,
    title,
    closeOnOverlayClick,
    contentClassName,
    size,
    visible,
    maskClassName,
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

  const toastBem = bem('toast')

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
          style={{
            '--nutui-overlay-bg-color': 'rgba(0,0,0,0)',
            ...maskStyle,
          }}
          className={maskClassName}
          closeOnOverlayClick={closeOnOverlayClick}
          onClick={() => {
            clickCover()
          }}
        >
          <div className={`${toastBem()} ${classes}`} id={id}>
            <div
              className={`${toastBem(
                'inner'
              )} nut-toast-${position} ${contentClassName}`}
              style={contentStyle}
            >
              {hasIcon() ? (
                <p className={toastBem('icon-wrapper')}>{iconName()}</p>
              ) : null}
              {title ? <div className="nut-toast-title">{title}</div> : null}
              <span className={toastBem('text')}>{msg}</span>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  )
}

Toast.defaultProps = defaultProps
Toast.displayName = 'NutToast'
