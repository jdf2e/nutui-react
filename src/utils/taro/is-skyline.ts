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
 * 从微信小程序运行时获取当前页面/应用的实际渲染引擎。
 * 返回 'skyline' / 'webview'，在未挂载或不支持的环境中返回 undefined。
 */
const getRuntimeRenderer = (): string | undefined => {
  if (typeof Taro === 'undefined') {
    return undefined
  }
  try {
    const currentInstance = Taro.getCurrentInstance
      ? Taro.getCurrentInstance()
      : null
    const instanceRenderer = (currentInstance?.page as any)?.renderer
    if (typeof instanceRenderer === 'string' && instanceRenderer) {
      return instanceRenderer
    }

    const pages = Taro.getCurrentPages ? Taro.getCurrentPages() : []
    if (pages.length > 0) {
      const topPage = pages[pages.length - 1] as any
      if (typeof topPage?.renderer === 'string' && topPage.renderer) {
        return topPage.renderer
      }
    }

    const app = Taro.getApp ? Taro.getApp() : null
    if (typeof (app as any)?.renderer === 'string' && (app as any).renderer) {
      return (app as any).renderer
    }
  } catch (e) {
    // ignore
  }
  return undefined
}

/**
 * 判断当前环境是否处于 Skyline 渲染模式。
 * 优先采信运行时真实 renderer（避免在开发者工具关闭 Skyline 或客户端降级到 WebView 时误判），
 * 仅在运行时无法获取 renderer 时回退到编译期 SKYLINE 开关。
 */
export const isSkyline = (): boolean => {
  // 1. 微信小程序运行时真实渲染引擎检测
  const runtimeRenderer = getRuntimeRenderer()
  if (runtimeRenderer === 'skyline') {
    return true
  }
  if (runtimeRenderer === 'webview') {
    return false
  }

  // 2. 运行时无 renderer 信息时，回退到编译期注入的环境变量
  return isSkylineBuild()
}

export default isSkyline
