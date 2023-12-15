import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  CSSProperties,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { DataContext } from './context'
import { getRect } from '@/utils/use-client-rect'
import Indicator from '@/packages/indicator/index'
import { BasicComponent } from '@/utils/typings'
import { useTouch } from '@/utils/use-touch'
import requestAniFrame from '@/utils/raf'

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

export const Swiper = React.forwardRef<
  SwiperRef,
  Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
>((props, ref) => {
  const mergedProps = { ...defaultProps, ...props }
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
  } = mergedProps
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
  const touch = useTouch()

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

  const { swiperItems, swiperItemCount } = useMemo(() => {
    let count = 0
    const swiperItems = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return null
      count++
      return child
    })
    return {
      swiperItems,
      swiperItemCount: count,
    }
  }, [props.children])
  let trackSize = swiperItemCount * Number(size)

  // 父组件参数传入子组件item
  const parent: Parent = {
    propSwiper: mergedProps,
    size,
  }
  const minOffset = (() => {
    if (rect) {
      const base = isVertical ? rect.height : rect.width
      return base - Number(size) * swiperItemCount
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
    if (mergedProps.autoPlay <= 0 || swiperItemCount <= 1) return
    stopAutoPlay()
    swiperRef.current.autoplayTimer = setTimeout(() => {
      next()
      startPlay()
    }, Number(mergedProps.autoPlay))
  }
  // 重置首尾位置信息
  const resetPosition = () => {
    swiperRef.current.moving = true
    if (active <= -1) {
      move({ pace: swiperItemCount })
    }
    if (active >= swiperItemCount) {
      move({ pace: -swiperItemCount })
    }
  }
  // 上一页
  const prev = () => {
    resetPosition()
    touch.reset()
    requestAniFrame(() => {
      swiperRef.current.moving = false
      move({
        pace: -1,
        isEmit: true,
      })
    })
  }
  // 下一页
  const next = () => {
    resetPosition()
    touch.reset()
    requestAniFrame(() => {
      swiperRef.current.moving = false
      move({
        pace: 1,
        isEmit: true,
      })
    })
  }
  // 前往指定页
  const to = (index: number) => {
    resetPosition()
    touch.reset()
    requestAniFrame(() => {
      swiperRef.current.moving = false
      let targetIndex
      if (props.loop && swiperItemCount === index) {
        targetIndex = active === 0 ? 0 : index
      } else {
        targetIndex = index % swiperItemCount
      }
      move({
        pace: targetIndex - active,
        isEmit: true,
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
    console.log('move', pace)
    if (swiperItemCount <= 1) return
    const targetActive = getActive(pace)
    console.log(targetActive)
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
        children[swiperItemCount - 1] &&
        targetOffset !== 0
      ) {
        const leftBound = targetOffset > 0
        childOffset[swiperItemCount - 1] = leftBound ? -trackSize : 0
      }
      setChildOffset(childOffset)
    }
    if (isEmit && active !== targetActive) {
      props.onChange &&
        props.onChange((targetActive + swiperItemCount) % swiperItemCount)
    }
    active = targetActive
    setActive(targetActive)
    setOffset(targetOffset)
    getStyle(targetOffset)
  }

  React.useImperativeHandle(ref, () => ({
    to,
    next,
    prev,
    resize,
  }))

  // 确定当前active 元素
  const getActive = (pace: number) => {
    if (pace) {
      const _active = active + pace
      if (props.loop) {
        return range(_active, -1, swiperItemCount)
      }
      return range(_active, 0, swiperItemCount - 1)
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

  // 取值 方法
  const range = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
  }

  const classPrefix = 'nut-swiper'
  const contentClass = classNames({
    [`${classPrefix}-inner`]: true,
    [`${classPrefix}-vertical`]: isVertical,
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
        (active === swiperItemCount - 1 && !props.loop ? -val / 2 : val / 2)
    }
    target.style.transitionDuration = `${
      swiperRef.current.moving ? 0 : props.duration
    }ms`
    target.style[isVertical ? 'height' : 'width'] = `${
      Number(size) * swiperItemCount
    }px`
    target.style[isVertical ? 'width' : 'height'] = `${
      isVertical ? width : height
    }px`
    target.style.transform = `translate3D${
      !isVertical ? `(${_offset}px,0,0)` : `(0,${_offset}px,0)`
    }`
  }

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (!props.touchable) return
    touch.start(e)
    stopAutoPlay()
    resetPosition()
  }

  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (props.preventDefault) e.preventDefault()
    if (props.stopPropagation) e.stopPropagation()
    if (props.touchable && swiperRef.current.moving) {
      touch.move(e)
      if (touch.direction.current === props.direction) {
        move({
          offset: touch.delta.current,
        })
      }
    }
  }
  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (!props.touchable || !swiperRef.current.moving) return
    const speed =
      touch.delta.current / (Date.now() - (touch.touchTime.current as number))
    // 快速滑动产生的 swipe，和超过阈值的滑动
    const isShouldMove =
      Math.abs(speed) > 0.3 ||
      Math.abs(touch.delta.current) > Number((size / 2).toFixed(2))
    swiperRef.current.moving = false

    if (isShouldMove && touch.direction.current === props.direction) {
      let pace = 0
      const offset = touch.isVertical() ? touch.offsetY : touch.offsetX
      if (props.loop) {
        if (offset.current > 0) {
          pace = touch.delta.current > 0 ? -1 : 1
        }
      } else {
        pace = -Math[touch.delta.current > 0 ? 'ceil' : 'floor'](
          touch.delta.current / size
        )
      }
      move({
        pace,
        isEmit: true,
      })
    } else if (touch.delta.current) {
      move({ pace: 0 })
    } else {
      getStyle()
    }
    startPlay()
  }

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

  const init = (index?: number) => {
    const rect = getRect(container?.current)
    const currentIndex = Math.max(
      Math.min(swiperItemCount - 1, index || Number(mergedProps.defaultValue)),
      0
    )
    const width = Number(mergedProps.width) || rect.width
    const height = Number(mergedProps.height) || rect.height
    size = isVertical ? height : width
    trackSize = swiperItemCount * Number(size)
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

  useEffect(() => {
    const events = [
      { name: 'touchstart', e: onTouchStart },
      { name: 'touchmove', e: onTouchMove },
      { name: 'touchend', e: onTouchEnd },
    ]
    events.forEach((item) => {
      container.current?.addEventListener(item.name, item.e, false)
    })

    return () => {
      events.forEach((item) => {
        container.current?.removeEventListener(item.name, item.e, false)
      })
    }
  })

  useEffect(() => init(), [props.defaultValue])

  useEffect(() => {
    return () => stopAutoPlay()
  }, [])

  const renderIndicator = () => {
    if (React.isValidElement(indicator)) return indicator
    if (!indicator) return null
    return (
      <div
        className={classNames({
          [`${classPrefix}-indicator`]: true,
          [`${classPrefix}-indicator-vertical`]: isVertical,
        })}
      >
        <Indicator
          current={(active + swiperItemCount) % swiperItemCount}
          total={swiperItems?.length}
          direction={direction}
        />
      </div>
    )
  }

  return (
    <DataContext.Provider value={parent}>
      <div
        className={classNames(classPrefix, className)}
        ref={container}
        {...rest}
      >
        <div className={contentClass} ref={innerRef}>
          {React.Children.map(swiperItems, (child: any, index: number) => (
            <div
              className={`${classPrefix}-item-wrapper`}
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
