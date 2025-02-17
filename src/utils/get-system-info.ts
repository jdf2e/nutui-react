import Taro from '@tarojs/taro'

interface IDeviceInfo
  extends Omit<Taro.getDeviceInfo.Result, 'deviceAbi' | 'CPUType'> {}
/**
 * 获取设备基础信息，兼容新旧 API
 * @returns {IDeviceInfo} 设备基础信息
 */
export const getDeviceInfo = (): IDeviceInfo => {
  return Taro.canIUse('getDeviceInfo')
    ? Taro.getDeviceInfo()
    : Taro.getSystemInfoSync()
}
/**
 * 获取窗口信息，兼容新旧 API
 * @returns {Taro.getWindowInfo.Result} 窗口信息
 */
export const getWindowInfo = (): Taro.getWindowInfo.Result => {
  return Taro.canIUse('getWindowInfo')
    ? Taro.getWindowInfo()
    : Taro.getSystemInfoSync()
}
/**
 * 获取应用基础信息，兼容新旧 API
 * @returns {Taro.getAppBaseInfo.Result} 应用基础信息
 */
export const getAppBaseInfo = (): Taro.getAppBaseInfo.Result => {
  return Taro.canIUse('getAppBaseInfo')
    ? Taro.getAppBaseInfo()
    : Taro.getSystemInfoSync()
}
