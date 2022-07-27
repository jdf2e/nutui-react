import React, { useState } from 'react'
import Pagination from '@/packages/pagination'
import Icon from '@/packages/icon'

const PaginationDemo = () => {
  const [currentPage1, setCurrent1] = useState(1)
  const [currentPage2, setCurrent2] = useState(1)
  const [currentPage3, setCurrent3] = useState(1)
  const [currentPage4, setCurrent4] = useState(3)
  const pageChange1 = (v: any) => {
    const c = v
    setCurrent1(c)
  }
  const pageChange2 = (v: any) => {
    const c = v
    setCurrent2(c)
  }
  const pageChange3 = (v: any) => {
    const c = v
    setCurrent3(c)
  }
  const pageChange4 = (v: any) => {
    const c = v
    setCurrent4(c)
  }
  const pageNodeRender = (item: any) => {
    return <div>{item.number == 3 ? 'hot' : item.text}</div>
  }
  return (
    <div className="demo">
      <h2>基础用法</h2>
      <Pagination
        modelValue={currentPage1}
        totalItems="25"
        itemsPerPage="5"
        onChange={pageChange1}
      />
      <h2>简单模式</h2>
      <Pagination
        modelValue={currentPage2}
        pageCount={12}
        mode="simple"
        onChange={pageChange2}
      />
      <h2>显示省略号</h2>
      <Pagination
        modelValue={currentPage3}
        totalItems="125"
        showPageSize="3"
        forceEllipses
        onChange={pageChange3}
      />
      <h2>自定义按钮</h2>
      <Pagination
        modelValue={currentPage4}
        totalItems="500"
        showPageSize="5"
        onChange={pageChange4}
        prevText={<Icon name="left" />}
        nextText={<Icon name="right" />}
        pageNodeRender={pageNodeRender}
      />
    </div>
  )
}

export default PaginationDemo
