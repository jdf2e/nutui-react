export const pxCheck = (value: string | number | undefined): string => {
  if (typeof value === 'undefined') return ''
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}
