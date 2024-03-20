import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [currentPage3, setCurrentPage3] = useState(1)
  const pageChange3 = (v: number) => {
    const c = v
    setCurrentPage3(c)
  }
  return (
    <Pagination
      value={currentPage3}
      total={125}
      itemSize={2}
      ellipse
      onChange={pageChange3}
    />
  )
}
export default Demo4
