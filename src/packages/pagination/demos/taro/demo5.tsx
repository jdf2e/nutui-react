import React, { useState } from 'react'
import { Text } from '@tarojs/components'
import { Pagination } from '@nutui/nutui-react-taro'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: number) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any, current: number) => {
    return (
      <Text style={{ color: current === page.number ? '#fff' : '#ff0f23' }}>
        {page.number === 3 ? 'hot' : page.text}
      </Text>
    )
  }
  return (
    <Pagination
      value={currentPage4}
      total={500}
      itemSize={5}
      onChange={pageChange4}
      itemRender={itemRender}
      prev={<ArrowLeft />}
      next={<ArrowRight />}
    />
  )
}
export default Demo5
