import React, { useState, useEffect, useRef } from 'react'
import { VirtualList } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50px',
    fontSize: '14px',
    background: '#fff',
    borderRadius: '10px',
  }
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
  const itemRender = (data: any) => {
    return <p style={itemStyle}>{data}</p>
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
      itemHeight={50}
      list={list}
      itemRender={itemRender}
      onScroll={onScroll}
    />
  )
}
export default Demo1
