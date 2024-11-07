import React, {
  FunctionComponent,
  useCallback,
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react'
import type { MouseEvent } from 'react'
import {
  usePageScroll,
  pageScrollTo,
  PageScrollObject,
  getSystemInfo,
} from '@tarojs/taro'
import { View, ITouchEvent } from '@tarojs/components'
import { Top } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import { harmonyAndRn, rn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

export interface BackTopProps extends BasicComponent {
  threshold: number
  zIndex: number
  duration: number
  /**
   * 容器滚动时的回调参数，主要用于 rn、鸿蒙端
   */
  scrollRes?: PageScrollObject
  onClick?: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  threshold: 200,
  zIndex: 900,
  duration: 1000,
} as BackTopProps

const isNative = harmonyAndRn()

export const BackTop: FunctionComponent<
  Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const rtl = useRtl()
  const {
    children,
    threshold,
    zIndex,
    className,
    duration,
    style,
    scrollRes,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-backtop'
  const [backTop, setBackTop] = useState(false)
  const [isTouchStart, setTouchStart] = useState(false)
  const cls = classNames(
    classPrefix,
    {
      [`${classPrefix}-show`]: backTop,
      [`${classPrefix}-show-active`]: isNative && isTouchStart,
      [`${classPrefix}-rn`]: rn(),
    },
    className
  )
  const systemInfo = useRef({})
  useEffect(() => {
    getSystemInfo().then((res) => {
      systemInfo.current = res
    })
  }, [])

  const handleActiveStart = useCallback(() => {
    isNative && setTouchStart(true)
  }, [])

  const handleActiveEnd = useCallback(() => {
    isNative && setTouchStart(false)
  }, [])

  const onScroll = useCallback(
    (res: PageScrollObject) => {
      const { scrollTop } = res
      setBackTop(scrollTop >= threshold)
    },
    [threshold]
  )

  // 监听用户滑动页面事件
  usePageScroll(onScroll)

  useEffect(() => {
    if (!scrollRes) return
    onScroll(scrollRes)
  }, [onScroll, scrollRes])

  // 返回顶部点击事件
  const goTop = useCallback(
    (e: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => {
      onClick?.(e)
      pageScrollTo({
        scrollTop: 0,
        duration: duration > 0 ? duration : 0,
      })
    },
    [duration, onClick]
  )

  const styles = useMemo(() => {
    return Object.keys(style || {}).length !== 0
      ? {
          zIndex,
          ...style,
        }
      : {
          [rtl ? 'left' : 'right']: pxTransform(10),
          bottom: pxTransform(20),
          zIndex,
        }
  }, [rtl, style, zIndex])

  return (
    <View
      className={cls}
      style={styles}
      onClick={(e) => {
        goTop(e)
      }}
      onTouchStart={handleActiveStart}
      onTouchEnd={handleActiveEnd}
      onTouchCancel={handleActiveEnd}
    >
      {children || <Top size={19} className="nut-backtop-main" />}
    </View>
  )
}

BackTop.displayName = 'NutBackTop'
