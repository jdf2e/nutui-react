import { pxTransform as transform } from '@tarojs/taro'
import { harmony, rn } from './platform-taro'

export default function pxTransform(value: number, radix?: number): any {
  // @ts-ignore
  if (harmony()) return transform(value, radix || 375)
  if (rn()) return value
  return `${value}px`
}
