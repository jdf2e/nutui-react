import Taro from '@tarojs/taro'

interface IDeviceInfo
  extends Omit<Taro.getDeviceInfo.Result, 'deviceAbi' | 'CPUType'> {}

/**
 * 获取设备基础信息，兼容新旧 API
 * Android&iOS 这边新包提供 getDeviceInfo 的支持，但是鸿蒙短期内不会支持 canIUse，组件库代码可以使用 Taro.getDeviceInfo 然后 Taro
.getSystemInfo 兜底
 * @returns {IDeviceInfo} 设备基础信息
 */
export const getDeviceInfo = (): IDeviceInfo => {
  return typeof Taro.getDeviceInfo === 'function'
    ? Taro.getDeviceInfo()
    : Taro.getSystemInfoSync()
}

/**
 * 获取窗口信息，兼容新旧 API
 * 鸿蒙短期内不会支持 canIUse
 * @returns {Taro.getWindowInfo.Result} 窗口信息
 */
export const getWindowInfo = (): Taro.getWindowInfo.Result => {
  return typeof Taro.getWindowInfo === 'function'
    ? Taro.getWindowInfo()
    : Taro.getSystemInfoSync()
}

/**
 * 获取应用基础信息，兼容新旧 API
 * @returns {Taro.getAppBaseInfo.Result} 应用基础信息
 */
export const getAppBaseInfo = (): Taro.getAppBaseInfo.Result => {
  return typeof Taro.getAppBaseInfo === 'function'
    ? Taro.getAppBaseInfo()
    : Taro.getSystemInfoSync()
}
