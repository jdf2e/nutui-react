import Taro from '@tarojs/taro'

interface IDeviceInfo
  extends Omit<Taro.getDeviceInfo.Result, 'deviceAbi' | 'CPUType'> {}

// 获取设备基础信息，兼容新旧 API
export function getDeviceInfo(): IDeviceInfo {
  if (Taro.canIUse('getDeviceInfo')) {
    return Taro.getDeviceInfo()
  }

  return Taro.getSystemInfoSync()
}

// 获取窗口信息，兼容新旧 API
export function getWindowInfo(): Taro.getWindowInfo.Result {
  if (Taro.canIUse('getWindowInfo')) {
    return Taro.getWindowInfo()
  }

  return Taro.getSystemInfoSync()
}

// 获取应用基础信息，兼容新旧 API
export function getAppBaseInfo(): Taro.getAppBaseInfo.Result {
  if (Taro.canIUse('getAppBaseInfo')) {
    return Taro.getAppBaseInfo()
  }

  return Taro.getSystemInfoSync()
}
