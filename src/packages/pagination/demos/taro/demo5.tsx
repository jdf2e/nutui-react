import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Pagination } from '@nutui/nutui-react-taro'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: number) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any) => {
    return <View>{page.number === 3 ? 'hot' : page.text}</View>
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
