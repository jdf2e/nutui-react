import React, {
  forwardRef,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { nextTick, useReady } from '@tarojs/taro'
import { useTouch } from '@/hooks/use-touch'
import { getRectInMultiPlatform } from '@/utils/taro/get-rect'
import { ComponentDefaults } from '@/utils/typings'
import { harmony } from '@/utils/taro/platform'
import { useRefState } from '@/hooks/use-ref-state'
import { useUuid } from '@/hooks/use-uuid'
import { PositionX, SwipeRef, TaroSwipeProps } from '@/types'

function preventDefault(event: any, isStopPropagation?: boolean): void {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }
  if (isStopPropagation) {
    event.stopPropagation()
  }
}

const defaultProps = {
  ...ComponentDefaults,
  name: '',
} as TaroSwipeProps
export const Swipe = forwardRef<
  SwipeRef,
  Partial<TaroSwipeProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onTouchStart' | 'onTouchMove' | 'onTouchEnd'
    >
>((props, instanceRef) => {
  const classPrefix = 'nut-swipe'
  const touch = useTouch()
  const uid = useUuid()
  const leftId = `swipe-left-${uid}`
  const rightId = `swipe-right-${uid}`

  const { children, className, style } = { ...defaultProps, ...props }

  const root: any = useRef<HTMLDivElement>()
  const leftWrapperRef = useRef(null)
  const rightWrapperRef = useRef(null)
  const opened = useRef(false)
  const lockClick = useRef(false)
  const startOffset = useRef(0)

  const [state, setState] = useState({ offset: 0, dragging: false })
  const [actionWidth, updateActionWidth] = useRefState({ left: 0, right: 0 })

  const wrapperStyle = {
    transform: `translate(${state.offset}${!harmony() ? 'px' : ''}, 0)`,
    transitionDuration: state.dragging ? '0s' : '.6s',
  }

  console.log(
    '~~hanyu wrapperstyle',
    state.offset,
    state.dragging,
    JSON.stringify(wrapperStyle)
  )

  const setActionWidth = (fn: any) => {
    const { left, right } = fn()
    console.log('~~hanyu setActionWidth', actionWidth.current, left, right)
    if (left !== undefined) {
      updateActionWidth({ ...actionWidth.current, left })
    }
    if (right !== undefined) {
      updateActionWidth({ ...actionWidth.current, right })
    }
  }

  const getWidth = async () => {
    if (leftWrapperRef.current) {
      const leftRect = await getRectInMultiPlatform(
        leftWrapperRef.current,
        leftId
      )
      if (leftRect) setActionWidth((v: any) => ({ ...v, left: leftRect.width }))
    }
    if (rightWrapperRef.current) {
      const rightRect = await getRectInMultiPlatform(
        rightWrapperRef.current,
        rightId
      )
      console.log('~~hanyu rightRect width', rightRect?.width)
      console.log('~~hanyu rightRect width', JSON.stringify(rightRect))
      if (rightRect)
        setActionWidth((v: any) => ({ ...v, right: rightRect.width }))
    }
  }

  // 获取元素的时候要在页面 onReady 后，需要参考小程序的事件周期
  useReady(() => {
    console.log('~~hanyu useReady')
    nextTick(() => getWidth())
  })

  const onTouchStart = async (event: any) => {
    if (!props.disabled) {
      getWidth()
      startOffset.current = state.offset
      console.log('~~hanyu startOffset.current', state.offset)
      touch.start(event)
      props.onTouchStart?.(event)
    }
  }

  const onTouchMove = (event: any) => {
    if (props.disabled) return
    touch.move(event)
    props.onTouchMove?.(event)
    if (touch.isHorizontal()) {
      lockClick.current = true
      const newState = { ...state, dragging: true }
      const isEdge = !opened || touch.deltaX.current * startOffset.current < 0
      if (isEdge) {
        preventDefault(event, true)
      }

      newState.offset = rangeCalculation(
        touch.deltaX.current + startOffset.current,
        -actionWidth.current.right || 0,
        actionWidth.current.left || 0
      )
      setState(newState)
    }
  }

  const onTouchEnd = (event: BaseEventOrig<HTMLDivElement>) => {
    if (state.dragging) {
      setState((v) => ({ ...v, dragging: false }))
      toggle(state.offset > 0 ? 'left' : 'right')
      setTimeout(() => {
        lockClick.current = false
      }, 0)
      props.onTouchEnd?.(event)
    }
  }

  const toggle = (side: PositionX) => {
    const offset = Math.abs(state.offset)
    const base = 0.3
    const threshold = opened ? 1 - base : base
    const width =
      side === 'left' ? actionWidth.current.left : actionWidth.current.right
    if (width && offset > Number(width) * threshold) {
      open(side)
    } else {
      close(side)
    }
  }
  const open = (side: PositionX) => {
    opened.current = true
    console.log(
      '~~hanyu open actionWidth.current --',
      side,
      JSON.stringify(actionWidth.current)
    )
    const offset =
      side === 'left' ? actionWidth.current.left : -actionWidth.current.right
    const name = props.name as number | string
    props.onOpen?.({ name, position: side })
    setState((v) => ({ ...v, offset: Number(offset) || 0 }))
  }

  const close = (position?: PositionX) => {
    if (opened.current) {
      opened.current = false
      props.onClose?.({
        name: props.name as number | string,
        position: position || 'left',
      })
    }
    setState((v) => ({ ...v, offset: 0 }))
  }

  const rangeCalculation = (
    num: number | string,
    min: number | string,
    max: number | string
  ) => {
    return Math.min(Math.max(Number(num), Number(min)), Number(max))
  }

  const renderActionContent = (side: PositionX) => {
    if (props[`${side}Action`]) {
      return (
        <View
          ref={side === 'left' ? leftWrapperRef : rightWrapperRef}
          className={`${classPrefix}-${side}`}
          id={side === 'left' ? leftId : rightId}
          onClick={(e) => handleOperate(e, side)}
        >
          {props[`${side}Action`]}
        </View>
      )
    }
    return null
  }
  const handleOperate = (
    event: React.MouseEvent<Element, MouseEvent> | ITouchEvent,
    position: PositionX
  ) => {
    event.stopPropagation()
    if (props.beforeClose) {
      props.beforeClose(position)
    } else {
      props.onActionClick?.(event, position)
    }
  }

  useImperativeHandle(instanceRef, () => ({
    open,
    close: () => close(),
  }))

  useEffect(() => {
    if (harmony()) return

    const handler: any = (event: { target: Node | null }) => {
      const targets = [root]
      if (
        targets.some((targetItem) => {
          const targetElement = targetItem.current || targetItem
          return !targetElement || targetElement?.contains(event.target)
        })
      ) {
        return
      }
      close()
    }

    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('touchstart', handler)
    }
  }, [])

  return (
    <View
      ref={root}
      className={classNames(classPrefix, className)}
      onTouchStart={(e) => onTouchStart(e)}
      onTouchMove={(e) => onTouchMove(e)}
      onTouchEnd={(e) => onTouchEnd(e)}
      style={style}
    >
      <View className={`${classPrefix}-wrapper`} style={wrapperStyle}>
        {renderActionContent('left')}
        {children}
        {renderActionContent('right')}
      </View>
    </View>
  )
})

Swipe.displayName = 'NutSwipe'
