import React, { FunctionComponent, useState } from 'react'
import type { MouseEvent } from 'react'
import { usePageScroll, pageScrollTo } from '@tarojs/taro'
import { View, ITouchEvent } from '@tarojs/components'
import { Top } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'

export interface BackTopProps extends BasicComponent {
  threshold: number
  zIndex: number
  duration: number
  onClick?: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
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
  const rtl = useRtl()
  const { children, threshold, zIndex, className, duration, style, onClick } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-backtop'

  const [backTop, SetBackTop] = useState(false)

  // 监听用户滑动页面事件
  usePageScroll((res) => {
    const { scrollTop } = res
    scrollTop >= threshold ? SetBackTop(true) : SetBackTop(false)
  })

  // 返回顶部点击事件
  const goTop = (e: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => {
    onClick && onClick(e)
    pageScrollTo({
      scrollTop: 0,
      duration: duration > 0 ? duration : 0,
    })
  }

  const styles =
    Object.keys(style || {}).length !== 0
      ? {
          zIndex,
          ...style,
        }
      : {
          [rtl ? 'left' : 'right']: '10px',
          bottom: '20px',
          zIndex,
        }

  return (
    <View
      className={classNames(
        classPrefix,
        {
          show: backTop,
        },
        className
      )}
      style={styles}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children || <Top size={19} className="nut-backtop-main" />}
    </View>
  )
}

BackTop.displayName = 'NutBackTop'
