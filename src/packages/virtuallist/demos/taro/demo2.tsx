import React, { useState, useEffect, useRef } from 'react'
import { VirtualList } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  const itemVariable = (data: any, dataIndex: number, index: number) => {
    return (
      <div
        style={{
          height: `${dataIndex % 2 === 0 ? '100px' : '50px'}`,
          ...itemStyle,
        }}
      >
        {data}
      </div>
    )
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
      itemHeight={80}
      list={list}
      itemRender={itemVariable}
      onScroll={onScroll}
      itemEqual={false}
    />
  )
}
export default Demo2
