import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react'

const Demo2 = () => {
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
      mode="simple"
      onChange={pageChange2}
    />
  )
}
export default Demo2
