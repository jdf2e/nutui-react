import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'
import {
  JDNetWork,
  UploadFile as UploadFileBase,
  DownloadFile,
  HttpRequest,
  RequestParamsType,
  UploadFileConfig,
  DownloadFileConfig
} from '@jd-oh/base-network'
import type { TaroAny } from '../../../../../../@tarojs/runtime'

export function handleNetwork(option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'request':
        handleRequest(option)
        break
      case 'uploadFile':
        handleUploadFile(option)
        break
      case 'downloadFile':
        handleDownloadFile(option)
        break
      default:
        // triggerJDNetWork
        baseMethodHandle(JDNetWork, option)
    }
  } catch (e) {

  }
}

function handleRequest(option: IEtsMethodsOptions) {
  const args = option?.args?.[0] as RequestParamsType
  const request = new HttpRequest(args)
  request.start()
  if(typeof option?.onInit === 'function') {
    option.onInit(request)
  }

}

function handleUploadFile(option: IEtsMethodsOptions) {
  const args = option?.args?.[0] as UploadFileConfig
  const uploadFile = new UploadFileBase(args)
  uploadFile.start()
  if(typeof option?.onInit === 'function') {
    option.onInit(uploadFile)
  }
}

function handleDownloadFile(option: IEtsMethodsOptions) {
  const args = option?.args?.[0] as DownloadFileConfig
  const downloadFile = new DownloadFile(args)
  downloadFile.start()
  if(typeof option?.onInit === 'function') {
    option.onInit(downloadFile)
  }
}