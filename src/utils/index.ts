export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const upperCaseFirst = (str: string) => {
  str = str.toLowerCase()
  str = str.replace(
    /\b\w+\b/g,
    (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
  )
  return str
}

export const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max)

export function preventDefault(
  event: React.TouchEvent<HTMLElement> | TouchEvent,
  isStopPropagation?: boolean
) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    event.stopPropagation()
  }
}
