import { JDLoginRouter, LoginEvent } from '@jd-oh/jdloginui'
import { JDLoginSDK } from '@jd-oh/jdloginsdk'
import { ces } from '@jd-oh/common-event-service'
import { commonEventManager } from '@kit.BasicServicesKit'

import { Current } from '../../../../../../@tarojs/runtime'
import { baseMethodHandle } from './helper'

import type { TaroAny } from '../../../../../../@tarojs/runtime'
import type { IEtsMethodsOptions } from '../index'

export function handleJDLogin (option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'login':
        handleLogin(option)
        break
      case 'logout':
        handleLogout(option)
        break
      default:
        baseMethodHandle(JDLoginSDK, option)
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

function jumpToLoginPage (option: IEtsMethodsOptions) {
  const currentRoute: TaroAny = Current.page.$taroPath.split('?')[0]

  ces.registerOnceEventObserver(LoginEvent.loginEventName, handleLoginResult(option))
  JDLoginRouter.pushLogin(JDLoginRouter.jdLoginRouterName, currentRoute,{'loginSource': currentRoute})
}

function handleLogin (option: IEtsMethodsOptions) {
  const isLogin: TaroAny = JDLoginSDK.getInstance().isLogin()

  if (isLogin) {
    JDLoginRouter.checkA2('Taro', '', {
      onSuccess: () => {
        if (option.successHandler) {
          option.successHandler()
        }
      },
      onNotLoggedInNative: () => {
        jumpToLoginPage(option)
      },
      onFailure: () => {
        jumpToLoginPage(option)
      }
    }, false)
  } else {
    jumpToLoginPage(option)
  }
}

let loginCallback: TaroAny

function handleLoginResult (option: IEtsMethodsOptions): TaroAny {
  const callback = (err: TaroAny, data: commonEventManager.CommonEventPublishData) => {
    if (!data || !data.parameters?.loginResult) {
      handleLoginCancel(option, data)
    } else {
      if (data.parameters?.loginResult === LoginEvent.loginSuccessEvent) {
        handleLoginSuccess(option, data)
      } else {
        handleLoginCancel(option, data)
      }
    }

    unregisterLoginEvent()
  }

  loginCallback = callback

  return callback
}

function handleLogout (option: IEtsMethodsOptions) {
  const isLogin: TaroAny = JDLoginSDK.getInstance().isLogin()

  if (isLogin) {
    JDLoginSDK.getInstance().logout()
  }

  if (option.successHandler) {
    option.successHandler()
  }
}

function handleLoginSuccess (option: IEtsMethodsOptions, data: TaroAny): TaroAny {
  if (option.successHandler) {
    option.successHandler({ data })
  }
}

function handleLoginCancel (option: IEtsMethodsOptions, data: TaroAny): TaroAny {
  if (option.errorHandler) {
    option.errorHandler({ data })
  }
}

function unregisterLoginEvent () {
  ces.unregisterEventObserver(LoginEvent.loginEventName, loginCallback)
}
