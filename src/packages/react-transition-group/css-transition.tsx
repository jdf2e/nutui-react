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
    ...rest
  } = props

  const nodeRef = useRef<HTMLElement>(null)

  const getClassNames = (name: string) => {
    if (typeof classNamesProp === 'string') {
      return `${classNamesProp}-${name}`
    }
    return classNamesProp?.[name] || ''
  }

  const removeAllClasses = (node: HTMLElement) => {
    // Remove all possible transition classes to ensure a clean state
    const allClasses = [
      getClassNames('enter'),
      getClassNames('enter-active'),
      getClassNames('enter-done'),
      getClassNames('exit'),
      getClassNames('exit-active'),
      getClassNames('exit-done'),
      getClassNames('appear'),
      getClassNames('appear-active'),
    ]
    allClasses.forEach((cls) => {
      if (cls) node.classList.remove(cls)
    })
  }

  const handleEnter = (maybeNode?: HTMLElement) => {
    const node = maybeNode || nodeRef.current
    if (!node) return

    removeAllClasses(node)
    addClass(node, getClassNames('enter'))

    if (onEnter) {
      onEnter(node)
    }
  }

  const handleEntering = (maybeNode?: HTMLElement) => {
    const node = maybeNode || nodeRef.current
    if (!node) return

    addClass(node, getClassNames('enter-active'))

    if (onEntering) {
      onEntering(node)
    }
  }

  const handleEntered = (maybeNode?: HTMLElement) => {
    const node = maybeNode || nodeRef.current
    if (!node) return

    removeClass(node, getClassNames('enter'))
    removeClass(node, getClassNames('enter-active'))
    addClass(node, getClassNames('enter-done'))

    if (onEntered) {
      onEntered(node)
    }
  }

  const handleExit = (maybeNode?: HTMLElement) => {
    const node = maybeNode || nodeRef.current
    if (!node) return

    removeAllClasses(node)
    addClass(node, getClassNames('exit'))

    if (onExit) {
      onExit(node)
    }
  }

  const handleExiting = (maybeNode?: HTMLElement) => {
    const node = maybeNode || nodeRef.current
    if (!node) return

    addClass(node, getClassNames('exit-active'))

    if (onExiting) {
      onExiting(node)
    }
  }

  const handleExited = (maybeNode?: HTMLElement) => {
    const node = maybeNode || nodeRef.current
    if (!node) return

    removeClass(node, getClassNames('exit'))
    removeClass(node, getClassNames('exit-active'))
    addClass(node, getClassNames('exit-done'))

    if (onExited) {
      onExited(node)
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

  return (
    <Transition
      {...rest}
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
              getClassNames(status)
            )
            return React.cloneElement(child, {
              ...childProps,
              className: currentClasses,
              ref: nodeRef,
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
              getClassNames(status)
            )

            return React.cloneElement(child, {
              ...childProps,
              className: currentClasses,
              ref: nodeRef,
            })
          }}
    </Transition>
  )
}

export default CSSTransition
