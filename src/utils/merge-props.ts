export function mergeProps<T, U>(
  defaultProps: T,
  props: U
): { [Key in Extract<keyof T, keyof U>]: U[Key] } &
  { [Key in Exclude<keyof U, keyof T>]?: U[Key] } {
  return { ...defaultProps, ...props }
}
