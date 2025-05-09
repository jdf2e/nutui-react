import { RangeValue } from '@/types'

export const isSameValue = (newValue: RangeValue, oldValue: RangeValue) =>
  JSON.stringify(newValue) === JSON.stringify(oldValue)

export const handleOverlap = (value: number[]) =>
  value[0] > value[1] ? value.slice(0).reverse() : value
