import { JDImageBrowser } from '@jd-oh/image-browser'

import { baseMethodHandle } from './helper'

import type { TaroAny } from '../../../../../../@tarojs/runtime'
import type { IEtsMethodsOptions } from '../index'

export function handleJDMedia (option: IEtsMethodsOptions) {
  const name = option.name

  if (!name) return

  try {
    switch (option.name) {
      case 'previewImage':
        handlePreviewImage(option)
        break
      default:
        baseMethodHandle(JDImageBrowser, option)
    }
  } catch (e) {
    if (("production" as string) !== 'production') console.error('Error(TaroETS):', e.message, e)
    if (option.errorHandler) option.errorHandler({
      errCode: e?.code,
      errMsg: e?.message,
      data: e?.data,
    })
  }
}

interface IPreviewOption {
  urls: string[]
  current: string
}

function handlePreviewImage (option: IEtsMethodsOptions) {
  const args: TaroAny = option.args
  const previewOption: IPreviewOption = args[0]

  if (!previewOption) return

  const urls = previewOption.urls

  if (!urls || urls.length <= 0) return

  let index = 0
  if (previewOption.current) {
    const current = previewOption.current
    const currentIndex = urls.findIndex((url) => url === current)

    if (currentIndex >= 0) index = currentIndex
  }

  try {
    JDImageBrowser.openImageBrowser(urls, index)
    option.successHandler && option.successHandler()
  } catch (err) {
    option.errorHandler && option.errorHandler({
      errCode: err?.code,
      errMsg: err?.message,
      data: err?.data,
    })
  }
}
