import { MP } from '@jd-oh/jd-mp'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleJDMP (option: IEtsMethodsOptions) {
  // triggerJDMP
  baseMethodHandle(MP, option)
}
