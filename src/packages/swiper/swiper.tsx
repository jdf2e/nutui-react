import React, {
  useState,
  useEffect,
  useRef,
  TouchEvent,
  useMemo,
  CSSProperties,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { DataContext } from './context'
import { getRect } from '@/utils/use-client-rect'
import Indicator from '@/packages/indicator/index'
import { BasicComponent } from '@/utils/typings'

export type SwiperRef = {
  to: (index: number) => void
  next: () => void
  prev: () => void
}

export interface SwiperProps extends BasicComponent {
  width: number | string
  height: number | string
  duration: number | string
  defaultValue: number | string
  autoPlay: number | string
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  loop: boolean
  touchable: boolean
  preventDefault: boolean
  stopPropagation: boolean
  center: boolean
  onChange?: (current: number) => void
}

const defaultProps = {
  width: typeof window === 'object' ? window.innerWidth : 375,
  height: 0,
  duration: 500,
  defaultValue: 0,
  autoPlay: 0,
  direction: 'horizontal',
  indicator: false,
  loop: false,
  touchable: true,
  preventDefault: true,
  stopPropagation: true,
  center: false,
  className: '',
} as SwiperProps

type Parent = {
  propSwiper: SwiperProps
  size?: number | string
}

const DISTANCE = 5
export const Swiper = React.forwardRef<
  SwiperRef,
  Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
>((props, ref) => {
  const propSwiper = { ...defaultProps, ...props }
  const {
    children,
    direction,
    className,
    onChange,
    defaultValue,
    indicator,
    touchable,
    preventDefault,
    stopPropagation,
    autoPlay,
    center,
    ...rest
  } = propSwiper
  const container = useRef<any>(null)
  const innerRef = useRef<any>(null)
  const swiperRef = useRef<any>({
    moving: false,
    autoplayTimer: null,
    width: 0,
    height: 0,
    offset: 0,
    size: 0,
  })
  const isVertical = direction === 'vertical'

  const [rect, setRect] = useState(null as any | null)
  // eslint-disable-next-line prefer-const
  let [active, setActive] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [offset, setOffset] = useState(0)
  const [childOffset, setChildOffset] = useState<any[]>([])
  const [ready, setReady] = useState(false)

  let size = isVertical ? height : width
  const [touch] = useState({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    stateDirection: '',
    delta: 0,
    touchTime: 0,
  })

  const { childs, childCount } = useMemo(() => {
    let childCount = 0
    const childs = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return null
      childCount++
      return child
    })
    return {
      childs,
      childCount,
    }
  }, [props.children])
  let trackSize = childCount * Number(size)

  // 父组件参数传入子组件item
  const parent: Parent = {
    propSwiper,
    size,
  }
  const minOffset = (() => {
    if (rect) {
      const base = isVertical ? rect.height : rect.width
      return base - Number(size) * childCount
    }
    return 0
  })()
  // 清除定时器
  const stopAutoPlay = () => {
    clearTimeout(swiperRef.current.autoplayTimer)
    swiperRef.current.autoplayTimer = null
  }
  // 定时轮播
  const startPlay = () => {
    if (propSwiper.autoPlay <= 0 || childCount <= 1) return
    stopAutoPlay()
    swiperRef.current.autoplayTimer = setTimeout(() => {
      next()
      startPlay()
    }, Number(propSwiper.autoPlay))
  }
  // 重置首尾位置信息
  const resetPosition = () => {
    swiperRef.current.moving = true
    if (active <= -1) {
      move({ pace: childCount })
    }
    if (active >= childCount) {
      move({ pace: -childCount })
    }
  }

  // 上一页
  const prev = () => {
    resetPosition()
    resetTouchDetails()
    requestFrame(() => {
      requestFrame(() => {
        swiperRef.current.moving = false
        move({
          pace: -1,
          isEmit: true,
        })
      })
    })
  }
  // 下一页
  const next = () => {
    resetPosition()
    resetTouchDetails()
    requestFrame(() => {
      requestFrame(() => {
        swiperRef.current.moving = false
        move({
          pace: 1,
          isEmit: true,
        })
      })
    })
  }
  // 前往指定页
  const to = (index: number) => {
    resetPosition()
    resetTouchDetails()
    requestFrame(() => {
      requestFrame(() => {
        swiperRef.current.moving = false
        let targetIndex
        if (props.loop && childCount === index) {
          targetIndex = active === 0 ? 0 : index
        } else {
          targetIndex = index % childCount
        }
        move({
          pace: targetIndex - active,
          isEmit: true,
        })
      })
    })
  }
  const resize = () => {
    init(active)
  }
  // 切换方法
  const move = ({
    pace = 0,
    offset = 0,
    isEmit = false,
    movingStatus = false,
  }) => {
    if (childCount <= 1) return
    const targetActive = getActive(pace)
    // 父级容器偏移量
    const targetOffset = getOffset(targetActive, offset)
    // 如果循环，调整开头结尾图片位置
    if (props.loop) {
      if (
        Array.isArray(children) &&
        children[0] &&
        targetOffset !== minOffset
      ) {
        const rightBound = targetOffset < minOffset
        childOffset[0] = rightBound ? trackSize : 0
      }
      if (
        Array.isArray(children) &&
        children[childCount - 1] &&
        targetOffset !== 0
      ) {
        const leftBound = targetOffset > 0
        childOffset[childCount - 1] = leftBound ? -trackSize : 0
      }
      setChildOffset(childOffset)
    }
    if (isEmit && active !== targetActive) {
      props.onChange && props.onChange((targetActive + childCount) % childCount)
    }
    active = targetActive
    setActive(targetActive)
    setOffset(targetOffset)
    getStyle(targetOffset)
  }
  // 确定当前active 元素
  const getActive = (pace: number) => {
    if (pace) {
      const _active = active + pace
      if (props.loop) {
        return range(_active, -1, childCount)
      }
      return range(_active, 0, childCount - 1)
    }
    return active
  }
  // 计算位移
  const getOffset = (active: number, offset = 0) => {
    let currentPosition = active * Number(size)
    if (!props.loop) {
      currentPosition = Math.min(currentPosition, -minOffset)
    }
    let targetOffset = offset - currentPosition
    if (!props.loop) {
      targetOffset = range(targetOffset, minOffset, 0)
    }
    return targetOffset
  }
  // 浏览器 帧 事件
  const requestFrame = (fn: FrameRequestCallback) => {
    window.requestAnimationFrame.call(window, fn)
  }
  // 取值 方法
  const range = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
  }

  const getDirection = (x: number, y: number) => {
    if (x > y && x > DISTANCE) return 'horizontal'
    if (y > x && y > DISTANCE) return 'vertical'
    return ''
  }
  // 重置 全部位移信息
  const resetTouchDetails = () => {
    touch.startX = 0
    touch.startY = 0
    touch.deltaX = 0
    touch.deltaY = 0
    touch.offsetX = 0
    touch.offsetY = 0
    touch.delta = 0
    touch.stateDirection = ''
    touch.touchTime = 0
  }

  // 触摸事件开始
  const touchStart = (e: TouchEvent) => {
    resetTouchDetails()
    touch.startX = e.touches[0].clientX
    touch.startY = e.touches[0].clientY
  }

  // 触摸事件移动
  const handleTouchMove = (e: TouchEvent) => {
    touch.deltaX = e.touches[0].clientX - touch.startX
    touch.deltaY = e.touches[0].clientY - touch.startY
    touch.offsetX = Math.abs(touch.deltaX)
    touch.offsetY = Math.abs(touch.deltaY)
    touch.delta = isVertical ? touch.deltaY : touch.deltaX
    if (!touch.stateDirection) {
      touch.stateDirection = getDirection(touch.offsetX, touch.offsetY)
    }
  }
  const classPrefix = 'nut-swiper'
  const contentClass = classNames({
    [`${classPrefix}__inner`]: true,
    [`${classPrefix}__vertical`]: isVertical,
  })
  const getStyle = (moveOffset = offset) => {
    const target = innerRef.current
    let _offset = 0
    if (!center) {
      _offset = moveOffset
    } else {
      const _size = isVertical ? height : width
      const val = isVertical
        ? (rect as DOMRect).height - _size
        : (rect as DOMRect).width - _size
      _offset =
        moveOffset +
        (active === childCount - 1 && !props.loop ? -val / 2 : val / 2)
    }
    target.style.transitionDuration = `${
      swiperRef.current.moving ? 0 : props.duration
    }ms`
    target.style[isVertical ? 'height' : 'width'] = `${
      Number(size) * childCount
    }px`
    target.style[isVertical ? 'width' : 'height'] = `${
      isVertical ? width : height
    }px`
    target.style.transform = `translate3D${
      !isVertical ? `(${_offset}px,0,0)` : `(0,${_offset}px,0)`
    }`
  }

  const onTouchStart = (e: TouchEvent) => {
    if (!props.touchable) return
    touchStart(e)
    touch.touchTime = Date.now()
    stopAutoPlay()
    resetPosition()
  }

  const onTouchMove = (e: TouchEvent) => {
    if (props.preventDefault) e.preventDefault()
    if (props.stopPropagation) e.stopPropagation()
    if (props.touchable && swiperRef.current.moving) {
      handleTouchMove(e)
      if (touch.stateDirection === props.direction) {
        move({
          offset: touch.delta,
        })
      }
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (!props.touchable || !swiperRef.current.moving) return
    const speed = touch.delta / (Date.now() - touch.touchTime)
    // 快速滑动产生的 swipe，和超过阈值的滑动
    const isShouldMove =
      Math.abs(speed) > 0.3 ||
      Math.abs(touch.delta) > Number((size / 2).toFixed(2))
    let pace = 0
    swiperRef.current.moving = false

    if (isShouldMove && touch.stateDirection === props.direction) {
      const offset = isVertical ? touch.offsetY : touch.offsetX
      if (props.loop) {
        if (offset > 0) {
          pace = touch.delta > 0 ? -1 : 1
        } else {
          pace = 0
        }
      } else {
        pace = -Math[touch.delta > 0 ? 'ceil' : 'floor'](touch.delta / size)
      }
      move({
        pace,
        isEmit: true,
      })
    } else if (touch.delta) {
      move({ pace: 0 })
    } else {
      getStyle()
    }
    startPlay()
  }

  useEffect(() => {
    swiperRef.current.activeIndicator = (active + childCount) % childCount
  }, [active])

  const init = (active: number = +propSwiper.defaultValue) => {
    const rect = getRect(container?.current)
    const currentIndex = Math.max(Math.min(childCount - 1, active), 0)
    const width = +propSwiper.width || rect.width
    const height = +propSwiper.height || rect.height
    size = isVertical ? height : width
    trackSize = childCount * Number(size)
    const targetOffset = getOffset(currentIndex)
    swiperRef.current.moving = true
    if (ready) {
      swiperRef.current.moving = false
    }
    setRect(rect)
    setActive(currentIndex)
    setWidth(width)
    setHeight(height)
    setOffset(targetOffset)
    setReady(true)
  }

  useEffect(() => {
    if (ready) {
      getStyle()
    }
  }, [isVertical, width, height, offset, ready])

  useEffect(() => {
    if (ready) {
      stopAutoPlay()
      startPlay()
    }
    return () => setReady(false)
  }, [ready])

  useEffect(() => {
    stopAutoPlay()
    startPlay()
  }, [children])

  useEffect(() => init(), [propSwiper.defaultValue])

  useEffect(() => {
    const target = container.current
    target.addEventListener('touchstart', onTouchStart, false)
    target.addEventListener('touchmove', onTouchMove, false)
    target.addEventListener('touchend', onTouchEnd, false)
    return () => {
      target.removeEventListener('touchstart', onTouchStart, false)
      target.removeEventListener('touchmove', onTouchMove, false)
      target.removeEventListener('touchend', onTouchEnd, false)
    }
  })

  useEffect(() => {
    return () => stopAutoPlay()
  }, [])

  const getItemStyle = (index: any) => {
    const style: CSSProperties = {}
    if (size) {
      style[direction === 'horizontal' ? 'width' : 'height'] = `${size}px`
    }
    const offset = childOffset[index]
    if (offset) {
      style.transform = `translate3D${
        direction === 'horizontal' ? `(${offset}px,0,0)` : `(0,${offset}px,0)`
      }`
    }
    return style
  }
  React.useImperativeHandle(ref, () => ({
    to,
    next,
    prev,
    resize,
  }))

  const renderIndicator = () => {
    if (React.isValidElement(indicator)) return indicator
    if (indicator === true) {
      return (
        <div
          className={classNames({
            [`${classPrefix}__indicator`]: true,
            [`${classPrefix}__indicator-vertical`]: isVertical,
          })}
        >
          <Indicator
            current={(active + childCount) % childCount}
            total={childs?.length}
            direction={direction}
          />
        </div>
      )
    }
    return null
  }

  return (
    <DataContext.Provider value={parent}>
      <div
        className={classNames(classPrefix, className)}
        ref={container}
        {...rest}
      >
        <div className={contentClass} ref={innerRef}>
          {React.Children.map(childs, (child: any, index: number) => (
            <div
              className={`${classPrefix}__item-wrapper`}
              style={getItemStyle(index)}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
        {renderIndicator()}
      </div>
    </DataContext.Provider>
  )
})
Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
