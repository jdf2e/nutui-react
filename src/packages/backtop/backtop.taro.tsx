import React, { FunctionComponent, useState } from 'react'
import type { MouseEvent } from 'react'
import { usePageScroll, pageScrollTo } from '@tarojs/taro'
import { Top } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface BackTopProps extends BasicComponent {
  threshold: number
  zIndex: number
  duration: number
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
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
  const goTop = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e)
    pageScrollTo({
      scrollTop: 0,
      duration: duration > 0 ? duration : 0,
    })
  }

  const styles = style
    ? {
        zIndex,
        ...style,
      }
    : {
        right: '10px',
        bottom: '20px',
        zIndex,
      }

  return (
    <div
      className={classNames(classPrefix, className, {
        show: backTop,
      })}
      style={styles}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children || <Top width={19} height={19} className="nut-backtop-main" />}
    </div>
  )
}

BackTop.defaultProps = defaultProps
BackTop.displayName = 'NutBackTop'
