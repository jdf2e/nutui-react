import Taro, {
  canIUse,
  getAppBaseInfo as taroGetAppBaseInfo,
  getDeviceInfo as taroGetDeviceInfo,
  getSystemInfoSync,
  getWindowInfo as taroGetWindowInfo,
} from '@tarojs/taro'

interface IDeviceInfo
  extends Omit<Taro.getDeviceInfo.Result, 'deviceAbi' | 'CPUType'> {}

/**
 * 获取设备基础信息，兼容新旧 API
 * @returns {IDeviceInfo} 设备基础信息
 */
export const getDeviceInfo = (): IDeviceInfo => {
  return canIUse('getDeviceInfo') ? taroGetDeviceInfo() : getSystemInfoSync()
}

/**
 * 获取窗口信息，兼容新旧 API
 * @returns {Taro.getWindowInfo.Result} 窗口信息
 */
export const getWindowInfo = (): Taro.getWindowInfo.Result => {
  return canIUse('getWindowInfo') ? taroGetWindowInfo() : getSystemInfoSync()
}

/**
 * 获取应用基础信息，兼容新旧 API
 * @returns {Taro.getAppBaseInfo.Result} 应用基础信息
 */
export const getAppBaseInfo = (): Taro.getAppBaseInfo.Result => {
  return canIUse('getAppBaseInfo') ? taroGetAppBaseInfo() : getSystemInfoSync()
}
