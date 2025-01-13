import { pxTransform as transform } from '@tarojs/taro'
import { harmony } from './platform-taro'

export default function pxTransform(value: number, radix?: number): any {
  // @ts-ignore
  if (harmony()) return transform(value, radix || 375)
  return `${value}px`
}
