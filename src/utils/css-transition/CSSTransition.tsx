import addOneClass from 'dom-helpers/addClass'

import removeOneClass from 'dom-helpers/removeClass'
import React from 'react'

import Transition from './Transition'
import { forceReflow } from './utils/reflow'

const addClass = (node, classes) =>
  node && classes && classes.split(' ').forEach((c) => addOneClass(node, c))
const removeClass = (node, classes) =>
  node && classes && classes.split(' ').forEach((c) => removeOneClass(node, c))

type classNamesShape =
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

interface CSSTransitionProps {
  classNames: classNamesShape
  onEnter: (node: HTMLElement, isAppearing: boolean) => void
  onEntering: (node: HTMLElement, isAppearing: boolean) => void
  onEntered: (node: HTMLElement, isAppearing: boolean) => void
  onExit: (node: HTMLElement) => void
  onExiting: (node: HTMLElement) => void
  onExited: (node: HTMLElement) => void
}

class CSSTransition extends React.Component {
  static defaultProps = {
    classNames: '',
  }

  appliedClasses = {
    appear: {},
    enter: {},
    exit: {},
  }

  onEnter = (maybeNode, maybeAppearing) => {
    const [node, appearing] = this.resolveArguments(maybeNode, maybeAppearing)
    this.removeClasses(node, 'exit')
    this.addClass(node, appearing ? 'appear' : 'enter', 'base')

    if (this.props.onEnter) {
      this.props.onEnter(maybeNode, maybeAppearing)
    }
  }

  onEntering = (maybeNode, maybeAppearing) => {
    const [node, appearing] = this.resolveArguments(maybeNode, maybeAppearing)
    const type = appearing ? 'appear' : 'enter'
    this.addClass(node, type, 'active')

    if (this.props.onEntering) {
      this.props.onEntering(maybeNode, maybeAppearing)
    }
  }

  onEntered = (maybeNode, maybeAppearing) => {
    const [node, appearing] = this.resolveArguments(maybeNode, maybeAppearing)
    const type = appearing ? 'appear' : 'enter'
    this.removeClasses(node, type)
    this.addClass(node, type, 'done')

    if (this.props.onEntered) {
      this.props.onEntered(maybeNode, maybeAppearing)
    }
  }

  onExit = (maybeNode) => {
    const [node] = this.resolveArguments(maybeNode)
    this.removeClasses(node, 'appear')
    this.removeClasses(node, 'enter')
    this.addClass(node, 'exit', 'base')

    if (this.props.onExit) {
      this.props.onExit(maybeNode)
    }
  }

  onExiting = (maybeNode) => {
    const [node] = this.resolveArguments(maybeNode)
    this.addClass(node, 'exit', 'active')

    if (this.props.onExiting) {
      this.props.onExiting(maybeNode)
    }
  }

  onExited = (maybeNode) => {
    const [node] = this.resolveArguments(maybeNode)
    this.removeClasses(node, 'exit')
    this.addClass(node, 'exit', 'done')

    if (this.props.onExited) {
      this.props.onExited(maybeNode)
    }
  }

  // when prop `nodeRef` is provided `node` is excluded
  resolveArguments = (maybeNode, maybeAppearing) =>
    this.props.nodeRef
      ? [this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing] // `findDOMNode` was used

  getClassNames = (type) => {
    const { classNames } = this.props
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

  addClass(node, type, phase) {
    let className = this.getClassNames(type)[`${phase}ClassName`]
    const { doneClassName } = this.getClassNames('enter')

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += ` ${doneClassName}`
    }

    // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (phase === 'active') {
      if (node) forceReflow(node)
    }

    if (className) {
      this.appliedClasses[type][phase] = className
      addClass(node, className)
    }
  }

  removeClasses(node, type) {
    const {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName,
    } = this.appliedClasses[type]

    this.appliedClasses[type] = {}

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

  render() {
    const { classNames: _, ...props } = this.props

    return (
      <Transition
        {...props}
        onEnter={this.onEnter}
        onEntered={this.onEntered}
        onEntering={this.onEntering}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      />
    )
  }
}

export default CSSTransition
