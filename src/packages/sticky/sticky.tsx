import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { getScrollParent } from '@/utils/get-scroll-parent'
import { getRect } from '@/utils/use-client-rect'
import useWatch from '@/utils/use-watch'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface StickyProps extends BasicComponent {
  container: React.RefObject<HTMLElement>
  position: 'top' | 'bottom'
  threshold: number
  zIndex: number
  children: React.ReactNode
  onChange: (val: boolean) => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'top',
  threshold: 0,
  zIndex: 2000,
} as StickyProps

const classPrefix = 'nut-sticky'

export const Sticky: FunctionComponent<Partial<StickyProps>> = (props) => {
  const {
    position,
    zIndex,
    children,
    container,
    style,
    className,
    threshold,
    onChange,
    ...rest
  } = { ...defaultProps, ...props }
  const stickyRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [isFixed, setIsFixed] = useState(false)

  const [stickyStyle, setStickyStyle] = useState({
    [position]: `${threshold}px`,
    zIndex,
  })

  const [rootStyle, setRootStyle] = useState({})

  const getElement = useCallback(() => {
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
    let fixed = clientHeight - threshold < rootRect.bottom
    if (containerEle) {
      fixed =
        containerRect.bottom > clientHeight - threshold - stickyRect.height &&
        clientHeight - threshold - stickyRect.height > containerRect.top
    }
    const defaultPostVal = fixed ? 'fixed' : 'inherit'
    setStickyStyle((prev) => {
      return {
        ...prev,
        position: defaultPostVal,
      }
    })
    setIsFixed(fixed)
  }, [position, container, threshold])
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
      if (containerEle) {
        const fixed = threshold > rootRect.top && containerRect.bottom > 0
        const positionVal = fixed ? 'fixed' : 'inherit'
        const diff = containerRect.bottom - threshold - stickyRect.height
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
        const fixed = threshold > rootRect.top
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
        const fixed =
          containerRect.bottom > 0 &&
          clientHeight - threshold - stickyRect.height > containerRect.top
        const positionVal = fixed ? 'fixed' : 'inherit'
        const diff = containerRect.bottom - (clientHeight - threshold)
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
        const fixed = clientHeight - threshold < rootRect.bottom
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
  }, [position, threshold, container])
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
      style={{ ...style, ...rootStyle }}
      className={classNames(classPrefix, className)}
      {...rest}
    >
      <div className="nut-sticky--box" ref={stickyRef} style={stickyStyle}>
        {children}
      </div>
    </div>
  )
}

Sticky.defaultProps = defaultProps
Sticky.displayName = 'NutSticky'
