import { pxTransform as transform } from '@tarojs/taro'
import { harmony, rn } from './platform-taro'

export default function pxTransform(value: number) {
  if (harmony()) return transform(value)
  if (rn()) return value
  return `${value}px`
}
