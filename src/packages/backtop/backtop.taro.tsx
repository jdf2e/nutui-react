import type { MouseEvent } from 'react'
import React, { FunctionComponent, useState } from 'react'
import { pageScrollTo, usePageScroll } from '@tarojs/taro'
import { Top } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'

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
  const rtl = useRtl()
  const { children, threshold, zIndex, className, duration, style, onClick } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-backtop'

  const [show, setShow] = useState(false)

  // 监听用户滑动页面事件
  usePageScroll((res) => {
    const { scrollTop } = res
    setShow(scrollTop >= threshold)
  })

  // 返回顶部点击事件
  const goTop = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e)
    pageScrollTo({
      scrollTop: 0,
      duration: Math.max(duration, 0),
    })
  }

  const defaultStyle = {
    [rtl ? 'left' : 'right']: '10px',
    bottom: '20px',
    zIndex,
  }

  const styles =
    Object.keys(style || {}).length !== 0
      ? {
          zIndex,
          ...style,
        }
      : defaultStyle

  return (
    <div
      className={classNames(
        classPrefix,
        {
          show,
        },
        className
      )}
      style={styles}
      onClick={(e) => {
        goTop(e)
      }}
    >
      {children || <Top size={19} className="nut-backtop-main" />}
    </div>
  )
}

BackTop.displayName = 'NutBackTop'
