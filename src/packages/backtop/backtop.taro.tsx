import React, { FunctionComponent, useState, useCallback } from 'react'
import type { MouseEvent } from 'react'
import { usePageScroll, pageScrollTo } from '@tarojs/taro'
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
  const [backTop, setBackTop] = useState(false)
  const cls = classNames(classPrefix, { show: backTop }, className)
  // 监听用户滑动页面事件
  const handleScroll = useCallback(
    (res: { scrollTop: number }) => {
      const { scrollTop } = res
      setBackTop(scrollTop >= threshold)
    },
    [threshold]
  )
  usePageScroll(handleScroll)
  const goTop = (e: MouseEvent<HTMLDivElement>) => {
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
    <div className={cls} style={styles} onClick={(e) => goTop(e)}>
      {children || <Top size={19} className="nut-backtop-main" />}
    </div>
  )
}

BackTop.displayName = 'NutBackTop'
