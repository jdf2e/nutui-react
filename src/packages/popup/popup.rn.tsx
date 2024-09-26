/* eslint-disable no-nested-ternary */
import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactElement,
  ReactPortal,
  ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react-taro'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import { View, Text, ITouchEvent } from '@tarojs/components'
import { Modal, TouchableOpacity } from 'react-native'
import {
  OverlayProps,
  defaultOverlayProps,
} from '@/packages/overlay/overlay.taro'
import { ComponentDefaults } from '@/utils/typings'
import { useLockScrollTaro } from '@/utils/use-lock-scoll-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

type Teleport = HTMLElement | (() => HTMLElement) | null

export interface PopupProps extends OverlayProps {
  position: string
  transition: string
  overlayStyle: React.CSSProperties
  overlayClassName: string
  closeable: boolean
  closeIconPosition: string
  closeIcon: ReactNode
  left: ReactNode
  title: ReactNode
  description: ReactNode
  destroyOnClose: boolean
  portal: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onOverlayClick: (e: ITouchEvent) => boolean | void
  onCloseIconClick: (e: ITouchEvent) => boolean | void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'center',
  transition: '',
  overlayStyle: {},
  overlayClassName: '',
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  destroyOnClose: false,
  portal: null,
  overlay: true,
  round: false,
  onOpen: () => {},
  onClose: () => {},
  onOverlayClick: (e: ITouchEvent) => true,
  onCloseIconClick: (e: ITouchEvent) => true,
  ...defaultOverlayProps,
} as PopupProps

// 默认1000，参看variables
const _zIndex = 1100

export const Popup: FunctionComponent<
  Partial<PopupProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'>
> = (props) => {
  const {
    children,
    visible,
    overlay,
    closeOnOverlayClick,
    overlayStyle,
    overlayClassName,
    zIndex,
    lockScroll,
    duration,
    closeable,
    closeIconPosition,
    closeIcon,
    left,
    title,
    description,
    style,
    transition,
    round,
    position,
    className,
    destroyOnClose,
    portal,
    onOpen,
    onClose,
    onOverlayClick,
    onCloseIconClick,
    afterShow,
    afterClose,
    onClick,
  } = { ...defaultProps, ...props }
  let innerIndex = zIndex || _zIndex
  const [index, setIndex] = useState(innerIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')
  const refObject = useLockScrollTaro(innerVisible && lockScroll)
  const classPrefix = 'nut-popup'
  const baseStyle = {
    zIndex: index,
  }

  const overlayStyles = {
    ...overlayStyle,
    '--nutui-overlay-zIndex': index,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }

  const popStyles = {
    ...style,
    ...baseStyle,
  }

  const popClassName = classNames(
    {
      [`${classPrefix}`]: true,
      [`${classPrefix}-round`]: round || position === 'bottom',
      [`${classPrefix}-${position}`]: true,
    },
    className
  )

  const closeClasses = classNames({
    [`${classPrefix}-title-right`]: true,
    [`${classPrefix}-title-right-${closeIconPosition}`]: true,
  })

  const open = () => {
    if (!innerVisible) {
      setInnerVisible(true)
      setIndex(++innerIndex)
    }
    if (destroyOnClose) {
      setShowChildren(true)
    }
    onOpen && onOpen()
  }

  const close = () => {
    if (innerVisible) {
      setInnerVisible(false)
      if (destroyOnClose) {
        setTimeout(() => {
          setShowChildren(false)
        }, Number(duration))
      }
      onClose && onClose()
    }
  }

  const onHandleClickOverlay = (e: ITouchEvent) => {
    e.stopPropagation()
    if (closeOnOverlayClick) {
      const closed = onOverlayClick && onOverlayClick(e)
      closed && close()
    }
  }

  const onHandleClick = (e: ITouchEvent) => {
    onClick && onClick(e)
  }

  const onHandleClickCloseIcon = (e: ITouchEvent) => {
    const closed = onCloseIconClick && onCloseIconClick(e)
    closed && close()
  }

  const onHandleOpened: EnterHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    afterShow && afterShow()
  }

  const onHandleClosed: ExitHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    afterClose && afterClose()
  }

  const resolveContainer = (getContainer: Teleport | undefined) => {
    const container =
      typeof getContainer === 'function' ? getContainer() : getContainer
    return container || document.body
  }

  const renderToContainer = (getContainer: Teleport, node: ReactElement) => {
    if (getContainer) {
      const container = resolveContainer(getContainer)
      return createPortal(node, container) as ReactPortal
    }
    return node
  }

  const renderTitle = () => {
    if (left || title || description) {
      return (
        <View className={`${classPrefix}-title`}>
          {position === 'bottom' && (
            <>
              {left && (
                <View className={`${classPrefix}-title-left`}>{left}</View>
              )}
              {(title || description) && (
                <View className={`${classPrefix}-title-title`}>
                  <View>{title}</View>
                  {description && (
                    <View className={`${classPrefix}-title-description`}>
                      {description}
                    </View>
                  )}
                </View>
              )}
            </>
          )}
          {closeable && (
            <View className={closeClasses} onClick={onHandleClickCloseIcon}>
              {React.isValidElement(closeIcon) ? (
                closeIcon
              ) : harmonyAndRn() ? (
                <Text>T</Text>
              ) : (
                <Close />
              )}
            </View>
          )}
        </View>
      )
    }
    if (closeable) {
      return (
        <>
          {closeable && (
            <View className={closeClasses} onClick={onHandleClickCloseIcon}>
              {React.isValidElement(closeIcon) ? (
                closeIcon
              ) : harmonyAndRn() ? (
                <Text>I</Text>
              ) : (
                <Close />
              )}
            </View>
          )}
        </>
      )
    }
  }

  const renderPop = () => {
    return (
      <View
        ref={refObject}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          ...popStyles,
        }}
        className={popClassName}
        onClick={onHandleClick}
      >
        {renderTitle()}
        {showChildren ? children : ''}
      </View>
    )
  }

  const renderNode = () => {
    return (
      <Modal
        animationType="none" // 使用 slide 动画
        transparent // 使背景透明
        visible={innerVisible}
        onRequestClose={onHandleClickOverlay} // 处理 Android 设备的返回按钮
      >
        {overlay ? (
          <TouchableOpacity
            activeOpacity={1}
            // visible={innerVisible}
            // closeOnOverlayClick={closeOnOverlayClick}
            // lockScroll={lockScroll}
            // duration={duration}
            onPress={onHandleClickOverlay}
          >
            <View className={overlayClassName} style={overlayStyles} />
          </TouchableOpacity>
        ) : null}
        {renderPop()}
      </Modal>
    )
  }

  useEffect(() => {
    visible && open()
    !visible && close()
  }, [visible])

  useEffect(() => {
    setTransitionName(transition || `${classPrefix}-slide-${position}`)
  }, [position, transition])

  return <>{renderToContainer(portal as Teleport, renderNode())}</>
}

Popup.displayName = 'NutPopup'
