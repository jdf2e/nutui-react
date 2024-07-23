import { taskpool } from '@kit.ArkTS'

import type { TaroAny } from '../../../../../../@tarojs/runtime'
import type { IEtsMethodsOptions } from '../index'

@Concurrent
function stringify (data: TaroAny) {
  return JSON.stringify(data)
}

function handleTaskPoolStringify (option: IEtsMethodsOptions) {
  const args: TaroAny = option.args

  if (args) {
    const data: TaroAny = args[0]

    taskpool.execute(stringify, data)
      .then(res => {
        option.successHandler && option.successHandler({ data: res })
      })
      .catch((error: TaroAny) => {
        option.errorHandler && option.errorHandler({
          errCode: error?.code,
          errMsg: error?.message,
          data: error?.data,
        })
      })
  }
}

export function handleTaskPool (option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'stringify':
        handleTaskPoolStringify(option)
        break
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
