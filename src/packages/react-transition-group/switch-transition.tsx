import React, { useState, useEffect, ReactElement } from 'react'
import Transition, { TransitionProps } from './transition'

export interface SwitchTransitionProps extends Omit<TransitionProps, 'in'> {
  children: ReactElement
  mode?: 'in-out' | 'out-in'
}

const SwitchTransition: React.FC<SwitchTransitionProps> = (props) => {
  const { children, mode = 'out-in', ...rest } = props

  const [currentChild, setCurrentChild] = useState<ReactElement | null>(
    children
  )
  const [prevChild, setPrevChild] = useState<ReactElement | null>(null)
  const [status, setStatus] = useState<'idle' | 'out' | 'in'>('idle')

  useEffect(() => {
    if (children !== currentChild) {
      if (mode === 'out-in') {
        setStatus('out')
        setPrevChild(currentChild)
      } else if (mode === 'in-out') {
        setStatus('in')
        setPrevChild(currentChild)
        setCurrentChild(children)
      }
    }
  }, [children, currentChild, mode])

  const handleExited = () => {
    if (mode === 'out-in') {
      setCurrentChild(children)
      setPrevChild(null)
      setStatus('in')
    }
  }

  const handleEntered = () => {
    if (mode === 'in-out') {
      setPrevChild(null)
      setStatus('idle')
    } else if (mode === 'out-in' && status === 'in') {
      setStatus('idle')
    }
  }

  return (
    <>
      {prevChild && (
        <Transition {...rest} in={false} onExited={handleExited}>
          {prevChild}
        </Transition>
      )}
      {currentChild && (
        <Transition
          {...rest}
          in={status === 'in' || status === 'idle'}
          onEntered={handleEntered}
        >
          {currentChild}
        </Transition>
      )}
    </>
  )
}

export default SwitchTransition
