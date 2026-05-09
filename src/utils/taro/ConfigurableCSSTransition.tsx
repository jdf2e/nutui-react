import React, {
  useState,
  useEffect,
  useRef,
  cloneElement,
  useCallback,
} from 'react'

export type TransitionStatus =
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited'
  | 'unmounted'

interface CSSTransitionProps {
  in?: boolean
  timeout?: number
  classNames?: string
  nodeRef?: React.RefObject<any>
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  onEntered?: () => void
  onExited?: () => void
  children: React.ReactElement
}

const ConfigurableCSSTransition: React.FC<CSSTransitionProps> = (props) => {
  const {
    in: inPhase,
    timeout = 300,
    classNames: baseClassName = '',
    nodeRef,
    mountOnEnter,
    unmountOnExit,
    onEntered,
    onExited,
    children,
  } = props

  const [status, setStatus] = useState<TransitionStatus>(() => {
    if (inPhase) return 'entered'
    return unmountOnExit || mountOnEnter ? 'unmounted' : 'exited'
  })

  const [classes, setClasses] = useState<string>(() => {
    if (inPhase) return `${baseClassName}-enter-done`
    return `${baseClassName}-exit-done`
  })

  const timerRef = useRef<any>(null)
  const statusRef = useRef<TransitionStatus>(status)
  const prevInPhase = useRef<boolean | undefined>(inPhase)

  const updateStatus = useCallback((nextStatus: TransitionStatus) => {
    statusRef.current = nextStatus
    setStatus(nextStatus)
  }, [])

  const enter = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    if (statusRef.current === 'unmounted') {
      updateStatus('exited')
    }

    updateStatus('entering')
    setClasses(`${baseClassName}-enter ${baseClassName}-enter-active`)

    timerRef.current = setTimeout(() => {
      updateStatus('entered')
      setClasses(`${baseClassName}-enter-done`)
      onEntered?.()
    }, timeout)
  }, [baseClassName, onEntered, timeout, updateStatus])

  const exit = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    updateStatus('exiting')
    setClasses(`${baseClassName}-exit ${baseClassName}-exit-active`)

    timerRef.current = setTimeout(() => {
      updateStatus('exited')
      setClasses(`${baseClassName}-exit-done`)
      if (unmountOnExit) {
        updateStatus('unmounted')
      }
      onExited?.()
    }, timeout)
  }, [baseClassName, onExited, timeout, unmountOnExit, updateStatus])

  useEffect(() => {
    if (prevInPhase.current !== inPhase) {
      if (inPhase) {
        enter()
      } else {
        exit()
      }
      prevInPhase.current = inPhase
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [inPhase, enter, exit])

  if (status === 'unmounted') return null

  return cloneElement(children, {
    className: `${children.props.className || ''} ${classes}`,
  })
}

export default ConfigurableCSSTransition
