import { useRef } from 'react'
import { getEnv } from '@tarojs/taro'
import { useLockScroll } from '@/utils/use-lock-scroll'

export const useLockScrollTaro = (shouldLock: boolean) => {
  const refObject = useRef(null)
  if (getEnv() === 'WEB') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLockScroll(refObject, shouldLock)
  }
  return refObject
}
