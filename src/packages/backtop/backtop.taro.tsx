import React, {
  FunctionComponent,
  useCallback,
  useState,
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
import { ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { Top } from '@nutui/icons-react-taro'
import { ComponentDefaults } from '@/utils/typings'
import HoverButton, {
  HoverButtonProps,
} from '@/packages/hoverbutton/index.taro'

export interface BackTopProps extends HoverButtonProps {
  threshold: number
  zIndex: number
  duration: number
  /**
   * 容器滚动时的回调参数，主要用于 rn、鸿蒙端
   */
  scrollRes?: PageScrollObject
  onClick?: (event: React.MouseEvent<HTMLDivElement> | ITouchEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  threshold: 200,
  zIndex: 900,
  duration: 1000,
} as BackTopProps

export const BackTop: FunctionComponent<
  Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    threshold,
    zIndex,
    className,
    duration,
    icon,
    style,
    scrollRes,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-backtop'
  const [backTop, setBackTop] = useState(false)
  const cls = classNames(
    classPrefix,
    {
      [`${classPrefix}-show`]: backTop,
    },
    className
  )
  const systemInfo = useRef({})
  useEffect(() => {
    getSystemInfo().then((res) => {
      systemInfo.current = res
    })
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
    (e: MouseEvent<HTMLDivElement> | ITouchEvent) => {
      onClick?.(e)
      pageScrollTo({
        scrollTop: 0,
        duration: duration > 0 ? duration : 0,
      })
    },
    [duration, onClick]
  )

  return (
    <HoverButton
      className={cls}
      style={{ zIndex, ...style }}
      icon={!children && (icon || <Top />)}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children && (
        <View
          className="nut-hoverbutton-item-container"
          onClick={(e) => {
            goTop(e)
          }}
        >
          {children}
        </View>
      )}
    </HoverButton>
  )
}

BackTop.displayName = 'NutBackTop'
