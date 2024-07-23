import { JDPerforModule, BizMonitorParam } from '@jd-oh/perflibrary'
import { baseMethodHandle } from './helper'
import { assignObject } from '../utils'

import type { TaroAny } from '../../../../../../@tarojs/runtime'
import type { IEtsMethodsOptions } from '../index'

export function handleJDReport (option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'onRequestStart':
        requestStart(option)
        break
      case 'onRequestFinish':
        requestFinish(option)
        break
      case 'onPageLoadFinish':
        pageLoadFinish(option)
        break
      case 'reportFirstScreen':
        reportFirstScreen()
        break
      case 'reportAddRecord':
        reportAddRecord(option)
        break
      case 'reportCustomData':
        reportCustomData(option)
        break
      default:
        baseMethodHandle(JDPerforModule.PerfMonitor, option)
    }
  } catch (e) {
    if (("production" as string) !== 'production') console.error('Error(TaroETS):', e.message, e)
  }
}

function requestStart (option: IEtsMethodsOptions) {
  const args = option.args as [string, string]

  if (args) {
    const pageName = args[0]
    const functionID = args[1]

    JDPerforModule.PerfMonitor.onRequestStart(pageName, functionID)
  }
}

function requestFinish (option: IEtsMethodsOptions) {
  const args = option.args as [string, string, number, string]

  if (args) {
    const pageName = args[0]
    const functionID = args[1]
    const errCode = args[2] || 0
    const errMsg = args[3] || ''

    JDPerforModule.PerfMonitor.onRequestFinish(pageName, functionID, errCode, errMsg)
  }
}

function pageLoadFinish (option: IEtsMethodsOptions) {
  const args = option.args as [string]

  if (args) {
    const pageName = args[0]

    JDPerforModule.PerfMonitor.onPageLoadFinish(pageName)
  }
}

function reportFirstScreen () {
  JDPerforModule.PerfMonitor.reportFirstScreen()
}

function reportAddRecord (option: IEtsMethodsOptions) {
  const args = option.args as [string]

  if (args) {
    const typeName = args[0]

    JDPerforModule.PerfMonitor.addRecord(JDPerforModule.StartEventType[typeName])
  }
}

function reportCustomData (option: IEtsMethodsOptions) {
  const args: TaroAny = option.args

  if (args) {
    const bizParams = new BizMonitorParam()
    const bizData: TaroAny = assignObject(bizParams, args[0] || {})
    const customData: TaroAny = args[1]

    JDPerforModule.PerfMonitor.reportCustomData(bizData, customData)
  }
}
