import React, { useState, useEffect, useRef, TouchEvent, useMemo } from 'react'
import classNames from 'classnames'
import { useReady, createSelectorQuery, nextTick } from '@tarojs/taro'
import { DataContext } from './UserContext'
import bem from '@/utils/bem'

export type SwiperRef = {
  to: (index: number) => void
  next: () => void
  prev: () => void
}
interface IStyle {
  width?: string
  height?: string
  transform?: string
}
export interface SwiperProps {
  width: number | string
  height: number | string
  duration: number | string
  initPage: number | string
  autoPlay: number | string
  direction: 'horizontal' | 'vertical'
  paginationColor: string
  paginationVisible: boolean
  loop: boolean
  touchable: boolean
  isPreventDefault: boolean
  isStopPropagation: boolean
  isCenter: boolean
  className?: string
  style?: React.CSSProperties
  pageContent?: React.ReactNode
  onChange?: (currPage: number) => void
}

const defaultProps = {
  width: typeof window === 'object' ? window.innerWidth : 375,
  height: 0,
  duration: 500,
  initPage: 0,
  autoPlay: 0,
  direction: 'horizontal',
  paginationColor: '#fff',
  paginationVisible: false,
  loop: true,
  touchable: true,
  isPreventDefault: true,
  isStopPropagation: true,
  isCenter: false,
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
    pageContent,
    onChange,
    initPage,
    paginationColor,
    paginationVisible,
    touchable,
    isPreventDefault,
    isStopPropagation,
    autoPlay,
    isCenter,
    ...rest
  } = propSwiper
  const container = useRef<any>(null)
  const innerRef = useRef<any>(null)
  const _swiper = useRef<any>({
    moving: false,
    autoplayTimer: null,
    width: 0,
    height: 0,
    offset: 0,
    size: 0,
  })
  const [refRandomId] = useState(Math.random().toString(36).slice(-8))

  const isVertical = direction === 'vertical'

  const [rect, setRect] = useState(null as DOMRect | null)
  // eslint-disable-next-line prefer-const
  let [active, setActive] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [offset, setOffset] = useState(0)
  const [childOffset, setChildOffset] = useState<any[]>([])
  const [ready, setReady] = useState(false)

  let size = isVertical ? height : width
  const [touch, setTouch] = useState({
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
      const base = isVertical ? rect?.height : rect?.width
      return base - Number(size) * childCount
    }
    return 0
  })()
  // 清除定时器
  const stopAutoPlay = () => {
    clearTimeout(_swiper.current.autoplayTimer)
    _swiper.current.autoplayTimer = null
  }
  // 定时轮播
  const autoplay = () => {
    if (propSwiper.autoPlay <= 0 || childCount <= 1) return
    stopAutoPlay()
    _swiper.current.autoplayTimer = setTimeout(() => {
      next()
      autoplay()
    }, Number(propSwiper.autoPlay))
  }
  // 重置首尾位置信息
  const resettPosition = () => {
    _swiper.current.moving = true
    if (active <= -1) {
      move({ pace: childCount })
    }
    if (active >= childCount) {
      move({ pace: -childCount })
    }
  }

  // 上一页
  const prev = () => {
    resettPosition()
    touchReset()
    requestFrame(() => {
      requestFrame(() => {
        _swiper.current.moving = false
        move({
          pace: -1,
          isEmit: true,
        })
      })
    })
  }
  // 下一页
  const next = () => {
    resettPosition()
    touchReset()
    requestFrame(() => {
      requestFrame(() => {
        _swiper.current.moving = false
        move({
          pace: 1,
          isEmit: true,
        })
      })
    })
  }
  // 前往指定页
  const to = (index: number) => {
    resettPosition()
    touchReset()
    requestFrame(() => {
      requestFrame(() => {
        _swiper.current.moving = false
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
  const touchReset = () => {
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
    touchReset()
    touch.startX = e.touches[0].clientX
    touch.startY = e.touches[0].clientY
  }

  // 触摸事件移动
  const touchMove = (e: TouchEvent) => {
    touch.deltaX = e.touches[0].clientX - touch.startX
    touch.deltaY = e.touches[0].clientY - touch.startY
    touch.offsetX = Math.abs(touch.deltaX)
    touch.offsetY = Math.abs(touch.deltaY)
    touch.delta = isVertical ? touch.deltaY : touch.deltaX
    if (!touch.stateDirection) {
      touch.stateDirection = getDirection(touch.offsetX, touch.offsetY)
    }
  }
  const b = bem('swiper')
  const classes = classNames(b(''))
  const contentClass = classNames({
    [`${b('inner')}`]: true,
    [`${b('vertical')}`]: isVertical,
  })
  const getStyle = (moveOffset = offset) => {
    const target = innerRef.current
    let _offset = 0
    if (!isCenter) {
      _offset = moveOffset
    } else {
      const _size = isVertical ? height : width
      const val = isVertical
        ? (rect as DOMRect)?.height - _size
        : (rect as DOMRect)?.width - _size
      _offset =
        moveOffset +
        (active === childCount - 1 && !props.loop ? -val / 2 : val / 2)
    }
    target.style.transitionDuration = `${
      _swiper.current.moving ? 0 : props.duration
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
    if (props.isPreventDefault) e.preventDefault()
    if (props.isStopPropagation) e.stopPropagation()
    if (!props.touchable) return
    touchStart(e)
    touch.touchTime = Date.now()
    stopAutoPlay()
    resettPosition()
  }

  const onTouchMove = (e: TouchEvent) => {
    if (props.touchable && _swiper.current.moving) {
      touchMove(e)
      if (touch.stateDirection === props.direction) {
        move({
          offset: touch.delta,
        })
      }
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (!props.touchable || !_swiper.current.moving) return
    const speed = touch.delta / (Date.now() - touch.touchTime)
    const isShouldMove =
      Math.abs(speed) > 0.3 || Math.abs(touch.delta) > +(size / 2).toFixed(2)
    let pace = 0
    _swiper.current.moving = false
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
    autoplay()
  }

  useEffect(() => {
    _swiper.current.activePagination = (active + childCount) % childCount
  }, [active])

  const queryRect = (element: any): Promise<any> => {
    return new Promise((resolve) => {
      const query = createSelectorQuery()

      query.select(`#${(element as any).id}`) &&
        query.select(`#${(element as any).id}`).boundingClientRect()
      query.exec(function (res: any) {
        resolve(res[0])
      })
    })
  }
  const init = async (active: number = +propSwiper.initPage) => {
    const rect = await queryRect(container.current)
    const _active = Math.max(Math.min(childCount - 1, active), 0)
    const _width = propSwiper.width ? +propSwiper.width : rect?.width
    const _height = propSwiper.height ? +propSwiper.height : rect?.height
    size = isVertical ? _height : _width
    trackSize = childCount * Number(size)
    const targetOffset = getOffset(_active)
    _swiper.current.moving = true
    if (ready) {
      _swiper.current.moving = false
    }
    setRect(rect)
    setActive(_active)
    setWidth(_width)
    setHeight(_height)
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
      autoplay()
    }
    return () => {
      setReady(false)
    }
  }, [ready])
  useEffect(() => {
    stopAutoPlay()
    autoplay()
  }, [children])
  useEffect(() => {
    init()
  }, [propSwiper.initPage])
  useEffect(() => {
    return () => {
      stopAutoPlay()
    }
  }, [])
  useReady(() => {
    nextTick(() => {
      init()
    })
  })
  const itemStyle = (index: any) => {
    const style: IStyle = {}
    const _direction = propSwiper.direction || direction
    const _size = size
    if (_size) {
      style[_direction === 'horizontal' ? 'width' : 'height'] = `${_size}px`
    }
    const offset = childOffset[index]
    if (offset) {
      style.transform = `translate3D${
        _direction === 'horizontal' ? `(${offset}px,0,0)` : `(0,${offset}px,0)`
      }`
    }
    return style
  }
  React.useImperativeHandle(ref, () => ({
    to,
    next,
    prev,
  }))
  return (
    <DataContext.Provider value={parent}>
      <view
        className={`${classes} ${className}`}
        ref={container}
        {...rest}
        id={`container-${refRandomId}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        // @ts-ignore
        catchMove={isVertical}
      >
        <div className={contentClass} ref={innerRef}>
          {React.Children.map(childs, (child: any, index: number) => {
            return (
              <div
                className={b('item-wrapper')}
                style={itemStyle(index)}
                key={index}
              >
                {child}
              </div>
            )
          })}
        </div>
        {propSwiper.paginationVisible && !('pageContent' in propSwiper) ? (
          <div
            className={classNames({
              [`${b('pagination')}`]: true,
              [`${b('pagination-vertical')}`]: isVertical,
            })}
          >
            {React.Children.map(childs, (item: any, index: number) => {
              return (
                <i
                  style={
                    (active + childCount) % childCount === index
                      ? {
                          backgroundColor: propSwiper.paginationColor,
                        }
                      : undefined
                  }
                  className={classNames({
                    [`${b('pagination-item')}`]: true,
                    active: (active + childCount) % childCount === index,
                  })}
                  key={index}
                />
              )
            })}
          </div>
        ) : (
          <div>{pageContent}</div>
        )}
      </view>
    </DataContext.Provider>
  )
})
Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
