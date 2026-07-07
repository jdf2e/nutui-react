import addOneClass from 'dom-helpers/addClass'

import removeOneClass from 'dom-helpers/removeClass'
import React, { FunctionComponent } from 'react'

import { Transition, TransitionProps } from './Transition'
import { forceReflow } from './utils/reflow'

const addClassCommon = (node: HTMLElement | null, classes: string) =>
  node && classes && classes.split(' ').forEach((c) => addOneClass(node, c))
const removeClassCommon = (node: HTMLElement | null, classes: string) =>
  node && classes && classes.split(' ').forEach((c) => removeOneClass(node, c))

type ClassNamesShape =
  | string
  | {
      appear: string
      appearActive: string
      appearDone: string
      enter: string
      enterActive: string
      enterDone: string
      exit: string
      exitActive: string
      exitDone: string
    }

interface CSSTransitionProps extends TransitionProps {
  classNames: ClassNamesShape
  children: React.ReactNode
}

const defaultProps = {
  classNames: '',
}

const CSSTransition: FunctionComponent<Partial<CSSTransitionProps>> = (
  props
) => {
  const {
    classNames,
    onEnter: _onEnter,
    onEntering: _onEntering,
    onEntered: _onEntered,
    onExit: _onExit,
    onExiting: _onExiting,
    onExited: _onExited,
    nodeRef: _nodeRef,
    ...childProps
  } = { ...defaultProps, ...props }

  const appliedClasses = {
    appear: {},
    enter: {},
    exit: {},
  }

  const onEnter = (maybeNode: any, maybeAppearing: boolean) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    removeClasses(node, 'exit')
    addClass(node, appearing ? 'appear' : 'enter', 'base')

    if (_onEnter) {
      _onEnter(maybeNode, maybeAppearing)
    }
  }

  const onEntering = (maybeNode: any, maybeAppearing: boolean) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    const type = appearing ? 'appear' : 'enter'
    addClass(node, type, 'active')

    if (_onEntering) {
      _onEntering(maybeNode, maybeAppearing)
    }
  }

  const onEntered = (maybeNode: any, maybeAppearing: boolean) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    const type = appearing ? 'appear' : 'enter'
    removeClasses(node, type)
    addClass(node, type, 'done')

    if (_onEntered) {
      _onEntered(maybeNode, maybeAppearing)
    }
  }

  const onExit = (maybeNode: any) => {
    const [node] = resolveArguments(maybeNode)
    removeClasses(node, 'appear')
    removeClasses(node, 'enter')
    addClass(node, 'exit', 'base')

    if (_onExit) {
      _onExit(maybeNode)
    }
  }

  const onExiting = (maybeNode: any) => {
    const [node] = resolveArguments(maybeNode)
    addClass(node, 'exit', 'active')

    if (_onExiting) {
      _onExiting(maybeNode)
    }
  }

  const onExited = (maybeNode: any) => {
    const [node] = resolveArguments(maybeNode)
    removeClasses(node, 'exit')
    addClass(node, 'exit', 'done')

    if (_onExited) {
      _onExited(maybeNode)
    }
  }

  // when prop `nodeRef` is provided `node` is excluded
  const resolveArguments = (maybeNode: any, maybeAppearing: boolean) =>
    _nodeRef
      ? [_nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing] // `findDOMNode` was used

  const getClassNames = (type: string) => {
    const isStringClassNames = typeof classNames === 'string'
    const prefix = isStringClassNames && classNames ? `${classNames}-` : ''

    const baseClassName = isStringClassNames
      ? `${prefix}${type}`
      : classNames[type]

    const activeClassName = isStringClassNames
      ? `${baseClassName}-active`
      : classNames[`${type}Active`]

    const doneClassName = isStringClassNames
      ? `${baseClassName}-done`
      : classNames[`${type}Done`]

    return {
      baseClassName,
      activeClassName,
      doneClassName,
    }
  }

  const addClass = (node: HTMLElement | null, type: string, phase: string) => {
    let className = getClassNames(type)[`${phase}ClassName`]
    const { doneClassName } = getClassNames('enter')

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += ` ${doneClassName}`
    }

    // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (phase === 'active') {
      if (node) forceReflow(node)
    }

    if (className) {
      appliedClasses[type][phase] = className
      addClassCommon(node, className)
    }
  }

  const removeClasses = (node: HTMLElement | null, type: string) => {
    const {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName,
    } = appliedClasses[type]

    appliedClasses[type] = {}

    if (baseClassName) {
      removeClassCommon(node, baseClassName)
    }
    if (activeClassName) {
      removeClassCommon(node, activeClassName)
    }
    if (doneClassName) {
      removeClassCommon(node, doneClassName)
    }
  }

  return (
    <Transition
      {...childProps}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    />
  )
}

export default CSSTransition
