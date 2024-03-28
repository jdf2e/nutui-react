import { MutableRefObject, useRef, useState } from 'react'

export const getRefValue = <T>(ref: React.MutableRefObject<T>): T => {
  return ref.current
}
export const useRefState = <T>(
  param: T
): [MutableRefObject<T>, (p: T) => void] => {
  const ref = useRef(param)
  const [, setState] = useState(param)
  const updateState = (p: T) => {
    ref.current = p
    setState(p)
  }
  return [ref, updateState]
}
