import { useEffect } from 'react'
import { Events, getCurrentInstance } from '@tarojs/taro'

export const customEvents = new Events()

export function useCustomEventsPath(selector: string) {
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
