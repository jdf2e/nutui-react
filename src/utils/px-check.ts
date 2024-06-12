export const pxCheck = (value: string | number): number => {
  // if (!Number.isNaN(Number(value))) return Number(value)
  // return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  return parseFloat(value.toString())
}
