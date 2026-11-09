import { useEffect, useState } from 'react'
import {
  FoldSegment,
  resolveSegmentByFold,
  subscribeFoldScreenChange,
} from '@/utils/fold-screen'

export type SegmentProp = 'left' | 'right' | 'center' | 'auto'

const isSegmentLocked = (segment?: SegmentProp) =>
  segment === 'left' || segment === 'right' || segment === 'center'

/** 显式 left/right/center 锁定；auto / 未传时跟随折叠屏铰链 */
export const useFoldSegment = (segment?: SegmentProp) => {
  const locked = isSegmentLocked(segment)
  const [foldSegment, setFoldSegment] = useState<FoldSegment | undefined>()

  useEffect(() => {
    if (locked) return
    return subscribeFoldScreenChange((info) => {
      setFoldSegment(resolveSegmentByFold(info))
    })
  }, [locked])

  return locked ? segment : foldSegment
}
