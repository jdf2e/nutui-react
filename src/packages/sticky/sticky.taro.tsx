import React, {
  FunctionComponent,
  useRef,
  useState,
  useMemo,
  CSSProperties,
  useCallback,
  useEffect,
} from 'react'
import classNames from 'classnames'
import {
  PageScrollObject,
  usePageScroll,
  getSystemInfoSync,
  getEnv,
} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import useWatch from '@/utils/use-watch'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { getScrollParent } from '@/utils/get-scroll-parent'

export interface StickyProps extends BasicComponent {
  container: React.RefObject<HTMLElement>
  position: 'top' | 'bottom'
  threshold: number
  zIndex: number
  onChange: (val: boolean) => void
}

interface StickyRect {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'top',
  zIndex: 900,
} as StickyProps

const classPrefix = 'nut-sticky'

export const Sticky: FunctionComponent<Partial<StickyProps>> = (props) => {
  const {
    position,
    zIndex,
    threshold,
    style,
    children,
    container,
    className,
    onChange,
    ...rest
  } = { ...defaultProps, ...props }
  const stickyRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [rootRect, setRootRect] = useState<Partial<StickyRect>>({})
  const [fixed, setFixed] = useState(false)
  const [transform, setTransform] = useState(0) // 相对容器偏移距离

  useWatch(fixed, () => {
    onChange && onChange(fixed)
  })
  const rootStyle = useMemo(() => {
    if (!fixed) {
      return {
        height: '',
        width: '',
      }
    }
    const style: CSSProperties = {}
    if (rootRect.height) {
      style.height = rootRect.height
    }
    if (rootRect.width) {
      style.width = rootRect.width
    }
    return style
  }, [fixed, rootRect.height, rootRect.width])

  const stickyStyle = useMemo(() => {
    if (!fixed) {
      return {
        height: '',
        width: '',
        [position as string]: '',
      }
    }
    const style: CSSProperties = {}
    if (rootRect.height) style.height = rootRect.height
    if (rootRect.width) style.width = rootRect.width
    style.transform = `translate3d(0, ${transform}px, 0)`
    style[position] = threshold
    style.zIndex = zIndex
    return style
  }, [fixed, rootRect.height, rootRect.width, transform, position])

  const handleScroll: any = async (scrollTop: number) => {
    const curRootRect = await getRectByTaro(rootRef.current)
    const stickyRect = await getRectByTaro(stickyRef.current)
    if (curRootRect && stickyRect) {
      setRootRect(curRootRect)
      if (position === 'top') {
        if (container) {
          const containerRect = await getRectByTaro(container.current)
          const difference =
            containerRect.bottom - threshold - curRootRect.height
          const curTransform = difference < 0 ? difference : 0
          setTransform(curTransform)
          const curFixed =
            threshold > curRootRect.top && containerRect.bottom > 0
          setFixed(curFixed)
        } else {
          setFixed(threshold > curRootRect.top)
        }
      } else {
        const windowHeight = getSystemInfoSync().windowHeight
        setFixed(windowHeight - threshold < curRootRect.bottom)
      }
    } else {
      console.warn('getRectByTaro获取失败', { stickyRect, curRootRect })
    }
  }
  const getElement = useCallback(() => {
    return getScrollParent(rootRef.current as HTMLElement)
  }, [])

  useEffect(() => {
    if (getEnv() === 'WEB' && getElement() !== window) {
      window.addEventListener('touchmove', handleScroll, true)
      window.addEventListener('scroll', handleScroll, true)
      return () => {
        window.removeEventListener('touchmove', handleScroll)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  usePageScroll((res: PageScrollObject) => {
    if (getEnv() !== 'WEB') {
      handleScroll(res.scrollTop)
    }
  })
  return (
    <div
      ref={rootRef}
      style={rootStyle}
      className={classNames(classPrefix, className)}
      {...rest}
    >
      <View
        className={classNames('nut-sticky-box', {
          'nut-sticky-fixed': fixed,
        })}
        ref={stickyRef}
        style={stickyStyle}
      >
        {children}
      </View>
    </div>
  )
}

Sticky.displayName = 'NutSticky'
