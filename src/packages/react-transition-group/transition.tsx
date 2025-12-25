import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  ReactNode,
  ReactElement,
} from 'react'

export type TransitionStatus =
  | 'unmounted'
  | 'exited'
  | 'entering'
  | 'entered'
  | 'exiting'

export interface TransitionProps {
  in?: boolean
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  timeout?: number | { enter?: number; exit?: number }
  appear?: boolean
  enter?: boolean
  exit?: boolean
  onEnter?: (node?: HTMLElement) => void
  onEntering?: (node?: HTMLElement) => void
  onEntered?: (node?: HTMLElement) => void
  onExit?: (node?: HTMLElement) => void
  onExiting?: (node?: HTMLElement) => void
  onExited?: (node?: HTMLElement) => void
  addEndListener?: (node: HTMLElement, done: () => void) => void
  children?: ReactNode | ((status: TransitionStatus) => ReactNode)
}

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    in: inProp = false,
    mountOnEnter = false,
    unmountOnExit = false,
    timeout = 0,
    appear = false,
    enter = true,
    exit = true,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    addEndListener,
    children,
  } = props

  const [status, setStatus] = useState<TransitionStatus>(() => {
    let initialStatus: TransitionStatus
    if (inProp) {
      initialStatus = appear ? 'exited' : 'entered'
    } else {
      initialStatus = unmountOnExit ? 'unmounted' : 'exited'
    }
    return initialStatus
  })

  const nextCallback = useRef<(() => void) | null>(null)
  const rafRef = useRef<number | null>(null)

  const getTimeouts = () => {
    const { timeout: timeoutProp } = props
    let exitTimeout = 0
    let enterTimeout = 0

    if (timeoutProp != null && typeof timeoutProp === 'number') {
      exitTimeout = timeoutProp
      enterTimeout = timeoutProp
    } else if (timeoutProp != null) {
      exitTimeout = timeoutProp.exit ?? 0
      enterTimeout = timeoutProp.enter ?? 0
    }

    return {
      exit: exitTimeout,
      enter: enterTimeout,
    }
  }

  const performEnter = () => {
    const node = null // We don't have a ref to the actual DOM node here
    const timeouts = getTimeouts()

    onEnter?.(node as any)
    setStatus('entering')

    // Cancel any pending RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    // Schedule onEntering for next frame
    rafRef.current = requestAnimationFrame(() => {
      onEntering?.(node as any)

      // Schedule onEntered for after timeout
      nextCallback.current = () => {
        onEntered?.(node as any)
        nextCallback.current = null
      }

      if (addEndListener) {
        addEndListener(node as any, nextCallback.current!)
      } else {
        setTimeout(nextCallback.current!, timeouts.enter)
      }
    })
  }

  const performExit = () => {
    const node = null
    const timeouts = getTimeouts()

    onExit?.(node as any)
    setStatus('exiting')

    // Cancel any pending RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    // Schedule onExiting for next frame
    rafRef.current = requestAnimationFrame(() => {
      onExiting?.(node as any)

      // Schedule onExited for after timeout
      nextCallback.current = () => {
        onExited?.(node as any)
        nextCallback.current = null
      }

      if (addEndListener) {
        addEndListener(node as any, nextCallback.current!)
      } else {
        setTimeout(nextCallback.current!, timeouts.exit)
      }
    })
  }

  useLayoutEffect(() => {
    if (nextCallback.current !== null) {
      nextCallback.current()
      nextCallback.current = null
    }
  })

  useEffect(() => {
    if (!enter && inProp && status === 'exited') {
      setStatus('entered')
    }
    if (!exit && !inProp && status === 'entered') {
      setStatus('exited')
    }
  }, [inProp, status, enter, exit])

  useEffect(() => {
    if (inProp) {
      if (status === 'exited' || status === 'unmounted') {
        performEnter()
      }
    } else if (status === 'entering' || status === 'entered') {
      performExit()
    }
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [inProp])

  let child: ReactNode

  if (typeof children === 'function') {
    child = children(status)
  } else if (React.isValidElement(children)) {
    child = React.cloneElement(children as ReactElement, {
      // className: classNames((children.props as any).className, classes),
    })
  } else {
    child = children
  }

  if (status === 'unmounted') {
    return null
  }

  return <>{child}</>
}

export default Transition