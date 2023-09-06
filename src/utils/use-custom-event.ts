import { useEffect, useRef } from 'react'
import isEqual from 'lodash.isequal'
import { Events, getCurrentInstance } from '@tarojs/taro'
import { useForceUpdate } from '@/utils/use-force-update'

export const customEvents = new Events()

export function useCustomEventsPath(selector?: string) {
  selector = selector || ''
  const path = getCurrentInstance().router?.path
  return path ? `${path}__${selector}` : selector
}

export function useCustomEvent(selector: string, cb: any) {
  const path = useCustomEventsPath(selector)
  useEffect(() => {
    customEvents.on(path, cb)
    return () => {
      customEvents.off(path)
    }
  }, [])
  const trigger = <T = any>(args: T) => {
    customEvents.trigger(path, args)
  }
  const off = () => {
    customEvents.off(path)
  }
  return [trigger, off]
}

export function useParams<T = any>(args: T) {
  const forceUpdate = useForceUpdate()
  const stateRef = useRef(args)

  const currentRef = useRef<T>()
  const previousRef = useRef<T>()

  if (!isEqual(currentRef.current, args)) {
    previousRef.current = currentRef.current
    currentRef.current = args
    stateRef.current = args
  }

  const setParams = (args: T) => {
    stateRef.current = { ...stateRef.current, ...args }
    forceUpdate()
  }

  const params = stateRef.current
  return { params, setParams }
}
