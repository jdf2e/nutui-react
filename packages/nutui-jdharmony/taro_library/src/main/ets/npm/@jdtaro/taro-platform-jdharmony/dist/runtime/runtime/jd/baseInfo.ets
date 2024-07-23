import { BaseInfo } from '@jd-oh/base-info'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleJDBaseInfo (option: IEtsMethodsOptions) {
  // triggerJDBaseInfo
  baseMethodHandle(BaseInfo, option)
}
