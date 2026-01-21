import Taro from '@tarojs/taro'
import { harmony, td } from './platform'
// td todo

export function pxTransform(value: number, radix?: number): any {
  // @ts-ignore
  if (harmony() || td()) return Taro.pxTransform(value, radix || 375)
  return `${value}px`
}
