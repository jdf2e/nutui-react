import { useEffect, useLayoutEffect } from 'react'
import { canUseDom } from '@/utils/can-use-dom'

export const useIsomorphicLayoutEffect = canUseDom ? useLayoutEffect : useEffect
