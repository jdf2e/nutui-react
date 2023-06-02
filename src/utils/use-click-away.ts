import { useEffect } from 'react'
import { isFunction } from './index'

type TargetType = Function | HTMLElement | Element

const getTargetElement = (target: TargetType) => {
  let targetElement
  if (isFunction(target)) {
    targetElement = target()
  } else if ('current' in target) {
    targetElement = target.current
  } else {
    targetElement = target
  }

  return targetElement
}

export default function useClickAway(
  onClickAway: () => void,
  target: TargetType | TargetType[],
  eventName: string = 'click',
  isListener?: boolean,
  outerVar?: boolean
) {
  const handler = (event: Event) => {
    const targets = Array.isArray(target) ? target : [target]

    if (
      targets.some((item) => {
        const targetElement = getTargetElement(item)
        return !targetElement || targetElement.contains(event.target)
      })
    ) {
      return
    }

    if (outerVar) {
      onClickAway()
    }
  }

  useEffect(() => {
    if (isListener) {
      window.addEventListener(eventName, handler, true)
    } else {
      window.removeEventListener(eventName, handler, true)
    }

    return () => {
      window.removeEventListener(eventName, handler, true)
    }
  }, [target])
}
