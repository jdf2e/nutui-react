export const isDate = (val: Date): val is Date => {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !Number.isNaN(val.getTime())
  )
}
