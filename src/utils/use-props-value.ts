import { useRef, useCallback } from 'react'
import { useForceUpdate } from '@/utils/use-force-update'

interface UsePropsValue<T> {
  value?: T
  defaultValue?: T
  finalValue?: T
  onChange?: (value: T) => void
}

export function usePropsValue<T>({
  value,
  defaultValue,
  finalValue,
  onChange = (value: T) => {},
}: UsePropsValue<T>): [value: T, onChange: (value: T) => void] {
  const forceUpdate = useForceUpdate()
  const dfValue = (defaultValue !== undefined ? defaultValue : finalValue) as T
  const stateRef = useRef<T>(value !== undefined ? value : dfValue)
  if (value !== undefined) {
    stateRef.current = value
  }
  const setState = useCallback(
    (v: T) => {
      const prevState = stateRef.current
      stateRef.current = v
      if (prevState !== stateRef.current) {
        forceUpdate()
      }
      onChange?.(v)
    },
    [value, onChange]
  )
  return [stateRef.current, setState]
}
