import React, { useEffect, useRef, useState, useCallback } from 'react'
import { VirtualList } from '@nutui/nutui-react'

const Demo3 = () => {
  const [list, setList] = useState<string[]>([])
  const [pageNo, setPageNo] = useState(1)
  const isLoading = useRef(false)
  const getData = useCallback(() => {
    const data: string[] = []
    const pageSize = 20
    for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
      const num = i > 9 ? i : `0${i}`
      data.push(`list${num}`)
    }
    setList((list: string[]) => {
      return [...list, ...data]
    })
    setTimeout(() => {
      isLoading.current = false
    }, 30)
  }, [pageNo])
  const itemRender = (data: any) => {
    return <p>{data}</p>
  }
  const onScroll = () => {
    if (pageNo > 25 || isLoading.current) return
    isLoading.current = true
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [pageNo, getData])
  return (
    <VirtualList
      list={list}
      itemRender={itemRender}
      itemHeight={124}
      containerHeight={341}
      onScroll={onScroll}
      direction="horizontal"
    />
  )
}
export default Demo3
