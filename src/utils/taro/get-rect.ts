import { createSelectorQuery } from '@tarojs/taro'
import { MiniLru } from '@/utils/lru'
import { getRect, inBrowser } from '@/utils/get-rect'

const lru = new MiniLru(10)

const createScopedSelectorQuery = (scope?: any) => {
  const query = createSelectorQuery()
  return scope ? query.in(scope) : query
}

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

export const getRectInMultiPlatform = async (
  element: any,
  harmonyId = ''
): Promise<Rect> => {
  if (element) {
    if (inBrowser) {
      return Promise.resolve(getRect(element))
    }
    // 小程序下的逻辑
    return new Promise((resolve, reject) => {
      if (lru.has(element)) {
        resolve(lru.get(element) as Rect)
        return
      }
      createScopedSelectorQuery(element?._scope)
        // https://taro.jd.com/docs/reference/config/page/
        .select(`#${harmonyId || element.uid}`)
        .boundingClientRect()
        .exec(([rects]) => {
          if (rects) {
            lru.set(element, rects)
          }
          resolve(rects)
        })
    })
  }
  return Promise.resolve(makeRect(0, 0))
}

// 获取元素位置，不走缓存
export const getRectInMultiPlatformWithoutCache = async (
  element: any,
  harmonyId = ''
): Promise<Rect> => {
  if (element) {
    if (inBrowser) {
      return Promise.resolve(getRect(element))
    }
    return new Promise((resolve, reject) => {
      createScopedSelectorQuery(element?._scope)
        // https://taro.jd.com/docs/reference/config/page/
        .select(`#${harmonyId || element.uid}`)
        .boundingClientRect()
        .exec(([rects]) => {
          resolve(rects)
        })
    })
  }
  return Promise.resolve(makeRect(0, 0))
}
