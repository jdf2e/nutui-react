import React, {
  forwardRef,
  MouseEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { nextTick, useReady } from '@tarojs/taro'
import { useTouch } from '@/hooks/use-touch'
import { getRectInMultiPlatformWithoutCache } from '@/utils/taro/get-rect'
import { ComponentDefaults } from '@/utils/typings'
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
  const touch: any = useTouch()
  const uid = useUuid()
  const leftId = `swipe-left-${uid}`
  const rightId = `swipe-right-${uid}`

  const getWidth = async () => {
    if (leftWrapper.current) {
      const leftRect = await getRectInMultiPlatformWithoutCache(
        leftWrapper.current,
        leftId
      )
      leftRect && setActionWidth((v: any) => ({ ...v, left: leftRect.width }))
    }
    if (rightWrapper.current) {
      const rightRect = await getRectInMultiPlatformWithoutCache(
        rightWrapper.current,
        rightId
      )
      rightRect &&
        setActionWidth((v: any) => ({ ...v, right: rightRect.width }))
    }
  }

  // 获取元素的时候要在页面 onReady 后，需要参考小程序的事件周期
  useReady(() => {
    nextTick(() => getWidth())
  })

  const { children, className, style } = { ...defaultProps, ...props }

  const root: any = useRef<HTMLDivElement>()
  const opened = useRef(false)
  const lockClick = useRef(false)
  const startOffset = useRef(0)

  const [state, setState] = useState({
    offset: 0,
    dragging: false,
  })
  const [actionWidth, updateState] = useRefState({
    left: 0,
    right: 0,
  })
  const setActionWidth = (fn: any) => {
    const res = fn()
    if (res.left !== undefined) {
      updateState({
        ...actionWidth.current,
        left: res.left,
      })
    }
    if (res.right !== undefined) {
      updateState({
        ...actionWidth.current,
        right: res.right,
      })
    }
  }
  const wrapperStyle = useMemo(() => {
    return {
      transform: `translate(${state.offset}px, 0)`,
      transitionDuration: '.6s',
    }
  }, [state.offset])

  const onTouchStart = async (event: BaseEventOrig<HTMLDivElement>) => {
    if (!props.disabled) {
      getWidth()
      startOffset.current = state.offset
      touch.start(event)
      props.onTouchStart?.(event)
    }
  }

  const onTouchMove = (event: BaseEventOrig<HTMLDivElement>) => {
    if (props.disabled) return
    touch.move(event)
    props.onTouchMove?.(event)
    if (touch.isHorizontal()) {
      lockClick.current = true
      const isEdge = !opened || touch.deltaX.current * startOffset.current < 0
      if (isEdge) {
        preventDefault(event, true)
      }
      const offset = rangeCalculation(
        touch.deltaX.current + startOffset.current,
        -actionWidth.current.right || 0,
        actionWidth.current.left || 0
      )
      setState((prevState) => ({
        ...prevState,
        dragging: true,
        offset: Number(offset) || 0,
      }))
    }
  }

  const onTouchEnd = (event: BaseEventOrig<HTMLDivElement>) => {
    if (state.dragging) {
      setState((prevState) => ({ ...prevState, dragging: false }))
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
    const baseNum = opened ? 1 - base : base
    const width =
      side === 'left' ? actionWidth.current.left : actionWidth.current.right
    if (width && offset > Number(width) * baseNum) {
      open(side)
    } else {
      close(side)
    }
  }
  const open = (side: PositionX) => {
    opened.current = true
    const offset =
      side === 'left' ? actionWidth.current.left : -actionWidth.current.right
    const name = props.name as number | string
    props.onOpen?.({ name, position: side })

    // dd
    setState((prevState) => ({
      ...prevState,
      offset: Number(offset) || 0,
    }))
  }

  const close = useCallback(
    (position?: PositionX) => {
      if (opened.current) {
        opened.current = false
        props.onClose?.({
          name: props.name as number | string,
          position: position || 'left',
        })
      }
      // setState((v) => ({ ...v, offset: 0 }))
      setState((prevState) => ({
        ...prevState,
        offset: 0,
      }))
    },
    [props]
  )

  const rangeCalculation = (
    num: number | string,
    min: number | string,
    max: number | string
  ) => {
    return Math.min(Math.max(Number(num), Number(min)), Number(max))
  }

  const leftWrapper = useRef(null)
  const rightWrapper = useRef(null)
  const renderActionContent = (side: PositionX) => {
    if (props[`${side}Action`]) {
      return (
        <View
          ref={side === 'left' ? leftWrapper : rightWrapper}
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
    // 并没有生效
    const handler: any = (event: { target: Node | null }) => {
      console.log('~~hanyu handler---- window', event)
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
  }, [close])

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
