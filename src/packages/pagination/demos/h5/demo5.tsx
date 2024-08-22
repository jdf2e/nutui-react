import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react'

const Demo5 = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: number) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
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
