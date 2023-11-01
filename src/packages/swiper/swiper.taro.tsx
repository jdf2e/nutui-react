import React, {
  Children,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  Swiper as TaroSwiper,
  SwiperItem as TaroSwiperItem,
  SwiperProps as TaroSwiperProps,
  View,
} from '@tarojs/components'
import classNames from 'classnames'
import { CommonEventFunction } from '@tarojs/components/types/common'
import Indicator from '@/packages/indicator/index.taro'
import { pxCheck } from '@/utils/px-check'

export interface SwiperProps extends Omit<TaroSwiperProps, 'ref'> {
  width: number
  height: number | string
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  autoPlay: boolean
  loop: boolean
  defaultValue: number
  onChange: (e: any) => void
}

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  autoPlay: false,
  loop: false,
  defaultValue: 0,
} as SwiperProps

const classPrefix = 'nut-swiper'
export const Swiper = forwardRef((props: Partial<SwiperProps>, ref) => {
  const {
    width,
    height,
    className,
    children,
    indicator,
    loop,
    autoPlay,
    duration,
    direction,
    defaultValue,
    onChange,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [current, setCurrent] = useState(defaultValue)
  const childrenCount = useRef(Children.toArray(children).length)
  useEffect(() => {
    setCurrent(defaultValue)
  }, [defaultValue])
  const renderIndicator = () => {
    if (React.isValidElement(indicator)) return indicator
    if (indicator === true) {
      return (
        <div
          className={classNames({
            [`${classPrefix}__indicator`]: true,
            [`${classPrefix}__indicator-vertical`]: direction === 'vertical',
          })}
        >
          <Indicator
            current={current}
            total={childrenCount.current}
            direction={direction}
          />
        </div>
      )
    }
    return null
  }
  const handleOnChange: CommonEventFunction<
    TaroSwiperProps.onChangeEventDetail
  > = (value) => {
    setCurrent(value.detail.current)
  }
  useImperativeHandle(ref, () => ({
    to: (value: number) => {
      setCurrent(value)
    },
    next: () => {
      if (loop) {
        setCurrent((current + 1) % childrenCount.current)
      } else {
        setCurrent(current + 1 >= childrenCount.current ? current : current + 1)
      }
    },
    prev: () => {
      if (loop) {
        let next = current - 1
        next = next < 0 ? childrenCount.current + next : next
        setCurrent(next % childrenCount.current)
      } else {
        setCurrent(current - 1 <= 0 ? 0 : current - 1)
      }
    },
  }))
  return (
    <View
      className={classNames(classPrefix, className)}
      style={{
        width: !width ? '100%' : pxCheck(width),
        height: !height ? '150px' : pxCheck(height),
      }}
    >
      <View
        className="nut-swiper__inner"
        style={{
          width: !width ? '100%' : pxCheck(width),
          height: !height ? '150px' : pxCheck(height),
        }}
      >
        <TaroSwiper
          current={current}
          circular={loop}
          autoplay={autoPlay}
          vertical={direction === 'vertical'}
          indicatorDots={false}
          onChange={(e) => {
            handleOnChange(e)
            props.onChange?.(e)
          }}
          style={{
            width: !width ? '100%' : pxCheck(width),
            height: !height ? '150px' : pxCheck(height),
          }}
          {...rest}
        >
          {Children.toArray(children).map((child, index) => {
            let className
            if (React.isValidElement(child)) {
              className = child.props.className
            }
            return (
              <TaroSwiperItem className={className} key={index}>
                {child}
              </TaroSwiperItem>
            )
          })}
        </TaroSwiper>
      </View>
      {renderIndicator()}
    </View>
  )
})

Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
