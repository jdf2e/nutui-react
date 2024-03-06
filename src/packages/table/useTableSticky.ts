import { useCallback, useEffect, useState } from 'react'
import { TableColumnProps } from './types'

export default function useTableSticky(
  columns: Array<TableColumnProps>,
  rtl: boolean = false
) {
  const [isSticky, setIsSticky] = useState(false)
  const [stickyColumnStyleMap, setStickyColumnStyleMap] = useState<any>({})
  const [stickyColumnClassMap, setStickyColumnClassMap] = useState<any>({})
  const [stickyLeftWidth, setStickyLeftWidth] = useState(0)
  const [stickyRightWidth, setStickyRightWidth] = useState(0)
  useEffect(() => {
    const leftColumns = columns.filter((item) => item.fixed === 'left') || []
    const rightColumns = columns.filter((item) => item.fixed === 'right') || []
    const middleColumns = columns.filter((item) => !item.fixed) || []
    const _columnStyleMap: any = {}
    const _columnClassMap: any = {}
    let _stickyLeftWidth = 0
    let _stickyRightWidth = 0

    // 左侧固定列
    leftColumns.forEach((curr, index) => {
      const dir = rtl ? 'right' : 'left'
      _columnStyleMap[curr.key] = {
        [dir]: _stickyLeftWidth || 0,
        width: curr.width || 'auto',
      }
      _columnClassMap[curr.key] = {
        'nut-table-fixed-left': true,
        'nut-table-fixed-left-last': index === leftColumns.length - 1,
      }
      _stickyLeftWidth += curr.width || 0
    })

    middleColumns.forEach((curr) => {
      _columnStyleMap[curr.key] = {
        width: curr.width || 'auto',
      }
    })

    // 右侧列
    for (let i = rightColumns.length - 1; i >= 0; i--) {
      const curr = rightColumns[i]
      const dir = rtl ? 'left' : 'right'
      _columnStyleMap[curr.key] = {
        [dir]: _stickyRightWidth || 0,
        width: curr.width || 'auto',
      }
      _columnClassMap[curr.key] = {
        'nut-table-fixed-right': true,
        'nut-table-fixed-right-first': i === 0,
      }
      _stickyRightWidth += curr.width || 0
    }
    setIsSticky(leftColumns.length > 0 || rightColumns.length > 0)
    setStickyColumnStyleMap(_columnStyleMap)
    setStickyColumnClassMap(_columnClassMap)
    setStickyLeftWidth(_stickyLeftWidth)
    setStickyRightWidth(_stickyRightWidth)
  }, [columns])

  const getStickyStyle = useCallback(
    (key: string) => {
      return stickyColumnStyleMap[key]
    },
    [stickyColumnStyleMap]
  )

  const getStickyClass = useCallback(
    (key: string) => {
      return stickyColumnClassMap[key]
    },
    [stickyColumnClassMap]
  )

  return {
    isSticky,
    stickyLeftWidth,
    stickyRightWidth,
    getStickyClass,
    getStickyStyle,
  }
}
