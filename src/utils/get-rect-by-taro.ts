import { createSelectorQuery } from '@tarojs/taro'
import { getRect, inBrowser } from './use-client-rect'

export interface Rect {
  dataset: Record<string, any>
  id: string
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

export function makeRect(width: number, height: number) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height,
  } as Rect
}

export const getRectByTaro = async (element: any): Promise<Rect> => {
  if (element) {
    if (inBrowser) {
      return Promise.resolve(getRect(element))
    }
    // 小程序下的逻辑
    return new Promise((resolve, reject) => {
      createSelectorQuery()
        .select(`#${element.uid}`)
        .boundingClientRect()
        .exec(([rects]) => {
          resolve(rects)
        })
    })
  }
  return Promise.resolve(makeRect(0, 0))
}
