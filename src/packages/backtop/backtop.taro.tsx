import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  getSystemInfo,
  PageScrollObject,
  pageScrollTo,
  usePageScroll,
} from '@tarojs/taro'
import { ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { Top } from '@nutui/icons-react-taro'
import { ComponentDefaults } from '@/utils/typings'
import HoverButton from '@/packages/hoverbutton/index.taro'
import { TaroBackTopProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  threshold: 200,
  zIndex: 900,
  duration: 1000,
} as TaroBackTopProps

export const BackTop: FunctionComponent<
  Partial<TaroBackTopProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
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
    (e: ITouchEvent) => {
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
