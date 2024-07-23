import { JDWindowUtil } from '@jd-oh/jd-util'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleJDUtil (option: IEtsMethodsOptions) {
  if (!option.methodName || !option.name) return

  try {
    switch (option.name) {
      case 'JDWindowUtil':
        // triggerJDWindowUtil
        baseMethodHandle(JDWindowUtil, option)
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
