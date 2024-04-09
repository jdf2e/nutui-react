import React, { useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react'

const Demo2 = () => {
  const [list, setList] = useState<string[]>([])
  const [pageNo, setPageNo] = useState(1)
  const isLoading = useRef(false)
  const getData = () => {
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
  }
  const itemVariable = (data: any, dataIndex: number, index: number) => {
    return <p style={dataIndex % 2 === 0 ? {} : { height: '100px' }}>{data}</p>
  }
  const onScroll = () => {
    if (pageNo > 25 || isLoading.current) return
    isLoading.current = true
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [pageNo])
  return (
    <VirtualList
      list={list}
      itemRender={itemVariable}
      containerHeight={500}
      itemEqual={false}
      onScroll={onScroll}
    />
  )
}
export default Demo2
