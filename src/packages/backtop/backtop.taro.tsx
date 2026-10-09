import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { PageScrollObject, pageScrollTo, usePageScroll } from '@tarojs/taro'
import { ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { Top } from '@nutui/icons-react-taro'
import { ComponentDefaults } from '@/utils/typings'
import { pxTransform } from '@/utils/taro/px-transform'
import { TaroBackTopProps } from '@/types'
import { UI_BOTTOM_DISTANCE } from '@/utils/constants'

const defaultProps = {
  ...ComponentDefaults,
  threshold: 200,
  zIndex: 900,
  duration: 1000,
} as TaroBackTopProps

export const BackTop: FunctionComponent<Partial<TaroBackTopProps>> = (
  props
) => {
  const {
    children,
    threshold,
    zIndex,
    className,
    duration,
    icon,
    style,
    tabbarHeight,
    scrollRes,
    onClick,
    ...rest
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

  const content =
    children || (icon ?? <Top className={`${classPrefix}-icon`} />)

  const baseStyle: React.CSSProperties = {
    zIndex,
    ...style,
  }

  if (tabbarHeight) {
    baseStyle.bottom = pxTransform(tabbarHeight + UI_BOTTOM_DISTANCE)
  }

  return (
    <View className={cls} style={baseStyle} onClick={goTop} {...rest}>
      {content}
    </View>
  )
}

BackTop.displayName = 'NutBackTop'
