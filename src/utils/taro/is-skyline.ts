import Taro from '@tarojs/taro'

/**
 * 判断当前环境是否处于 Skyline 渲染模式
 */
export const isSkyline = (): boolean => {
  // 1. 编译期注入的环境变量
  if (
    typeof process !== 'undefined' &&
    (process.env.SKYLINE === '1' || process.env.SKYLINE === 'true')
  ) {
    return true
  }

  // 2. 微信小程序运行时检测
  if (typeof Taro !== 'undefined') {
    try {
      const currentInstance = Taro.getCurrentInstance
        ? Taro.getCurrentInstance()
        : null
      if ((currentInstance?.page as any)?.renderer === 'skyline') {
        return true
      }

      const pages = Taro.getCurrentPages ? Taro.getCurrentPages() : []
      if (pages.length > 0) {
        const topPage = pages[pages.length - 1] as any
        if (topPage?.renderer === 'skyline') {
          return true
        }
      }

      const app = Taro.getApp ? Taro.getApp() : null
      if ((app as any)?.renderer === 'skyline') {
        return true
      }
    } catch (e) {
      // ignore
    }
  }

  return false
}

export default isSkyline
