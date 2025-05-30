import { pxTransform as transform } from '@tarojs/taro'
import { harmony, td } from './platform'
// td todo

export function pxTransform(value: number, radix?: number): any {
  // @ts-ignore
  if (harmony() || td()) return transform(value, radix || 375)
  return `${value}px`
}
