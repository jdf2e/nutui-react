import { useEffect, useRef } from 'react'

type Callback<T> = (prev: T | undefined) => void
type Config = {
  immediate: boolean
}
function useWatch<T>(
  dep: T,
  callback: Callback<T>,
  config: Config = { immediate: false }
): () => void {
  const { immediate } = config

  const prev = useRef<T>()
  const inited = useRef(false)
  const stop = useRef(false)

  useEffect(() => {
    const execute = () => callback(prev.current)

    if (!stop.current) {
      if (!inited.current) {
        inited.current = true
        if (immediate) {
          execute()
        }
      } else {
        execute()
      }
      prev.current = dep
    }
  }, [dep])

  return () => {
    stop.current = true
  }
}

export default useWatch
