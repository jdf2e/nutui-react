import React, { useState, FunctionComponent, useEffect, useRef } from 'react'
import { DataContext } from './UserContext'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './swiper.scss'

interface SwiperProps {
  width: number | string
  height: number | string
  duration: number | string
  initPage: number | string
  autoPlay: number | string
  direction: string
  paginationColor: string
  paginationVisible: boolean
  loop: boolean
  touchable: boolean
  isPreventDefault: boolean
  isStopPropagation: boolean
}
interface IStyle {
  width?: string
  height?: string
  transform?: string
}
const defaultProps = {
  width: window.innerWidth,
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
} as SwiperProps

const DISTANCE = 5

export const Swiper: FunctionComponent<
  Partial<SwiperProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSwiper = { ...defaultProps, ...props }
  const container = useRef(null)
  const { children, direction } = propSwiper

  let autoplayTimer = 0 as number | undefined
  const isVertical = direction === 'vertical'

  const size = props[isVertical ? 'height' : 'width']

  const parent = {
    propSwiper,
    size,
    // relation
  }
  let [contentStyle, setContentStyle] = useState({} as any)
  let [rect, setRect] = useState(null as DOMRect | null)
  let [active, setActive] = useState(0)
  let [width, setWidth] = useState(0)
  let [height, setheight] = useState(0)
  let [offset, setOffset] = useState(0)
  let [startX, setStartX] = useState(0)
  let [startY, setStartY] = useState(0)
  let [deltaX, setDeltaX] = useState(0)
  let [deltaY, setDeltaY] = useState(0)
  let [offsetX, setOffsetX] = useState(0)
  let [offsetY, setOffsetY] = useState(0)
  let [stateDirection, setStateDirection] = useState('')

  let moving = false
  let childCount = (children as any[]).length

  const delTa = isVertical ? deltaY : deltaX

  const isCorrectDirection = stateDirection === props.direction

  const trackSize = childCount * Number(size)

  const minOffset = (() => {
    if (rect) {
      const base = isVertical ? rect.height : rect.width
      return base - Number(size) * childCount
    }
    return 0
  })()

  const activePagination = (active + childCount) % childCount

  const touchReset = () => {
    startX = 0
    startY = 0
    deltaX = 0
    deltaY = 0
    offsetX = 0
    offsetY = 0
    stateDirection = ''
  }
  const touchStart = ((e: TouchEvent) => {
    touchReset()
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  }) as EventListener

  const touchMove = ((e: TouchEvent) => {
    deltaX = e.touches[0].clientX - startX
    deltaY = e.touches[0].clientY - startY
    offsetX = Math.abs(deltaX)
    offsetY = Math.abs(deltaY)
    if (!stateDirection) {
      stateDirection = getDirection(offsetX, offsetY)
    }
  }) as EventListener

  const resettPosition = () => {
    moving = true

    // if (state.active <= -1) {
    //   move({ pace: childCount.value });
    // }
    // if (state.active >= childCount.value) {
    //   move({ pace: -childCount.value });
    // }
  }

  const stopAutoPlay = () => {
    clearTimeout(autoplayTimer)
  }
  const autoplay = () => {
    if (propSwiper.autoPlay <= 0 || childCount <= 1) return
    stopAutoPlay()

    autoplayTimer = setTimeout(() => {
      next()
      autoplay()
      console.log('setTimeout')
    }, Number(propSwiper.autoPlay))
  }
  const next = () => {
    resettPosition()
    touchReset()

    requestFrame(() => {
      requestFrame(() => {
        moving = false
        move({
          pace: 1,
          isEmit: true,
        })
      })
    })
  }
  const move = ({ pace = 0, offset = 0, isEmit = false }) => {
    if (childCount <= 1) return

    const targetActive = getActive(pace)
    const targetOffset = getOffset(targetActive, offset)

    if (props.loop) {
      if (Array.isArray(children) && children[0] && targetOffset !== minOffset) {
        const rightBound = targetOffset < minOffset
        console.log(children[0])
        // children[0].setOffset(
        //   rightBound ? trackSize : 0
        // );
      }
      if (Array.isArray(children) && children[childCount - 1] && targetOffset !== 0) {
        const leftBound = targetOffset > 0
        console.log(children[childCount - 1])

        // children[childCount - 1].setOffset(
        //   leftBound ? -trackSize : 0
        // );
      }
    }
    active = targetActive
    offset = targetOffset
    if (isEmit && active !== active) {
      // props.change(activePagination.value)
      console.log('change', activePagination)
      // emit('change', activePagination.value);
    }

    getStyle()
  }
  const getActive = (pace: number) => {
    if (pace) {
      if (props.loop) {
        return range(active + pace, -1, childCount)
      }
      return range(active + pace, 0, childCount - 1)
    }
    return active
  }

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
  const computedminOffset = () => {
    if (rect) {
      const base = isVertical ? rect.height : rect.width
      return base - Number(size) * childCount
    }
    return 0
  }
  const requestFrame = (fn: FrameRequestCallback) => {
    window.requestAnimationFrame.call(window, fn)
  }
  const range = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
  }
  // state.startX = 0;
  // state.startY = 0;
  // state.deltaX = 0;
  // state.deltaY = 0;
  // state.offsetX = 0;
  // state.offsetY = 0;
  // state.direction = '';

  const getDirection = (x: number, y: number) => {
    if (x > y && x > DISTANCE) return 'horizontal'
    if (y > x && y > DISTANCE) return 'vertical'
    return ''
  }
  const b = bem('swiper')
  const classes = classNames(b(''))
  const contentClass = classNames({
    [`${b('')}-inner`]: true,
    [`${b('')}-vertical`]: isVertical,
  })
  const getStyle = () => {
    setContentStyle({
      transitionDuration: `${moving ? 0 : props.duration}ms`,
      transform: `translate${isVertical ? 'Y' : 'X'}(${offset}px)`,
      [isVertical ? 'height' : 'width']: `${Number(size) * childCount}px`,
      [isVertical ? 'width' : 'height']: `${isVertical ? width : height}px`,
    })
  }
  const onTouchStart = (e: TouchEvent) => {
    if (props.isPreventDefault) e.preventDefault()
    if (props.isStopPropagation) e.stopPropagation()
    if (!props.touchable) return
    // touch.start(e);
    // state.touchTime = Date.now();
    // stopAutoPlay();
    // resettPosition();
  }

  const onTouchMove = (e: TouchEvent) => {
    // if (props.touchable && state.moving) {
    //   touch.move(e);
    //   if (isCorrectDirection.value) {
    //     move({
    //       offset: delTa.value
    //     });
    //   }
    // }
  }

  const onTouchEnd = (e: TouchEvent) => {
    // if (!props.touchable || !state.moving) return;
    // const speed = delTa.value / (Date.now() - state.touchTime);
    // const isShouldMove =
    //   Math.abs(speed) > 0.3 ||
    //   Math.abs(delTa.value) > +(size.value / 2).toFixed(2);
    // if (isShouldMove && isCorrectDirection.value) {
    //   let pace = 0;
    //   const offset = isVertical.value
    //     ? touch.state.offsetY
    //     : touch.state.offsetX;
    //   if (props.loop) {
    //     pace = offset > 0 ? (delTa.value > 0 ? -1 : 1) : 0;
    //   } else {
    //     pace = -Math[delTa.value > 0 ? 'ceil' : 'floor'](
    //       delTa.value / size.value
    //     );
    //   }
    //   move({
    //     pace,
    //     isEmit: true
    //   });
    // } else if (delTa.value) {
    //   move({ pace: 0 });
    // }
    // state.moving = false;
    // getStyle();
    // autoplay();
  }

  const init = (active: number = +propSwiper.initPage) => {
    stopAutoPlay()
    rect = (container as any).current.getBoundingClientRect()
    active = Math.min(childCount - 1, active)
    width = propSwiper.width ? +propSwiper.width : (rect as DOMRect).width
    height = propSwiper.height ? +propSwiper.height : (rect as DOMRect).height
    active = active
    // state.offset = getOffset(state.active);
    moving = true
    getStyle()

    // autoplay();
  }
  function renderTrackInner() {
    const b = bem('swiper-item')
    const classes = classNames(b(''))
    // const style = () => {
    //   const style: IStyle = {};
    //   if (parent?.size) {
    //     style[
    //       direction === 'horizontal' ? 'width' : 'height'
    //     ] = `${parent?.size}px`;
    //   }
    //   if (offset) {
    //     style['transform'] = `translate${direction === 'horizontal' ? 'X' : 'Y'}( ${offset} px )`;
    //   }
    //   return style;
    // }
    // if (loop) {
    //   return (
    //     <div className="adm-swiper-track-inner">
    //       {React.Children.map(validChildren, (child, index) => {
    //         return (
    //           <div
    //             className="adm-swiper-slide"
    //             style={{
    //               [isVertical ? 'y' : 'x']: position.to((position) => {
    //                 let finalPosition = -position + index * 100
    //                 const totalWidth = count * 100
    //                 const flagWidth = totalWidth / 2
    //                 finalPosition = modulus(finalPosition + flagWidth, totalWidth) - flagWidth
    //                 return `${finalPosition}%`
    //               }),
    //               left: `-${index * 100}%`,
    //             }}
    //           >
    //             {child}
    //           </div>
    //         )
    //       })}
    //     </div>
    //   )
    // }
  }
  useEffect(() => {
    console.log('====', children)
    init()
  }, [])

  return (
    <DataContext.Provider value={parent}>
      <div
        className={classes}
        ref={container}
        onTouchStart={(e) => onTouchStart}
        onTouchMove={(e) => onTouchMove}
        onTouchEnd={(e) => onTouchEnd}
        onTouchCancel={(e) => onTouchEnd}
      >
        <div className={contentClass} style={contentStyle}>
          {React.Children.map(children, (child, index) => {
            return <div className={b('') + '-slide'}>{child}</div>
          })}
        </div>
      </div>
    </DataContext.Provider>
  )
}

Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
