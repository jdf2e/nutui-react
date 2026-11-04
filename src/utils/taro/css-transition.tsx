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
  const statusRef = useRef<TransitionStatus>(status)
  statusRef.current = status

  // 轮次版本号：防止过期异步任务误覆盖最新状态或误卸载
  const transitionIdRef = useRef(0)
  // 记录上一次的 inProp 与挂载状态，防 React 18 StrictMode 双次挂载产生额外入场
  const prevInPropRef = useRef(inProp)
  const isMountedRef = useRef(false)

  // 始终保持最新回调引用，避免闭包过期
  const callbacksRef = useRef({
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  })
  callbacksRef.current = {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  }

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
      transitionIdRef.current += 1
      clearTimers()
    }
  }, [])

  useEffect(() => {
    // 首次挂载处理
    if (!isMountedRef.current) {
      isMountedRef.current = true
      if (inProp && appear) {
        const currentId = ++transitionIdRef.current
        callbacksRef.current.onEnter?.()
        callbacksRef.current.onEntering?.()
        timerRef.current = setTimeout(() => {
          if (transitionIdRef.current !== currentId) return
          setStatus('entered')
          setAnimationClass(
            transitionName ? `${transitionName}-enter-done` : ''
          )
          callbacksRef.current.onEntered?.()
        }, enterTimeout)
      }
      return
    }

    // 状态无变化时（例如 StrictMode 重新执行 effect 或其他 props 更新），直接跳过
    if (prevInPropRef.current === inProp) {
      return
    }
    prevInPropRef.current = inProp

    const currentId = ++transitionIdRef.current
    clearTimers()

    if (inProp) {
      // 进入阶段
      setStatus('entering')
      callbacksRef.current.onEnter?.()
      setAnimationClass(transitionName ? `${transitionName}-enter` : '')

      nextFrameRef.current = requestAniFrame(() => {
        if (transitionIdRef.current !== currentId) return
        setAnimationClass(
          transitionName
            ? `${transitionName}-enter ${transitionName}-enter-active`
            : ''
        )
        callbacksRef.current.onEntering?.()

        timerRef.current = setTimeout(() => {
          if (transitionIdRef.current !== currentId) return
          setStatus('entered')
          setAnimationClass(
            transitionName ? `${transitionName}-enter-done` : ''
          )
          callbacksRef.current.onEntered?.()
        }, enterTimeout)
      })
    } else {
      // 离开阶段
      if (statusRef.current === 'unmounted' || statusRef.current === 'exited') {
        return
      }

      setStatus('exiting')
      callbacksRef.current.onExit?.()
      setAnimationClass(transitionName ? `${transitionName}-exit` : '')

      nextFrameRef.current = requestAniFrame(() => {
        if (transitionIdRef.current !== currentId) return
        setAnimationClass(
          transitionName
            ? `${transitionName}-exit ${transitionName}-exit-active`
            : ''
        )
        callbacksRef.current.onExiting?.()

        timerRef.current = setTimeout(() => {
          if (transitionIdRef.current !== currentId) return
          setStatus(unmountOnExit ? 'unmounted' : 'exited')
          setAnimationClass(transitionName ? `${transitionName}-exit-done` : '')
          callbacksRef.current.onExited?.()
        }, exitTimeout)
      })
    }
  }, [inProp, appear, enterTimeout, exitTimeout, transitionName, unmountOnExit])

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
