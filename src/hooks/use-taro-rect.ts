import Taro, { createSelectorQuery } from '@tarojs/taro'

export const getTaroRectById = (id: string) => {
  return new Promise((resolve, reject) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      const t = document ? document.querySelector(`#${id}`) : ''
      if (t) {
        resolve(t?.getBoundingClientRect())
      }
      reject()
    } else {
      const query = createSelectorQuery()
      query
        .select(`#${id}`)
        .boundingClientRect()
        .exec(function (rect: any) {
          if (rect[0]) {
            resolve(rect[0])
          } else {
            reject()
          }
        })
    }
  })
}
