import { pxTransform as transform } from '@tarojs/taro'
import { harmony, rn } from './platform-taro'

export default function pxTransform(value: number) {
  if (harmony() || rn()) return transform(value)
  return `${value}px`
}
