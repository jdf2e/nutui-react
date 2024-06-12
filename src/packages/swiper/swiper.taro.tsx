import React, {
  Children,
  CSSProperties,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
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
import pxTransform from '@/utils/px-transform'

export interface SwiperProps extends Omit<TaroSwiperProps, 'ref'> {
  width: number | string
  height: number | string
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  autoPlay: boolean
  loop: boolean
  defaultValue: number
  onChange: (e: any) => void
  style: CSSProperties
}

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  autoPlay: false,
  loop: false,
  defaultValue: 0,
  style: {},
} as SwiperProps

const classPrefix = 'nut-swiper'
export const Swiper = React.forwardRef((props: Partial<SwiperProps>, ref) => {
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
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [current, setCurrent] = useState(defaultValue)
  const childrenCount = useMemo(() => {
    let c = 0
    React.Children.map(children, (child, index) => {
      c += 1
    })
    return c
  }, [children])
  useEffect(() => {
    setCurrent(defaultValue)
  }, [defaultValue])
  const renderIndicator = () => {
    if (React.isValidElement(indicator)) return indicator
    if (indicator) {
      return (
        <View
          className={classNames({
            [`${classPrefix}-indicator`]: true,
            [`${classPrefix}-indicator-vertical`]: direction === 'vertical',
          })}
        >
          <Indicator
            current={current}
            total={childrenCount}
            direction={direction}
          />
        </View>
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
        setCurrent((current + 1) % childrenCount)
      } else {
        setCurrent(current + 1 >= childrenCount ? current : current + 1)
      }
    },
    prev: () => {
      if (loop) {
        let next = current - 1
        next = next < 0 ? childrenCount + next : next
        setCurrent(next % childrenCount)
      } else {
        setCurrent(current - 1 <= 0 ? 0 : current - 1)
      }
    },
  }))
  return (
    <View
      className={classNames(classPrefix, className)}
      style={{
        ...style,
        width: !width ? '100%' : width,
        height: !height ? pxTransform(150) : height,
      }}
    >
      <View
        className="nut-swiper-inner"
        style={{
          width: !width ? '100%' : width,
          height: !height ? pxTransform(150) : height,
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
            width: !width ? '100%' : width,
            height: !height ? pxTransform(150) : height,
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
