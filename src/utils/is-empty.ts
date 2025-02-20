export const isEmpty = <T>(p: T): boolean => {
  if (p === null || p === undefined) return true
  if (typeof p === 'object' && Object.keys(p).length === 0) return true
  if (Array.isArray(p) && p.length === 0) return true
  return false
}
