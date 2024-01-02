import { PositionType, Data } from './types'

// 缓存列表初始化信息
const initPositinoCache = (reaItemSize: number, length = 0): PositionType[] => {
  let index = 0
  const positions: PositionType[] = Array(length)
  while (index < length) {
    positions[index] = {
      index,
      height: reaItemSize,
      width: reaItemSize,
      top: index * reaItemSize,
      bottom: (index + 1) * reaItemSize,
      left: index * reaItemSize,
      right: (index + 1) * reaItemSize,
    }
    index++
  }
  return positions
}
// 获取列表总高度
const getListTotalSize = (
  positions: Array<PositionType>,
  horizontal: true | false
): number => {
  const index = positions.length - 1
  let size = 0
  if (index < 0) {
    size = 0
  } else {
    size = horizontal ? positions[index].right : positions[index].bottom
  }
  return size
}
// 通过二分法找到 scrollOffset 对应的值
const binarySearch = (
  positionsList: Array<PositionType>,
  horizontal: true | false,
  value = 0
): number => {
  let start = 0
  let end: number = positionsList.length - 1
  let tempIndex = null
  const key = horizontal ? 'right' : 'bottom'
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2)
    const midValue = positionsList[midIndex][key]

    // 相等则直接返回（因为是bottom, 因此startIndex应该是下一个节点）
    if (midValue === value) {
      return midIndex + 1
    }
    // 中间值 < 传入值，则说明 value对应的节点 大于 start, start往后移动一位
    if (midValue < value) {
      start = midIndex + 1
    }
    // 中间值 > 传入值，则说明 value 在 中间值之前，end 节点移动到 mid - 1
    else if (midValue > value) {
      // tempIndex存放最靠近值为value的所有
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex
      }
      end = midIndex - 1
    }
  }
  tempIndex = tempIndex || 0
  return tempIndex
}
const getEndIndex = ({
  list,
  startIndex,
  visibleCount,
  itemEqual = true,
  positions,
  offSetSize,
  overscan,
  sizeKey = 'width',
}: {
  list: Array<Data>
  startIndex: number
  visibleCount: number
  itemEqual?: boolean
  positions: PositionType[]
  offSetSize: number
  overscan: number
  sizeKey?: 'width' | 'height'
}): number => {
  const dataLength = list.length
  let tempIndex = null
  if (itemEqual) {
    const endIndex = startIndex + visibleCount
    tempIndex = dataLength > 0 ? Math.min(dataLength, endIndex) : endIndex
  } else {
    let sizeNum = 0
    for (let i = startIndex; i < dataLength; i++) {
      sizeNum += positions[i][sizeKey] || 0
      if (sizeNum > offSetSize) {
        const endIndex = i + overscan
        tempIndex = dataLength > 0 ? Math.min(dataLength, endIndex) : endIndex
        break
      }
    }
    if (sizeNum < offSetSize) {
      tempIndex = dataLength
    }
  }
  tempIndex = tempIndex || 0
  return tempIndex
}

// 更新Item大小
const updateItemSize = (
  positions: PositionType[],
  items: HTMLCollection,
  sizeKey: 'width' | 'height',
  margin?: number
): void => {
  const newPos = positions.concat()
  Array.from(items).forEach((item) => {
    const index = Number(item.getAttribute('data-index'))
    const styleVal = item.getAttribute('style')
    if (styleVal && styleVal.includes('none')) return
    let nowSize = item.getBoundingClientRect()[sizeKey]
    if (margin) nowSize += margin

    const oldSize = positions[index][sizeKey] as number
    // 存在差值, 更新该节点以后所有的节点
    const dValue = oldSize - nowSize
    if (dValue) {
      if (sizeKey === 'width') {
        newPos[index].right -= dValue
        newPos[index][sizeKey] = nowSize
        for (let k = index + 1; k < positions.length; k++) {
          newPos[k].left = positions[k - 1].right
          newPos[k].right -= dValue
        }
      } else if (sizeKey === 'height') {
        newPos[index].bottom -= dValue
        newPos[index][sizeKey] = nowSize
        for (let k = index + 1; k < positions.length; k++) {
          newPos[k].top = positions[k - 1].bottom
          newPos[k].bottom -= dValue
        }
      }
    }
  })
}

export {
  initPositinoCache,
  getListTotalSize,
  binarySearch,
  getEndIndex,
  updateItemSize,
}
