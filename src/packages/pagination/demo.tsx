import React, { useState } from 'react'
import { Left, Right } from '@nutui/icons-react'
import Pagination from '@/packages/pagination'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
}

const PaginationDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '简单模式',
      b840c88f: '显示省略号',
      a74a1fd4: '自定义按钮',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '簡單模式',
      b840c88f: '顯示省略號',
      a74a1fd4: '自定義按鈕',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'Simple mode',
      b840c88f: 'Show ellipsis',
      a74a1fd4: 'Custom button',
    },
  })
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
  const itemRender = (item: any) => {
    return <div>{item.number === 3 ? 'hot' : item.text}</div>
  }
  return (
    <div className="demo">
      <h2>{translated.ce5c5446}</h2>
      <Cell>
        <Pagination
          modelValue={currentPage1}
          total="20"
          pageSize="5"
          onChange={pageChange1}
        />
      </Cell>
      <h2>{translated.c38a08ef}</h2>
      <Cell>
        <Pagination
          modelValue={currentPage2}
          pageCount={12}
          mode="simple"
          onChange={pageChange2}
        />
      </Cell>
      <h2>{translated.b840c88f}</h2>
      <Cell>
        <Pagination
          modelValue={currentPage3}
          total="125"
          itemSize="3"
          ellipse
          onChange={pageChange3}
        />
      </Cell>
      <h2>{translated.a74a1fd4}</h2>
      <Cell>
        <Pagination
          modelValue={currentPage4}
          total="500"
          itemSize="5"
          onChange={pageChange4}
          prev={<Left />}
          next={<Right />}
          itemRender={itemRender}
        />
      </Cell>
    </div>
  )
}

export default PaginationDemo
