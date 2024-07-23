import { PermissionManager } from '@jd-oh/base_permission'

import { baseMethodHandle } from './helper'

import type { IEtsMethodsOptions } from '../index'

export function handleJDPermission (option: IEtsMethodsOptions) {
  // triggerJDPermission
  baseMethodHandle(PermissionManager, option)
}
