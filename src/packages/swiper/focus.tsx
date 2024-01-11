import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/web'
import { BasicComponent } from '@/utils/typings'
import Indicator, { IndicatorProps } from '@/packages/indicator'
import { SwiperItem } from '@/packages/swiperitem/swiperitem'
import { usePropsValue } from '@/utils/use-props-value'
import { SwiperIndicator } from '@/packages/swiper/types'
import { bound } from '@/utils/bound'

const classPrefix = 'nut-swiper-focus'

export interface SwiperFocusProps extends BasicComponent {
  width: number
  height: number
  scale: number
  autoPlay: boolean | number
  defaultValue?: number
  slideSize: number
  trackOffset: number
  indicator?: ReactNode | SwiperIndicator
  indicatorProps?: IndicatorProps
  onChange: (index: number) => void
}

const defaultProps = {
  slideSize: 80,
  trackOffset: 0,
  autoPlay: false,
  scale: 0.95,
  onChange: (index: number) => undefined,
} as SwiperFocusProps
export const Focus = forwardRef((props: Partial<SwiperFocusProps>, ref) => {
  const { scale, trackOffset, autoPlay, indicator, indicatorProps, slideSize } =
    {
      ...defaultProps,
      ...props,
    }
  const [current, setCurrent] = usePropsValue({
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange: props.onChange,
  })
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
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const draggingRef = useRef(false)
  useEffect(() => {
    draggingRef.current = dragging
  }, [dragging])
  const [{ position }, api] = useSpring(
    () => ({
      position: current * 100,
      config: (key) => {
        if (key === 'position') return { tension: 200, friction: 30 }
      },
    }),
    [count]
  )
  const getSlidePixels = () => {
    const track = trackRef.current
    if (!track) return 0
    const offsetWidth = track.offsetWidth
    return (offsetWidth * slideSize) / 100
  }
  const bind = useDrag(
    (state) => {
      console.log(state.offset)
      dragCancelRef.current = state.cancel
      const index = 0
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
      axis: 'x',
      triggerAllEvents: true,
      pointer: {
        touch: true,
      },
      rubberband: false,
    }
  )

  useImperativeHandle(ref, () => ({
    to,
    next,
    prev,
  }))
  const to = (index: number) => {
    const roundedIndex = Math.round(index)
    const targetIndex = modulus(roundedIndex, count)
    setCurrent(targetIndex)

    api.start({
      position: roundedIndex * 100,
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
  const duration = typeof autoPlay === 'number' ? autoPlay : 3000
  const runTimer = () => {
    timerRef.current = window.setTimeout(() => {
      next()
      runTimer()
    }, duration)
  }

  useEffect(() => {
    if (dragging) return
    if (autoPlay === true || typeof autoPlay === 'number') {
      runTimer()
    }
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [autoPlay, dragging, count])
  const renderIndicator = () => {
    if (!indicator) return undefined
    if (indicator === true) {
      return (
        <div className={classNames(`${classPrefix}-indicator`)}>
          <Indicator {...indicatorProps} current={current} total={count} />
        </div>
      )
    }
    if (React.isValidElement(indicator)) {
      return indicator
    }
    if (typeof indicator === 'function') {
      return indicator(current, count)
    }
  }
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

  function modulus(value: number, division: number) {
    const remainder = value % division
    return remainder < 0 ? remainder + division : remainder
  }

  const dragCancelRef = useRef<(() => void) | null>(null)

  function forceCancelDrag() {
    dragCancelRef.current?.()
    draggingRef.current = false
  }

  return (
    <div
      className={classNames(classPrefix, `${classPrefix}-horizontal`)}
      style={{
        ...props.style,
        ...(props.width ? { width: props.width } : {}),
        ...(props.height ? { height: props.height } : {}),
        ...getStyle(),
      }}
    >
      <div
        className={classNames(`${classPrefix}-track`, {
          [`${classPrefix}-track-allow-touch-move`]: true,
        })}
        ref={trackRef}
        onClickCapture={(e) => {
          if (draggingRef.current) {
            e.stopPropagation()
          }
          forceCancelDrag()
        }}
      >
        <div className={classNames(`${classPrefix}-track-inner`)} {...bind()}>
          {React.Children.map(validChildren, (child, index) => {
            return (
              <animated.div
                className={classNames(`${classPrefix}-slide`, {
                  [`${classPrefix}-slide-active`]: index === current,
                })}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  left: position.to((position) => {
                    let finalPosition = -position + index * 100
                    const totalWidth = count * 100
                    const flagWidth = totalWidth / 2
                    finalPosition =
                      modulus(finalPosition + flagWidth, totalWidth) - flagWidth
                    return `${finalPosition}%`
                  }),
                  scale: current === index ? 1 : scale,
                  x: `-${index * 100}%`,
                }}
              >
                {child}
              </animated.div>
            )
          })}
        </div>
      </div>
      {renderIndicator()}
    </div>
  )
})

Focus.defaultProps = defaultProps
Focus.displayName = 'NutSwiperStack'
