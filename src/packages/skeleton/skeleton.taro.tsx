import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { TaroSkeletonProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  rows: 1,
  animated: true,
  visible: false,
  size: 'normal',
  shape: 'round',
  duration: 0.6,
} as TaroSkeletonProps
export const Skeleton: FunctionComponent<Partial<TaroSkeletonProps>> = (
  props
) => {
  const {
    className,
    width,
    height,
    shape,
    animated,
    rows,
    visible,
    size,
    duration,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-skeleton'
  const classes = classNames(classPrefix, className)

  const repeatCount = (num: number) => {
    return Array.from({ length: num }, (v, i) => i)
  }

  function shapeStyle(): CSSProperties {
    if (shape === 'circle') return { borderRadius: '50%' }
    if (shape === 'square') return { borderRadius: '0' }
    return {}
  }

  function durationStyle() {
    if (typeof duration !== 'undefined')
      return {
        animationDuration: `${duration}s`,
      }
    return {}
  }

  const [animate, setAnimate] = useState(false)

  const playAnimation = () => {
    setAnimate(false)
    setTimeout(() => {
      setAnimate(true)
    }, 10)
  }

  useEffect(() => {
    if (!animated) return
    playAnimation()
    // 每隔 3 秒播放一次动画
    const intervalId = setInterval(playAnimation, 1000 + duration * 1000) // xs 动画 + 1s 间隔

    // 清理定时器
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      {visible ? (
        children
      ) : (
        <View className={classes} {...rest}>
          {repeatCount(rows).map((item, index) => {
            const contentClass = `${classPrefix}-content ${classPrefix}-content-${size} ${classPrefix}-content-${size}-${index}`
            return (
              <View
                className={`${contentClass}`}
                key={index}
                style={{ width, height, ...shapeStyle() }}
              >
                {animated && (
                  <View
                    className={`${classPrefix}-animated ${animate ? `${classPrefix}-animation` : ''}`}
                    style={durationStyle()}
                  />
                )}
              </View>
            )
          })}
        </View>
      )}
    </>
  )
}

Skeleton.displayName = 'NutSkeleton'
