import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react'
import config from './config'
import TransitionGroupContext from './TransitionGroupContext'
import { forceReflow } from './utils/reflow'

export const UNMOUNTED = 'unmounted'
export const EXITED = 'exited'
export const ENTERING = 'entering'
export const ENTERED = 'entered'
export const EXITING = 'exiting'

export interface TransitionProps {
  in: boolean
  mountOnEnter: boolean
  unmountOnExit: boolean
  appear: boolean
  enter: boolean
  exit: boolean
  timeout?: number | { enter?: number; exit?: number; appear?: number }
  addEndListener?: (node: HTMLElement, done: () => void) => void
  onEnter?: (node: HTMLElement, appearing: boolean) => void
  onEntering?: (node: HTMLElement, appearing: boolean) => void
  onEntered?: (node: HTMLElement, appearing: boolean) => void
  onExit?: (node: HTMLElement) => void
  onExiting?: (node: HTMLElement) => void
  onExited?: (node: HTMLElement) => void
  nodeRef?: React.RefObject<HTMLElement>
  children:
    | React.ReactNode
    | ((status: string, childProps: any) => React.ReactNode)
}

const defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: () => {},
  onEntering: () => {},
  onEntered: () => {},
  onExit: () => {},
  onExiting: () => {},
  onExited: () => {},
}

export const Transition: FunctionComponent<Partial<TransitionProps>> = (
  props
) => {
  const {
    children,
    // filter props for `Transition`
    in: _in,
    mountOnEnter,
    unmountOnExit,
    appear,
    enter,
    exit,
    timeout,
    addEndListener,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    nodeRef: _nodeRef,
    ...childProps
  } = { ...defaultProps, ...props }
  const context = useContext(TransitionGroupContext)
  const [status, setStatus] = useState(UNMOUNTED)
  const nextCallback = useRef<any>(null)
  const ref = useRef<HTMLElement>(null)
  const nodeRef = _nodeRef || ref

  useEffect(() => {
    // In the context of a TransitionGroup all enters are really appears
    const appear = context && !context.isMounting ? enter : props.appear

    let initialStatus
    if (_in) {
      if (appear) {
        initialStatus = EXITED
      } else {
        initialStatus = ENTERED
      }
    } else if (unmountOnExit || mountOnEnter) {
      initialStatus = UNMOUNTED
    } else {
      initialStatus = EXITED
    }

    setStatus(initialStatus)
  }, [_in, enter, props.appear, unmountOnExit, mountOnEnter, context])

  useEffect(() => {
    if (status === EXITED && unmountOnExit) {
      setStatus(UNMOUNTED)
    } else {
      updateStatus(true, null)
    }
  }, [status, unmountOnExit])

  useEffect(() => {
    let nextStatus = null
    if (_in) {
      if (status !== ENTERING && status !== ENTERED) {
        nextStatus = ENTERING
      }
    } else if (status === ENTERING || status === ENTERED) {
      nextStatus = EXITING
    }
    console.log('nextStatus', nextStatus)
    updateStatus(false, nextStatus)
  }, [_in, status])

  useEffect(() => {
    return () => {
      cancelNextCallback()
    }
  }, [])

  const getTimeouts = () => {
    const { timeout } = props
    let exit = timeout
    let enter = timeout
    let appear = timeout

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit
      enter = timeout.enter
      // TODO: remove fallback for next major
      appear = timeout.appear !== undefined ? timeout.appear : enter
    }
    return { exit, enter, appear }
  }

  const updateStatus = (mounting: boolean, nextStatus: string | null) => {
    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      cancelNextCallback()

      if (nextStatus === ENTERING) {
        if (unmountOnExit || mountOnEnter) {
          const node = nodeRef.current
          // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
          if (node) forceReflow(node)
        }
        performEnter(mounting)
      } else {
        performExit()
      }
    } else if (unmountOnExit && status === EXITED) {
      setStatus(UNMOUNTED)
    }
  }

  const performEnter = (mounting: boolean) => {
    const appearing = context ? context.isMounting : mounting
    const maybeNode = nodeRef.current

    const timeouts = getTimeouts()
    const enterTimeout = appearing ? timeouts.appear : timeouts.enter

    console.log('performEnter')
    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if ((!mounting && !enter) || config.disabled) {
      safeSetState({ status: ENTERED }, () => {
        onEntered(maybeNode)
      })
      return
    }

    onEnter(maybeNode, appearing)
    safeSetState({ status: ENTERING }, () => {
      onEntering(maybeNode, appearing)
      onTransitionEnd(enterTimeout, () => {
        safeSetState({ status: ENTERED }, () => {
          onEntered(maybeNode, appearing)
        })
      })
    })
  }

  const performExit = () => {
    const maybeNode = nodeRef.current

    // no exit animation skip right to EXITED
    if (!exit || config.disabled) {
      safeSetState({ status: EXITED }, () => {
        onExited(maybeNode)
      })
      return
    }

    onExit(maybeNode)
    safeSetState({ status: EXITING }, () => {
      onExiting(maybeNode)
      const timeouts = getTimeouts()
      onTransitionEnd(timeouts.exit, () => {
        safeSetState({ status: EXITED }, () => {
          onExited(maybeNode)
        })
      })
    })
  }

  const cancelNextCallback = () => {
    if (nextCallback.current !== null) {
      nextCallback.current.cancel()
      nextCallback.current = null
    }
  }

  const safeSetState = (nextState: any, callback?: () => void) => {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    const nextCallback = setNextCallback(callback)
    setStatus((prev) => ({ ...prev, ...nextState }), nextCallback)
  }

  const setNextCallback = (callback?: () => void) => {
    let active = true

    nextCallback.current = (event: any) => {
      if (active) {
        active = false
        nextCallback.current = null
        callback?.(event)
      }
    }

    nextCallback.current.cancel = () => {
      active = false
    }

    return nextCallback.current
  }

  const onTransitionEnd = (timeout: number | null, handler: () => void) => {
    setNextCallback(handler)
    const node = nodeRef.current

    const doesNotHaveTimeoutOrListener = timeout == null && !addEndListener
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(nextCallback.current, 0)
      return
    }

    if (addEndListener) {
      addEndListener(node, nextCallback.current)
    }

    if (timeout != null) {
      setTimeout(nextCallback.current, timeout)
    }
  }

  if (status === UNMOUNTED) {
    return null
  }

  return (
    // allows for nested Transitions
    <TransitionGroupContext.Provider value={null}>
      {typeof children === 'function'
        ? children(status, childProps)
        : React.cloneElement(React.Children.only(children), childProps)}
    </TransitionGroupContext.Provider>
  )
}

Transition.UNMOUNTED = UNMOUNTED
Transition.EXITED = EXITED
Transition.ENTERING = ENTERING
Transition.ENTERED = ENTERED
Transition.EXITING = EXITING
