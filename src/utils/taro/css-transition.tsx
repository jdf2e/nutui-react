import React, {
  useEffect,
  useState,
  useRef,
  cloneElement,
  isValidElement,
  ReactElement,
  FunctionComponent,
} from 'react'
import classNames from 'classnames'
import requestAniFrame, { cancelRaf } from '@/utils/raf'

export interface CSSTransitionProps {
  in?: boolean
  timeout?: number | { enter?: number; exit?: number; appear?: number }
  classNames?: string
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  appear?: boolean
  nodeRef?: React.RefObject<any>
  onEnter?: () => void
  onEntering?: () => void
  onEntered?: () => void
  onExit?: () => void
  onExiting?: () => void
  onExited?: () => void
  children?: ReactElement | ((status: string) => ReactElement)
  [key: string]: any
}

export type TransitionStatus =
  'unmounted' | 'exited' | 'entering' | 'entered' | 'exiting'

export const CSSTransition: FunctionComponent<CSSTransitionProps> = ({
  in: inProp = false,
  timeout = 300,
  classNames: transitionName = '',
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  nodeRef,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  children,
}) => {
  const enterTimeout =
    typeof timeout === 'object' ? (timeout.enter ?? 300) : timeout
  const exitTimeout =
    typeof timeout === 'object' ? (timeout.exit ?? 300) : timeout

  const getInitialStatus = (): TransitionStatus => {
    if (inProp) {
      return appear ? 'entering' : 'entered'
    }
    return mountOnEnter || unmountOnExit ? 'unmounted' : 'exited'
  }

  const [status, setStatus] = useState<TransitionStatus>(getInitialStatus)
  const [animationClass, setAnimationClass] = useState<string>(() => {
    if (!transitionName) return ''
    if (inProp) {
      return appear
        ? `${transitionName}-appear ${transitionName}-appear-active`
        : `${transitionName}-enter-done`
    }
    return `${transitionName}-exit-done`
  })

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nextFrameRef = useRef<number | null>(null)
  const isFirstRender = useRef(true)
  const statusRef = useRef<TransitionStatus>(status)
  statusRef.current = status

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (nextFrameRef.current) {
      cancelRaf(nextFrameRef.current)
      nextFrameRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      clearTimers()
    }
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      if (inProp && appear) {
        onEnter?.()
        onEntering?.()
        timerRef.current = setTimeout(() => {
          setStatus('entered')
          setAnimationClass(
            transitionName ? `${transitionName}-enter-done` : ''
          )
          onEntered?.()
        }, enterTimeout)
      }
      return
    }

    clearTimers()

    if (inProp) {
      // 进入阶段
      setStatus('entering')
      onEnter?.()
      setAnimationClass(transitionName ? `${transitionName}-enter` : '')

      nextFrameRef.current = requestAniFrame(() => {
        setAnimationClass(
          transitionName
            ? `${transitionName}-enter ${transitionName}-enter-active`
            : ''
        )
        onEntering?.()

        timerRef.current = setTimeout(() => {
          setStatus('entered')
          setAnimationClass(
            transitionName ? `${transitionName}-enter-done` : ''
          )
          onEntered?.()
        }, enterTimeout)
      })
    } else {
      // 离开阶段
      if (statusRef.current === 'unmounted' || statusRef.current === 'exited')
        return

      setStatus('exiting')
      onExit?.()
      setAnimationClass(transitionName ? `${transitionName}-exit` : '')

      nextFrameRef.current = requestAniFrame(() => {
        setAnimationClass(
          transitionName
            ? `${transitionName}-exit ${transitionName}-exit-active`
            : ''
        )
        onExiting?.()

        timerRef.current = setTimeout(() => {
          setStatus(unmountOnExit ? 'unmounted' : 'exited')
          setAnimationClass(transitionName ? `${transitionName}-exit-done` : '')
          onExited?.()
        }, exitTimeout)
      })
    }
  }, [inProp])

  if (status === 'unmounted') {
    return null
  }

  if (typeof children === 'function') {
    return children(status)
  }

  if (!isValidElement(children)) {
    return null
  }

  const child = children as ReactElement<{ className?: string; ref?: any }>
  const mergedClassName = classNames(child.props.className, animationClass)

  return cloneElement(child, {
    ref: nodeRef || (child as any).ref,
    className: mergedClassName,
  })
}

export default CSSTransition
