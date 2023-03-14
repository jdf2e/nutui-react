export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
