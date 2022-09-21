import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react'
import { getScrollParent } from '@/utils/get-scroll-parent'
import { getRect } from '@/utils/useClientRect'
import useWatch from '@/utils/useWatch'
import { IComponent } from '@/utils/typings'

export interface StickyProps extends IComponent {
  container?: React.RefObject<HTMLElement>
  position?: 'top' | 'bottom'
  className?: string
  top?: number
  bottom?: number
  zIndex?: number
  children: React.ReactNode
  onChange?: (val: boolean) => void
}

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
  // const { locale } = useConfig()
  const stickyRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const offset = position === 'top' ? top : bottom
  const [isFixed, setIsFixed] = useState(false)

  const [stickyStyle, setStickyStyle] = useState({
    [position]: `${offset}px`,
    zIndex,
  })

  const [rootStyle, setRootStyle] = useState({})

  const getElement = useCallback(() => {
    // if (!rootRef.current) return Window
    return getScrollParent(rootRef.current as HTMLElement)
  }, [])

  useEffect(() => {
    if (position === 'top') return
    const containerEle = container?.current as HTMLElement

    if (!rootRef.current && !containerEle) return
    const rootRect = getRect(rootRef.current as Element)
    const containerRect = getRect(containerEle)
    const clientHeight = document.documentElement.clientHeight
    const stCurrent = stickyRef.current as Element
    const stickyRect = getRect(stCurrent)
    let fixed = clientHeight - bottom < rootRect.bottom
    if (containerEle) {
      fixed =
        containerRect.bottom > clientHeight - bottom - stickyRect.height &&
        clientHeight - bottom - stickyRect.height > containerRect.top
    }
    const defaultPostVal = fixed ? 'fixed' : 'inherit'
    setStickyStyle((prev) => {
      return {
        ...prev,
        position: defaultPostVal,
      }
    })
    setIsFixed(fixed)
  }, [position, container, bottom])
  const handleScroll = useCallback(() => {
    const containerEle = container?.current as HTMLElement

    if (!rootRef.current && !containerEle) return

    const rootRect = getRect(rootRef.current as Element)
    const stCurrent = stickyRef.current as Element
    const stickyRect = getRect(stCurrent)
    const containerRect = getRect(containerEle)
    if (rootRect.height) {
      setRootStyle((prev) => {
        return {
          ...prev,
          height: rootRect.height,
        }
      })
    }

    if (position === 'top') {
      //  containerRect.bottom > top + stickyRect.height
      if (containerEle) {
        const fixed = top > rootRect.top && containerRect.bottom > 0
        const positionVal = fixed ? 'fixed' : 'inherit'
        const diff = containerRect.bottom - top - stickyRect.height
        const transform = diff < 0 ? diff : 0
        setStickyStyle((prev) => {
          return {
            ...prev,
            position: positionVal,
            transform: `translate3d(0, ${transform}px, 0)`,
          }
        })
        setIsFixed(fixed)
      } else {
        const fixed = top > rootRect.top
        const positionVal = fixed ? 'fixed' : 'inherit'
        setStickyStyle((prev) => {
          return {
            ...prev,
            position: positionVal,
          }
        })
        setIsFixed(fixed)
      }
    } else {
      const clientHeight = document.documentElement.clientHeight

      if (containerEle) {
        // clientHeight - bottom - stickyRect.height
        const fixed =
          containerRect.bottom > 0 &&
          clientHeight - bottom - stickyRect.height > containerRect.top
        const positionVal = fixed ? 'fixed' : 'inherit'
        const diff = containerRect.bottom - (clientHeight - bottom)
        const transform = diff < 0 ? diff : 0
        setStickyStyle((prev) => {
          return {
            ...prev,
            position: positionVal,
            transform: `translate3d(0, ${transform}px, 0)`,
          }
        })
        setIsFixed(fixed)
      } else {
        const fixed = clientHeight - bottom < rootRect.bottom
        const positionVal = fixed ? 'fixed' : 'inherit'
        setStickyStyle((prev) => {
          return {
            ...prev,
            position: positionVal,
          }
        })
        setIsFixed(fixed)
      }
    }
  }, [position, bottom, container, top])
  useWatch(isFixed, () => {
    onChange && onChange(isFixed)
  })
  useEffect(() => {
    const el = getElement() as HTMLElement | Window
    el.addEventListener('scroll', handleScroll, false)
    return () => {
      el.removeEventListener('tap', handleScroll)
    }
  }, [getElement, handleScroll])

  return (
    <div
      ref={rootRef}
      style={rootStyle}
      className={`nut-sticky ${className}`}
      {...rest}
    >
      <div className="nut-sticky-box" ref={stickyRef} style={stickyStyle}>
        {children}
      </div>
    </div>
  )
}

// Sticky.defaultProps = defaultProps
Sticky.displayName = 'NutSticky'
