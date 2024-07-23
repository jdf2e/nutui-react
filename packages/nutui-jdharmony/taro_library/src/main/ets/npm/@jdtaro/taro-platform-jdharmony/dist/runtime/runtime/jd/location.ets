import { JDLocationOption, JDLocationSDK } from '@jd-oh/jdlocation';
import { PermissionManager } from '@jd-oh/base_permission'

import { baseMethodHandle } from './helper'
import type { IEtsMethodsOptions } from '../index'

import { Current } from '../../../../../../@tarojs/runtime'
import type { TaroAny } from '../../../../../../@tarojs/runtime'

const option = new JDLocationOption();
// TODO: 需要改成从项目中获取
option.businessId = '1cd6a6caa66d5400e91e3fc60409deba';//定位业务id
option.sceneId = 'basicShoppingProcess';//场景id

export function handleJDLocation (option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'getLocation':
        getLocation(option)
        break
      default:
        handleLocation(option)
    }
  } catch (e) {
    if (("production" as string) !== 'production') console.error('Error(TaroETS):', e.message, e)
    if (option.errorHandler) option.errorHandler({
      errCode: e.code,
      errMsg: e.message,
      data: e.data,
    })
  }
}

export function handleLocation (option: IEtsMethodsOptions) {
  requestLocationPermissions().then(() => {
    if (option.args) {
      option.args.unshift(option)
    } else {
      option.args = [option]
    }
    // triggerJDAddress
    baseMethodHandle(JDLocationSDK.getInstance(), option)
  }, (error: TaroAny) => {
    option.errorHandler && option.errorHandler(error)
  })
}

export function getLocation (option: IEtsMethodsOptions) {
  requestLocationPermissions().then(() => {
    getAddress().then((data: TaroAny) => {
      option.successHandler && option.successHandler(data)
    }, (error: TaroAny) => {
      option.errorHandler && option.errorHandler(error)
    })
  }, (error: TaroAny) => {
    option.errorHandler && option.errorHandler(error)
  })
}

function getAddress() {
  return new Promise<TaroAny>((resolve, reject) => {
    JDLocationSDK.getInstance().getAddress(option).then(location => {
      //先判断code为0后再使用信息
      if (location.code == 0) {
        resolve({
          errCode: location.code,
          latitude: location.lat,
          longitude: location.lng,
          province: location.province,
          provinceCode: location.provinceId,
          city: location.city,
          cityCode: location.cityId,
          district: location.district,
          districtCode: location.districtId,
          town: location.town,
          townCode: location.townId,
          detailAddress: location.detailAddress,
          fullAddress: location.fullAddress
        })
      } else {
        reject({
          errCode: location.code,
          errMsg: '定位失败 错误码code=' + location.code + ' 失败原因msg=' + location.msg
        })
      }
    }).catch((err: Error) => {
      reject({
        errCode: 400,
        errMsg: '未知系统错误' + JSON.stringify(err)
      })
    });
  })
}

function requestLocationPermissions() {
  return new Promise<void>(async (resolve, reject) => {
    const hasPermissions = await PermissionManager.hasLocationPermissions()
    if (hasPermissions) {
      resolve()
    } else {
      PermissionManager.requestLocationPermissions(Current.uiContext, {
        onGranted: () => {
          resolve()
        },
        onDenied: () => {
          reject({
            errCode: 200,
            errMsg: '用户拒绝了地理位置授权'
          })
        },
        onError: (error) => {
          reject({
            errCode: error.code,
            errMsg: error.message
          })
        }
      })
    }
  })
}
