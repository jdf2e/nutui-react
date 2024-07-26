import React, {
  useRef,
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { nextTick, useReady } from '@tarojs/taro'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { useTouch } from '@/utils/use-touch'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type SwipeSide = 'left' | 'right'

function preventDefault(event: any, isStopPropagation?: boolean): void {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }
  if (isStopPropagation) {
    event.stopPropagation()
  }
}
export interface SwipeInstance {
  open: (side: SwipeSide) => void
  close: () => void
}
export interface SwipeProps extends BasicComponent {
  name?: string | number
  leftAction?: React.ReactNode
  rightAction?: React.ReactNode
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
  beforeClose?: (position: string) => void
  disabled?: boolean
  onOpen?: ({
    name,
    position,
  }: {
    name: string | number
    position: SwipeSide
  }) => void
  onClose?: ({
    name,
    position,
  }: {
    name: string | number
    position: SwipeSide
  }) => void
  onActionClick?: (
    event: MouseEvent<HTMLDivElement>,
    position: SwipeSide
  ) => void
  onTouchStart?: (event: BaseEventOrig<HTMLDivElement>) => void
  onTouchEnd?: (event: BaseEventOrig<HTMLDivElement>) => void
  onTouchMove?: (event: BaseEventOrig<HTMLDivElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  name: '',
} as SwipeProps
export const Swipe = forwardRef<
  SwipeInstance,
  Partial<SwipeProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onTouchStart' | 'onTouchMove' | 'onTouchEnd'
    >
>((props, instanceRef) => {
  const classPrefix = 'nut-swipe'
  const touch: any = useTouch()

  // 获取元素的时候要在页面 onReady 后，需要参考小程序的事件周期
  useReady(() => {
    const getWidth = async () => {
      if (leftWrapper.current) {
        const leftRect = await getRectByTaro(leftWrapper.current)
        leftRect && setActionWidth((v) => ({ ...v, left: leftRect.width }))
      }
      if (rightWrapper.current) {
        const rightRect = await getRectByTaro(rightWrapper.current)
        rightRect && setActionWidth((v) => ({ ...v, right: rightRect.width }))
      }
    }
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
  const [actionWidth, setActionWidth] = useState({
    left: 0,
    right: 0,
  })
  const wrapperStyle = {
    transform: `translate3d(${state.offset}px, 0, 0)`,
    transitionDuration: state.dragging ? '0s' : '.6s',
  }
  const leftWidth = actionWidth.left
  const rightWidth = actionWidth.right

  const onTouchStart = async (event: BaseEventOrig<HTMLDivElement>) => {
    if (leftWrapper.current) {
      const leftRect = await getRectByTaro(leftWrapper.current)
      leftRect && setActionWidth((v) => ({ ...v, left: leftRect.width }))
    }
    if (rightWrapper.current) {
      const rightRect = await getRectByTaro(rightWrapper.current)
      rightRect && setActionWidth((v) => ({ ...v, right: rightRect.width }))
    }
    if (!props.disabled) {
      startOffset.current = state.offset
      touch.start(event)
      props.onTouchStart?.(event)
    }
  }

  const onTouchMove = (event: BaseEventOrig<HTMLDivElement>) => {
    if (props.disabled) {
      return
    }

    touch.move(event)
    props.onTouchMove?.(event)

    if (touch.isHorizontal()) {
      lockClick.current = true
      props.onTouchMove && props.onTouchMove(event)
      const newState = { ...state, dragging: true }
      const isEdge = !opened || touch.deltaX.current * startOffset.current < 0
      if (isEdge) {
        preventDefault(event, true)
      }
      newState.offset = rangeCalculation(
        touch.deltaX.current + startOffset.current,
        -rightWidth || 0,
        leftWidth || 0
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

  const toggle = (side: SwipeSide) => {
    const offset = Math.abs(state.offset)
    const base = 0.3
    const baseNum = opened ? 1 - base : base
    const width = side === 'left' ? leftWidth : rightWidth

    if (width && offset > Number(width) * baseNum) {
      open(side)
    } else {
      close(side)
    }
  }
  const open = (side: SwipeSide) => {
    opened.current = true
    const offset = side === 'left' ? leftWidth : -rightWidth
    const name = props.name as number | string
    props.onOpen?.({ name, position: side })
    setState((v) => ({ ...v, offset: Number(offset) || 0 }))
  }

  const close = (position?: SwipeSide) => {
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

  const leftWrapper = useRef(null)
  const rightWrapper = useRef(null)
  const renderActionContent = (side: SwipeSide) => {
    if (props[`${side}Action`]) {
      return (
        <div
          ref={side === 'left' ? leftWrapper : rightWrapper}
          className={`${classPrefix}-${side}`}
          onClick={(e) => handleOperate(e, side)}
        >
          {props[`${side}Action`]}
        </div>
      )
    }
    return null
  }
  const handleOperate = (
    event: MouseEvent<HTMLDivElement>,
    position: SwipeSide
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
      <div className={`${classPrefix}-wrapper`} style={wrapperStyle}>
        {renderActionContent('left')}
        {children}
        {renderActionContent('right')}
      </div>
    </View>
  )
})

Swipe.displayName = 'NutSwipe'
