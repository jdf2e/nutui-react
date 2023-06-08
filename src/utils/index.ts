export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const upperCaseFirst = (str: string) => {
  var str = str.toLowerCase()
  str = str.replace(
    /\b\w+\b/g,
    (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
  )
  return str
}
