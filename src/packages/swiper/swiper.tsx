import React, {
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/web'
import classNames from 'classnames'
import Indicator, { IndicatorProps } from '@/packages/indicator'
import { usePropsValue } from '@/utils/use-props-value'
import { SwiperItem } from '@/packages/swiper/item'
import { bound } from '@/utils/bound'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { SwiperDirections, SwiperIndicator } from '@/packages/swiper/types'

export interface SwiperProps extends BasicComponent {
  width: number
  height: number
  direction: SwiperDirections
  indicator: ReactNode | SwiperIndicator
  indicatorProps?: IndicatorProps
  loop: boolean
  touchable: boolean
  duration: number
  autoPlay: boolean
  defaultValue?: number
  slideSize: number
  trackOffset: number
  onChange: (index: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  loop: false,
  direction: 'horizontal',
  indicator: false,
  touchable: true,
  duration: 3000,
  slideSize: 100,
  trackOffset: 0,
  autoPlay: false,
  indicatorProps: {},
  onChange: (index: number) => undefined,
} as SwiperProps

const classPrefix = 'nut-swiper'
export const Swiper = React.forwardRef((props: Partial<SwiperProps>, ref) => {
  const {
    indicator,
    indicatorProps,
    touchable,
    loop,
    slideSize,
    trackOffset,
    direction,
    autoPlay,
  } = {
    ...defaultProps,
    ...props,
  }
  const [current, setCurrent] = usePropsValue({
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange: props.onChange,
  })
  const isVertical = direction === 'vertical'
  const getStyle = () => {
    const s = {}
    if (slideSize) {
      // @ts-ignore
      s['--nutui-swiper-slide-size'] = `${slideSize}%`
    }
    if (trackOffset) {
      // @ts-ignore
      s['--nutui-swiper-track-offset'] = `${trackOffset}%`
    }
    return s
  }

  function boundIndex(current: number) {
    const slideRatio = slideSize / 100
    const offsetRatio = trackOffset / 100
    let min = 0
    let max = count - 1
    min += offsetRatio / slideRatio
    max -= (1 - slideRatio - offsetRatio) / slideRatio
    return bound(current, min, max)
  }

  const { validChildren, count } = useMemo(() => {
    let count = 0
    const validChildren = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return null
      if (child.type !== SwiperItem) {
        return null
      }
      count++
      return child
    })
    return {
      validChildren,
      count,
    }
  }, [props.children])

  const [dragging, setDragging] = useState(false)
  const draggingRef = useRef(false)
  useEffect(() => {
    draggingRef.current = dragging
  }, [dragging])

  const [{ position }, api] = useSpring(
    () => ({
      position: current * 100,
      config: { tension: 200, friction: 30 },
      onRest: () => {
        if (draggingRef.current) return
        if (!loop) return
        const rawX = position.get()
        const totalWidth = 100 * count
        const standardPosition = modulus(rawX, totalWidth)
        if (standardPosition === rawX) return
        api.start({
          position: standardPosition,
          immediate: true,
        })
      },
    }),
    [count]
  )
  const getSlidePixels = () => {
    const track = trackRef.current
    if (!track) return 0
    const offsetWidth = isVertical ? track.offsetHeight : track.offsetWidth
    return (offsetWidth * slideSize) / 100
  }
  const trackRef = useRef<HTMLDivElement>(null)
  const bind = useDrag(
    (state) => {
      const index = isVertical ? 1 : 0
      const slidePixels = getSlidePixels()
      const offset = state.offset[index]
      const direction = state.direction[index]
      const velocity = state.velocity[index]
      setDragging(true)
      if (!state.last) {
        api.start({
          position: (offset * 100) / slidePixels,
          immediate: true,
        })
      } else {
        const minIndex = Math.floor(offset / slidePixels)
        const maxIndex = minIndex + 1
        const index = Math.round(
          (offset + velocity * 2000 * direction) / slidePixels
        )
        to(bound(index, minIndex, maxIndex))
        window?.setTimeout(() => setDragging(false))
      }
    },
    {
      transform: ([x, y]) => [-x, -y],
      from: () => {
        const slidePixels = getSlidePixels()
        return [
          (position.get() / 100) * slidePixels,
          (position.get() / 100) * slidePixels,
        ]
      },
      triggerAllEvents: true,
      axis: isVertical ? 'y' : 'x',
      pointer: {
        touch: true,
      },
      rubberband: false,
      preventScroll: !isVertical,
      bounds: () => {
        if (loop) return {}
        const slidePixels = getSlidePixels()
        const lowerBound = boundIndex(0) * slidePixels
        const upperBound = boundIndex(count - 1) * slidePixels
        return isVertical
          ? {
              top: lowerBound,
              bottom: upperBound,
            }
          : {
              left: lowerBound,
              right: upperBound,
            }
      },
    }
  )

  function modulus(value: number, division: number) {
    const remainder = value % division
    return remainder < 0 ? remainder + division : remainder
  }

  const to = (index: number) => {
    const roundedIndex = Math.round(index)
    const targetIndex = loop
      ? modulus(roundedIndex, count)
      : bound(roundedIndex, 0, count - 1)
    setCurrent(targetIndex)

    api.start({
      position: (loop ? roundedIndex : boundIndex(roundedIndex)) * 100,
    })
  }
  const next = () => {
    to(Math.round(position.get() / 100) + 1)
  }
  const prev = () => {
    to(Math.round(position.get() / 100) - 1)
  }
  useImperativeHandle(ref, () => ({
    to,
    next,
    prev,
  }))

  const timerRef = useRef(-1)
  const runTimer = () => {
    timerRef.current = window.setTimeout(() => {
      next()
      runTimer()
    }, props.duration)
  }

  useEffect(() => {
    if (!autoPlay || dragging) return
    runTimer()

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [autoPlay, dragging])

  const renderIndicator = () => {
    if (!indicator) return undefined
    if (indicator === true) {
      return (
        <div className={classNames(`${classPrefix}-indicator`)}>
          <Indicator
            {...indicatorProps}
            current={current}
            direction={props.direction}
            total={count}
          />
        </div>
      )
    }
    if (React.isValidElement(indicator)) {
      return indicator
    }
    if (typeof indicator === 'function') {
      return indicator(current, count, direction)
    }
  }

  return (
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${props.direction}`,
        props.className
      )}
      style={{
        ...props.style,
        ...(props.width ? { width: props.width } : {}),
        ...(props.height ? { height: props.height } : {}),
        ...getStyle(),
      }}
    >
      <div
        className={classNames(`${classPrefix}-track`, {
          [`${classPrefix}-track-allow-touch-move`]: touchable,
        })}
        ref={trackRef}
        {...(!touchable ? {} : bind())}
      >
        {loop ? (
          <div className={classNames(`${classPrefix}-track-inner`)}>
            {React.Children.map(validChildren, (child, index) => {
              return (
                <animated.div
                  className={classNames(`${classPrefix}-slide`, {
                    [`${classPrefix}-slide-active`]: current === index,
                  })}
                  style={{
                    [isVertical ? 'y' : 'x']: position.to((position) => {
                      let finalPosition = -position + index * 100
                      const totalWidth = count * 100
                      const flagWidth = totalWidth / 2
                      finalPosition =
                        modulus(finalPosition + flagWidth, totalWidth) -
                        flagWidth
                      return `${finalPosition}%`
                    }),
                    [isVertical ? 'top' : 'left']: `-${index * 100}%`,
                  }}
                >
                  {child}
                </animated.div>
              )
            })}
          </div>
        ) : (
          <animated.div
            className={classNames(`${classPrefix}-track-inner`)}
            style={{
              [isVertical ? 'y' : 'x']: position.to(
                (position) => `${-position}%`
              ),
            }}
          >
            {validChildren?.map((child, idx) => {
              return (
                <div
                  className={classNames(`${classPrefix}-slide`, {
                    [`${classPrefix}-slide-active`]: current === idx,
                  })}
                  data-index={idx}
                  key={idx}
                >
                  {child}
                </div>
              )
            })}
          </animated.div>
        )}
      </div>
      {renderIndicator()}
    </div>
  )
})

Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
