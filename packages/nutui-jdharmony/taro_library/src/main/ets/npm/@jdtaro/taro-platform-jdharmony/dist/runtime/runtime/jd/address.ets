import { AddressUtils } from '@jd-oh/jd_address_global_module'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleAddress (option: IEtsMethodsOptions) {
  // triggerJDAddress
  baseMethodHandle(AddressUtils, option)
}
