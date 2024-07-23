import { JDRouter, JDRouterAsyncCallback, JDRouterError } from '@jd-oh/base-router'
import { queryToJson } from '../../../../../../@tarojs/shared'

import { baseMethodHandle } from './helper'

import type { TaroAny } from '../../../../../../@tarojs/runtime'
import type { IEtsMethodsOptions } from '../index'

function parseURL (raw = ''): [string, Record<string, Object>] {
  const arr = raw.split('?')
  let url = arr[0].replace(/^\//, '')

  // 处理相对路径
  if (url.indexOf('.') === 0) {
    const routerLength = JDRouter.getAllPathName().length
    const page = JDRouter.getAllPathName()[routerLength - 1]
    const parts = page.split('/')
    parts.pop()
    url.split('/').forEach((item) => {
      if (item === '.') {
        return
      }
      item === '..' ? parts.pop() : parts.push(item)
    })
    url = parts.join('/')
  }

  return [url, queryToJson(arr[1] || '')]
}

export function handleJDBaseRoute (option: IEtsMethodsOptions) {
  const arg: TaroAny = option.args?.[0] || {}

  // openapp 链接不解析，直接走 open 跳转
  if (arg.url && arg.url.startsWith('openapp.jdmobile')) {
    JDRouter.open(arg.url)

    return
  }

  const parser = parseURL(arg.url)
  const url = parser[0]
  const params = parser[1]
  const cb: JDRouterAsyncCallback = (err?: JDRouterError, data?: Object) => {
    if (err) {
      if (option.errorHandler) option.errorHandler({
        errCode: err.code,
        errMsg: err.message,
        data: err.data,
      })
    } else {
      if (option.successHandler) option.successHandler({ data })
    }
  }

  try {
    switch (option.name) {
      case 'navigateTo':
        JDRouter.push({
          routeName: url,
          params: params,
          callback: cb
        })
        break
      case 'redirectTo':
        JDRouter.pop()
        JDRouter.push({
          routeName: url,
          params: params,
          callback: cb
        })
        break
      case 'navigateBack':
        let stacks: number = JDRouter.size()
        let delta: number = arg.delta
        if (!delta || delta < 1) {
          delta = 1
        }
        if (stacks > delta) {
          JDRouter.popToIndex(stacks - delta - 1)
        } else {
          JDRouter.clear()
        }
        if (option.successHandler) option.successHandler()
        break
      case 'switchTab':
        if (("production" as string) !== 'production') {
          console.warn('Error(TaroETS): switchTab is not supported, use reLaunch instead.')
        }
      case 'reLaunch':
        JDRouter.clear()
        JDRouter.push({
          routeName: url,
          params: params,
          callback: cb
        })
        break
      default:
        // triggerJDRoute
        if (option.name === 'push') {
          try {
            if (!arg.callback) {
              arg.callback = cb
            }
            JDRouter.push(arg)
          } catch (err) {
            option.errorHandler && option.errorHandler({
              errCode: err?.code,
              errMsg: err?.message,
              data: err?.data,
            })
          }
        } else {
          baseMethodHandle(JDRouter, option)
        } 
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
