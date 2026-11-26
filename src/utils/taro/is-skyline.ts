import Taro from '@tarojs/taro'

/**
 * 读取编译期注入的 SKYLINE 开关。
 *
 * Taro 的 DefinePlugin 只会把 `process.env.SKYLINE` 这段表达式替换成字面量：
 * - 被替换后运行时不再引用 process，可以直接参与常量折叠；
 * - 未被注入时（如组件库被其他宿主应用引用）访问 process.env 会抛引用错误，
 *   因此保留 try/catch 兜底，避免初始化阶段崩溃。
 *
 * 注意不能写成 `typeof process !== 'undefined' && process.env.SKYLINE`：
 * typeof 守卫不会被 DefinePlugin 替换，在缺少 process 的小程序运行时里会先短路为 false，
 * 导致编译期开关永远失效。
 */
const isSkylineBuild = (): boolean => {
  try {
    return process.env.SKYLINE === '1' || process.env.SKYLINE === 'true'
  } catch (e) {
    return false
  }
}

/**
 * 判断当前环境是否处于 Skyline 渲染模式
 */
export const isSkyline = (): boolean => {
  // 1. 编译期注入的环境变量
  if (isSkylineBuild()) {
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
