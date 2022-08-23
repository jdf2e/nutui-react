import React, {
  useRef,
  forwardRef,
  useState,
  TouchEvent,
  useMemo,
  useCallback,
  useImperativeHandle,
  useEffect,
} from 'react'
import bem from '@/utils/bem'
import { useTouch } from '@/utils/useTouch'
import { getRect } from '@/utils/useClientRect'

export type SwipeSide = 'left' | 'right'
export type SwipePosition = SwipeSide | 'cell' | 'outside'

function preventDefault(
  event: TouchEvent | Event,
  isStopPropagation?: boolean
): void {
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
export interface SwipeProps {
  /** 自定义类名 */
  className: string
  /** 自定义样式 */
  style: React.CSSProperties
  /** 标识符，可以在事件参数中获取到 */
  name?: string | number
  /** 指定左侧滑动区域宽度，单位为px */
  leftWidth?: string | number
  /** 指定右侧滑动区域宽度，单位为 px */
  rightWidth?: string | number
  /** 左侧滑动区域的内容 */
  leftAction?: React.ReactNode
  /** 右侧滑动区域的内容 */
  rightAction?: React.ReactNode
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
  beforeClose?: (position: string) => void
  /** 是否禁用 */
  disabled?: boolean
  /** 打开时触发 */
  onOpen?: ({
    name,
    position,
  }: {
    name: string | number
    position: SwipeSide
  }) => void
  /** 关闭时触发 */
  onClose?: ({
    name,
    position,
  }: {
    name: string | number
    position: SwipePosition
  }) => void
  /** 点击时触发 */
  onActionClick?: (event: Event, position: SwipePosition) => void
  children?: React.ReactNode
}
const defaultProps = {
  name: '',
  leftWidth: 0,
  rightWidth: 0,
} as SwipeProps
export const Swipe = forwardRef<
  SwipeInstance,
  Partial<SwipeProps> & React.HTMLAttributes<HTMLDivElement>
>((props, instanceRef) => {
  const swipeBem = bem('swipe')
  const touch: any = useTouch()

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
  const leftWidth = useMemo(
    () => (props.leftWidth ? props.leftWidth : actionWidth.left),
    [props.leftWidth, actionWidth.left]
  )

  const rightWidth = useMemo(
    () => (props.rightWidth ? props.rightWidth : actionWidth.right),
    [props.rightWidth, actionWidth.right]
  )

  const onTouchStart = (event: Event) => {
    if (!props.disabled) {
      startOffset.current = state.offset
      touch.start(event)
    }
  }

  const onTouchMove = (event: Event) => {
    if (props.disabled) {
      return
    }

    touch.move(event)

    if (touch.isHorizontal()) {
      lockClick.current = true
      const newState = { ...state, dragging: true }
      const isEdge = !opened || touch.deltaX * startOffset.current < 0
      if (isEdge) {
        preventDefault(event, true)
      }

      newState.offset = rangeCalculation(
        touch.deltaX + startOffset.current,
        -rightWidth,
        leftWidth
      )

      setState(newState)
    }
  }

  const onTouchEnd = () => {
    if (state.dragging) {
      setState((v) => ({ ...v, dragging: false }))
      toggle(state.offset > 0 ? 'left' : 'right')

      setTimeout(() => {
        lockClick.current = false
      }, 0)
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

  const close = (position?: SwipePosition) => {
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

  const getNodeWidth = (node: Element) => {
    if (node) {
      const ele = getRect(node)
      return ele.width
    }
    return 0
  }
  const leftRef = useCallback(
    (node: Element | null) => {
      if (node !== null) {
        setActionWidth((v) => ({ ...v, left: getNodeWidth(node) }))
      }
    },
    [props.leftAction]
  )
  const rightRef = useCallback(
    (node: Element | null) => {
      if (node !== null) {
        setActionWidth((v) => ({ ...v, right: getNodeWidth(node) }))
      }
    },
    [props.rightAction]
  )
  const renderActionContent = (side: SwipeSide, measuredRef: any) => {
    if (props[`${side}Action`]) {
      return (
        <div
          ref={measuredRef}
          className={`${swipeBem(side)}`}
          onClick={(e: any) => handleOperate(e, side)}
        >
          {props[`${side}Action`]}
        </div>
      )
    }
    return null
  }
  const handleOperate = (event: Event, position: SwipePosition) => {
    event.stopPropagation()
    if (props.beforeClose) {
      props.beforeClose(position)
    } else {
      props.onActionClick && props.onActionClick(event, position)
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
    <div
      ref={root}
      className={`${swipeBem()} ${className}`}
      onTouchStart={(e: any) => onTouchStart(e)}
      onTouchMove={(e: any) => onTouchMove(e)}
      onTouchEnd={onTouchEnd}
      style={style}
    >
      <div className={`${swipeBem('wrapper')}`} style={wrapperStyle}>
        {renderActionContent('left', leftRef)}
        {children}
        {renderActionContent('right', rightRef)}
      </div>
    </div>
  )
})

Swipe.defaultProps = defaultProps
Swipe.displayName = 'NutSwipe'
