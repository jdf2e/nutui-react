import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: number) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      value={currentPage2}
      total={12}
      pageSize={1}
      mode="lite"
      onChange={pageChange2}
    />
  )
}
export default Demo3
