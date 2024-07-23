import { JDShare, ShareChannelId, ShareChannelIdSE } from '@jd-oh/jdshare'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleJDShare (option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'getShareChannelId':
        getShareChannelId(option)
        break
      case 'getShareChannelIdSE':
        getShareChannelIdSE(option)
        break
      default:
        // triggerJDShare
        baseMethodHandle(JDShare, option)
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

export function getShareChannelId (option: IEtsMethodsOptions) {
  const args = option.args as [string]

  if (!args) return

  const id = args[0]

  option.successHandler && option.successHandler({ data: ShareChannelId[id] })
}

export function getShareChannelIdSE (option: IEtsMethodsOptions) {
  const args = option.args as [string]

  if (!args) return

  const id = args[0]

  option.successHandler && option.successHandler({ data: ShareChannelIdSE[id] })
}
