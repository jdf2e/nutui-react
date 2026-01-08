import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  ReactNode,
  ReactElement,
  MutableRefObject,
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
  timeout?: number | { enter?: number; exit?: number; appear?: number }
  appear?: boolean
  enter?: boolean
  exit?: boolean
  nodeRef?: MutableRefObject<HTMLElement | null>
  onEnter?: (node?: HTMLElement, isAppearing?: boolean) => void
  onEntering?: (node?: HTMLElement, isAppearing?: boolean) => void
  onEntered?: (node?: HTMLElement, isAppearing?: boolean) => void
  onExit?: (node?: HTMLElement) => void
  onExiting?: (node?: HTMLElement) => void
  onExited?: (node?: HTMLElement) => void
  addEndListener?: (node: HTMLElement | undefined, done: () => void) => void
  children?: ReactNode | ((status: TransitionStatus) => ReactNode)
}

// Force reflow to ensure transitions work properly
const forceReflow = (node: HTMLElement) => {
  // Reading offsetHeight forces the browser to recalculate layout
  return node.scrollTop
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
    nodeRef,
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
    let appearTimeout = 0

    if (timeoutProp != null && typeof timeoutProp === 'number') {
      exitTimeout = timeoutProp
      enterTimeout = timeoutProp
      appearTimeout = timeoutProp
    } else if (timeoutProp != null) {
      exitTimeout = timeoutProp.exit ?? 0
      enterTimeout = timeoutProp.enter ?? 0
      appearTimeout = timeoutProp.appear ?? timeoutProp.enter ?? 0
    }

    return {
      exit: exitTimeout,
      enter: enterTimeout,
      appear: appearTimeout,
    }
  }

  const cancelNextCallback = () => {
    if (nextCallback.current !== null) {
      nextCallback.current = null
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  const safeSetStatus = (
    nextStatus: TransitionStatus,
    callback?: () => void
  ) => {
    callback = setNextCallback(callback)
    setStatus(nextStatus)
    if (callback) callback()
  }

  const setNextCallback = (callback?: () => void) => {
    let active = true

    const next = () => {
      if (active) {
        active = false
        if (callback) callback()
      }
    }

    next.cancel = () => {
      active = false
    }

    return next
  }

  const onTransitionEnd = (timeout: number, handler: () => void) => {
    const next = setNextCallback(handler)
    const node = nodeRef?.current

    const doesNotHaveTimeoutOrListener = timeout == null && !addEndListener

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(next, 0)
      return
    }

    if (addEndListener) {
      addEndListener(node, next)
    }

    if (timeout != null) {
      setTimeout(next, timeout)
    }
  }

  const performEnter = (mounting = false) => {
    const timeouts = getTimeouts()
    const node = nodeRef?.current
    const isAppearing = mounting

    // Skip enter animation if disabled
    if (!enter) {
      safeSetStatus('entered', () => {
        onEntered?.(node, isAppearing)
      })
      return
    }

    onEnter?.(node || undefined, isAppearing)
    safeSetStatus('entering', () => {
      onEntering?.(node || undefined, isAppearing)

      // Force reflow to ensure transitions work properly
      if (node && (mountOnEnter || unmountOnExit)) {
        forceReflow(node)
      }

      onTransitionEnd(timeouts.enter, () => {
        safeSetStatus('entered', () => {
          onEntered?.(node || undefined, isAppearing)
        })
      })
    })
  }

  const performExit = () => {
    const timeouts = getTimeouts()
    const node = nodeRef?.current

    // Skip exit animation if disabled
    if (!exit) {
      safeSetStatus('exited', () => {
        onExited?.(node || undefined)
      })
      return
    }

    onExit?.(node || undefined)
    safeSetStatus('exiting', () => {
      onExiting?.(node || undefined)

      onTransitionEnd(timeouts.exit, () => {
        safeSetStatus('exited', () => {
          onExited?.(node || undefined)
        })
      })
    })
  }

  useLayoutEffect(() => {
    if (nextCallback.current !== null) {
      nextCallback.current()
      nextCallback.current = null
    }
  })

  useEffect(() => {
    // Handle disabled enter/exit transitions
    if (!enter && inProp && status === 'exited') {
      setStatus('entered')
    }
    if (!exit && !inProp && status === 'entered') {
      setStatus('exited')
    }
  }, [inProp, status, enter, exit])

  useEffect(() => {
    let nextStatus: TransitionStatus | null = null

    if (inProp) {
      if (status === 'exited' || status === 'unmounted') {
        nextStatus = 'entering'
      }
    } else if (status === 'entering' || status === 'entered') {
      nextStatus = 'exiting'
    }

    if (nextStatus !== null) {
      cancelNextCallback()

      if (nextStatus === 'entering') {
        // Handle appear logic for initial mount
        const isAppearing = status === 'exited' && appear
        performEnter(isAppearing)
      } else {
        performExit()
      }
    } else if (unmountOnExit && status === 'exited') {
      setStatus('unmounted')
    }

    return () => {
      cancelNextCallback()
    }
  }, [inProp])

  let child: ReactNode

  if (typeof children === 'function') {
    child = children(status)
  } else if (React.isValidElement(children)) {
    child = React.cloneElement(children as ReactElement, {
      ref: nodeRef,
    })
  } else {
    child = children
  }

  if (status === 'unmounted') {
    return null
  }

  return <>{child}</>
}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
}

export default Transition