import { useState } from 'react'

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
  const [uncontrolled, setUncontrolled] = useState(
    defaultValue !== undefined ? defaultValue : finalValue
  )

  const handleUncontrolledChange = (val: T) => {
    setUncontrolled(val)
    onChange?.(val)
  }

  if (value !== undefined) {
    return [value as T, onChange]
  }

  return [uncontrolled as T, handleUncontrolledChange]
}
