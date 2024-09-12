import React, { useState, FunctionComponent, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import classNames from 'classnames'
import { View, ITouchEvent } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useLockScrollTaro } from '@/utils/use-lock-scoll-taro'

export interface OverlayProps extends BasicComponent {
  zIndex: number
  duration: number
  closeOnOverlayClick: boolean
  visible: boolean
  lockScroll: boolean
  onClick: (event: ITouchEvent) => void
  afterShow: () => void
  afterClose: () => void
}

export const defaultOverlayProps = {
  ...ComponentDefaults,
  zIndex: 1000,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: (event: ITouchEvent) => {},
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    zIndex,
    duration,
    className,
    closeOnOverlayClick,
    visible,
    lockScroll,
    style,
    afterShow,
    afterClose,
    onClick,
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }
  const classPrefix = `nut-overlay`

  const [innerVisible, setInnerVisible] = useState(visible)

  const nodeRef = useLockScrollTaro(!!lockScroll && innerVisible)

  useEffect(() => {
    if (visible) {
      setInnerVisible(true)
    } else {
      setInnerVisible(false)
    }
  }, [visible])

  const classes = classNames(classPrefix, className)

  const styles = {
    ...style,
  }

  const handleClick = (e: ITouchEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
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

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={`${classPrefix}-slide`}
      unmountOnExit
      timeout={duration}
      in={innerVisible}
      onEntered={onHandleOpened}
      onExited={onHandleClosed}
    >
      <View
        ref={nodeRef}
        className={classes}
        style={styles}
        {...(rest as any)}
        catchMove={lockScroll}
        onClick={handleClick}
      >
        {children}
      </View>
    </CSSTransition>
  )
}

Overlay.displayName = 'NutOverlay'
