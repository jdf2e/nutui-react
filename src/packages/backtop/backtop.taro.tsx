import React, { FunctionComponent, useState } from 'react'

import { usePageScroll, pageScrollTo } from '@tarojs/taro'
import Icon from '@/packages/icon/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

declare const window: any

export interface BackTopProps extends BasicComponent {
  className?: string
  bottom: number
  right: number
  elId: string
  distance: number
  zIndex: number
  isAnimation: boolean
  duration: number
  children?: HTMLElement | any
  style?: React.CSSProperties
  onClick?: (event: MouseEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  bottom: 20,
  right: 10,
  elId: 'body',
  distance: 200,
  zIndex: 10,
  isAnimation: true,
  duration: 1000,
} as BackTopProps

export const BackTop: FunctionComponent<
  Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    bottom,
    right,
    elId,
    distance,
    zIndex,
    isAnimation,
    className,
    duration,
    style,
    onClick,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const [backTop, SetBackTop] = useState(false)

  // 监听用户滑动页面事件
  usePageScroll((res) => {
    const { scrollTop } = res
    scrollTop >= distance ? SetBackTop(true) : SetBackTop(false)
  })

  // 返回顶部点击事件
  const goTop = (e: any) => {
    onClick && onClick(e)
    pageScrollTo({
      scrollTop: 0,
      duration: isAnimation && duration > 0 ? duration : 0,
    })
  }

  const backTopClass = {
    right: `${right}px`,
    bottom: `${bottom}px`,
    zIndex,
  }

  return (
    <>
      <div
        className={`nut-backtop ${backTop ? 'show' : ''} ${className || ''}`}
        style={{ ...backTopClass, ...style }}
        onClick={(e) => {
          goTop(e)
        }}
      >
        {children || (
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            size="19px"
            className="nut-backtop-main"
            name="top"
          />
        )}
      </div>
    </>
  )
}

BackTop.defaultProps = defaultProps
BackTop.displayName = 'NutBackTop'
