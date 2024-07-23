// @ts-nocheck
import type { TaroAny } from '../../../../../@tarojs/runtime'

export function setParamFromObj (obj: Record<string, string | number>, params: TaroAny) {
  if (!obj) return params

  Object.keys(obj).forEach(key => {
    params[key] = obj[key]
  })

  return params
}

export function assignObject (target: TaroAny, source: TaroAny) {
  return Object.assign(target, source)
}
