import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react'

const Demo1 = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v: number) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      value={currentPage1}
      total={20}
      pageSize={5}
      onChange={pageChange1}
    />
  )
}
export default Demo1
