import { JDMtaUtil } from '@jd-oh/jdmabridge'
import { ClickInterfaceParam, PvInterfaceParam, ExposureInterfaceParam, SysInterfaceParam, OrderInterfaceParam } from '@jd-oh/jdma'

import { setParamFromObj } from '../utils'
import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

type InterfaceParam = ClickInterfaceParam | PvInterfaceParam | ExposureInterfaceParam | SysInterfaceParam | OrderInterfaceParam
interface IReportData {
  ctx: Context,
  param: InterfaceParam
}

function checkCtxAndSetParams (option: IEtsMethodsOptions, param: InterfaceParam): IReportData | null {
  const ctx = getContext()

  if (!ctx) return null

  const originParams: Record<string, string | number> = (option.args || [])[0]

  return {
    ctx,
    param: setParamFromObj(originParams, param)
  }
}

function handlePvDataReport (option: IEtsMethodsOptions) {
  let pvInterfaceParam: PvInterfaceParam = new PvInterfaceParam()
  const result = checkCtxAndSetParams(option, pvInterfaceParam)

  if (!result) return

  JDMtaUtil.sendPvData(result.ctx, result.param as PvInterfaceParam)
}

function handleClickDataReport (option: IEtsMethodsOptions) {
  let clickInterfaceParam: ClickInterfaceParam = new ClickInterfaceParam()
  const result = checkCtxAndSetParams(option, clickInterfaceParam)

  if (!result) return

  JDMtaUtil.sendClickData(result.ctx, result.param as ClickInterfaceParam)
}

function handleExposureDataReport (option: IEtsMethodsOptions) {
  let exposureInterfaceParam: ExposureInterfaceParam = new ExposureInterfaceParam()
  const result = checkCtxAndSetParams(option, exposureInterfaceParam)

  if (!result) return

  JDMtaUtil.sendExposureData(result.ctx, result.param as ExposureInterfaceParam)
}

function handleSysDataReport (option: IEtsMethodsOptions) {
  let sysInterfaceParam: SysInterfaceParam = new SysInterfaceParam()
  const result = checkCtxAndSetParams(option, sysInterfaceParam)

  if (!result) return

  JDMtaUtil.sendSysData(result.ctx, result.param as SysInterfaceParam)
}

function handleOrderDataReport (option: IEtsMethodsOptions) {
  let orderInterfaceParam: OrderInterfaceParam = new OrderInterfaceParam()
  const result = checkCtxAndSetParams(option, orderInterfaceParam)

  if (!result) return

  JDMtaUtil.sendOrderData(result.ctx, result.param as OrderInterfaceParam)
}

export function handleJdMa(option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'sendPvData':
        handlePvDataReport(option)
        break
      case 'sendClickData':
        handleClickDataReport(option)
        break
      case 'sendExposureData':
        handleExposureDataReport(option)
        break
      case 'sendSysData':
        handleSysDataReport(option)
        break
      case 'sendOrderData':
        handleOrderDataReport(option)
        break
      default:
        // triggerJDMtaUtil
        baseMethodHandle(JDMtaUtil, option)
    }
  } catch (e) {
    console.warn('JDMA 上报失败，原因：', e)
  }
}
