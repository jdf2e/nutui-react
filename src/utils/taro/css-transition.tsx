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

type AnimationStage =
  | 'appear-active'
  | 'appear-done'
  | 'enter'
  | 'enter-active'
  | 'enter-done'
  | 'exit'
  | 'exit-active'
  | 'exit-done'

function getAnimationClass(name: string, stage: AnimationStage) {
  if (!name) return ''
  if (stage === 'appear-done') {
    return `${name}-appear-done ${name}-enter-done`
  }
  if (stage.endsWith('-active')) {
    return `${name}-${stage.slice(0, -7)} ${name}-${stage}`
  }
  return `${name}-${stage}`
}

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
  const appearTimeout =
    typeof timeout === 'object' ? (timeout.appear ?? enterTimeout) : timeout

  const getInitialStatus = (): TransitionStatus => {
    if (inProp) {
      return appear ? 'entering' : 'entered'
    }
    return mountOnEnter || unmountOnExit ? 'unmounted' : 'exited'
  }

  const [status, setStatus] = useState<TransitionStatus>(getInitialStatus)
  const [animationStage, setAnimationStage] = useState<AnimationStage>(() => {
    if (inProp) {
      return appear ? 'appear-active' : 'enter-done'
    }
    return 'exit-done'
  })
  const animationClass = getAnimationClass(transitionName, animationStage)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nextFrameRef = useRef<ReturnType<typeof requestAniFrame> | null>(null)
  const statusRef = useRef<TransitionStatus>(status)
  statusRef.current = status
  const unmountOnExitRef = useRef(unmountOnExit)
  unmountOnExitRef.current = unmountOnExit

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
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (nextFrameRef.current !== null) {
      cancelRaf(nextFrameRef.current)
      nextFrameRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      transitionIdRef.current += 1
      clearTimers()
      // StrictMode 的 effect 重放需要恢复首次 appear 的任务。
      isMountedRef.current = false
    }
  }, [])

  useEffect(() => {
    // 首次挂载处理
    if (!isMountedRef.current) {
      isMountedRef.current = true
      prevInPropRef.current = inProp
      if (inProp && appear) {
        const currentId = ++transitionIdRef.current
        callbacksRef.current.onEnter?.()
        callbacksRef.current.onEntering?.()
        timerRef.current = setTimeout(() => {
          if (transitionIdRef.current !== currentId) return
          timerRef.current = null
          setStatus('entered')
          setAnimationStage('appear-done')
          callbacksRef.current.onEntered?.()
        }, appearTimeout)
      }
      return
    }

    // 配置更新不重启动画；已退出的内容仍需响应最新销毁配置。
    if (prevInPropRef.current === inProp) {
      if (!inProp && unmountOnExit && statusRef.current === 'exited') {
        setStatus('unmounted')
      }
      return
    }
    prevInPropRef.current = inProp

    const currentId = ++transitionIdRef.current
    clearTimers()

    if (inProp) {
      // 进入阶段
      setStatus('entering')
      callbacksRef.current.onEnter?.()
      setAnimationStage('enter')

      nextFrameRef.current = requestAniFrame(() => {
        if (transitionIdRef.current !== currentId) return
        nextFrameRef.current = null
        setAnimationStage('enter-active')
        callbacksRef.current.onEntering?.()

        timerRef.current = setTimeout(() => {
          if (transitionIdRef.current !== currentId) return
          timerRef.current = null
          setStatus('entered')
          setAnimationStage('enter-done')
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
      setAnimationStage('exit')

      nextFrameRef.current = requestAniFrame(() => {
        if (transitionIdRef.current !== currentId) return
        nextFrameRef.current = null
        setAnimationStage('exit-active')
        callbacksRef.current.onExiting?.()

        timerRef.current = setTimeout(() => {
          if (transitionIdRef.current !== currentId) return
          timerRef.current = null
          setStatus(unmountOnExitRef.current ? 'unmounted' : 'exited')
          setAnimationStage('exit-done')
          callbacksRef.current.onExited?.()
        }, exitTimeout)
      })
    }
  }, [inProp, appear, appearTimeout, enterTimeout, exitTimeout, unmountOnExit])

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
