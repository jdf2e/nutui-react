import Taro, { createSelectorQuery } from '@tarojs/taro'

const ENV_TYPE = {
  WEAPP: 'WEAPP',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD',
  WEB: 'WEB',
  RN: 'RN',
  HARMONY: 'HARMONY',
  QUICKAPP: 'QUICKAPP',
}

export const getRectById = (id: string) => {
  return new Promise((resolve, reject) => {
    if (Taro.getEnv() === ENV_TYPE.WEB) {
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
        .exec((rect: any) => {
          if (rect[0]) {
            resolve(rect[0])
          } else {
            reject()
          }
        })
    }
  })
}
