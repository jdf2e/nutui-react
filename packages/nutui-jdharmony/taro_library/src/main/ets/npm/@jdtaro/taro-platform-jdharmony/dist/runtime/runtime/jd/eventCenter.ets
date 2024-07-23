import { ces } from '@jd-oh/common-event-service'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleEventCenter (option: IEtsMethodsOptions) {
  // triggerJDEventCenter
  baseMethodHandle(ces, option)
}
