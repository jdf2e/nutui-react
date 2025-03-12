export type Override<T, K extends keyof T, D> = Omit<T, K> & {
  [P in keyof Pick<T, K>]: D
}
