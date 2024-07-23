import type { TaroAny } from '../../../../../@tarojs/runtime'

import { eventCenter } from '../../../../../@tarojs/runtime/dist/runtime.esm'

import { handleJDLogin } from './jd/login'
import { handleJDReport } from './jd/report'
import { handleJDBaseRoute } from './jd/route'
import { handleNetwork } from './jd/network'
import { handleJdMa } from './jd/jdma'
import { handleJDUtil } from './jd/util'
import { handleAddress } from './jd/address'
import { handleEventCenter } from './jd/eventCenter'
import { handleJDMP } from './jd/mp'
import { handleJDMedia } from './jd/media'
import { handleJDLocation } from './jd/location'
import { handleJDPermission } from './jd/permission'
import { handleJDBaseInfo } from './jd/baseInfo'
import { handleTaskPool } from './jd/taskpool'
import { handleJDShare } from './jd/share'

export interface IEtsMethodsOptions {
  methodName?: string
  name?: string
  scope?: string
  type?: string
  args?: TaroAny[]
  successHandler?: (...args: TaroAny[]) => void
  errorHandler?: (...args: TaroAny[]) => void
  onInit?: (obj: TaroAny) => void
}

// Note: 监听 API 事件
eventCenter?.on('__taroPluginEtsMethodsTrigger', (option: IEtsMethodsOptions) => {
  switch (option.scope) {
    case 'route':
      handleJDBaseRoute(option)
      break
    case 'login':
      handleJDLogin(option)
      break
    case 'report':
      handleJDReport(option)
      break
    case 'network':
      handleNetwork(option)
      break
    case 'jdMa':
      handleJdMa(option)
      break
    case 'jd-util':
      handleJDUtil(option)
      break
    case 'base-info':
      handleJDBaseInfo(option)
      break
    case 'eventCenter':
      handleEventCenter(option)
      break
    case 'address':
      handleAddress(option)
      break
    case 'mp':
      handleJDMP(option)
      break
    case 'media':
      handleJDMedia(option)
      break
    case 'location':
      handleJDLocation(option)
      break
    case 'permission':
      handleJDPermission(option)
      break
    case 'taskpool':
      handleTaskPool(option)
      break
    case 'share':
      handleJDShare(option)
      break
    default:
      console.error(`Error(TaroETS): cannot found ${option.type} ${option.name} in ${option.scope} scope.`)
  }
})
