import React, {
  FunctionComponent,
  useRef,
  useState,
  useMemo,
  CSSProperties,
  useCallback,
  useEffect,
} from 'react'
import { BasicComponent } from '@/utils/typings'
import useWatch from '@/utils/useWatch'
import { getRectByTaro } from '@/utils/useClientRect'
import {
  PageScrollObject,
  usePageScroll,
  getSystemInfoSync,
  getEnv,
} from '@tarojs/taro'

import { getScrollParent } from '@/utils/get-scroll-parent'
export interface StickyProps extends BasicComponent {
  container?: React.RefObject<HTMLElement>
  position?: 'top' | 'bottom'
  className?: string
  top?: number
  bottom?: number
  zIndex?: number
  children: React.ReactNode
  onChange?: (val: boolean) => void
}
interface StickyRect {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

interface RootStyle {
  width?: number | string
  height?: number | string
}

interface StickyStyle extends RootStyle {
  top?: number | string
  bottom?: number | string
  transform?: string
  zIndex?: number
}

const defaultProps = {
  position: 'top',
  top: 0,
  bottom: 0,
  zIndex: 2000,
} as StickyProps

export const Sticky: FunctionComponent<StickyProps> = (props) => {
  const {
    position = 'top',
    top = 0,
    bottom = 0,
    zIndex = 2000,
    children,
    container,
    className,
    onChange,
    ...rest
  } = props

  const stickyRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const offset = position === 'top' ? top : bottom
  const [rootRect, setRootRect] = useState<Partial<StickyRect>>({})
  const [fixed, setFixed] = useState(false)
  const [transform, setTransform] = useState(0) //相对容器偏移距离

  useWatch(fixed, () => {
    onChange && onChange(fixed)
  })
  const rootStyle: RootStyle = useMemo(() => {
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
        [position]: '',
      }
    }
    let style: StickyStyle = {}
    if (rootRect.height) style.height = rootRect.height
    if (rootRect.width) style.width = rootRect.width
    style.transform = `translate3d(0, ${transform}px, 0)`
    style[position] = offset
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
          const difference = containerRect.bottom - top - curRootRect.height
          const curTransform = difference < 0 ? difference : 0
          setTransform(curTransform)
          const curFixed = top > curRootRect.top && containerRect.bottom > 0
          setFixed(curFixed)
        } else {
          setFixed(top > curRootRect.top)
        }
      } else {
        const windowHeight = getSystemInfoSync().windowHeight
        setFixed(windowHeight - offset < curRootRect.bottom)
      }
    } else {
      console.log('getRectByTaro获取失败', { stickyRect, curRootRect })
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
    if (getEnv() === 'WEAPP') {
      handleScroll(res.scrollTop)
    }
  })
  return (
    <div
      ref={rootRef}
      style={rootStyle}
      className={`nut-sticky ${className}`}
      {...rest}
    >
      <div
        className={`nut-sticky-box ${fixed ? 'nut-sticky-fixed' : ''}`}
        ref={stickyRef}
        style={stickyStyle}
      >
        {children}
      </div>
    </div>
  )
}

Sticky.defaultProps = defaultProps
Sticky.displayName = 'NutSticky'
