import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Failure, Loading, Success, Tips } from '@nutui/icons-react-taro'
import bem from '@/utils/bem'
import Overlay from '@/packages/overlay/index'

export interface ToastProps {
  id?: string
  maskStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  icon: string | null
  iconSize: string
  msg: string | React.ReactNode
  // bottom: number | string
  duration: number
  position?: 'top' | 'center' | 'bottom'
  // center: boolean
  type: string
  title: string
  closeOnOverlayClick: boolean
  contentClassName: string
  size: string | number
  // textAlignCenter: boolean
  // bgColor: string
  // cover: boolean
  // coverColor: string
  // closeOnClickOverlay: boolean
  visible: boolean
  onClose: () => void
}

const defaultProps = {
  id: '',
  maskStyle: {},
  icon: null,
  iconSize: '20',
  msg: '',
  // bottom: '30px', // center为false时生效，距离底部位置
  duration: 0, // 时长,duration为0则一直展示
  position: 'center',
  // center: true, // toast是否居中展示
  type: 'text',
  title: '',
  closeOnOverlayClick: true,
  contentClassName: '', // 自定义样式名
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  // textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
  // bgColor: 'rgba(0, 0, 0, .8)',
  // cover: false, // 是否展示透明遮罩层
  // coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
  // closeOnClickOverlay: false, // 是否点击遮罩可关闭
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
    // bottom,
    duration,
    // center,
    type,
    title,
    closeOnOverlayClick,
    contentClassName,
    size,
    // textAlignCenter,
    // bgColor,
    // cover,
    // coverColor,
    // closeOnClickOverlay,
    visible,
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
    // 'nut-toast-center': center,
    'nut-toast-has-icon': icon,
    // 'nut-toast-cover': cover,
    // 'nut-toast-loading': type === 'loading',
    // [`${customClass}`]: true,
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
          closeOnOverlayClick={closeOnOverlayClick}
          onClick={() => {
            clickCover()
          }}
        >
          <div
            className={`${toastBem()} ${classes}`}
            id={id}
            style={
              {
                // bottom: center ? 'auto' : `${bottom}`,
                // backgroundColor: cover ? coverColor : '',
                // ...style,
              }
            }
            // onClick={() => {
            //   clickCover()
            // }}
          >
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
