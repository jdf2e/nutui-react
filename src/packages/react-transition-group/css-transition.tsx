import React, { ReactNode, ReactElement, useRef } from 'react'
import classNames from 'classnames'
import Transition, { TransitionProps, TransitionStatus } from './transition'

export interface CSSTransitionProps extends TransitionProps {
  classNames?:
    | string
    | {
        enter?: string
        enterActive?: string
        enterDone?: string
        exit?: string
        exitActive?: string
        exitDone?: string
        appear?: string
        appearActive?: string
        appearDone?: string
        [key: string]: string | undefined
      }
  children?: ReactNode | ((status: TransitionStatus) => ReactNode)
}

const CSSTransition: React.FC<CSSTransitionProps> = (props) => {
  const {
    classNames: classNamesProp,
    children,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    nodeRef,
    ...rest
  } = props

  const internalNodeRef = useRef<HTMLElement>(null)
  const appliedClasses = useRef<{
    appear: Record<string, string>
    enter: Record<string, string>
    exit: Record<string, string>
  }>({
    appear: {},
    enter: {},
    exit: {},
  })

  const getClassNames = (type: 'appear' | 'enter' | 'exit') => {
    const isStringClassNames = typeof classNamesProp === 'string'
    const prefix = isStringClassNames && classNamesProp ? `${classNamesProp}-` : ''

    const baseClassName = isStringClassNames
      ? `${prefix}${type}`
      : classNamesProp?.[type] || ''

    const activeClassName = isStringClassNames
      ? `${baseClassName}-active`
      : classNamesProp?.[`${type}Active`] || ''

    const doneClassName = isStringClassNames
      ? `${baseClassName}-done`
      : classNamesProp?.[`${type}Done`] || ''

    return {
      baseClassName,
      activeClassName,
      doneClassName,
    }
  }

  const addClass = (node: HTMLElement, className: string) => {
    if (className) {
      node.classList.add(className)
    }
  }

  const removeClass = (node: HTMLElement, className: string) => {
    if (className) {
      node.classList.remove(className)
    }
  }

  // Force reflow to ensure transitions work properly
  const forceReflow = (node: HTMLElement) => {
    return node.scrollTop
  }

  const getClassNameForStatus = (status: TransitionStatus): string => {
    switch (status) {
      case 'entering':
        return getClassNames('enter').activeClassName
      case 'entered':
        return getClassNames('enter').doneClassName
      case 'exiting':
        return getClassNames('exit').activeClassName
      case 'exited':
        return getClassNames('exit').doneClassName
      default:
        return ''
    }
  }

  const removeClasses = (
    node: HTMLElement,
    type: 'appear' | 'enter' | 'exit'
  ) => {
    const {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName,
    } = appliedClasses.current[type]

    appliedClasses.current[type] = {}

    if (baseClassName) {
      removeClass(node, baseClassName)
    }
    if (activeClassName) {
      removeClass(node, activeClassName)
    }
    if (doneClassName) {
      removeClass(node, doneClassName)
    }
  }

  // Resolve arguments - handle nodeRef prop
  const resolveArguments = (maybeNode?: HTMLElement, maybeAppearing?: boolean): [HTMLElement | null, boolean] => {
    if (nodeRef) {
      // When nodeRef is provided, maybeNode is actually isAppearing
      return [nodeRef.current, !!maybeNode]
    }
    // When nodeRef is not provided, use maybeNode and maybeAppearing as is
    return [maybeNode || null, !!maybeAppearing]
  }

  const handleEnter = (maybeNode?: HTMLElement, maybeAppearing?: boolean) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    if (!node || typeof node === 'boolean') return

    const type = appearing ? 'appear' : 'enter'

    removeClasses(node, 'exit')
    removeClasses(node, type)

    const { baseClassName, activeClassName, doneClassName } = getClassNames(type)

    appliedClasses.current[type] = {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName,
    }

    addClass(node, baseClassName)

    if (onEnter) {
      onEnter(maybeNode, maybeAppearing)
    }
  }

  const handleEntering = (
    maybeNode?: HTMLElement,
    maybeAppearing?: boolean
  ) => {
    const [node] = resolveArguments(maybeNode, maybeAppearing)
    if (!node || typeof node === 'boolean') return

    const type = maybeAppearing ? 'appear' : 'enter'
    const { activeClassName } = appliedClasses.current[type]

    // Force reflow to ensure transitions work properly
    if (activeClassName) {
      forceReflow(node)
    }

    addClass(node, activeClassName)

    if (onEntering) {
      onEntering(maybeNode, maybeAppearing)
    }
  }

  const handleEntered = (maybeNode?: HTMLElement, maybeAppearing?: boolean) => {
    const [node] = resolveArguments(maybeNode, maybeAppearing)
    if (!node) return

    const type = maybeAppearing ? 'appear' : 'enter'
    const { baseClassName, activeClassName, doneClassName } = appliedClasses.current[type]

    removeClass(node, baseClassName)
    removeClass(node, activeClassName)

    if (doneClassName) {
      addClass(node, doneClassName)
    }

    appliedClasses.current[type] = {}

    if (onEntered) {
      onEntered(maybeNode, maybeAppearing)
    }
  }

  const handleExit = (maybeNode?: HTMLElement) => {
    const [node] = resolveArguments(maybeNode)
    if (!node || typeof node === 'boolean') return

    removeClasses(node, 'appear')
    removeClasses(node, 'enter')

    const { baseClassName, activeClassName, doneClassName } = getClassNames('exit')

    appliedClasses.current.exit = {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName,
    }

    addClass(node, baseClassName)

    if (onExit) {
      onExit(maybeNode)
    }
  }

  const handleExiting = (maybeNode?: HTMLElement) => {
    const [node] = resolveArguments(maybeNode)
    if (!node || typeof node === 'boolean') return

    const { activeClassName } = appliedClasses.current.exit

    // Force reflow to ensure transitions work properly
    if (activeClassName) {
      forceReflow(node)
    }

    addClass(node, activeClassName)

    if (onExiting) {
      onExiting(maybeNode)
    }
  }

  const handleExited = (maybeNode?: HTMLElement) => {
    const [node] = resolveArguments(maybeNode)
    if (!node || typeof node === 'boolean') return

    const { baseClassName, activeClassName, doneClassName } = appliedClasses.current.exit

    removeClass(node, baseClassName)
    removeClass(node, activeClassName)

    if (doneClassName) {
      addClass(node, doneClassName)
    }

    appliedClasses.current.exit = {}

    if (onExited) {
      onExited(maybeNode)
    }
  }

  return (
    <Transition
      {...rest}
      nodeRef={nodeRef || internalNodeRef}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
    >
      {typeof children === 'function'
        ? (status: TransitionStatus) => {
            const child = children(status)
            if (!React.isValidElement(child)) {
              return child
            }
            const childProps = { ...child.props }
            const currentClasses = classNames(
              childProps.className,
              getClassNameForStatus(status)
            )
            return React.cloneElement(child, {
              ...childProps,
              className: currentClasses,
              ref: nodeRef || internalNodeRef,
            })
          }
        : (status: TransitionStatus) => {
            if (!React.isValidElement(children)) {
              return children
            }

            const child = children as ReactElement
            const childProps = { ...child.props }

            // Apply classes based on status
            const currentClasses = classNames(
              childProps.className,
              getClassNameForStatus(status)
            )

            return React.cloneElement(child, {
              ...childProps,
              className: currentClasses,
              ref: nodeRef || internalNodeRef,
            })
          }}
    </Transition>
  )
}

export default CSSTransition
