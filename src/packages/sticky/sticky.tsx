import React, {
  CSSProperties,
  FunctionComponent,
  useCallback,
  useEffect,
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
  onChange: (val: boolean) => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'top',
  threshold: 0,
  zIndex: 900,
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
  const [stickyStyle, setStickyStyle] = useState<CSSProperties>({
    [position]: `${threshold}px`,
    zIndex,
  })
  useEffect(() => {
    setStickyStyle({ ...stickyStyle, [position]: `${threshold}px`, zIndex })
  }, [threshold, position, zIndex])
  const [rootStyle, setRootStyle] = useState({})

  const getElement = useCallback(() => {
    return getScrollParent(rootRef.current as HTMLElement)
  }, [])

  useEffect(() => {
    if (position === 'top') return
    const containerEle = container && container.current
    const rootEle = rootRef.current
    const stickyEle = stickyRef.current

    if (!rootEle && !containerEle) return
    const rootRect = getRect(rootEle)
    const containerRect = getRect(containerEle)
    const clientHeight = document.documentElement.clientHeight
    const stickyRect = getRect(stickyEle)
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
    const containerEle = container && container.current
    const rootEle = rootRef.current
    const stickyEle = stickyRef.current
    if (!rootEle && !containerEle) return

    const rootRect = getRect(rootEle)
    const stickyRect = getRect(stickyEle)
    const containerRect = getRect(containerEle)
    if (rootRect.height) {
      setRootStyle((prev) => ({
        ...prev,
        height: rootRect.height,
      }))
    }

    const getFixed = () => {
      let fixed = false
      if (position === 'top') {
        fixed = containerEle
          ? threshold > rootRect.top && containerRect.bottom > 0
          : threshold > rootRect.top
      } else {
        const clientHeight = document.documentElement.clientHeight
        fixed = containerEle
          ? containerRect.bottom > 0 &&
            clientHeight - threshold - stickyRect.height > containerRect.top
          : clientHeight - threshold < rootRect.bottom
      }
      return {
        position: fixed ? 'fixed' : 'inherit',
        fixed,
      }
    }

    const getTransform = (): CSSProperties => {
      if (position === 'top' && containerEle) {
        const diff = containerRect.bottom - threshold - stickyRect.height
        const transform = diff < 0 ? diff : 0
        return { transform: `translate3d(0, ${transform}px, 0)` }
      }
      if (position === 'bottom' && containerEle) {
        const clientHeight = document.documentElement.clientHeight
        const diff = containerRect.bottom - (clientHeight - threshold)
        const transform = diff < 0 ? diff : 0
        return { transform: `translate3d(0, ${transform}px, 0)` }
      }
      return {}
    }

    const fixed = getFixed()
    setStickyStyle((prev) => {
      return {
        ...prev,
        ...getTransform(),
        position: fixed.position,
      } as CSSProperties
    })
    setIsFixed(fixed.fixed)
  }, [position, threshold, container])
  useWatch(isFixed, () => {
    onChange && onChange(isFixed)
  })
  useEffect(() => {
    const el = getElement()
    el?.addEventListener('scroll', handleScroll, false)
    return () => {
      el?.removeEventListener('scroll', handleScroll)
    }
  }, [getElement, handleScroll])

  return (
    <div
      ref={rootRef}
      style={{ ...style, ...rootStyle }}
      className={classNames(classPrefix, className)}
      {...rest}
    >
      <div className="nut-sticky-box" ref={stickyRef} style={stickyStyle}>
        {children}
      </div>
    </div>
  )
}

Sticky.displayName = 'NutSticky'
